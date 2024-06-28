import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-christian-pauls',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './christian-pauls.component.html',
  styleUrl: './christian-pauls.component.css',
})
export class ChristianPaulsComponent {}
