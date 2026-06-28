// // import {add} from "./exporting.js"
// // import {sayHello} from "./exporting.js"
// // import {user} from "./exporting.js"
// // import {add, mult} from "./exporting.js"
// // import {add, mult, sub} from "./exporting.js"
// // import {isEven} from "./exporting.js"
// // import {createUser} from "./exporting.js"
// // import {numbers} from "./exporting.js"
// import {square} from "./advancedMath.js"

// const { createCar } = require("./exporting");

// // console.log(add(4, 5))

// // console.log(sayHello("Moshe"))


// // console.log(user.name, user.age)


// // console.log(add(3, 5))
// // console.log(sub(3, 5))




// // console.log(isEven(5))
// // console.log(isEven(6))
// // console.log(isEven(56))
// // console.log(isEven(65))


// // const user1 = createUser("simcha")
// // console.log(user1.sayHello())


// // let total = numbers.reduce((acc, current) => acc + current, 0)
// // console.log(total)


// // console.log(square(5))

// const shlomo = require("./exporting.js")

// import makeCar, {simcha} from "./exporting.js"

// const myCar = shlomo.createCar("Honda", 300, 2026)
const myCar = makeCar("Honda", 300, 2026)

console.log(myCar)

console.log(simcha)

