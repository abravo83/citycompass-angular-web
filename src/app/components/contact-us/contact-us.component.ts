import { Component, inject } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SingleService } from '../../services/single.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  singleService = inject(SingleService);

  name: string = '';
  email: string = '';
  message: string = '';
  jobtitle: string = '';
  phone: string = '';

  // Añadimos variables para controlar el estado
  isSubmitted: boolean = false;
  hasError: boolean = false;
  errorMessage: string = '';

  onSubmit() {
    this.singleService
      .sendFormData({
        name: this.name,
        email: this.email,
        message: `${this.name} - Phone: ${this.phone} - Job title:${this.jobtitle} - has sent the following message from the contact form: \n \n ${this.message}`,
      })
      .then(() => {
        this.isSubmitted = true;
        this.resetForm();
      })
      .catch((error: Error) => {
        this.hasError = true;
        this.errorMessage =
          'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.';
        console.error('Error al enviar el formulario:', error);
      });
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.jobtitle = '';
    this.phone = '';
  }
}
