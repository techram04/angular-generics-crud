import { Component } from '@angular/core';

import { UnicornsService } from './generic-crud/services/unicorn.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  unicorns$ = this.unicornsService.get();

  constructor(private unicornsService: UnicornsService) {}
}
