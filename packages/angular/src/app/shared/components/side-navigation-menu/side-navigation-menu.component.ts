import {
  Component, NgModule, Output, Input, EventEmitter, ViewChildren, QueryList,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ItemClickEvent } from 'devextreme/ui/tree_view';
import { DxTreeViewComponent } from 'devextreme-angular/ui/tree-view';
import { navigation } from '../../../app-navigation';
import { CommonModule } from '@angular/common';
import { DxScrollViewModule } from 'devextreme-angular';
import { faBars } from '@fortawesome/pro-light-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-side-navigation-menu',
  templateUrl: './side-navigation-menu.component.html',
  styleUrls: ['./side-navigation-menu.component.scss'],
})
export class SideNavigationMenuComponent {
  @ViewChildren(DxTreeViewComponent)
  menu!: QueryList<DxTreeViewComponent>;

  @Output()
  selectedItemChanged = new EventEmitter<ItemClickEvent>();

  @Output()
  openMenu = new EventEmitter<any>();

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

  constructor(private sanitizer: DomSanitizer) { }

  svg(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}

@NgModule({
  imports: [DxScrollViewModule, CommonModule, RouterModule],
  declarations: [SideNavigationMenuComponent],
  exports: [SideNavigationMenuComponent],
})
export class SideNavigationMenuModule { }
