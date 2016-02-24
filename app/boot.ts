import { MainWindow }     from './app.components';
import { bootstrap }        from 'angular2/platform/browser';
import { provide } from 'angular2/core';
import { ROUTER_PROVIDERS,
         LocationStrategy,
         HashLocationStrategy } from 'angular2/router';
bootstrap(MainWindow, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy, {useClass: HashLocationStrategy})
]);