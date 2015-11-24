import {Injectable} from 'angular2/angular2';

import {Client} from '../domain/Client';

@Injectable()
export class ClientService {
  STORAGE_KEY = "clients";

  clients: Client[] = [];
  listeners:Function[] = [];

  constructor() {
   this._load();
  }

  getClients = function() {
    return this.clients;
  };

  createNewClient = function():Client {
    var client = new Client();
    client.name = " ";
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
    this._store();
  };

  removeClient = function(client:Client) {
    this.clients = this.clients.splice(this.clients.indexOf(client), 1);
    this._store();
  };

  rollbackClient = function(client:Client) {
     this._load();
  };

  _store = function () {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.clients));
  };

  _load = function () {
    if (localStorage.getItem(this.STORAGE_KEY)) {
      this.clients = JSON.parse(localStorage.getItem(this.STORAGE_KEY)) || [];
    }
  };
}
