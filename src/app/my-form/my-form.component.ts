import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  orderModel: Order = new Order("", 0, new Date(), "");
  
  constructor() { }

  onSubmit(): void {
    console.log(this.orderModel)
  }

  ngOnInit(): void {
  }

}
