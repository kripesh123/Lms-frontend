import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoginService } from 'app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private model = {'username': ' ', 'password': ' '};
  private currentUserName: any;

  constructor(private loginService: LoginService) {
    this.currentUserName = localStorage.getItem('currentUserName');
  }

  ngOnInit() {  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                localStorage.setItem( 'token' , JSON.parse(JSON.stringify(data))._body);
                localStorage.setItem( 'currentUserName' , this.model.username);
              },
      error => alert(JSON.parse(JSON.parse(JSON.stringify(error))._body).message)
    );
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }
}
