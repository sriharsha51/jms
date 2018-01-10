import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IEvent, IJuror } from '../../interfaces/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-summon-jurors',
  templateUrl: './summon-jurors.component.html',
  styleUrls: ['./summon-jurors.component.css']
})
export class SummonJurorsComponent implements OnInit {
  
  randomNumber: number;
  numberOfJurors: number;
  events: IEvent[];
  jurors: any=[];
  randomJurors: IJuror[]=[];
  selectedEvent: string;
  checkRandomJurors: any = {};

  constructor(private _dataService: DataService, private _formBuilder: FormBuilder) { }

  summonJurorsForm: FormGroup

  ngOnInit() {
    this._dataService.getEvents().subscribe(data => {
      this.events = data;
    })
    this._dataService.getJurors().subscribe(data => {
      this.jurors = data;
    })

    this.summonJurorsForm = this._formBuilder.group({
      inputNumber:['', [Validators.required, Validators.min(1), Validators.max(5)]]
    })
  }

  onEventSelect(nameOfEvent): void {
    this.selectedEvent = nameOfEvent;
  }

  onSummonJurors(number): void {
    this.randomJurors = [];
    this.numberOfJurors = +number;// to convert string to number.
    this.checkRandomJurors = {};
    while (!(this.randomJurors.length === this.numberOfJurors)) {
      this.randomNumber = Math.floor(Math.random()*this.jurors.length);
      console.log(this.randomNumber);
      console.log(this.jurors[this.randomNumber]);
      if(!this.checkRandomJurors[this.jurors[this.randomNumber].jurorId]) { // to check if the juror already exists
        this.checkRandomJurors[this.jurors[this.randomNumber].jurorId] = true;
        this.randomJurors.push(this.jurors[this.randomNumber]);
      }
    }
    console.log(this.randomJurors);
  }
}
