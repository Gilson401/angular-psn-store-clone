import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {

  constructor() { }
  show: boolean = false;


  showMenu(): void {
    this.show = true;
  }


  hideMenu(): void {
    this.show = false;
  }

}
