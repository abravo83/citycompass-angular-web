import { Component, ElementRef, ViewChild, CUSTOM_ELEMENTS_SCHEMA, signal, WritableSignal } from '@angular/core';
import { RouterLink } from '@angular/router';
// import function to register Swiper custom elements
import { register, SwiperContainer } from 'swiper/element/bundle';
// register Swiper custom elements
register();

import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TopmenuComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent {
  @ViewChild('profilesCarrousel') profilesCarrousel!: ElementRef;
  @ViewChild('clientsCarrousel') clientsCarrousel!: ElementRef;
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  swiperElement: WritableSignal<SwiperContainer | null> = signal(null);
  scrollAmount = 200; // Adjust this value as needed

  ngOnInit() {
    // if (this.swiperContainer) {
    //   const swiperElementConstructor = this.swiperContainer.nativeElement;

    //   const swiperOptions: SwiperOptions = {
    //     slidesPerView: 1,
    //     direction: 'horizontal',
    //     loop: true,
    //     autoplay: {
    //       delay: 2500,
    //       disableOnInteraction: false,
    //     },
    //   };

    //   this.swiperElement.set(swiperElementConstructor as SwiperContainer);

    //   if (swiperElementConstructor) {
    //     Object.assign(swiperElementConstructor, swiperOptions);
    //     this.swiperElement.set(swiperElementConstructor as SwiperContainer);
    //     this.swiperElement()?.initialize();
    //   }
    // }

  }

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
  scrollClientsLeft() {
    this.clientsCarrousel.nativeElement.scrollBy({
      left: -this.scrollAmount,
      behavior: 'smooth',
    });
  }

  scrollClientsRight() {
    this.clientsCarrousel.nativeElement.scrollBy({
      left: this.scrollAmount,
      behavior: 'smooth',
    });
  }
}
