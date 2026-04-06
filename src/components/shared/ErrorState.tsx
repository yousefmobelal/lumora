import React from "react";

interface ErrorStateProps {
  message?: string;
  onRetry: () => void;
}
const ErrorState: React.FC<ErrorStateProps> = ({ message, onRetry }) => {
  return <div onClick={onRetry}>{message}</div>;
};

export default ErrorState;
