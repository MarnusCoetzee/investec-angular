import { User } from "../../store/auth-store/auth.service";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  error: string | null;
  loading: boolean;
}
