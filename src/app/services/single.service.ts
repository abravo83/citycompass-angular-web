import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';

import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SingleService {
  signalVisorVisibility: WritableSignal<boolean> = signal(false);
  http = inject(HttpClient);

  URL = environment.URL;

  constructor() {}

  sendFormData({ name, email, message }: any) {
    return firstValueFrom(
      this.http.post(`${this.URL}/api/mail`, { name, email, message })
    );
  }
}
