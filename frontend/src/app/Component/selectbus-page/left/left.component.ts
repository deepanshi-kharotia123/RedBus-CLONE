import { Component } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  amenityIcon:{[key:string]: string}={
    wifi: 'wifi',
    waterBottle: 'local_drink',
    blankets: 'hotel',
    chargingPoint: 'battery_charging_full',
    movie: 'movie',
  }
  sidefiltervalues:any={
    livetracking:false,
    reschedulable:false,
    departuretime:{
      "Before 6 am":false,
      "6 am to 12 pm": false,
      "12pm to 6 pm ": false,
      "After 6 pm": false,
    },
    bustype:{
      Seater:false,
      Sleeper:false,
      AC:false,
      Non_AC:false,
    },
    arrivaltime:{
      "before 6 am":false,
      "6 am to 12 pm": false,
      "12pm to 6 pm ": false,
      "after 6 pm": false,
    },
    amenities:{
      WiFi:false,
      WaterBottle:false,
      Blankets:false,
      ChargingPoint:false,
      Movie:false,
    },
  }
  getobjectkey(obj:any):string[]{
    return Object.keys(obj);
  }

  handlelivetrackingclick(): void{
    this.sidefiltervalues.livetracking=!this.sidefiltervalues.livetracking
  }
  handlerescheduleclick():void{
    this.sidefiltervalues.reschedulable=!this.sidefiltervalues.reschedulable
  }
  handledeparturetimeclick(event:any,name:string):void{
    this.sidefiltervalues.departuretime[name]=event.target.checked;
  }
  handlearivaltimeclick(event:any,name:string):void{
    this.sidefiltervalues.arrivaltime[name]=event.target.checked;
  }
  handlebustypeclick(event:any,name:string):void{
    this.sidefiltervalues.bustype[name]=event.target.checked;
  }
}