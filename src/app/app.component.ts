import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  statuses = [ "OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "OFF", "OFF"];
  switch(idx) {
    if (this.statuses[idx] == "ON") {
      this.statuses[idx] = "OFF";
    } else {
      this.statuses[idx] = "ON";
    }
  }
}
