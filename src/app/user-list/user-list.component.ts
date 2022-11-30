import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, Observable } from 'rxjs';
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
    private userListService: UserListService
  ) { }

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
