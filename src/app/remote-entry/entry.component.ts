import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'app-micro_sub1-entry',
  template: `<app-nx-welcome></app-nx-welcome>`,
})
export class RemoteEntryComponent {}
