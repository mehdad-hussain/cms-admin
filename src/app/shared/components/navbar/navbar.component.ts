import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentDate = new Date().toDateString();

  currentTime = new Date().toLocaleTimeString();

  constructor() {}

  ngOnInit(): void {}
}
