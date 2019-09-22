import {Component} from '@angular/core';
import {DevpavAngularThemeService} from '../../projects/devpav-angular/src/lib/devpav-angular.service';

@Component({
  selector: 'devpav-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devpav';

  constructor(private themeService: DevpavAngularThemeService) {
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
