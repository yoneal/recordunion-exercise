import { SupportPage } from './app.po';
import {by, browser, ExpectedConditions} from "protractor";

describe('support App', () => {
  let page: SupportPage;

  beforeEach(() => {
    page = new SupportPage();
  });

  it('should display a list with initial contents', () => {
    page.navigateTo();
    let list = page.getList();
    expect(list.element(by.css('h3')).getText()).toEqual('Notes:');
    let notes = page.getNotes();
    notes.each((elem, index) => {
      expect(elem.getText()).toEqual(`Note ${index+1}`);
    });
  });

  it('should display a button with q&a icon', () => {
    page.navigateTo();
    let button = page.getButton();
    expect(button.element(by.css('md-icon')).getText()).toEqual('question_answer');
  });

  it('clicking the button should display a dialog', () => {
    page.navigateTo();
    let button = page.getButton();
    button.click();
    expect(page.getNoteDialog()).toBeTruthy();
  });

  it('creating a note should update the list in the dialog', () => {
    page.navigateTo();
    let button = page.getButton();
    button.click();
    let input = page.getNoteInput();
    input.click();
    input.$('input').sendKeys('Note 3');
    let sendBtn = page.getNoteSendBtn();
    sendBtn.click();
    browser.wait(ExpectedConditions.presenceOf(page.getNoteNotes().get(2)), 1010);
    let notes = page.getNoteNotes();
    expect(notes.count()).toEqual(3);
    expect(notes.last().getText()).toEqual('Note 3');
  });

  it('creating a note should update the list in the main page', () => {
    page.navigateTo();
    let button = page.getButton();
    button.click();
    let input = page.getNoteInput();
    input.click();
    input.$('input').sendKeys('Note 3');
    let sendBtn = page.getNoteSendBtn();
    sendBtn.click();
    browser.wait(ExpectedConditions.presenceOf(page.getNotes().get(2)), 2010);
    let notes = page.getNotes();
    expect(notes.count()).toEqual(3);
    expect(notes.last().getText()).toEqual('Note 3');
  });
});
