fetch("https://swapi.dev/api/people/1")
  .then(res => {
    console.log("RESOLVED!", res) // ReadableStream, 본문 데이터가 표시되지 않음 - Fetch가 헤더를 수신하는 즉시 프로미스가 resolve됨
    return res.json();  // res.json호출, promise반환
  })
  .then(data => {
    console.log("JSON DONE", data)
    return fetch("https://swapi.dev/api/people/2")
  })
  .then(res => {
    console.log("SECOND REQUEST RESOLVED!!")
    return res.json()
  })
  .then(data => {
    console.log("JSON DONE", data)
  })
  .catch(e => {
    console.log("ERROR", e)
  })


// 비동기함수 fetch
const loadStarWarsPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/people/115324")
    const data = await res.json();
    console.log(data);

    const res2 = await fetch("https://swapi.dev/api/people/2")
    const data2 = await res2.json();
    console.log(data2);
  } catch (e) {
    console.log("ERROR!", e);
  }
}
loadStarWarsPeople()