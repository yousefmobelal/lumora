import type { AxiosError, AxiosResponse } from "axios";
import { HttpError } from "../utils/http-error";

type ValidationIssue = {
  path: string;
  message: string;
};

type ApiErrorResponse = {
  message?: string;
  statusCode?: number;
  error?: {
    statusCode?: number;
    details?: {
      issues?: ValidationIssue[];
    };
  };
};

export const logResponse = (response: AxiosResponse) => {
  console.groupCollapsed(
    `%c${response.config.method?.toUpperCase()} ${response.config.url}`,
    "color: green",
  );
  console.log("Status:", response.status);
  console.log("Response:", response.data);
  console.groupEnd();

  return response;
};

export const logError = (error: AxiosError) => {
  console.groupCollapsed(`%cERROR ${error.config?.url}`, "color: red");
  console.log("Message:", error.message);
  console.log("Response:", error.response?.data);
  console.groupEnd();

  return Promise.reject(error);
};

export const handleError = (error: AxiosError<ApiErrorResponse>) => {
  const responseData = error.response?.data;

  // Extract validation issues
  const validationIssues = responseData?.error?.details?.issues ?? [];

  // Resolve message
  const message =
    validationIssues.length > 0
      ? validationIssues[0].message
      : responseData?.message || error.message || "Something went wrong";

  // Resolve status code
  const statusCode =
    responseData?.error?.statusCode ||
    responseData?.statusCode ||
    error.response?.status ||
    500;

  return Promise.reject(new HttpError(message, statusCode, validationIssues));
};
