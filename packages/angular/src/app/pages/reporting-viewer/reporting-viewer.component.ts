

import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxToolbarModule } from 'devextreme-angular';
import { DxReportViewerModule } from 'devexpress-reporting-angular';

@Component({
    templateUrl: './reporting-viewer.component.html',
    styleUrls: ['./reporting-viewer.component.scss'],
})
export class ReportingViewerComponent {
    title = 'DXReportViewerSample';
    hostUrl: string = 'https://demos.devexpress.com/Embedded/NetCore/Reporting/';
    reportUrl: string =  'DrillDownReport';
    invokeAction: string = 'DXXRDV';

    showInfo = () => {
        const cmd = '"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --disable-web-security --user-data-dir="C:/ChromeDevSession"';
    
        // The demo runs on HTTP but the clipboard API requires HTTPS
        // navigator.clipboard.writeText(cmd);
        const input = document.createElement("input");
        input.value = cmd;
        document.body.append(input);
        input.focus();
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);

        alert([
            'Chrome mit folgendem Befehl starten:',
            cmd,
            '',
            'Befehl wurde in Zwischenablage kopiert. Ausführen mit Windows + R'
        ].join('\n'));
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
