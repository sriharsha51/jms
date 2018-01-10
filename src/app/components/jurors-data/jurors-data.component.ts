import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import { IJuror } from '../../interfaces/interfaces';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-jurors-data',
  templateUrl: './jurors-data.component.html',
  styleUrls: ['./jurors-data.component.css']
})
export class JurorsDataComponent implements OnInit {

  jurors: IJuror[];
  _jurorFilter: string;
  filteredJurors: IJuror[];
  showFilteredBy: boolean;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getJurors().subscribe(data => {
      this.jurors = data;
      this.filteredJurors = this.jurors;
    })
  }

 get jurorFilter(): string {
  return this._jurorFilter;
}
set jurorFilter(value: string) {
  this._jurorFilter = value;
  this.showFilteredBy = this.jurorFilter ? true : false;
  this.filteredJurors = this.jurorFilter ? this.filter(this.jurorFilter) : this.jurors;
}

filter(filterBy): IJuror[] {
filterBy = filterBy.toLocaleLowerCase();
return this.jurors.filter((juror) =>
     juror.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}
