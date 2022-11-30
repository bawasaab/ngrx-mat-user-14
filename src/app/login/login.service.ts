import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
		private httpClient: HttpClient
	) { }

  login(inData: any) {
    let url = `http://localhost:3000/auth/login`;
    return this.httpClient
        .post(url, inData)
        .pipe(
            map((e: any) => e),
            catchError((e: Response) => throwError(e))
        );
  }
}
