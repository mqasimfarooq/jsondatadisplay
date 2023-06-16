import { Component } from '@angular/core';
import { CreateservService } from './createserv.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  username: string = '';
  password: string = '';
  loginResult: string = '';

  login() {

    if (this.username === "qasim", this.password === "warrior") {
      this.loginResult = "Correct details";
    } else {
      this.loginResult = "Incorrect details";

    }
  }
  data1: any = [];

  constructor(private appservice: CreateservService) {

  }

  ngOnInit() {
    this.data1 = this.appservice.getdata();
  }
}
    
  



