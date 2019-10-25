import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchKey: string="";
  @Output() keychanged: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  call(){
    this.keychanged.emit(this.searchKey);
  }

}
