declare var $: any;
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  isLoggedIn(){
    return this.userService.isLoggedIn();
  }

  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    // Open Submenu on mousehover
    $('.dropdown').hover(
      function () { $(this).toggleClass('open') },
    )
  }
}
