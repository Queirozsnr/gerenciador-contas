import { Component, Input, forwardRef} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.sass'],
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LabelInputComponent), multi: true,}],
})
export class LabelInputComponent {

  @Input() noLabel?: boolean;

  @Input() inputType?: string;
  
  @Input() itemLabel?: string;

  @Input() isRequired?: boolean;

  @Input() nameInput?: boolean;
}
