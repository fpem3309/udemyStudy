// "https://swapi.dev/api/people/1"

const req = new XMLHttpRequest();

// 성공
req.onload = function () {
  console.log("IT LOADED");
  // console.log(this);  // 요청객체
  const data = JSON.parse(this.responseText);
  console.log(data.name, data.height);
}

// 에러
req.onerror = function () {
  console.log("ERROR");
  console.log(this);  // 요청객체
}
req.open("GET", "https://swapi.dev/api/people/1")
req.send()