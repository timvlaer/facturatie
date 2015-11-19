import {Component, ViewEncapsulation} from 'angular2/angular2';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../home/home';
import {TodoCmp} from '../todo/todo';
import {FacturatieCmp} from '../facturatie/facturatie';


@Component({
  selector: 'app',
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/todo', component: TodoCmp, as: 'Todo' },
  { path: '/facturatie', component: FacturatieCmp, as: 'Facturatie' }
])
export class AppCmp {}
