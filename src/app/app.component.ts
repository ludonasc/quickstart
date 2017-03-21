import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<banner></banner><app-welcome></app-welcome>`,
})
export class AppComponent  { name = 'Angular'; }
