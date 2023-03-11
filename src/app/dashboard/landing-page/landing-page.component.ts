import { Component, OnInit, ViewChild } from '@angular/core';
import { IPage } from '@core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit {
  @ViewChild('second_hand') second_hand: any;
  @ViewChild('min_hand') min_hand: any;
  @ViewChild('hour_hand') hour_hand: any;

  ngOnInit() {
    console.log('rendered');
  }

  ngAfterViewInit() {
    setInterval(() => this.setDate(), 1000);
    this.setDate();
  }

  setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    this.second_hand.nativeElement.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    this.min_hand.nativeElement.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    this.hour_hand.nativeElement.style.transform = `rotate(${hourDegrees}deg)`;
  }
}
