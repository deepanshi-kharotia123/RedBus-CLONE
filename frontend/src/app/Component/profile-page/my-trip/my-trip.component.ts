 import { Component, Input, OnInit } from '@angular/core';
 import { BusService } from '../../../service/bus.service';
 import { Booking } from '../../../model/booking.model';
 import { CommonModule } from '@angular/common';
//import { response } from 'express';
  @Component({
    selector: 'app-my-trip',
    templateUrl: './my-trip.component.html',
    styleUrl: './my-trip.component.css'
  })
  export class MyTripComponent implements OnInit {
    @Input() booking:any
    currentbooking: any=[]
    currentdeptcity:string='';
    currentdepttime:string='';
    currentdeptdate:string='';
    currentarrivalcity:string='';
    currentarrivaltime:string='';
    currentarrivaldate:string='';
    currentfare:string='';
    currentemail:string='';
    currentphnNo:string='';
    currentname:string='';
    currentage:string='';
    currentgender:string='';

    
    imageArr = [
      {
        _id: { $oid: "6049b8a97501a24470b9a526" },
        images: "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg"
      },
      // Other image objects...
      {
        _id: {
          $oid: "6049b8a97501a24470b9a527",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a528",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a529",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/411/ST/L/penRe7.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a52a",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/19449/814/FR/DL/PuizKJ.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a52b",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/450/OT/L/lejRej.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a52c",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/54/ST/DL/11XMg2.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a52d",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/16/OT/L/lejRej.jpeg",
      },
      {
        _id: {
          $oid: "6049b8a97501a24470b9a52e",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
      },
      {
        _id: {
          $oid: "6049d3567501a24470b9a533",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/4957/54/FR/L/lejRej.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bef",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/9365/1087/GW/DL/hDsqel.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf0",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf1",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf2",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf3",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/10/54/FR/L/lejRej.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf4",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/420/SI/DL/RdzzBG.jpeg",
      },
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf6",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/5483/35/FR/DL/AHGCEp.jpeg",
      },
      
      {
        _id: {
          $oid: "604b8aedb3f0410d74d91bf8",
        },
        images:
          "https://s3-ap-southeast-1.amazonaws.com/rb-plus/BI/APP/IND/WM/2323/1087/GW/DL/6fNUIf.jpeg",
      },
    ];
  
  
    randomimage:string='';
    constructor(private busbooking:BusService){}
    ngOnInit(){
      const randomindex=Math.floor(Math.random() * this.imageArr.length);
      this.randomimage=this.imageArr[randomindex].images;

      const bookingData=sessionStorage.getItem('Booking');
      if(bookingData){
      this.currentbooking=JSON.parse((bookingData) || '{}');
      if(this.currentbooking){
      this.currentdeptcity=this.currentbooking.departureDetails?.city ||'';
      this.currentdeptdate=this.currentbooking.departureDetails?.date ||'';
      this.currentdepttime=this.currentbooking.departureDetails?.time ||'';
      this.currentarrivalcity=this.currentbooking.arrivalDetails?.city ||'';
      this.currentarrivaldate=this.currentbooking.arrivalDetails?.date ||'';
      this.currentarrivaltime=this.currentbooking.arrivalDetails?.time ||'';
      this.currentfare=this.currentbooking.fare ||'';
      this.currentemail=this.currentbooking.email ||'';
      this.currentphnNo=this.currentbooking.phoneNumber ||'';
      this.currentname=this.currentbooking.passengerDetails?.name ||'';
      this.currentage=this.currentbooking.passengerDetails?.age ||'';
      this.currentgender=this.currentbooking.passengerDetails?.gender ||'';}
      }else{
        console.error('No booking data found in sessionStorage');
      }
      if ( this.currentbooking._id){
      this.busbooking.addbusmongo(this.currentbooking._id).subscribe((response:any)=>{
        this.booking=response;
        this.currentbooking=this.booking;
      },
    (error:any)=>{
      console.error('Error fetching booking data from server', error);
    }
  );
  }
  console.log('Current booking:', this.currentbooking);
  console.log('Passenger details:', this.currentbooking?.passengerDetails);
    }
  }
