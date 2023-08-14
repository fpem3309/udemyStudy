const cat = {
  name: 'Blue Steel',
  color: 'gray',
  breed: 'scottish fold',
  meow() {
    console.log('This is', this);
    console.log(`${this.name} says MEOWWWW`);  // this로 이 메서드가 정의하는 객체 접근
  }
}

const meow2 = cat.meow; // 여기서 this는 window 객체를 가르킴