import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookedSeats: Set<string> = new Set();

  constructor() { }

  bookSeat(seatId: string): boolean {
    if (this.bookedSeats.has(seatId)) {
      return false;
    }
    this.bookedSeats.add(seatId);
    return true;
  }

  isSeatBooked(seatId: string): boolean {
    return this.bookedSeats.has(seatId);
  }
}