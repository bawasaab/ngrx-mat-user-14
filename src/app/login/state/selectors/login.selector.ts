import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from '../login.state';

export const selectLoginSelector = createFeatureSelector<LoginState>('loginPage');

export const selectLogin = createSelector(
  selectLoginSelector,
  (state: LoginState) => state.user
);

export const selectIsLoggedIn = createSelector(
  selectLoginSelector,
  (state: LoginState) => !!state.user
);

export const selectIsLoggedOut = createSelector(
  selectLoginSelector,
  (state: LoginState) => !state.user
);
