import type { ReactNode } from "react";
import Loader from "./Loader";
import ErrorState from "./ErrorState";
import type { UseQueryResult } from "@tanstack/react-query";

interface QueryBoundaryProps<T> {
  queryResult: UseQueryResult<T, Error>;
  children: (data: T) => ReactNode;
}

export function QueryBoundary<T>({
  queryResult: { isLoading, isError, error, refetch, data },
  children,
}: QueryBoundaryProps<T>) {
  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (isError) {
    return <ErrorState message={error?.message} onRetry={refetch} />;
  }

  if (!data) {
    return <ErrorState message="No data found" onRetry={refetch} />;
  }

  return <>{children(data)}</>;
}
