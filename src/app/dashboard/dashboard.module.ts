import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from '@shared';

const routes: Routes = [{ path: '', component: LandingPageComponent }];

@NgModule({
  declarations: [LandingPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class DashboardModule {}
