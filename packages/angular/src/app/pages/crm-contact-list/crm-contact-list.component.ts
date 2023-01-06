import {
  Component, ViewChild, OnInit, NgModule, OnDestroy,
} from '@angular/core';
import {
  DxButtonModule,
  DxDataGridModule,
  DxDataGridComponent,
  DxDropDownButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxTabsModule,
  DxToolbarModule,
  DxSpeedDialActionModule,
} from 'devextreme-angular';
import { RowClickEvent, RowPreparedEvent, ColumnCustomizeTextArg } from 'devextreme/ui/data_grid';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { exportDataGrid as exportDataGridToXLSX } from 'devextreme/excel_exporter';
import {
  CardActivitiesModule,
  ContactStatusModule,
} from 'src/app/shared/components';
import { Contact, contactStatusList, ContactStatus } from 'src/app/shared/types/contact';
import { CommonModule } from '@angular/common';
import { RwaService } from 'src/app/shared/services';
import { Subscription } from 'rxjs';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver-es';
import { jsPDF } from 'jspdf';
import { UserPanelModule } from './user-panel/user-panel.component';
import { ItemClickEvent as TabsItemClickEvent } from 'devextreme/ui/tabs';
import { InputEvent as TextBoxInputEvent } from 'devextreme/ui/text_box';
import { KpiCardModule } from 'src/app/shared/components/kpi-card/kpi-card.component';
import { KpiCardListModule } from 'src/app/shared/components/kpi-card-list/kpi-card-list.component';
import { Contract, contractStatusList } from 'src/app/shared/types/contract';
import { ContractStatusModule } from 'src/app/shared/components/contract-status/contract-status.component';
import { faPlus, } from '@fortawesome/pro-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

type FilterContactStatus = ContactStatus | 'All';

@Component({
  templateUrl: './crm-contact-list.component.html',
  styleUrls: ['./crm-contact-list.component.scss'],
  providers: [RwaService],
})
export class CrmContactListComponent implements OnInit, OnDestroy {
  @ViewChild(DxDataGridComponent, { static: true }) dataGrid: DxDataGridComponent;

  statusList = contactStatusList;

  filterTabs = ['All', ...contractStatusList].map((item, idx, list) => ({
    text: item,
    badge: 0
  }));

  isPanelOpen = false;

  userId: number;

  dataSource: Contract[];

  dataSubscription: Subscription = new Subscription();

  plusIcon = icon(faPlus).html[0];

  constructor(private service: RwaService) {
  }

  chooseColumnDataGrid = () => this.dataGrid.instance.showColumnChooser();
  searchDataGrid = (e: TextBoxInputEvent) => this.dataGrid.instance.searchByText(e.component.option('text'));

  ngOnInit(): void {
    this.dataSubscription = this.service.getContracts().subscribe((data) => {
      this.dataSource = data;
      this.filterTabs.forEach(tab => {
        tab.badge = tab.text === 'All' ? data.length : data.filter(item => item.status === tab.text).length
      });
    });
  }

  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }

  addRow = () => {
    this.dataGrid.instance.addRow();
  };

  refresh = () => {
    this.dataGrid.instance.refresh();
  };

  rowClick(e: RowClickEvent) {
    const { data } = e;

    this.service.getContacts().subscribe(contacts => {
      const randomContact = contacts[Math.floor(Math.random()*contacts.length)];
      this.userId = randomContact.id;
      this.isPanelOpen = true;
    })
  }

  onStatusTabChange(item: TabsItemClickEvent) {
    const status = item.itemData!.text;

    if (status === 'All') {
      this.dataGrid.instance.clearFilter();
    } else {
      this.dataGrid.instance.filter(['status', '=', status]);
    }
  }

  rowPrepared = (e: RowPreparedEvent) => {
    const { rowElement } = e;

    rowElement.classList.add('clickable-row');
  };

  formatPhone = (number: string | number): string => String(number).replace(/(\d{3})(\d{3})(\d{4})/, '+1($1)$2-$3');

  customizePhoneCell = (cellInfo: ColumnCustomizeTextArg) => {
    const { value } = cellInfo;

    if (!value) {
      return undefined;
    }

    return this.formatPhone(value.toString());
  };

  onExportAsPdf = () => {
    const doc = new jsPDF();
    exportDataGridToPdf({
      jsPDFDocument: doc,
      component: this.dataGrid.instance,
    }).then(() => {
      doc.save('Contacts.pdf');
    });
  }

  onExportAsExcel = () => {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Contacts');

    exportDataGridToXLSX({
      component: this.dataGrid.instance,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Contacts.xlsx');
      });
    });
  }
}

@NgModule({
  imports: [
    DxButtonModule,
    DxDataGridModule,
    DxDropDownButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxTabsModule,
    DxToolbarModule,
    DxSpeedDialActionModule,
    
    UserPanelModule,

    CardActivitiesModule,
    ContactStatusModule,
    ContractStatusModule,
    KpiCardListModule,
    KpiCardModule,
    CommonModule,
  ],
  providers: [],
  exports: [],
  declarations: [CrmContactListComponent],
})
export class CrmContactListModule { }
