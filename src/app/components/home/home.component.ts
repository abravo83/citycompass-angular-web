import { Component, ElementRef, ViewChild } from '@angular/core';
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
export class HomeComponent {
  @ViewChild('profilesCarrousel') profilesCarrousel!: ElementRef;

  scrollAmount = 200; // Adjust this value as needed

  scrollProfileLeft() {
    this.profilesCarrousel.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollProfileRight() {
    this.profilesCarrousel.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }
}
