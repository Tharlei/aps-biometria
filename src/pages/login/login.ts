import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string = '';
  public password: string = '';

  constructor(private _navCtrl: NavController, private _navParams: NavParams) {}

  ionViewDidLoad() {
  }

  efetuarLogin() {
    
  }

  openRegister() {
    this._navCtrl.push(RegisterPage);
  }
}
