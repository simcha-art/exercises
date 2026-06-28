// 1


// export function add(a, b){
//     return a + b
// }

// 2

// export function sayHello(name){
//     return `Hello ${name}`
// }

// 3

// export const user = {name: "simcha", age: 25}

// 4

// export const add = (a, b) => a + b
// export const mult = (a, b) => a * b

// 5

// export const add = (a, b) => a + b
// export const sub = (a, b) => a - b
// export const mult = (a, b) => a * b

// 6

// export const isEven = num => num % 2 === 0

// 7

// export const createUser = function(name){
//     return {name, sayHello: function() {return `Hello ${this.name}`}}
// }

// 8

// export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// 9

// another files

// 10

// const logger = function(level, message){
//     const now = new Date()
//     const timestamp = `${now.getUTCDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`
//     console.log(`${timestamp} | ${level} | ${message}`)

// }

// export default logger

const sum = (a, b) => a + b;
const greet = (name) => console.log("Hello", name);
const PI = Math.PI;
const mult = (...rest) => rest.reduce((acc, current) => acc * current, 1);
const createUser = function(name){
    const user = {name};
    const proto = {greet: function() {console.log("Hello", this.name)}}
    Object.setPrototypeOf(user, proto);
    return user
}

export const simcha = createUser("simcha")


const createCar = function(type, speed, year){
    const car = {
        type, 
        speed, 
        year,
    };
    const proto = {drive: ()=> console.log("start driving...")}
    Object.setPrototypeOf(car, proto);
    return car
}



export default createCar




// module.exports = { sum, greet, PI, mult, simcha, createCar };
















// const createUser = (name) => {
//     const proto = {getName: function(){
//         return this.name
//     }}
//     const user = {name};
//     Object.setPrototypeOf(user, proto)
//     return user;
// };

// const me = createUser("simcha");
// console.log(me.getName())
// console.log(me);
