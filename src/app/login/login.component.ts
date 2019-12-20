import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string = '';
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router, private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  login() {
    // if (this.loginForm.get('userName').value === 'Admin' &&
    //   this.loginForm.get('password').value === 'Admin') {
    if (this.loginService.login(this.loginForm.get('userName').value,
      this.loginForm.get('password').value)) {
      //redirect to order
      // this.router.navigate(['/comment',1,'edit',5]);
      this.router.navigate(['/order']);
    } else {
      this.errorMessage = 'The provided user in invalid!';
    }
  }
}
