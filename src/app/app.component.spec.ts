import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import {MdIconRegistry, MdDialogModule, MdList, MdButtonModule, MdListModule} from "@angular/material";
import {NoteService} from "./note.service";
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        MdDialogModule,
        MdButtonModule,
        MdListModule
      ],
      providers: [
        MdIconRegistry,
        NoteService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have an initial notes list`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   console.log(app);
  //   expect(app.notes).toEqual([
  //     'Note 1',
  //     'Note 2'
  //   ]);
  // }));

  it('should have a list and a button', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.debugElement.componentInstance.ngOnInit();
    fixture.detectChanges();
    const element = fixture.debugElement;
    expect(element.query(By.css('button'))).toBeTruthy();
    expect(element.query(By.directive(MdList))).toBeTruthy();
  }));
});
