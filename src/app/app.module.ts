import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdIconRegistry } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { NoteDialogComponent } from './note-dialog/note-dialog.component';
import {NoteService} from "./note.service";

@NgModule({
  declarations: [
    AppComponent,
    NoteDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [
    MdIconRegistry,
    NoteService
  ],
  entryComponents: [NoteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
