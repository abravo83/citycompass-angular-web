import { Component, inject, ViewChild } from '@angular/core';
import { TopmenuComponent } from '../topmenu/topmenu.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SingleService } from '../../services/single.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TopmenuComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @ViewChild('contactForm') contactForm!: NgForm;
  singleService = inject(SingleService);

  name: string = '';
  email: string = '';
  message: string = '';
  jobtitle: string = '';
  phone: string = '';

  // Variables para controlar el estado
  isSubmitted: boolean = false;
  hasError: boolean = false;
  errorMessage: string = '';

  // Validadores personalizados
  validatePhone(phone: string): boolean {
    const phoneRegex = /^[\d\s\-\+\(\)]{6,}$/;
    return phoneRegex.test(phone);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  async onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    // Validaciones adicionales
    if (this.phone && !this.validatePhone(this.phone)) {
      this.hasError = true;
      this.errorMessage = 'Por favor, ingrese un número de teléfono válido';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.hasError = true;
      this.errorMessage = 'Por favor, ingrese un correo electrónico válido';
      return;
    }

    try {
      await this.singleService.sendFormData({
        name: this.name,
        email: this.email,
        message: `${this.name} - Phone: ${this.phone} - Job title:${this.jobtitle} - has sent the following message from the contact form: \n \n ${this.message}`,
      });

      this.isSubmitted = true;
      this.hasError = false;
      this.errorMessage = '';
      this.resetForm();
    } catch (error) {
      this.hasError = true;
      this.errorMessage =
        'Ha ocurrido un error al enviar el mensaje. Por favor, inténtelo de nuevo.';
      console.error('Error al enviar el formulario:', error);
    }
  }

  resetForm() {
    if (this.contactForm) {
      this.contactForm.resetForm();
    }
    this.name = '';
    this.email = '';
    this.message = '';
    this.jobtitle = '';
    this.phone = '';
    this.hasError = false;
    this.errorMessage = '';
  }
}
