import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() cities = null;
  @Output() filterEmitter = new EventEmitter<any[]>();
  faPlus = faPlus
  name
  city
  active
  filter() {
    this.filterEmitter.emit([this.name, this.city, this.active])
  }
  constructor() { }

  ngOnInit() {

  }

}
