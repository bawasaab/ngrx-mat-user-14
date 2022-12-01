import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { loginActions } from '../actions/login-action-types';

export interface LoginState {
  user: User | undefined
}

export const initialAuthState: LoginState = {
  user: undefined
}
export const storeFeatureKey = 'login';

export interface LoginState {

}

export const loginReducer = createReducer(
  initialAuthState,
  on(loginActions.loginAction, (state, action) => {
    return {
      user: action.user
    }
  })
)
