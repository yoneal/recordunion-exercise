import {Component, OnInit, Inject} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';
import {NoteService} from "../note.service";

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {

  notes: string[];
  inputNote: string;

  constructor(
    public dialogRef: MdDialogRef<NoteDialogComponent>,
    private noteService: NoteService
  ) {
  }

  ngOnInit() {
    this.notes = this.noteService.getAllNotes();
    this.noteService.get1SecNote().subscribe(
      (note: string) => {
        this.notes.push(note);
      }
    );
  }

  send(note: string) {
    this.noteService.sendNote(note);
  }
}
