import 'aframe';
import { Component, OnInit, NgZone } from '@angular/core';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-vr-tour',
  templateUrl: './vr-tour.component.html',
  styleUrls: ['./vr-tour.component.css'],
})
export class VrTourComponent implements OnInit {
  currentBusImage: string | null = null;

  constructor(private bookingService: BookingService, private ngZone: NgZone) {
    this.currentBusImage = null;
  }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {});
  }

  selectBus(busType: string): void {
    this.ngZone.run(() => {
      if (busType === 'standard-bus') {
        this.currentBusImage = '/assets/standard.jpg';
      } else if (busType === 'sleeper-bus') {
        this.currentBusImage = '/assets/sleeper.jpg';
      } else if (busType === 'acSeater-bus') {
        this.currentBusImage = '/assets/standard-ac.jpg';
      } else if (busType === 'acSleeper-bus') {
        this.currentBusImage = '/assets/ac sleeper.jpg';
      }
      console.log(`Current Bus Image: ${this.currentBusImage}`);
    });
  }
}
