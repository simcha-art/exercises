const arr = [1,2,3,4,5]

const newArr = arr.map(num => num * 2)

// console.log(newArr)


// 2

const words = ["hello", "world"]

words.map((word, index) => words[index] = word.toUpperCase())

// console.log(words)

// 3

const prices = [20, 18, 50, 28]

prices.map((price, index) => prices[index] = price * 1.17)

// console.log(prices)

// 4

// const all = [1, 2, 3, 4, 5, 6]

// const evens = all.filter(item => item % 2 === 0)

// console.log(evens)

// 5

const all = ["hi", "hello", "cat", "javascript"]

const longerThenThree = all.filter(word => word.length > 3)

// console.log(longerThenThree)

// 6

const users = [{ name: "Avi", age: 17 }, { name: "Dana", age: 22 }]

const allowed = users.filter(user => user.age >= 18)

// console.log(allowed)

// 7

const names = users.map(user => user.name)

// console.log(names)


// 8

const prices1 = [120, 30, 89, 789]

const newPrices = prices1.filter(price => price >= 100).map(price => price * 1.1)

// console.log(newPrices)

// 10

const nums = [1, 2, 3, 4]
const total = nums.reduce((acc, current) => acc * current, 1)



// console.log(total)

// 12

const avgAge = users.reduce((acc, current) => acc + current.age, 0) / users.length

// console.log(avgAge)


// 25

const numbersssss = [2, 5, 7, 3, 5, 6, 1]

numbersssss.sort((a, b) => b - a)

// console.log(numbersssss)


// 29

numbersssss.splice(1, 2)

// console.log(numbersssss)


// 32

const mat = [[1,2,3],[1,2,3],[1,2,3]]

// const arrrrr = mat.flat(1)

// console.log(arrrrr)


// 36

const arrNums = [1,2,3,4,5,6,7,8,9]

let total1 = arrNums.filter(num => num % 2 === 0).map(num => num * 2).reduce((acc, current) => acc + current, 0);

// console.log(total1)


// 38

const input1 = [{ type: "fruit" }, { type: "veg" }, { type: "fruit" }]

const output = input1.reduce((acc, current) => Object.assign(acc, {[current.type]: input1.reduce((acc, current1) => acc + Boolean(current.type === current1.type), 0)}), {})

console.log(output)


// 39

const listi = [1, 2, 3, 4, 4, 5]

// const checkDubble = (listi) =>{
//     const seen = {};
//     for (const item of listi){ 
//         if(seen[item]) return true;
//         seen[item] = true
//     }
//     return false
// }

const checkDubble = (listi) =>{
    for (let i = 0; i < listi.length; i++){
        if (listi.includes(listi[i], i+1)) return true;
    }
    return false
}


console.log(checkDubble(listi))

// 41

const products = [
  { name: "Laptop", price: 800, inStock: true,  category: "tech"    },
  { name: "Phone",  price: 400, inStock: false, category: "tech"    },
  { name: "Shirt",  price: 50,  inStock: true,  category: "fashion" },
  { name: "Headphones", price: 150, inStock: true,  category: "tech" },
  { name: "Coffee Maker", price: 85,  inStock: true,  category: "home" },
  { name: "Running Shoes", price: 120, inStock: true,  category: "fashion" },
  { name: "Desk Lamp",    price: 30,  inStock: false, category: "home" },
  { name: "Keyboard",    price: 60,  inStock: true,  category: "tech" },
  { name: "Jeans",       price: 45,  inStock: true,  category: "fashion" },
  { name: "Blender",     price: 110, inStock: false, category: "home" },
  { name: "Monitor",     price: 250, inStock: true,  category: "tech" },
  { name: "Winter Coat", price: 200, inStock: true,  category: "fashion" },
  { name: "Backpack",    price: 40,  inStock: false, category: "fashion" }
];


const strProducts = products.filter(product => product.inStock && product.price > 100).sort((a, b) => a.price - b.price).map(prod => prod.name).toString()

console.log(strProducts)