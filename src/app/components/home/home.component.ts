import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TopmenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
