import {Component, OnInit} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {NoteDialogComponent} from "./note-dialog/note-dialog.component";
import {NoteService} from "./note.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  notes: string[];
  // selectedOption: string;
  dialogRef: MdDialogRef<NoteDialogComponent>;

  constructor(public dialog: MdDialog, private noteService: NoteService) {}

  ngOnInit() {
    this.notes = this.noteService.getAllNotes();

    this.noteService.get2SecNote().subscribe(
      (note: string) => {
        this.notes.push(note);
      }
    );
  }

  toggleDialog() {
    console.log('button');
    if (this.dialogRef) {
      this.dialogRef.close();
      this.dialogRef = null;
      return;
    }
    this.dialogRef = this.dialog.open(NoteDialogComponent, {
      height: '50%',
      width: '30%',
      position: {
        bottom: '7%',
        right: '7%'
      },
      disableClose: true
    });
    // this.dialogRef.afterClosed().subscribe(result => {
    //   this.selectedOption = result;
    // });
  }



}
