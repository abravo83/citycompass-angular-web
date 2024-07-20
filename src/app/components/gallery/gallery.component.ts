import { Component, effect, inject } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { PhotoVisorComponent } from './photo-visor/photo-visor.component';
import { SingleService } from '../../services/single.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, PhotoVisorComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  singleService = inject(SingleService);

  visorModalActive: boolean = false;
  photoVisorContent: string = '';

  constructor() {
    effect(() => {
      this.visorModalActive = this.singleService.signalVisorVisibility();
    });
  }

  openImage(image: string) {
    this.photoVisorContent = image;
    this.singleService.signalVisorVisibility.set(true);
  }
}
