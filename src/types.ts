export interface SignUpApiResponse {
  user: object
  // id: number;
  // username: string;
  // email: string;
}

export interface SignUpApiError {
  message: string;
}

export interface SignInApiResponse {
  user: object
}