import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
