import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserMasterEditService } from './user-master-edit.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-master-edit',
  templateUrl: './user-master-edit.component.html',
  styleUrls: ['./user-master-edit.component.css']
})
export class UserMasterEditComponent implements OnInit {

  user!: User;
  userId!: number;
  isUserId!: boolean;
  userMaster = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    password: [''],
  })

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private userMasterEditService: UserMasterEditService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.userId = params.id;
      this.isUserId = this.userId ? true : false;

      if (this.isUserId) {
        this.getUserById();
      } else {}
              // this.setFormData();
    });
  }

  // convenience getter for easy access to form fields
	get f() { return this.userMaster.controls; }

  // convenience getter for easy access to form values
  get frmValues() { return this.userMaster.value; }

  getUserById() {
    this.userMasterEditService.getUserById(this.userId).subscribe((result:any) => {
      console.log('result', result)
      this.user = result.data.user

      this.userMaster.patchValue({
        first_name: this.user?.first_name,
        last_name: this.user?.last_name,
        password: this.user?.password,
        email: this.user?.email,
      })
    })
  }

  onSubmit() {
    const user = this.userMaster.value
    // TODO: Use EventEmitter with form value
    console.warn(user);
    this.userMasterEditService.updateUser(this.userId, user).subscribe((result) => {
      console.log('result', result)
    })
  }

}
