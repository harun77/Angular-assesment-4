import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/MyService/my-service.service';

import * as _ from 'underscore';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  public data: any;
  public store: any;
  public filteredData: any;
  public totalPageNumber: number;
  public itemPerPage = 15;
  public Arr = Array;
  public currentPageNumber: number = 1;

  constructor(private myServiceService: MyServiceService) {
    this.myServiceService.getData().subscribe(res => {
      this.store = res;
      this.data = res.slice(0, this.itemPerPage);
      this.filteredData = res;
      this.totalPageNumber = Math.floor(res.length / this.itemPerPage);
      if (res.length % this.itemPerPage)++this.totalPageNumber;
    });
  }

  ngOnInit() {
  }

  getPaginatedData(idx: number) {
    this.currentPageNumber = idx;
    let start = (idx - 1) * this.itemPerPage;
    this.data = this.filteredData.slice(start, start + this.itemPerPage);
    if (this.data.length == 0) this.currentPageNumber = -1;
  }

  filterdaya(searchKey: string) {
    this.data = this.store.filter(e => e.name.includes(searchKey) || e.email.includes(searchKey));
    this.filteredData = this.data.slice();
    this.totalPageNumber = Math.floor(this.filteredData.length / this.itemPerPage);
    if (this.filteredData.length % this.itemPerPage)++this.totalPageNumber;
    this.getPaginatedData(1);
  }

  sort(prop: string) {
    this.data = _.sortBy(this.store, prop);
  }

  compare(first: any, second: any) {
    if (first.last_nom < second.last_nom)
      return -1;
    if (first.last_nom > second.last_nom)
      return 1;
    return 0;
  }

}
