import {Injectable} from 'angular2/angular2';

import {Client} from '../domain/Client';

//import {SortedArraySet} from 'collections/sorted-array-set';

@Injectable()
export class ClientService {
  STORAGE_KEY = "clients";

  clients: Client[] = [];
  //clients: SortedArraySet = new SortedArraySet([], (a,b) => a.name == b.name, (a,b) => a.localeCompare(b));
  listeners:Function[] = [];

  constructor() {
    if(localStorage.getItem(this.STORAGE_KEY)) {
      this.clients = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }
  }

  getClients = function() {
    return this.clients;
  };

  createNewClient = function():Client {
    var client = new Client();
    this.clients.push(client);
    return client;
  };

  saveClient = function(client:Client) {
    let existingClient = this.clients.find((c:Client) => c.id == client.id);
    if(!existingClient) {
      this.clients.push(client);
    } else {
      //update client?
    }
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.clients));
  };
}
