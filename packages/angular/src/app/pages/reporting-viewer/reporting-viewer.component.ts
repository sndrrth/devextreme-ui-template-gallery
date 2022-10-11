

import { Component,  NgModule, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

@Component({
    templateUrl: './reporting-viewer.component.html',
    styleUrls: ['./reporting-viewer.component.scss'],
})
export class ReportingViewerComponent implements AfterViewInit {
    title = 'DXReportViewerSample';
    hostUrl: string = 'https://demos.devexpress.com/Embedded/NetCore/Reporting/';
    reportUrl: string =  'MasterDetailReport';
    invokeAction: string = 'DXXRDV';

    showInfo = () => {
        const cmd = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"';
        navigator.clipboard.writeText(cmd);
        alert([
            'Chrome mit folgendem Befehl starten:',
            cmd,
            '',
            'Befehl wurde in Zwischenablage kopiert. Ausführen mit Windows + R'
        ].join('\n'))
    }

    ngAfterViewInit(): void {
        setTimeout(() => {
            const hasError = document.querySelector('.dx-toast-message')?.textContent.startsWith('Could not open report');
            hasError && this.showInfo();
        }, 700)    
    }
}

@NgModule({
    imports: [
        DxReportViewerModule,
        DxToolbarModule,
        CommonModule,
    ],
    providers: [],
    exports: [ReportingViewerComponent],
    declarations: [ReportingViewerComponent],
})
export class ReportingViewerModule { }
