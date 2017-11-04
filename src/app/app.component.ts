import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = '더조1은 아카데미';
  private valid = false;
  private static CHK_KEYUP_WAIT_SEC = 5000;

  userName: string = '';
  userAge: number;
  userNum: number = 0;

  setName(name) {
    this.userName = name;
  }

  setAge(age){
    this.userAge = age;
  }

  
  ngAfterViewInit() {
    const checkTouchedFn = () => {
      if (this.valid) return;
      alert('5초안에 이름을 입력해주세요.');
    }

    setTimeout(checkTouchedFn, AppComponent.CHK_KEYUP_WAIT_SEC);
  }

  onKeyUp(name){
    this.valid = name.length > 0;
  }

  // tslint:disable-next-line:member-ordering
  userNameList: Array<Object> = ['홍길동', '이길동', '테스트'];
  // userNameList: Array<string> = [
  //   { name : '홍길동', age: 10},
  //   { name : '이길동', age: 20},
  //   { name : '고길동', age: 30},
  // ];

  addUser(): void {
    this.userNameList.push(this.userName);
    // this.userNameList.push({
    //     name : this.userName,
    //     age : this.userAge
    //   });
    console.log(this.userNameList);
  }

  updateUser(): void {
    this.userNameList[this.userNum] = this.userName;
    alert('수정 완료');
  }

  deleteUser(): void{
    var deleteName= this.userNameList[this.userNum];
    alert(deleteName+ "삭제완료");
    this.userNameList.slice();
  }

  

}
