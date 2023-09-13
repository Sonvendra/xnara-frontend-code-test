import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss'],
})
export class CustomerDataComponent implements OnInit, OnDestroy {
  customers: any[] = [];
  error: string = '';
  isLoader: boolean = false;
  subscription: Subscription;

  constructor(private service: DataServiceService) {}

  ngOnInit(): void {
    this.fetchCustomerData();
  }

  fetchCustomerData() {
    this.isLoader = true;

    this.subscription = this.service.getData().subscribe(
      (response: any) => {
        this.isLoader = false;
        this.customers = response;
      },
      (error) => {
        this.isLoader = false;
        this.error = 'Failed to fetch customer data.';
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
