import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent implements OnInit {
  @Input() pageTitle = 'Page Title';
  @Input() showCardTable: boolean = true;
  @Input() showSidebar: boolean = true;
  @ViewChild('sidebar') sidebar!: ElementRef;

  isSidebarOpen: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  checkSidebarState(event: boolean) {
    console.log('checkSidebarState', event);
    this.isSidebarOpen = event;

    // setTimeout(() => {
    //   if (this.isSidebarOpen) {
    //     this.sidebar.nativeElement.classList.add('show');
    //     this.sidebar.nativeElement.classList.remove('hide');
    //   } else {
    //     this.sidebar.nativeElement.classList.add('hide');
    //     this.sidebar.nativeElement.classList.remove('show');
    //   }
    // }, 50);
  }
}
