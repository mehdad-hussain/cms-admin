import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// prettier-ignore
import { SidebarComponent, NavbarComponent, FooterComponent,LoginCardComponent,NotFoundComponent } from './components';
// prettier-ignore
import { ClickOutsideDirective } from './directives';
// prettier-ignore
import { SplitPipe, SumPipe, TypeOfPipe, ReversePipe, LengthPipe, SentenceCasePipe, SlugifyPipe, SomePipe, SqrtPipe, PowPipe, PctPipe, MinPipe, MaxPipe, MapPipe, LastPipe, JoinPipe, FirstPipe, FillPipe, EveryPipe, CopyWithinPipe, CombinePipe, CharAtPipe, CamelCasePipe, ConcatPipe, InterpolatePipe, PascalCasePipe, RepeatPipe, TrimPipe, TrimLeftPipe, TrimRightPipe, TruncatePipe, AvgPipe, AbsPipe, CeilPipe, FloorPipe, RoundPipe, JoinObjectValuesPipe,SplitPascalCasePipe , NumberToWordPipe } from './pipes';
import { PageLayoutComponent } from './layout';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    PageLayoutComponent,
    FooterComponent,
    LoginCardComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    AngularSvgIconModule.forRoot(),
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
  ],
  exports: [
    PageLayoutComponent,
    AngularSvgIconModule,
    NgSelectModule,
    FormsModule,
    NgxDatatableModule,
    LoginCardComponent,
    NotFoundComponent,
  ],
})
export class SharedModule {}

// npm i angular-svg-icon --save
