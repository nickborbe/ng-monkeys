import { Component } from '@angular/core';

import { TruthService } from './truth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private truthService: TruthService) { }

}
