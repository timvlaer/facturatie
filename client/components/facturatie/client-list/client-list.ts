import {Component, Output, CORE_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {RouterLink} from 'angular2/router';

@Component({
  selector: 'client-list',
  templateUrl: './components/facturatie/client-list/client-list.html',
  directives: [CORE_DIRECTIVES, RouterLink]
})
export class ClientListCmp {

  @Output() select:EventEmitter = new EventEmitter();

  clients = [
    {id: 1, name: 'Van Laer'},
    {id: 2, name: 'Coca-cola'},
    {id: 3, name: 'Arag Verzekeringen'},
    {id: 4, name: 'Smekens'},
    {id: 5, name: 'Janssens'},
    {id: 6, name: 'Broeckx'},
    {id: 7, name: 'Google'}
  ];

  selectedClient = null;

  filteredClientList = this.clients;

  selectClient = function(client) {
    this.selectedClient = client;
    if(client) {
      this.select.next(client);
    }
  };

  filterClient = function(event:KeyboardEvent) {
    if(event && event.target && event.target.value) {
      let filterValue = event.target.value.toLowerCase();
      this.filteredClientList = this.clients.filter(client => client.name.toLowerCase().indexOf(filterValue) >= 0);
      if(this.filteredClientList.length == 1) {
        this.selectClient(this.filteredClientList[0]);
      }
    } else {
      this.filteredClientList = this.clients;
    }
  }

}
