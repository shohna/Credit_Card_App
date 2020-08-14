import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card = {cardNumber:"",name:"",expirationDate:"",securityCode:""}; //object of type crdit card data
  constructor() {}

  ngOnInit(): void {}
}
