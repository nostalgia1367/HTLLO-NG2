import { Component, AfterViewInit } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';


@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent {
  title = '더조1은 아카데미';
  welcomeMsg = '';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000000;

  userName = '';

  constructor(public i18nSupporter: I18nSupportService ) { }

  // setName(name) {
  //   this.userName = name;
  // }
  // ngAfterViewInit() {
  //   consconst checkTouchedFn = () => {
  //     if (this.valid) return;
  //     alert('5000초안에 이름을 입력해주세요.');
  //   }
  //   setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  // }
  // onKeyUp(name){
  //   this.valid = name.length > 0;
  // }

  onChange() {
    this.valid = this.userName.length > 0;
  }
  
  showWelcomeMsg() {
    //this.welcomeMsg = this.i18nSupporter.getWelcomeMsgByCode(this.userName, 'ko');
    this.welcomeMsg = this.i18nSupporter.getWelcomeMsg(this.userName);
  }

  userNameList: Array<string> = ['홍길동', '이길동', '테스트'];

  addUser(): void {
    this.userNameList.push(this.userName);
    console.log(this.userNameList);
  }
}