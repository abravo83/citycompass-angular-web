import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-coaching',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './coaching.component.html',
  styleUrl: './coaching.component.css',
})
export class CoachingComponent {}
