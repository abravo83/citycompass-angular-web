import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css',
})
export class TrainingComponent {}
