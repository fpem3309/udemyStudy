var Personclass = /** @class */ (function () {
    function Personclass(lastName) {
        if (lastName === void 0) { lastName = 'default'; }
        this.lastName = lastName;
    }
    Personclass.prototype.personFn = function (a) {
        console.log('Hi ' + a + '!!');
    };
    return Personclass;
}());
var man1 = new Personclass('kim');
var man2 = new Personclass('park');
var man3 = new Personclass();
console.log(man1, man2, man3);
man1.personFn('min');
// 문제1  함수사용
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
// 문제2  rest파라미터사용
var Word = /** @class */ (function () {
    function Word() {
        var words = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            words[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        words.forEach(function (i) {
            if (typeof i === 'number') {
                _this.num.push(i);
            }
            else if (typeof i === 'string') {
                _this.str.push(i);
            }
        });
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
