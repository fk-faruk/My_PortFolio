import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  menu : string = ''

  constructor(public router: Router) {

  }


  
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
