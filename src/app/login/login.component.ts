import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;
  notSubmitted = true;
  eigthChar = false;
  lowerCase = false;
  upperCase = false;
  numChar = false;
  specialChar = false;
  loginValue: Login;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getNew();
  }

  getNew() {
    this.login = new Login();
    this.setForm();
  }

  setForm() {
    const regEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    const regPassword = /[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/;
    this.loginForm = this.fb.group({
      email: new FormControl(this.login.email, [Validators.required, Validators.pattern(regEmail)]),
      password: new FormControl(this.login.password, [Validators.required, Validators.pattern(regPassword)])
    });
  }

  onInput(event: any) {
    const password = event.target.value;

    if ((/[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(password))) {
      this.specialChar = true;
    } else {
      this.specialChar = false;
    }
    if ((/\d/.test(password))) {
      this.numChar = true;
    } else {
      this.numChar = false;
    }
    if ((/[a-z]/.test(password))) {
      this.lowerCase = true;
    } else {
      this.lowerCase = false;
    }
    if ((/[A-Z]/.test(password))) {
      this.upperCase = true;
    } else {
      this.upperCase = false;
    }
    if ((password.length >= 8)) {
      this.eigthChar = true;
    } else {
      this.eigthChar = false;
    }
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginValue = this.loginForm.value;
    this.notSubmitted = false;
  }

}
