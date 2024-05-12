import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopmenuComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
