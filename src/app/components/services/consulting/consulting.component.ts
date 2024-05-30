import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css',
})
export class ConsultingComponent {}
