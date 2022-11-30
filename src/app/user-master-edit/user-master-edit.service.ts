import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserMasterEditService {

  constructor(
		private httpClient: HttpClient
	) { }

  getUserById(id: number): Observable<User> {

    let url = `http://localhost:3000/users/${id}`;
    return this.httpClient
    .get(url)
    .pipe(
      map((e: any) => e),
      catchError((e: Response) => throwError(e))
    );
  }

  updateUser(id:number, inData: any) {
    let url = `http://localhost:3000/users/${id}`;
    return this.httpClient
        .patch(url, inData)
        .pipe(
            map((e: any) => e),
            catchError((e: Response) => throwError(e))
        );
  }
}
