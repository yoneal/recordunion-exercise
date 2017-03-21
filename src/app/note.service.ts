import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class NoteService {

  notes: string[];

  private noteSubject: Subject<string>;

  constructor() {
    this.noteSubject = new Subject();
    this.notes = [
      'Note 1',
      'Note 2'
    ];
  }

  get1SecNote() {
    return this.noteSubject.delay(1000);
  }

  get2SecNote() {
    return this.noteSubject.delay(2000);
  }

  sendNote(note: string) {
    this.notes.push(note);
    this.noteSubject.next(note);
  }

  getAllNotes() {
    return this.notes.slice(0);
  }

}
