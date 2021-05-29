import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['de', 'ru']);
    translate.setDefaultLang('de');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/de|ru/) ? browserLang : 'de');
  }
  
}
