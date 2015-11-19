import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {ClientListCmp} from '../facturatie/client-list/client-list';
import {DocumentCmp} from '../facturatie/document/document';

@Component({
  selector: 'facturatie',
  templateUrl: './components/facturatie/facturatie.html',
  styleUrls: ['./components/facturatie/facturatie.css'],
  directives: [ClientListCmp, DocumentCmp, CORE_DIRECTIVES]
})
export class FacturatieCmp {

  selectedClient = null;

  selectClient = function(client) {
    this.selectedClient = client;
  }

}
