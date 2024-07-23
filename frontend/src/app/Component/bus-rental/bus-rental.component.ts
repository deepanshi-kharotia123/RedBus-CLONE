// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
// declare var google: any;
// @Component({
//   selector: 'app-bus-rental',
//   templateUrl: './bus-rental.component.html',
//   styleUrl: './bus-rental.component.css',
// })
// export class BusRentalComponent implements OnInit {
//   busRentalForm: FormGroup;
//   amenitiesList = [
//     'Air Conditioning',
//     'Charging Port',
//     'Restroom',
//     'Tour Guide',
//     'TV',
//     'WiFi',
//   ];

//   constructor(private fb: FormBuilder) {
//     this.busRentalForm = this.fb.group({
//       busSize: [''],
//       amenities: this.fb.array(this.createAmenities()),
//       route: [''],
//       date: [''],
//     });
//   }

//   ngOnInit(): void {}

//   createAmenities(): FormControl[] {
//     return this.amenitiesList.map((amenity) => new FormControl(false));
//   }

//   get amenities(): FormArray {
//     return this.busRentalForm.get('amenities') as FormArray;
//   }
//   getAmenityName(index: number): string {
//     return this.amenitiesList[index];
//   }
//   onSubmit() {
//     console.log(this.busRentalForm.value);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-rental',
  templateUrl: './bus-rental.component.html',
  styleUrls: ['./bus-rental.component.css']
})
export class BusRentalComponent implements OnInit {
  busRentalForm: FormGroup;
  amenitiesList = [
    'Air Conditioning',
    'Charging Port',
    'Restroom',
    'Tour Guide',
    'TV',
    'WiFi'
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.busRentalForm = this.fb.group({
      busSize: [''],
      amenities: this.fb.array(this.createAmenities()),
      route: [''],
      date: ['']
    });
  }

  ngOnInit(): void {}

  createAmenities(): FormControl[] {
    return this.amenitiesList.map((amenity) => new FormControl(false));
  }

  get amenities(): FormArray {
    return this.busRentalForm.get('amenities') as FormArray;
  }

  getAmenityName(index: number): string {
    return this.amenitiesList[index];
  }

  // onSubmit() {
  //   if (this.busRentalForm.valid) {
  //     this.router.navigate(['/payments']);
  //   } else {
  //     console.log('Invalid form');
  //   }
  // }
  onSubmit() {
        console.log(this.busRentalForm.value);
      }
}
