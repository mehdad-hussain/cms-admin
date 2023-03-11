import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() sidebar = new EventEmitter<boolean>();

  @ViewChild('pTag') pTag!: ElementRef;

  @ViewChildren('spanList') spanList!: QueryList<any>;

  isSidebarOpen = true;

  pageList = [
    {
      name: 'Dashboard',
      icon: 'dashboard.svg',
      link: '/dashboard',
    },
    {
      name: 'Create Collection',
      icon: 'dashboard.svg',
      link: '/create-collection',
    },
    {
      name: 'Stocks',
      icon: 'dashboard.svg',
      link: '/stocks',
    },
    {
      name: 'Orders',
      icon: 'dashboard.svg',
      link: '/orders',
    },
    {
      name: 'POS Sell',
      icon: 'dashboard.svg',
      link: '/sell',
    },
    {
      name: 'POS Return',
      icon: 'return.svg',
      link: '/return',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebar.emit(this.isSidebarOpen);

    console.log(this.isSidebarOpen);
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  openSidebar() {
    this.isSidebarOpen = true;
  }
}
