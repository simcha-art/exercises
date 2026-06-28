// 1 &2
const createPerson = (name, age) => {
    const person = {
        name,
        age,
        greet:  () => `Hi, I'm ${name}`,
        isAdult: () => age > 18
        }
    
    return person
}

const simcha = createPerson("simcha", 25)
// console.log(simcha.greet())
// console.log(simcha)


// 3

const Moshe = createPerson("Moshe", 24)

Moshe.name = "moshe"
// console.log(Moshe)
// console.log(simcha)

// 5

// console.log(simcha.isAdult())

// 6

const outer = function(){
    count = 0
    const inner = function(){
        count++;
        return count
    }
    return inner
}

// const f1 = outer()
// f1()
// f1()
// f1()
// f1()
// f1()
// console.log(f1())


// 7

const createCounter = () => {
    let count = 0;
    const increment = () => {count++; return count}
    return increment
}

// counter = createCounter()

// console.log(counter())
// console.log(counter())
// console.log(counter())



// 8

const createCounterStartFrom = (start = 0) => {
    let count = start;
    const increment = () => {count++; return count}
    const decrement = () => {count--; return count}
    const getCounter = () => count
    const reset = () => count = 0
    return {increment, decrement, getCounter, reset}
}

newCounter = createCounterStartFrom(10)
// console.log(newCounter.increment())
// console.log(newCounter.increment())
// console.log(newCounter.increment())


// 9

// console.log(newCounter.decrement())
// console.log(newCounter.decrement())
// console.log(newCounter.decrement())


// 10

// console.log(newCounter.getCounter())


// 11
// it is the same like the excesizes above.

// 12

// newCounter.count = 8

// console.log(newCounter.getCounter())//10



// 13

// newCounter.reset()

// console.log(newCounter.getCounter())


// 14

// counter1 = createCounterStartFrom(0)
// counter2 = createCounterStartFrom(0)

// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()
// counter1.increment()

// console.log(counter1.getCounter())
// console.log(counter2.getCounter())


// 15


const createProduct = function(name, price, stock=0){
    if (price < 0) throw new RangeError("price can't be negative")
    const product = {name, price, stock};
    product.isAvailable = () => product.stock > 0;
    return product
}

product1 = createProduct("laptop", 700, 5)


// console.log(product1.isAvailable())

// 17
// Throw RangeError when price is negative 
// product2 = createProduct("cheeze", -9, 4)

// 18

// product3 = createProduct("bread", 8)
// console.log(product3)


// 19

const createMultiplier = (num1) =>{
    return function(num2){
        return num1 * num2
    }
}

// const double = createMultiplier(10)

// console.log(double(10))

// 20

const factoryAddPrefix = (prefix) =>{
    return function(word) {
        return `${prefix}${word}`
    }
}

const sayHello = factoryAddPrefix("Hello ")

// console.log(sayHello("simcha"))
// console.log(sayHello("Moshe"))
// console.log(sayHello("Daniel"))

// 21 & 22 & 23

const secretMessages = function(){
    const secrets = [];
    const addMessage = (message) => secrets.push(message);
    const getMessages = () => [...secrets]
    const deleteByIndex = (index) => secrets.splice(index, 1)
    return {addMessage, getMessages, deleteByIndex}
}

// const secrets = secretMessages()
// secrets.addMessage("Hello simcha")
// secrets.addMessage("I am going")
// console.log(secrets.getMessages())
// secrets.deleteByIndex(0)
// console.log(secrets.getMessages())

// 24

const factoryCreateUser = function(name){
    let counter = 0
    return {
        name, 
        login: function(){counter++; return counter}
    }
}

// user01 = factoryCreateUser("simcha")
// user02 = factoryCreateUser("simcha")
// user02.login()
// user02.login()
// console.log(user02.login())
// console.log(user01.login())

// 25

const factoryRoles = function(){
    const roles = []
    const add = function(role){
        if (!roles.includes(role)){
            roles.push(role)
        }
    }
    const remove = function(role){
        i = roles.indexOf(role)
        roles.splice(i, 1)
    }
    const check = (role) => roles.includes(role)
    
    return {add, remove, check}
}

// myRoles = factoryRoles()

// myRoles.add("Editor")
// myRoles.add("viewer")
// console.log(myRoles.check("Editor"))
// myRoles.remove("viewer")
// console.log(myRoles.check("viewer"))







