import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  loggedIn: boolean;

  constructor() { }

  signedIn() {
    this.loggedIn = true;
  }

}