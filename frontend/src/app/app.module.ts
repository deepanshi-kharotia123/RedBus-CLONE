import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { provideNativeDateAdapter} from '@angular/material/core';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './Component/landing-page/dialog/dialog.component';
import { SelectbusPageComponent } from './Component/selectbus-page/selectbus-page.component';
import { HeaderComponent } from './Component/selectbus-page/header/header.component';
import { LeftComponent } from './Component/selectbus-page/left/left.component';
import { RightComponent } from './Component/selectbus-page/right/right.component';
import { MatIconModule} from '@angular/material/icon';
import { SortingBarComponent } from './Component/selectbus-page/right/sorting-bar/sorting-bar.component';
import { BusBoxComponent } from './Component/selectbus-page/right/bus-box/bus-box.component';
import { MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatDividerModule} from '@angular/material/divider';
import { BottomTabComponent } from './Component/selectbus-page/right/bus-book/bottom-tab/bottom-tab.component';
import { ViewSeatsComponent } from './Component/selectbus-page/right/view-seats/view-seats.component';
import { FormDrawerComponent } from './Component/selectbus-page/right/form-drawer/form-drawer.component';
import { SmallSeatsComponent } from './Component/selectbus-page/right/small-seats/small-seats.component';
import { BusBookingFormComponent } from './Component/selectbus-page/right/bus-booking-form/bus-booking-form.component';
import { PaymentPageComponent } from './Component/payment-page/payment-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { MyTripComponent } from './Component/profile-page/my-trip/my-trip.component';
import { HttpClientModule,HTTP_INTERCEPTORS,} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { BusRentalComponent } from './Component/bus-rental/bus-rental.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelStoriesComponent } from './Component/travel-stories/travel-stories.component';
import { VirtualBusTourComponent } from './Component/virtual-bus-tour/virtual-bus-tour.component';
import { VrTourComponent } from './Component/virtual-bus-tour/vr-tour/vr-tour.component';
import { RentalFormComponent } from './Component/bus-rental/rental-form/rental-form.component';
import { CabBookingFormComponent } from './Component/bus-rental/cab-booking-form/cab-booking-form.component';
import { StoryListComponent } from './Component/travel-stories/story-list/story-list.component';
import { StoryFormComponent } from './Component/travel-stories/story-form/story-form.component';
import { TipListComponent } from './Component/travel-stories/tip-list/tip-list.component';
import { TipFormComponent } from './Component/travel-stories/tip-form/tip-form.component';
import { PhotoListComponent } from './Component/travel-stories/photo-list/photo-list.component';
import { PhotoFormComponent } from './Component/travel-stories/photo-form/photo-form.component';
import { ForumListComponent } from './Component/travel-stories/forum-list/forum-list.component';
import { ForumTopicComponent } from './Component/travel-stories/forum-topic/forum-topic.component';
import { ForumPostFormComponent } from './Component/travel-stories/forum-post-form/forum-post-form.component';
import { PaymentsComponent } from './Component/bus-rental/payments/payments.component';
//import { BookingService } from './service/booking.service';
// import { ShareButtons } from 'ngx-sharebuttons/buttons';
// import { shareIcons } from 'ngx-sharebuttons/icons';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { faAngular } from '@fortawesome/free-brands-svg-icons';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingPageComponent,
    DialogComponent,
    SelectbusPageComponent,
    HeaderComponent,
    LeftComponent,
    RightComponent,
    SortingBarComponent,
    BusBoxComponent,
    BottomTabComponent,
    ViewSeatsComponent,
    FormDrawerComponent,
    SmallSeatsComponent,
    BusBookingFormComponent,
    PaymentPageComponent,
    ProfilePageComponent,
    MyTripComponent,
    BusRentalComponent,
    TravelStoriesComponent,
    VirtualBusTourComponent,
    VrTourComponent,
    RentalFormComponent,
    CabBookingFormComponent,
    StoryListComponent,
    StoryFormComponent,
    TipListComponent,
    TipFormComponent,
    PhotoListComponent,
    PhotoFormComponent,
    ForumListComponent,
    ForumTopicComponent,
    ForumPostFormComponent,
    PaymentsComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatTableModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    CommonModule,
    MatDividerModule,
    HttpClientModule,
    ReactiveFormsModule,
    // ShareButtons,
    // FontAwesomeModule
  ],
  providers: [
    // shareIcons(),
    provideNativeDateAdapter(),
     {provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true}
    ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
