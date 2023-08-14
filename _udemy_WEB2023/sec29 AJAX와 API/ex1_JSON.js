const data = `{"ticker":{"base":"BTC", "target":"KRW"}}`;

// JSON을 Javascript 객체로 변환
const parsedData = JSON.parse(data)

// Javascript 객체를 JSON으로 변환
// undefined 값은 모두 null로 변경됨
const stringifiedData = JSON.stringify(parsedData)

