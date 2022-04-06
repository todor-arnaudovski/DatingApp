import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
})
export class NotFoundComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public accountService: AccountService) {}

  ngOnInit(): void {
    this.GetLoggedInStatus();
  }

  GetLoggedInStatus() {
    this.accountService.currentUser$.subscribe((response) => {
      this.isLoggedIn = response ? true : false;
    }, error => {
      console.log(error);
    });
  }
}
