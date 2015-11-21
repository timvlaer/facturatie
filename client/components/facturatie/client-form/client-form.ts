import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {Client} from '../../../domain/Client';

@Component({
  selector: 'client-form',
  templateUrl: './components/facturatie/client-form/client-form.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ClientFormCmp {

  @Input() client:Client;

  /*@Output() saveClient:EventEmitter;
  @Output() removeClient:EventEmitter;
  @Output() cancel:EventEmitter;

  save = function() {
    this.saveClient.next(this.client);
  };

  remove = function() {
    this.removeClient.next(this.client);
  };*/

}
