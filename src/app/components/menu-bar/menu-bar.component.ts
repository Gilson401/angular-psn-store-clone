import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }
  show: boolean = false;
  ngOnInit(): void {
  }

  showMenu(): void {
    this.show = true;
  }


  hideMenu(): void {
    this.show = false;
  }
}
