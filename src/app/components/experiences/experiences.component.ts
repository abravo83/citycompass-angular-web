import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {}
