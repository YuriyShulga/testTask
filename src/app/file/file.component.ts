import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextService } from '../text-service/text.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileComponent implements OnInit {
  public text$: Observable<string>;
  public synonims$: Observable<any>;

  constructor(private textService: TextService) {
  }

  ngOnInit() {
    this.getMockText();
  }

  public selectWord(e: Event) {
    const word = (e.target as HTMLSpanElement);
    this.textService.selectedWord = word;
    this.synonims$ = this.textService.getSynonims();
  }

  private getMockText() {
    this.text$ = this.textService.getMockText();
  }
}
