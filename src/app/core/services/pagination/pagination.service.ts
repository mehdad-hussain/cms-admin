import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface IPagination {
  id: string;
  // data: any[];
  totalCount?: number;
  requestedItemCount?: number;
}
@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  private paginationData: IPagination[] = [];

  private changePaginationData = new Subject<{
    id: string;
    rows: any[];
    totalCount?: number;
    requestedItemCount?: number;
  }>();
  changePaginationData$ = this.changePaginationData.asObservable();

  constructor() {}

  setPaginationData(
    id: string,
    // data: any[],
    totalCount?: number,
    requestedItemCount?: number
  ) {
    this.paginationData.push({
      id,
      // data,
      totalCount,
      requestedItemCount,
    });
  }

  changePaginationDataArray(
    id: string,
    rows: any[],
    totalCount?: number,
    requestedItemCount?: number
  ) {
    this.paginationData.map((pagination) => {
      if (pagination.id === id) {
        // this.changePaginationData.next({
        //   data,
        //   totalCount,
        //   requestedItemCount,
        // });
        console.log('changePaginationDataArray', id, rows, totalCount);
      }

      pagination.id === id
        ? this.changePaginationData.next({
            id,
            rows,
            totalCount,
            requestedItemCount,
          })
        : pagination;
    });
  }

  getPaginationData = (id: string) => {
    const pagination = this.paginationData.find(
      (pagination) => pagination.id === id
    );
    return pagination;
  };

  unregister(id: string) {
    this.paginationData = this.paginationData.filter(
      (pagination) => pagination.id !== id
    );
  }
}
