import {Component} from '@angular/core';
import {NgxDevpavThemeService} from '../../projects/devpav-angular/src/lib/ngx-devpav-theme/ngx-devpav-theme.service';

@Component({
  selector: 'devpav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devpav';

  constructor(private themeService: NgxDevpavThemeService) {
    console.log(this.themeService.getListTheme());
    this.themeService.setTheme('dark');
  }

  setDarkTheme() {
    this.themeService.setTheme('dark');
  }

  setLightTheme() {
    this.themeService.setTheme('light');
  }
}
