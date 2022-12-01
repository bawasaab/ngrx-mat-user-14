import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginState } from './login/state/login.state';
import { selectLogin, selectIsLoggedIn, selectIsLoggedOut } from './login/state/selectors/login.selector';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-mat-user-14';
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;
  session$!: Observable<User | undefined>;

  constructor(
    private store: Store<LoginState>
  ) {
    this.session$ = this.store.select(selectLogin)

    this.isLoggedIn$ = this.store.pipe(
      select(selectIsLoggedIn)
    )

    this.isLoggedOut$ = this.store.pipe(
      select(selectIsLoggedOut)
    )
  }
}
