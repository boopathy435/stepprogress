import { Component } from '@angular/core';
import { txn } from './model/txn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'progress-bar';

  workflowItems: txn[] = [{
    name: 'raja',
    role: 'ceo',
    status: 'initiated',
    display: true
  },{
    name: 'Pandi',
    role: 'cfo',
    status: 'Resumbitted',
    display: false
  },{
    name: 'Pandi',
    role: 'cfo',
    status: 'Approved',
    display: true
  },{
    name: 'Boopathy',
    role: 'emp',
    status: 'Validated',
    display: true
  },{
    name: 'Sameer',
    role: 'receptionist',
    status: 'Pending',
    display: true
  },
];
}
