import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() data: any;
  @Output() sort_event: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  sort(key: string){
    this.sort_event.emit(key);
  }

}
