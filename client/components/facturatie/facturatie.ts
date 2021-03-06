import {Component, CORE_DIRECTIVES} from 'angular2/angular2';

import {Client} from '../../domain/Client';

import {ClientService} from '../../services/ClientService'

import {ClientListCmp} from '../facturatie/client-list/client-list';
import {ClientFormCmp} from '../facturatie/client-form/client-form';
import {DocumentCmp} from '../facturatie/document/document';

@Component({
  selector: 'facturatie',
  templateUrl: './components/facturatie/facturatie.html',
  styleUrls: ['./components/facturatie/facturatie.css'],
  directives: [ClientListCmp, DocumentCmp, ClientFormCmp, CORE_DIRECTIVES]
})
export class FacturatieCmp {

  clientEditMode:boolean = false;

  selectedClient:Client;

  clientService:ClientService;

  constructor(clientService:ClientService) {
    this.clientService = clientService;
  }

  selectClient = function(client:Client) {
    this.selectedClient = client;
  };

  createNewClient = function () {
    this.selectedClient = this.clientService.createNewClient();
    this.clientEditMode = true;
  };

  editSelectedClient = function () {
    this.clientEditMode = true;
  };

  clientEditingDone = function (client:Client) {
    this.clientEditMode = false;
  };

}
