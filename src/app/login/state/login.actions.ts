import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const loginAction = createAction(
  "[Login Page] User Login",
  props<{user: User}>()
)
