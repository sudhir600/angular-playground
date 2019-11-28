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
  names = ['momah', 'roochit', 'kumar', 'shayam', 'parasad'];
  selectedValue: string= 'Two';
  items = [
            {name: 'One', val: 1},
            {name: 'Two', val: 2},
            {name: 'Three', val: 3}
          ];
  alertMe(a:number, b:number){
    alert(a+b)
  }
}
