import {Component, Input, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({
  selector: 'document',
  templateUrl: './components/facturatie/document/document.html',
  directives: [CORE_DIRECTIVES]
})
export class DocumentCmp {

  @Input() client;

}
