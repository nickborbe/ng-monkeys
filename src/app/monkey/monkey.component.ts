import { Component, OnInit } from '@angular/core';

import { TruthService } from '../truth.service';


@Component({
  selector: 'app-monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit {

  constructor(private truthService: TruthService) { }

  ngOnInit() {
  }

}
