import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-thilo-beyer',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './thilo-beyer.component.html',
  styleUrl: './thilo-beyer.component.css',
})
export class ThiloBeyerComponent {}
