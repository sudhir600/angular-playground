import { Component } from '@angular/core';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styles: []
})
export class AjaxComponent {
  isToggle = false;
  toggle(){
    if(this.isToggle){
      this.isToggle = false;
    }else{
      this.isToggle = true;
    }
  }
  //return this.isToggle;
}
