import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Output, EventEmitter, Input } from "@angular/core"

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons';

import { Contact } from '../data'
import { DataService } from '../data.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  faEye = faEye
  faEyeSlash = faEyeSlash
  faPen = faPen
  faTrashAlt = faTrashAlt
  faLongArrowAltDown = faLongArrowAltDown
  _filterData: any[]
  get filterData(): any[] {
    return this._filterData
  }
  @Input('filterData')
  set filterData(data:any[]) {
    this._filterData = data;
    this.contacts = Array.from(this.contactsUntouched)
    console.log(data)
    data[0] !== undefined ? this.contacts = this.contacts.filter(value => value.name.includes(data[0])) : null;
    data[1] !== " " && data[1] != undefined  ? this.contacts = this.contacts.filter(value => value.city == data[1]) : null;
    data[2] == true ? this.contacts = this.contacts.filter(value => value.active == data[2]) : null;
    
  }
  
  @Output() showProfileEmitter = new EventEmitter<Contact>()
  @Output() dataEmitter = new EventEmitter<string[]>()
  contactsUntouched: Contact[] = []
  contacts: Contact[] = []

  constructor(private data: DataService) { }

  sortFunction(a,b) {
      if (a > b) return 1
      else if (a < b) return -1
      return 0
  }
  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.contactsUntouched = Array.from(data);
      this.contacts = data;
      this.dataEmitter.emit(Array.from(new Set(data.map(item => item.city))).concat(" ").sort((a,b) => this.sortFunction(a,b)))
    })
  }

  showProfile(contact: Contact) {
    this.showProfileEmitter.emit(contact)
  }

  sortNameBool = false
  sortName() {
    if (this.sortNameBool) {
      this.contacts = Array.from(this.contactsUntouched)
      this.sortNameBool = false;
    }
    else {
      this.sortNameBool = true;
      this.contacts.sort((a,b) => this.sortFunction(a.name,b.name))
    }
  }

}
