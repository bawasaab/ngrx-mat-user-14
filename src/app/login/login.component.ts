import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { LoginService } from './login.service';
import { loginAction } from './state/login.actions';

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
    private LoginService: LoginService,
    private store: Store
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
      const user = result.data.user
      this.store.dispatch(loginAction({user}))
    })
  }
}
