import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NgModule} from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userModel = new User('','12-5-11,BK Residency,FlatNo 401','Hyderabad','TS','500017')

  onSubmit(){
    console.log(this.userModel);
  }

  ngOnInit(): void {
  }

}
