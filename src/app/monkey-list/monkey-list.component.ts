import { Component, OnInit } from '@angular/core';

import { TruthService } from '../truth.service';


@Component({
  selector: 'app-monkey-list',
  templateUrl: './monkey-list.component.html',
  styleUrls: ['./monkey-list.component.css']
})
export class MonkeyListComponent implements OnInit {

  constructor(private truthService: TruthService) { }

  ngOnInit() {
  }

}
