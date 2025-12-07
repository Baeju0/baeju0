// Common types for the application
export type ApiResponse<T> = {
  data?: T;
  error?: string;
};
