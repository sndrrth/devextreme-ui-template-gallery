import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModule, Input } from '@angular/core';

@Component({
  selector: 'app-kpi-card-list',
  templateUrl: './kpi-card-list.component.html',
  styleUrls: ['./kpi-card-list.component.scss']
})
export class KpiCardListComponent {}


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [KpiCardListComponent],
  exports: [KpiCardListComponent],
})
export class KpiCardListModule { }
