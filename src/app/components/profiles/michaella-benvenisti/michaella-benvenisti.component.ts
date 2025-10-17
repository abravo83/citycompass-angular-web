import { Component } from '@angular/core';
import { TopmenuComponent } from '../../topmenu/topmenu.component';
import { FooterComponent } from '../../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-michaella-benvenisti',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, RouterLink],
  templateUrl: './michaella-benvenisti.component.html',
  styleUrl: './michaella-benvenisti.component.css',
})
export class MichaellaBenvenistiComponent {}
