import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor(
		private httpClient: HttpClient
	) { }

  createUser(inData: any) {
    let url = `http://localhost:3000/users`;
    return this.httpClient
        .post(url, inData)
        .pipe(
            map((e: any) => e),
            catchError((e: Response) => throwError(e))
        );
  }
}
