import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sandra-jitianu',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, RouterLink],
  templateUrl: './sandra-jitianu.component.html',
  styleUrl: './sandra-jitianu.component.css',
})
export class SandraJitianuComponent {}
