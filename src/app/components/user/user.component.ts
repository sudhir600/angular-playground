import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  clr(v){
    return (v) ? 'green' : 'red'
  }
}
