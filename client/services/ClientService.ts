import {Injectable} from 'angular2/angular2';

import {Client} from '../domain/Client';

@Injectable()
export class ClientService {
  clients: Client[] = [];
  listeners:Function[] = [];

  constructor() {
    //this.clients = [
    //  new Client(1, 'Van Laer'),
    //  new Client(2, 'Van Laer'),
    //  new Client(3, 'Van Laer'),
    //  new Client(4, 'Van Laer'),
    //  new Client(5, 'Van Laer')
    //];
  }

  getClients = function() {
    return this.clients;
  };

  //subscribe = function (listener:Function) {
  //  this.listeners.push(listener);
  //};
  //
  //notify = function () {
  //  this.listeners.forEach((l:Function) => l.call(this.clients));
  //};

  createNewClient = function():Client {
    let client = new Client();
    this.clients.push(client);
    //this.notify();
    return client;
  }
}
