import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user.model";

export const showUserListAction = createAction(
  "[User List Page] Show Users",
  props<{userList: User[]}>()
)
