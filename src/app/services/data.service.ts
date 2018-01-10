import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { IEvent, IJuror } from '../interfaces/interfaces';

@Injectable()
export class DataService {

  private jurorsUrl: string = './api/jurors/jurors.json';

  constructor(private _http:HttpClient) { }

  getJurors(): Observable<IJuror[]> {
    return this._http.get<IJuror[]>('assets/api/jurors/jurors.json');
  }

  getEvents(): Observable<IEvent[]> {
    return this._http.get<IEvent[]>('assets/api/events/events.json');
  }

}
