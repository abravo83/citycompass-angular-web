import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, TopmenuComponent, FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}
