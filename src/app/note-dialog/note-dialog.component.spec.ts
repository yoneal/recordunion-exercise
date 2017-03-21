import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDialogComponent } from './note-dialog.component';
import {NoteService} from "../note.service";
import {MdDialogRef, MdDialogModule, MdInputModule, MdButtonModule} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    NoteDialogComponent
  ],
  entryComponents: [
    NoteDialogComponent
  ],
  exports: [
    NoteDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MdDialogModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [
    NoteService,
    MdDialogRef
  ]
})
class NoteDialogSpecModule {}

xdescribe('NoteDialogComponent', () => {
  let component: NoteDialogComponent;
  let fixture: ComponentFixture<NoteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NoteDialogSpecModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
