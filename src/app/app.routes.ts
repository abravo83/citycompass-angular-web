import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ConsultingComponent } from './components/services/consulting/consulting.component';
import { CoachingComponent } from './components/services/coaching/coaching.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/consulting', component: ConsultingComponent },
  { path: 'services/coaching', component: CoachingComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
