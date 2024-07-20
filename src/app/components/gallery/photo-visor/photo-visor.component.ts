import { Component, inject, Input } from '@angular/core';
import { SingleService } from '../../../services/single.service';

@Component({
  selector: 'app-photo-visor',
  standalone: true,
  imports: [],
  templateUrl: './photo-visor.component.html',
  styleUrl: './photo-visor.component.css',
})
export class PhotoVisorComponent {
  // Decorations
  @Input() photoVisorContent!: string;
  // Injectables
  singleService = inject(SingleService);
  // Properties

  close(): void {
    this.singleService.signalVisorVisibility.set(false);
  }
}
