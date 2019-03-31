import { ChangeDetectionStrategy, Component, ChangeDetectorRef } from '@angular/core';
import { TextService } from '../text-service/text.service';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {

  constructor(private textService: TextService, public cdr: ChangeDetectorRef) {}
  public makeBold() {
    this.textService.makeBold();
  }

  public makeItalic() {
    this.textService.makeItalic();
  }

  public makeUnderlined() {
    this.textService.makeUnderlined();
  }
}
