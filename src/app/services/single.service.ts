import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleService {
  signalVisorVisibility: WritableSignal<boolean> = signal(false);

  constructor() {}
}
