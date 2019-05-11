import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Login } from '../shared/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getNew();
  }

  getNew() {
    this.login = new Login();
    this.setForm();
  }

  setForm() {
    this.loginForm = this.fb.group({
      email: new FormControl(this.login.email, Validators.required),
      password: new FormControl(this.login.password, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
