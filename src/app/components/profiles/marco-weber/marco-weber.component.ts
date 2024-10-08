import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marco-weber',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, RouterLink],
  templateUrl: './marco-weber.component.html',
  styleUrl: './marco-weber.component.css',
})
export class MarcoWeberComponent {}
