import { User } from "src/app/models/user.model";

export const storeFeatureKey = 'login';

export interface LoginState {
  user: User | undefined
}
