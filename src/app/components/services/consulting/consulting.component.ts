import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [RouterModule, TopmenuComponent, FooterComponent],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.css',
})
export class ConsultingComponent {}
