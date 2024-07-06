import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topmenu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topmenu.component.html',
  styleUrl: './topmenu.component.css',
})
export class TopmenuComponent {
  sliderMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleSliderMenu() {
    this.sliderMenuOpen = !this.sliderMenuOpen;
  }

  navigateFromSliderMenuTo(route: string) {
    this.sliderMenuOpen = false;
    setTimeout(() => {
      this.router.navigate([route]);
    }, 300);
  }
}
