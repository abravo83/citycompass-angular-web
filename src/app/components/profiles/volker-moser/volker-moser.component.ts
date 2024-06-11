import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-volker-moser',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './volker-moser.component.html',
  styleUrl: './volker-moser.component.css',
})
export class VolkerMoserComponent {}
