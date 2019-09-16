import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt  } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown  } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp  } from '@fortawesome/free-solid-svg-icons';
import { faUsers  } from '@fortawesome/free-solid-svg-icons';
import { faComments  } from '@fortawesome/free-solid-svg-icons';
import { faWrench  } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faUserAlt = faUserAlt;
  faCaretDown = faCaretDown;
  faCaretUp = faCaretUp
  faUsers = faUsers
  faComments = faComments
  faWrench = faWrench
  faPowerOff = faPowerOff


  constructor() { }

  ngOnInit() {
  }

}
