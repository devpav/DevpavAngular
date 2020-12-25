import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'ngx-devpav-loader-container',
  templateUrl: './ngx-devpav-loader-container.component.html',
  styleUrls: ['./ngx-devpav-loader-container.component.scss']
})
export class NgxDevpavLoaderContainerComponent implements OnInit, OnChanges {

  @Input()
  ngObj: any;

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.ngObj && !changes.ngObj.currentValue) {
      this.spinner.show('ngxLoaderContainer', );
    } else {
      this.spinner.hide('ngxLoaderContainer');
    }
  }

}
