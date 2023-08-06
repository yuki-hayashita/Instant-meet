import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillAvailabilityComponent } from './fill-availability/fill-availability.component';
import { NewEventComponent } from './new-event/new-event.component';

const routes: Routes = [
  { path: '', component: NewEventComponent },
  { path: 'fill-availability/:hash', component: FillAvailabilityComponent },
  { path: '**', component: NewEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
