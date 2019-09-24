import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {Subscription} from 'rxjs';

export interface NgxDevpavDropdownBoxConfig {
  defaultSearchLine?: string;
  isSearchLine: boolean;
  isMultiple?: boolean;
  labelField: string;
  keyField: string;
  textSearchLine: string;
}

@Component({
  selector: 'ngx-devpav-dropdown-box',
  templateUrl: './ngx-devpav-dropdown-box.component.html',
  styleUrls: ['./ngx-devpav-dropdown-box.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxDevpavDropdownBoxComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  selection: SelectionModel<any>;
  private subscription = new Subscription();

  @Input()
  items: any[];

  @Input()
  selectedItems: any[] = [];

  searchLine: string;

  @Output()
  private changes = new EventEmitter<any[]>();

  constructor() {
  }

  @Input()
  configDropdown: NgxDevpavDropdownBoxConfig = {
    isMultiple: false,
    isSearchLine: false,
    labelField: 'value',
    keyField: 'id',
    textSearchLine: 'Search'
  };

  ngOnInit() {
    this.selection = new SelectionModel<any>(this.configDropdown.isMultiple, this.selectedItems);

    const subscriberChangeSelector = this.selection.changed.subscribe(() => {
      this.changes.emit(this.selection.selected);
    });

    this.subscription.add(subscriberChangeSelector);
  }

  ngAfterViewInit(): void {

  }

  toggleItem(item: any) {
    this.selection.toggle(item);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
