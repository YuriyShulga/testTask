import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TextService {
  public selectedWord: HTMLSpanElement;

  constructor(public http: HttpClient) {}

  public getMockText() {
    return of(
      'A year ago I was in the audience at a gathering of designers in San Francisco. ' +
      'There were four designers on stage, and two of them worked for me. I was there to support them. ' +
      'The topic of design responsibility came up, possibly brought up by one of my designers, I honestly don’t remember the details. ' +
      'What I do remember is that at some point in the discussion I raised my hand and suggested, to this group of designers, ' +
      'that modern design problems were very complex. And we ought to need a license to solve them.'
    );
  }

  public makeBold() {
    if (!this.hasSelectedWord()) {
      return;
    }

    this.selectedWord.classList.toggle('bold');
  }

  public makeItalic() {
    if (!this.hasSelectedWord()) {
      return;
    }

    this.selectedWord.classList.toggle('italic');
  }

  public makeUnderlined() {
    if (!this.hasSelectedWord()) {
      return;
    }

    this.selectedWord.classList.toggle('underlined');
  }

  public getSynonims(): Observable<any> {
    const url = `https://api.datamuse.com/words?ml=${this.selectedWord.innerText}`;
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');

    return this.http.get(url, {
      headers
    });
  }

  private hasSelectedWord() {
    return !!this.selectedWord;
  }
}
