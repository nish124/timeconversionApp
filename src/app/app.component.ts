import { Component } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  minutData;
  secondData;

  flagHour=false;
  flagMin=false;

  constructor(){  }

  data;
  datasecond;

    getTimeFromMins(mins) {
      this.flagHour=true;
      this.data = moment.utc().startOf('day').add(mins, 'minutes').format('H');
      console.log(this.data);
  }
    getTimeFromSecond(sec) {
      this.flagMin=true;
        this.datasecond = moment.utc().startOf('day').add(sec, 'second').format('mm');
        console.log(this.datasecond);
    }
}
