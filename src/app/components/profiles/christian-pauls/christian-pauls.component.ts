import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-christian-pauls',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, RouterLink],
  templateUrl: './christian-pauls.component.html',
  styleUrl: './christian-pauls.component.css',
})
export class ChristianPaulsComponent {}
