import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  @Input() collapsed = false;
  @Input() screenWidth = 0;


  menu : string = ''

  constructor(private router: Router) {}


  toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu) {
    menu.classList.toggle("hidden");
    }
  }



  routeTo( route : string) {
      this.router.navigate(['/', route])
  }


  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}



