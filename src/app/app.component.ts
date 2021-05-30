import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './../assets/css/w3.css', './../assets/css/font-awesome-4.7.0/css/font-awesome.min.css']
})
export class AppComponent {
  
  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['Deutsch', 'Русский']);
    translate.setDefaultLang('Deutsch');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/Deutsch|Русский/) ? browserLang : 'Deutsch');
  }

  navigate(ort) {
    this.router.navigate([ort]);
  }
  
}
