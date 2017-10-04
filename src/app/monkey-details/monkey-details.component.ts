import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TruthService } from '../truth.service';
@Component({
  selector: 'app-monkey-details',
  templateUrl: './monkey-details.component.html',
  styleUrls: ['./monkey-details.component.css']
})
export class MonkeyDetailsComponent implements OnInit {
  monkey = {};
  errorMessage: string = '';

    constructor(
      private myRoute: ActivatedRoute,
      private truthService: TruthService,
      private myNavigator: Router
    ) { }

    ngOnInit() {
      this.myRoute.params.subscribe((params) => {
        this.getMonkeyDetails(params['id']);
      });
    }

    getPhoneDetails(id) {
      this.truthService.get(id)
        .then((thePhoneDetails) => {
          this.phone = thePhoneDetails;
        })
        .catch((err) => {
          this.errorMessage = 'Sorry, something went wrong. Please try again.';
        });
    }



    

}
