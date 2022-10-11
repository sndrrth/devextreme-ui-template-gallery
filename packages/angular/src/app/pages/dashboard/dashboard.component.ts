
import { Component,  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDashboardControlModule } from 'devexpress-dashboard-angular';
import { DxToolbarModule } from 'devextreme-angular';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  {
    edit = false;

    get workingMode() {
        return this.edit ? 'Designer' : 'Viewer';
    }

    toggleMode = () => {
        this.edit = !this.edit;
    }
}

@NgModule({
    imports: [
        DxDashboardControlModule,
        DxToolbarModule,
        CommonModule,
    ],
    providers: [],
    exports: [DashboardComponent],
    declarations: [DashboardComponent],
})
export class DashboardModule { }
