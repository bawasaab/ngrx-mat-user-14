import {
  createReducer,
  on
} from '@ngrx/store';
import { UserListActions } from '../actions/userList-action-types';
import { UserListState } from '../user-list.state';

export const initialUserListState: UserListState = {
  userList: []
}

export const UserListReducer = createReducer(
  initialUserListState,
  on(UserListActions.showUserListAction, (state, action) => {
    return {
      userList: action.userList
    }
  })
)

