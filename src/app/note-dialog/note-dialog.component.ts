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
  processing: boolean;

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
        this.processing = false;
        this.inputNote = '';
      }
    );
    this.processing = false;
  }

  send(note: string) {
    this.processing = true;
    this.noteService.sendNote(note);
  }
}
