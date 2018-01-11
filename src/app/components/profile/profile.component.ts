import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IEmployee } from '../../interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentEmployee: IEmployee;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.currentEmployee = JSON.parse(sessionStorage.getItem('currentJMSUser')); // getting the current user from the session storage and parsing it to JSON as it is stored in the form of string
  }
}
