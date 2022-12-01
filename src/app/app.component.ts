import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoginState } from './login/state/login.state';
import { selectLogin, selectIsLoggedIn, selectIsLoggedOut } from './login/state/selectors/login.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-mat-user-14';
  isLoggedIn$!: Observable<boolean>;
  isLoggedOut$!: Observable<boolean>;

  constructor(
    private store: Store<LoginState>
  ) {
    this.store.select(selectLogin).subscribe((result) => {
      console.log('AppComponent selector result', result)
    })

    this.isLoggedIn$ = this.store.pipe(
      select(selectIsLoggedIn)
    )

    this.isLoggedOut$ = this.store.pipe(
      select(selectIsLoggedOut)
    )
  }
}
