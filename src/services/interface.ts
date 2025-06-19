export interface ApiResponse<T> {
  data: T;
  meta?: any;
  statusCode: number;
  timestamp: string;
}
