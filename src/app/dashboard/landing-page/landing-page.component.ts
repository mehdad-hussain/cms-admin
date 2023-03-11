import { Component, OnInit, ViewChild } from '@angular/core';
import { IPage } from '@core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  ngOnInit() {
    console.log('rendered');
  }

  ngAfterViewInit() {}
}
