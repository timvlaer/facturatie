import {Component, Input, Output, EventEmitter, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {Client} from '../../../domain/Client';

import {ClientService} from '../../../services/ClientService'

@Component({
  selector: 'client-form',
  templateUrl: './components/facturatie/client-form/client-form.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class ClientFormCmp {

  @Input() client:Client;

  clientService:ClientService;

  @Output() saveClient = new EventEmitter();
  /*@Output() removeClient:EventEmitter;
  @Output() cancel:EventEmitter; */

  constructor(clientService:ClientService) {
    this.clientService = clientService;
  }

  save = function() {
    this.clientService.saveClient(this.client);
    this.saveClient.next(this.client);
  };

  cancel = function() {

  };

  remove = function() {
    this.removeClient.next(this.client);
  };



}
