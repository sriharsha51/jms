import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';


// function passwordMatcher(c: AbstractControl): {[key: string]: boolean} | null {
//   let password = c.get('email');
//   let confirmPassword = c.get('confirmEmail');

//   if (password.pristine || confirmPassword.pristine) {
//     return null;
//   }

//   if (password.value === confirmPassword.value) {
//       return null;
//   }
//   return { 'match': true };
// }


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  loginForm: FormGroup
  
  constructor(private _router:Router, public loginService: LoginService, private _formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this._formbuilder.group({
      email: ['', [Validators.required, this.validateEmail]],
      password: ['', [Validators.required]]
    });
  }

  validateEmail(controls): {[key: string]: boolean} | null {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regExp.test(controls.value)) {
      return null; 
        } else {
      return { 'validateEmail': true } 
    }
  }

  login() {
    this.loginService.signedIn();
    this._router.navigate(['/home']);
    
  }

}
