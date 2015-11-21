import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppCmp} from './components/app/app';

import {ClientService} from './services/ClientService'

bootstrap(AppCmp, [
  ROUTER_PROVIDERS, HTTP_PROVIDERS, ClientService
]);
