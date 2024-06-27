import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-sandra-jitianu',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent],
  templateUrl: './sandra-jitianu.component.html',
  styleUrl: './sandra-jitianu.component.css',
})
export class SandraJitianuComponent {}
