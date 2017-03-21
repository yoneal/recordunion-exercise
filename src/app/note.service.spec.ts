import {TestBed, inject, async} from '@angular/core/testing';

import { NoteService } from './note.service';

describe('NoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteService]
    });
  });

  it('get1SecNote() should receive a note after 1 second of delay', async(inject([NoteService], (service: NoteService) => {
    let start = new Date();
    service.sendNote("1 second");
    return service.get1SecNote().subscribe((note: string) => {
      let end = new Date();
      let elapsed = end.getTime() - start.getTime();
      expect(elapsed).toBeGreaterThanOrEqual(1000);
      expect(elapsed).toBeLessThan(1010); // around a second
      expect(note).toBe("1 second");
    });
  })));

  it('get2SecNote() should receive a note after 2 seconds of delay', async(inject([NoteService], (service: NoteService) => {
    let start = new Date();
    service.sendNote("2 seconds");
    return service.get2SecNote().subscribe((note: string) => {
      let end = new Date();
      let elapsed = end.getTime() - start.getTime();
      expect(elapsed).toBeGreaterThanOrEqual(2000);
      expect(elapsed).toBeLessThan(2010);
      expect(note).toBe("2 second");
    });
  })));
});
