import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, TopmenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
