import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { visitAll } from '@angular/compiler';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(19),
      Validators.maxLength(19),
      Validators.pattern('[0-9 ]*'),
    ]),
    expirationDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    securityCode: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3),
    ]),
  });

  @Output() cardValue = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {
    //call this when any of form input changes
    this.cardForm.valueChanges.subscribe((values) => {
      this.cardValue.emit(values); //emitting changes value
    });
  }

  onFormSubmit() {
    console.log(this.cardForm.value);
  }

  onFormReset() {
    this.cardForm.reset();
  }

  get name() {
    return this.cardForm.get('name');
  }

  get cardNumber() {
    return this.cardForm.get('cardNumber');
  }

  get expirationDate() {
    return this.cardForm.get('expirationDate');
  }

  get securityCode() {
    return this.cardForm.get('securityCode');
  }
}
