import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  async share() {
    const shareData = {
      title: 'City Compass - Consulting, Coaching & Training',
      text: 'Check out citycompass.ro !',
      url: 'https://www.citycompass.ro/',
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      alert(
        'Web Share API is not supported in your browser. You can manually copy the URL.'
      );
    }
  }
}
