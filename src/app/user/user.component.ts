import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text = "You now entered in the component user, follow the white rabbit";
  constructor() { }

  ngOnInit() {
  }

}
