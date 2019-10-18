import { Component, OnInit } from '@angular/core';
import fetch from 'node-fetch';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styles: []
})
export class ContractComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  contracts: any = ''
  gitUserName: any = 'sudhir600'
  ajax(){
    return fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => {
      console.log(json);
      //return this.contracts = JSON.stringify(json)
      return this.contracts = json
    })
  }
  gitUserDeails(){
    if(!this.gitUserName){
      alert('invalid Git user name')
      return
    }
    return fetch(`https://api.github.com/users/${this.gitUserName}`)
    .then(res => res.json())
    .then(json => {
      console.log(json);
      //return this.contracts = JSON.stringify(json)
      return this.contracts = json
    })
  }
}
