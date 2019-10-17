import { Component } from '@angular/core';
import common from '../../lib/common'

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styles: []
})
export class TicketComponent {
	title: string = "some String goes here";
  token: any = common.token;
  names = ['momah', 'roochit', 'kumar', 'shayam'];
  selectedValue: string= 'One';
  items = [
            {name: 'One', val: 1},
            {name: 'Two', val: 2},
            {name: 'Three', val: 3}
          ];
  alertMe(){
    alert(1)
  }
}
