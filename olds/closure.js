// 1

const createLogger = function () {
  const message = "Hello";
  return () => console.log(message);
};

// logger = createLogger()

// logger()
// logger()
// logger()

const createGreeting = (name) => {
  return function () {
    console.log("Hello", name);
  };
};

// const greet = createGreeting("simcha")

// greet()
// greet()
// greet()
// greet()


// 3
const createCounter = () => {
  let counter = 0;
  const increment = function () {
    counter++;
    return counter;
  };
  return increment;
};

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());


// 4

// function outer() {
//   let x = 10;
//   return function () {
//     console.log(x);
//   };
// }

// const fn = outer();
// fn(); //10


// 5

const createMultiplier = (x) => {
    const mult = (number) => number * x;
    return mult
}

const double = createMultiplier(2)

// console.log(double(5))


// 6

const createAdder = (a) => {
    const add = (b) => a + b;
    return add
}

// const add = createAdder(5)

// console.log(add(3))


// 7

const createSecret = (secret) =>{
    let mySecret = secret;
    const getSecret = () => mySecret
    const setSecret = (newSecret) => {
        mySecret = newSecret
    } 
    return {getSecret, setSecret}
}


// let mySecret = createSecret("123456")

// mySecret.setSecret("657")
// console.log(mySecret.getSecret())


// 8

const once = (fn) =>{ 
    let flag = true
    const run = function() {
        if (flag){
            fn();
            flag = false
        }
    };
    return run
}

// const onceRun = once(()=>console.log(7))

// onceRun()
// onceRun()


// 12

const createStack = () => {
    const stack = [];
    const push = (val) => {
        stack.push(val);
    }
    const pop = () => stack.pop();
    const peek = () => stack.at(-1);
    return {push, pop, peek};
}

// const myStack = createStack()

// myStack.push(7)
// console.log(myStack.peek())
// console.log(myStack.pop())


// 13

const createIDGenerator = () =>{
    let id = 0
    const increment = function(){
        id++
        return id
    }
    return increment
}

// gen = createIDGenerator()
// console.log(gen())
// console.log(gen())
// console.log(gen())
// console.log(gen())



// 15
const createBankAccount = function(initialBalance){
    let balance = initialBalance;
    const deposit = (amount) => {if (amount > 0) balance += amount};
    const withdraw = (amount) =>{if (amount > 0) balance -= amount};
    const getBalance = () => balance;
    return {deposit, withdraw, getBalance}
}

// myAccount = createBankAccount(1000)
// myAccount.deposit(500)
// myAccount.withdraw(200)
// console.log(myAccount.getBalance())
