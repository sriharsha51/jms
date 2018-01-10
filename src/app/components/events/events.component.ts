import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewChild } from '@angular/core';
import { ViewEventComponent } from './view-event/view-event.component';
import { IEvent } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: IEvent[];
  _eventFilter: string;
  filteredEvents: IEvent[];
  showFilteredBy: boolean;


  
  @ViewChild(ViewEventComponent) viewEvent: ViewEventComponent;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getEvents().subscribe(data => {
      this.events = data;
      this.filteredEvents = this.events;
   });
 }

 get eventFilter(): string {
     return this._eventFilter;
 }
 set eventFilter(value: string) {
     this._eventFilter = value;
     this.showFilteredBy = this.eventFilter ? true : false;
     this.filteredEvents = this.eventFilter ? this.filter(this.eventFilter) : this.events;
 }

 filter(filterBy): IEvent[] {
  filterBy = filterBy.toLocaleLowerCase();
  return this.events.filter((event: IEvent) =>
        event.eventName.toLocaleLowerCase().indexOf(filterBy) !== -1);
 }

 openViewEventModal(event: IEvent): void {
   this.viewEvent.eventDetails = event;
 }
}
