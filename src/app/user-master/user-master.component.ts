import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserMasterService } from './user-master.service';

@Component({
  selector: 'app-user-master',
  templateUrl: './user-master.component.html',
  styleUrls: ['./user-master.component.css']
})
export class UserMasterComponent implements OnInit {

  userMaster = this.fb.group({
    first_name: [''],
    last_name: [''],
    email: [''],
    password: [''],
  })

  constructor(
    private fb: FormBuilder,
    private userMasterService: UserMasterService
  ) {}

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
	get f() { return this.userMaster.controls; }

  // convenience getter for easy access to form values
  get frmValues() { return this.userMaster.value; }

  onSubmit() {
    const user = this.userMaster.value
    // TODO: Use EventEmitter with form value
    console.warn(user);
    this.userMasterService.createUser(user).subscribe((result) => {
      console.log('result', result)
    })
  }

}
