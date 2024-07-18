export interface AuthState {
  isAuthenticated: boolean;
  user: any;
  error: string | null;
  loading: boolean;
}
