import {
  Component, Input, NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactStatus } from 'src/app/shared/types/contact';
import { faCheckCircle, } from '@fortawesome/pro-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'contract-status',
  template: `
  <span class="{{ input ? 'input' : '' }} status status-{{ statusMapping[value] }}">
    <span [innerHTML]="iconMapping[value]"></span>
    {{ value }}
  </span>
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

  readonly iconMapping: Record<string, any> = {
    'Abgelehnt': this.sanitizer.bypassSecurityTrustHtml(icon(faCheckCircle).html[0]),
    'Aktiv': this.sanitizer.bypassSecurityTrustHtml(icon(faCheckCircle).html[0]),
    'Entwurf': this.sanitizer.bypassSecurityTrustHtml(icon(faCheckCircle).html[0]),
    'Prüfung': this.sanitizer.bypassSecurityTrustHtml(icon(faCheckCircle).html[0]),
  };


  constructor(private sanitizer: DomSanitizer) {}
  
}

@NgModule({
  imports: [CommonModule],
  declarations: [ContractStatusComponent],
  exports: [ContractStatusComponent],
})
export class ContractStatusModule { }
