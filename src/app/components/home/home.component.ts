import { Component, OnInit } from '@angular/core';
import {CustomerService} from 'app/services/customer.service';
import {PagerService} from 'app/services/pager.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   // array of all items to be paged
  private allItems: any[];

   // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];
  constructor(private customerService: CustomerService,
              private pagerService: PagerService) {}

  ngOnInit() {
   this.customerService.getCustomer().subscribe(
     data => {
       this.allItems = data;
       this.setPage(1);
     },
     error => alert(JSON.parse(JSON.parse(JSON.stringify(error))._body).message)
    );
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }

}
