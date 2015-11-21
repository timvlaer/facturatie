import {Component, Input, Output, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

import {Client} from '../../../domain/Client';

import {ClientService} from '../../../services/ClientService'

@Component({
  selector: 'client-list',
  templateUrl: './components/facturatie/client-list/client-list.html',
  styleUrls: ['./components/facturatie/client-list/client-list.css'],
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class ClientListCmp {
  @Output() select:EventEmitter = new EventEmitter();

  clients:Client[] = [];
  filteredClientList:Client[] = this.clients;

  selectedClient:Client = null;

  constructor(clientService:ClientService) {
    this.clients = clientService.getClients();
    //clientService.subscribe((clients:Client[]) => this.clients = clients);
  }

  selectClient = function(client:Client) {
    this.selectedClient = client;
    if(client) {
      this.select.next(client);
    }
  };

  filterClient = function(event:any) {
    if(event && event.target && event.target.value) {
      let filterValue = event.target.value.toLowerCase();
      this.filteredClientList = this.clients.filter((client:Client) => client.name && client.name.toLowerCase().indexOf(filterValue) >= 0);
      if(this.filteredClientList.length == 1) {
        this.selectClient(this.filteredClientList[0]);
      }
    } else {
      this.filteredClientList = this.clients;
    }
  }

}
