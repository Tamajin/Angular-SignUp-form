import { Component, OnInit } from '@angular/core';
import { SignUpForm } from '../models/SignUpForm';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: SignUpForm = {
    email: '',
    password: '',
    confirmPassword: '',
    firstname: '',
    lastname: '',
  };

  constructor() {}

  onSubmit(): void {
    console.log(`${this.user} has been registered`);
  }

  ngOnInit(): void {}
}
