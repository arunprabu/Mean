import { enableProdMode } from '@angular/core';   // angular modules 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // find out what is app module 
import { environment } from './environments/environment';  // either dev or production

if (environment.production) {
  enableProdMode();
}

//kickstarting angular app with a module - AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
