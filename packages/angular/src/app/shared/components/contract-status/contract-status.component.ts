import {
  Component, Input, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactStatus } from 'src/app/shared/types/contact';

@Component({
  selector: 'contract-status',
  template: `
  <span class="{{ input ? 'input' : '' }} status status-{{ statusMapping[value] }}">{{ value }}</span>
`,
  styleUrls: ['./contract-status.component.scss'],
})
export class ContractStatusComponent {
  @Input() value: ContactStatus;

  @Input() input?: boolean = false;

  readonly statusMapping: Record<string, string> = {
    'Abgelehnt': 'abgelehnt',
    'Aktiv': 'aktiv',
    'Entwurf': 'entwurf',
    'Prüfung': 'pruefung',
  };
  
}

@NgModule({
  imports: [CommonModule],
  declarations: [ContractStatusComponent],
  exports: [ContractStatusComponent],
})
export class ContractStatusModule { }
