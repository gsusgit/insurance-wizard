import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public userData: any = {
    name: '',
    lastname1: '',
    lastname2: '',
    email: '',
    phone1: '',
    phone2: '',
    company: '',
    type: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('seguros_user_data')) {
      // @ts-ignore
      this.userData = JSON.parse(localStorage.getItem('seguros_user_data'));
    }
  }

  public sendData() {
    // TODO send data to API
    this.router.navigate(['/send']);
  }

}
