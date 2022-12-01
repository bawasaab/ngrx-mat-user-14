import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LoginState } from '../login.state';

export const selectLoginSelector = createFeatureSelector<LoginState>('login');

export const selectLogin = createSelector(
  selectLoginSelector,
  (state: LoginState) => state.user
);
