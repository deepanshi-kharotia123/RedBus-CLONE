// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { DataserviceService } from '../../../service/dataservice.service';
// @Component({
//   selector: 'app-cab-booking-form',
//   templateUrl: './cab-booking-form.component.html',
//   styleUrl: './cab-booking-form.component.css',
// })
// export class CabBookingFormComponent {
//   name?: string;
//   email?: string;
//   address?: string;
//   age?: number;
//   gender?: string;

//   constructor(
//     private router: Router,
//     private dataservice: DataserviceService
//   ) {}
//   handleproceedtopay(): void {
//     const routeParams = {};
//     this.router.navigate(['/payment', routeParams]);
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-booking-form',
  templateUrl: './cab-booking-form.component.html',
  styleUrls: ['./cab-booking-form.component.css']
})
export class CabBookingFormComponent {
  name?: string;
  email?: string;
  address?: string;
  age?: number;
  gender?: string;

  constructor(private router: Router) {}

  ProceedToPay(): void {
    this.router.navigate(['/payments']);
  }
}
