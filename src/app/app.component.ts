import { Component } from '@angular/core';
import { Contact } from './data'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contact: Contact
  cities: string[]
  filterData: any[] = []

  show(c) {
    this.contact = c;
  }

  getCities(c) {
    this.cities = c
  }
  filter(f) {
    this.filterData = f
  }
}
