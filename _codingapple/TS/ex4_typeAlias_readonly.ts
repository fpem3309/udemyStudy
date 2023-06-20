// type alias

type AnimalType = { name: string, age: number, gender: string | undefined };

let ani: AnimalType = { name: 'kim', age: 10, gender: undefined };


// object readonly (ts에서만 에디터에러)

type FriendType = { readonly name: string }
const friend: FriendType = { name: 'park' }


// 타입 extend1

type Name = string;
type Age = number;
type Person = Name | Age;


// 타입 extend2

type PositionX = { x: number };
type PositionY = { y: number };
type Position = PositionX & PositionY

let Position: Position = { x: 10, y: 1 }


// 

type TestType = { color?: string, size: number, readonly position: number[] }
let test: TestType = { size: 10, position: [1, 2] }


type UserType = { name: string, email?: string, phone: number }
type AdultType = { adult: boolean }
type User = UserType & AdultType