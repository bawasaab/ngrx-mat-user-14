import { User } from "src/app/models/user.model";

export const LoginFeatureKey = 'loginPage';

export interface LoginState {
  user: User | undefined
}
