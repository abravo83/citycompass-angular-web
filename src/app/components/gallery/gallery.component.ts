import { Component } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { PhotoVisorComponent } from './photo-visor/photo-visor.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, PhotoVisorComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  visorModalActive: boolean = true;
  photoVisorContent: string = '';
}
