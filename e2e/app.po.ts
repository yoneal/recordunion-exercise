import {browser, element, by, $} from 'protractor';

export class SupportPage {
  navigateTo() {
    return browser.get('/');
  }

  getList() {
    return $('app-root > md-list');
  }

  getNotes() {
    return this.getList().all(by.css('md-list-item'));
    // return element.all(by.css('app-root > md-list > md-list-item'));
  }

  getButton() {
    return $('app-root > button.support');
  }

  getNoteDialog() {
    return $('.cdk-overlay-container app-note-dialog');
  }

  getNoteInput() {
    let dialog = this.getNoteDialog();
    // return dialog.element(by.css('.mat-dialog-actions md-input-container'));
    return dialog.$('.mat-dialog-actions').$('md-input-container');
  }

  getNoteSendBtn() {
    let dialog = this.getNoteDialog();
    return dialog.$('.mat-dialog-actions').$('button');
  }

  getNoteList() {
    let dialog = this.getNoteDialog();
    return dialog.$('.mat-dialog-content').$('md-list');
  }

  getNoteNotes() {
    return this.getNoteList().all(by.css('md-list-item'));
  }
}
