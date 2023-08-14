const person = {
  firstName: 'John',
  lastName: 'denver',
  fullName() {
    return `${this.firstName} ${this.lastName}`;  // John denver
  },
  fullNameArrow: () => {
    // 화살표함수 안의 this는 함수가 만든 범위를 가르킴 (Window)
    return `${this.firstName} ${this.lastName}`;  // undefined undefined
  },

  shoutName: function () {
    setTimeout(function () {
      console.log(this) // Window객체를 출력
      console.log(this.fullName())  // fullName()이 함수아니라는 오류
    }, 2000);
  },
  shoutNameArrow: function () {
    // 화살표함수 안의 this는 함수가 만든 범위에 상속되는 this 키워드 값과 같다
    setTimeout(()=> {
      console.log(this) // Window객체를 출력
      console.log(this.fullName())  // fullName()이 함수아니라는 오류
    }, 2000);
  }
  
}