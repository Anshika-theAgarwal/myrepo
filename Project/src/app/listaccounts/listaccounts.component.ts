import { Component, OnInit } from '@angular/core';
import {UserSocialAccounts} from '../user-social-accounts';
import { UserSocialAccountsServiceService } from '../user-social-accounts-service.service';
@Component({
  selector: 'app-listaccounts',
  templateUrl: './listaccounts.component.html',
  styleUrls: ['./listaccounts.component.css']
})
export class ListaccountsComponent implements OnInit {
  accounts:UserSocialAccounts[] =[];
  constructor(private userSocialAccountsService: UserSocialAccountsServiceService ) {}
    
  ngOnInit(): void {
      const userName = "Somlagna";
      const token="eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTb21sYWduYSIsImV4cCI6MTY4ODAyMjc5MywiaWF0IjoxNjg3ODQyNzkzfQ.8TKhHox7T5X5YA8PGAVt3_CoaSyJ0mt4H9q5nSOyaGA";
      this.userSocialAccountsService.getAccountsByUserName(userName,token).subscribe(( accounts:UserSocialAccounts[])=>{
        this.accounts = accounts;
      })
  }
}
