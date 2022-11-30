import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = this.fb.group({
    email: [''],
    password: [''],
  })

  constructor(
    private fb: FormBuilder,
    private LoginService: LoginService
  ) { }

  ngOnInit(): void {}

  // convenience getter for easy access to form fields
	get f() { return this.login.controls; }

  // convenience getter for easy access to form values
  get frmValues() { return this.login.value; }

  onSubmit() {
    const user = this.login.value
    // TODO: Use EventEmitter with form value
    console.warn(user);
    this.LoginService.login(user).subscribe((result) => {
      console.log('result', result)
    })
  }
}
