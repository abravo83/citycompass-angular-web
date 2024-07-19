import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-photo-visor',
  standalone: true,
  imports: [],
  templateUrl: './photo-visor.component.html',
  styleUrl: './photo-visor.component.css',
})
export class PhotoVisorComponent {
  @Input() photoVisorContent: string = '';
}
