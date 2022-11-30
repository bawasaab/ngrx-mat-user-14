import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(
		private httpClient: HttpClient
	) { }

  getUserList(): Observable<User[]> {

    let url = `http://localhost:3000/users`;
    return this.httpClient
    .get(url)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }

  deleteUser(id: number) {
    let url = `http://localhost:3000/users/${id}`;
    return this.httpClient
    .delete(url)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }
}
