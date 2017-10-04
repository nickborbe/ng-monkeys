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
      private myPhoneService: PhoneService,
      private myNavigator: Router
    ) { }

    ngOnInit() {
      this.myRoute.params.subscribe((params) => {
        this.getPhoneDetails(params['id']);
      });
    }

    getPhoneDetails(id) {
      this.myPhoneService.get(id)
        .then((thePhoneDetails) => {
          this.phone = thePhoneDetails;
        })
        .catch((err) => {
          this.errorMessage = 'Could not retrieve phone details. Try again later.';
        });
    }

    deletePhone() {
      if (!window.confirm('Are you sure?')) {
        return;
      }

      this.myPhoneService.remove(this.phone['_id'])
        .then(() => {
          this.myNavigator.navigate(['/']);
        })
        .catch((err) => {
          this.errorMessage = 'Could not retrieve phone details. Try again later.';
        });
    }

}
