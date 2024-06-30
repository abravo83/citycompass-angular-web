import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { ConsultingComponent } from './components/services/consulting/consulting.component';
import { CoachingComponent } from './components/services/coaching/coaching.component';
import { TrainingComponent } from './components/services/training/training.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { VolkerMoserComponent } from './components/profiles/volker-moser/volker-moser.component';
import { SandraJitianuComponent } from './components/profiles/sandra-jitianu/sandra-jitianu.component';
import { ThiloBeyerComponent } from './components/profiles/thilo-beyer/thilo-beyer.component';
import { MarcoWeberComponent } from './components/profiles/marco-weber/marco-weber.component';
import { ChristianPaulsComponent } from './components/profiles/christian-pauls/christian-pauls.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'services/consulting', component: ConsultingComponent },
  { path: 'services/coaching', component: CoachingComponent },
  { path: 'services/training', component: TrainingComponent },
  { path: 'profiles', redirectTo: 'profiles/volker-moser', pathMatch: 'full' },
  { path: 'profiles/volker-moser', component: VolkerMoserComponent },
  { path: 'profiles/sandra-jitianu', component: SandraJitianuComponent },
  { path: 'profiles/thilo-beyer', component: ThiloBeyerComponent },
  { path: 'profiles/marco-weber', component: MarcoWeberComponent },
  { path: 'profiles/christian-pauls', component: ChristianPaulsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
