// Shared types and utilities between api and mobile app
export interface User {
  id: string;
  name: string;
}

export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
