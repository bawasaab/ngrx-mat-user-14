import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState } from '../login/state/login.state';
import { selectLogin } from '../login/state/selectors/login.selector';
import { User } from '../models/user.model';
import { UserListService } from './user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = []

  constructor(
    private store: Store<LoginState>,
    private userListService: UserListService
  ) {
    this.store.select(selectLogin).subscribe((result) => {
      console.log('selector result', result)
    })
  }

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.userListService.getUserList().subscribe((result:any) => {
      console.log('result', result)
      this.users = result.data.users
    })
  }

  deleteUser(id: number) {
    this.userListService.deleteUser(id).subscribe((result:any) => {
      console.log('result', result)
      this.getUserList()
    })
  }

}
