import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './Component/landing-page/landing-page.component';
import { SelectbusPageComponent } from './Component/selectbus-page/selectbus-page.component';
import { PaymentPageComponent } from './Component/payment-page/payment-page.component';
import { ProfilePageComponent } from './Component/profile-page/profile-page.component';
import { BusRentalComponent } from './Component/bus-rental/bus-rental.component';
import { TravelStoriesComponent } from './Component/travel-stories/travel-stories.component';
import { VirtualBusTourComponent } from './Component/virtual-bus-tour/virtual-bus-tour.component';
import { StoryListComponent } from './Component/travel-stories/story-list/story-list.component';
import { StoryFormComponent } from './Component/travel-stories/story-form/story-form.component';
import { TipListComponent } from './Component/travel-stories/tip-list/tip-list.component';
import { TipFormComponent } from './Component/travel-stories/tip-form/tip-form.component';
import { PhotoFormComponent } from './Component/travel-stories/photo-form/photo-form.component';
import { PhotoListComponent } from './Component/travel-stories/photo-list/photo-list.component';
import { ForumListComponent } from './Component/travel-stories/forum-list/forum-list.component';
import { ForumTopicComponent } from './Component/travel-stories/forum-topic/forum-topic.component';
import { PaymentsComponent } from './Component/bus-rental/payments/payments.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'select-bus', component: SelectbusPageComponent },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'bus-rental', component: BusRentalComponent },
  { path: 'travel-stories', component: TravelStoriesComponent },
  { path: 'virtual-bus-tour', component: VirtualBusTourComponent },
  { path: 'story-list', component: StoryListComponent },
  { path: 'story-form', component:StoryFormComponent},
  { path: 'stories', component: StoryListComponent },
  { path: 'add-story', component: StoryFormComponent },
  { path: 'tips', component: TipListComponent },
  { path: 'add-tip', component: TipFormComponent },
  { path: 'photos', component: PhotoListComponent },
  { path: 'add-photo', component: PhotoFormComponent },
  { path: 'forums', component: ForumListComponent },
  { path: 'forum/:id', component: ForumTopicComponent },
  { path: 'payments', component:PaymentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
