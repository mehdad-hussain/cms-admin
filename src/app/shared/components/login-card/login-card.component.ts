import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent implements OnInit {
  @Input() title: string = '';
  showPassword: boolean = false;

  passwordVisibilityIcon: string = 'assets/icons/eye-icon.svg';

  constructor() {}

  ngOnInit(): void {}

  toggleShowPassword() {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      this.passwordVisibilityIcon = 'assets/icons/eye-off-icon.svg';
    } else {
      this.passwordVisibilityIcon = 'assets/icons/eye-icon.svg';
    }
  }
}
