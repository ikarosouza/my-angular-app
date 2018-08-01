import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  months = ["January", "Feburary", "March", "April",
            "May", "June", "July", "August", "September",
            "October", "November", "December"];
  isAvailable = false;

  myClickFunction(event){
    this.isAvailable = !this.isAvailable;
  }

  getMonthChange(event){
    console.log("The new month is " + event.target.value);
  }
}
