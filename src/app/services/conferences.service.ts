import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Conference } from '../interfaces/conference.interface';

@Injectable({
  providedIn: 'root'
})
export class ConferencesService {

  private conferencesList: Conference[] = [];
  private conferences: Observable<any[]>;

  constructor(db: AngularFirestore) {

    this.conferences = db.collection('CONFERENCES').valueChanges();

    this.conferences.subscribe(conferences => {
      conferences.forEach(conference =>  {
        this.conferencesList.push(conference);
      });
    });
  }

  getConferences() {
    return this.conferencesList;
  }
}