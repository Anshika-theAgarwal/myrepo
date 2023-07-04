import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSocialAccounts } from './user-social-accounts';


@Injectable({
  providedIn: 'root'
})
export class UserSocialAccountsServiceService {

  private apiurl = "http://localhost:8080/api/subscriptions";
  constructor(private http:HttpClient) { }
  getAccountsByUserName(userName:string,token:string):Observable<UserSocialAccounts[]>{
    const url=`${this.apiurl}/${userName}/socialaccounts`;
    return this.http.get<UserSocialAccounts[]>(url);
  }
}
