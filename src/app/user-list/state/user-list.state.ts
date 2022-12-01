import { User } from "src/app/models/user.model";

export const storeFeatureKey = 'UserListPage';

export interface UserListState {
  userList: User[] | []
}
