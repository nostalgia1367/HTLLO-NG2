import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements AfterViewInit {
  title = '더조1은 아카데미';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  userName = '';

  setName(name) {
    this.userName = name;
  }

  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      alert('5초안에 이름을 입력해주세요.');
    }

    setTimeout(checkTouchedFn, WelcomeMsgComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name){
    this.valid = name.length > 0;
  }

  // tslint:disable-next-line:member-ordering
  userNameList: Array<string> = ['홍길동', '이길동', '테스트'];

  addUser(): void {
    this.userNameList.push(this.userName);
    console.log(this.userNameList);
  }

  

}