import {
  createReducer,
  on
} from '@ngrx/store';
import { loginActions } from '../actions/login-action-types';
import { LoginState } from '../login.state';

export const initialAuthState: LoginState = {
  user: undefined
}

export const loginReducer = createReducer(
  initialAuthState,
  on(loginActions.loginAction, (state, action) => {
    return {
      user: action.user
    }
  })
)


