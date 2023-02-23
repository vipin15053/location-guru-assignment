import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  navItems = [
    { link: '/dashboard/home', title: 'Home' },
    { link: '/user', title: 'Add User' },
    { link: '/about', title: 'About' },
    { link: '/contact', title: 'Contact' }
  ];
}
