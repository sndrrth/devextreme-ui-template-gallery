import { CommonModule } from '@angular/common';
import { NgModule, Input } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-kpi-card',
  templateUrl: './kpi-card.component.html',
  styleUrls: ['./kpi-card.component.scss']
})
export class KpiCardComponent {
  @Input()
  label: string;

  @Input()
  absoluteValue: number;

  @Input()
  relativeValue: number;

  @Input()
  extraThisYear: number;

  get absRelativeValue() {
    return Math.abs(this.relativeValue);
  }

  get type() {
    return this.relativeValue >= 0 ? 'positive' : 'negative';
  }
}

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [KpiCardComponent],
  exports: [KpiCardComponent],
})
export class KpiCardModule { }
