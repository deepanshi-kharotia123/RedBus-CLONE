import { Component } from '@angular/core';

@Component({
  selector: 'app-rental-form',
  templateUrl: './rental-form.component.html',
  styleUrl: './rental-form.component.css',
})
export class RentalFormComponent {
  rentalformstate: boolean = false;
  showForm = false;
}
