import {
  Component, Input, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactStatus } from 'src/app/shared/types/contact';

@Component({
  selector: 'contract-status',
  template: `
  <span class="{{ input && 'input' }} status status-{{ value | lowercase }}">{{ value }}</span>
`,
  styleUrls: ['./contract-status.component.scss'],
})
export class ContractStatusComponent {
  @Input() value: ContactStatus;

  @Input() input?: boolean = false;
}

@NgModule({
  imports: [CommonModule],
  declarations: [ContractStatusComponent],
  exports: [ContractStatusComponent],
})
export class ContractStatusModule { }
