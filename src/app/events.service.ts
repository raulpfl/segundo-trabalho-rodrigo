import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Event } from './event';

const httpOption = {
  headers: new HttpHeaders({"Content-Type": "application/json"})
};

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.url);
  }

  save(event: Event): Observable<Event> {
    return this.http.post<Event>(this.url, event, httpOption);
  }

  edit(event: Event): Observable<Event> {
    return this.http.put<Event>(this.url + '/' + event.id, event, httpOption);
  }

  delete(event: Event): Observable<Event> {
    return this.http.delete<Event>(this.url + '/' + event.id);
  }
}
