import { EventsService } from './events.service';
import { Event } from './event';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'segundo-trabalho';

  newEvent: Event;
  events: Event[] = [];

  constructor(
    private eventService: EventsService
  ) { }

  ngOnInit() {
    this.newEvent = new Event();
    this.getAll();
  }

  getAll() {
    this.eventService.getAll().subscribe(
      data => this.events = data
    );
  }

  save() {
    if (!this.newEvent.id) {
      this.eventService.save(this.newEvent).subscribe(
        data => this.getAll()
      );
    } else {
      this.eventService.edit(this.newEvent).subscribe(
        data => this.getAll()
      );
    }
  }

  edit(event: Event) {
    this.newEvent = new Event(event.id, event.title, event.author);
  }

  delete(event: Event) {
    this.eventService.delete(event).subscribe(
      data => this.getAll()
    );
  }
}
