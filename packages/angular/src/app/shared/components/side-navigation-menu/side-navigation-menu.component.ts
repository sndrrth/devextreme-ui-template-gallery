import {
  Component, NgModule, Output, Input, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, ViewChildren, QueryList,
} from '@angular/core';
import { ItemClickEvent } from 'devextreme/ui/tree_view';
import { DxTreeViewModule, DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';
import * as events from 'devextreme/events';
import { navigation } from '../../../app-navigation';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxScrollViewModule } from 'devextreme-angular';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent implements AfterViewInit, OnDestroy {
  @ViewChildren(DxTreeViewComponent)
  menu!: QueryList<DxTreeViewComponent>;

  @Input()
  showToggleMenuButton = false;

  @Output()
  selectedItemChanged = new EventEmitter<ItemClickEvent>();

  @Output()
  openMenu = new EventEmitter<any>();

  @Output()
  toggleMenu = new EventEmitter<any>();

  navigation = navigation;
  barIcon = icon(faBars).html[0]

  @Input()
  set selectedItem(value: String) {
    if (!this.menu?.length) {
      return;
    }

    this.menu?.forEach(menu => {
      menu.instance.unselectAll();
      menu.instance.selectItem(value);
    });
  }

  _compactMode = false;

  @Input()
  get compactMode() {
    return this._compactMode;
  }

  set compactMode(val) {
    this._compactMode = val;
  }

  constructor(private elementRef: ElementRef) { }

  onItemClick(event: ItemClickEvent) {
    this.selectedItemChanged.emit(event);
  }

  ngAfterViewInit() {
    events.on(this.elementRef.nativeElement, 'dxclick', (e: Event) => {
      // this.openMenu.next(e);
    });
  }

  ngOnDestroy() {
    events.off(this.elementRef.nativeElement, 'dxclick');
  }
}

@NgModule({
  imports: [DxTreeViewModule, DxScrollViewModule, CommonModule, DxButtonModule],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent],
})
export class SideNavigationMenuModule { }
