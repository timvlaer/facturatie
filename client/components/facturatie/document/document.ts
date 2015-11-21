import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

import {Client} from '../../../domain/Client';

@Component({
  selector: 'document',
  templateUrl: './components/facturatie/document/document.html',
  directives: [CORE_DIRECTIVES]
})
export class DocumentCmp {

  @Input() client:Client;
  //@Input() document = { lines: [] };

}
