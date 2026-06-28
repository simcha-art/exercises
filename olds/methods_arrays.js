// const arr = [1,2,3,4,5,6,8,3,4]

// const id = 3

// // const findById = (id, arr) => {
// //     let index;
// //     for (let i = 0; i < arr.length; i++){
// //         if (arr[i] === id) {
// //             return i; 
// //         }
// //     }
// // }

// // const index = findById(3, arr)

// // console.log(index)

// // arr.findById = function(id) {
// //     let index;
// //     for (let i = 0; i < this.length; i++){
// //         if (this[i] === id) {
// //             return i; 
// //         }
// //     }
// // }

// // const index = arr.findById(3)

// // console.log("id:", index)

// // const list = []

// // list.name = "simcha"
// // list.push(4)
// // list.push(3)
// // console.log(arr[arr.length])


// const proto = {
//     findById: function(id) {
//     let index;
//     for (let i = 0; i < this.length; i++){
//         if (this[i] === id) {
//             return i; 
//         }
//     }
// }
// }


// Object.setPrototypeOf(arr, proto)

// console.log(arr.findById(3))

// Array.prototype.findById = function(id) {
//     let index;
//     for (let i = 0; i < this.length; i++){
//         if (this[i] === id) {
//             return i; 
//         }
//     }
// }

// const arr1 = [1, 2, 3, 4, 5]

// console.log(arr1.findById(5))
// console.log(arr1)


const a = {name: "a", fn: function(){console.log(this.name)}}

const b = {name: "b", fn: a.fn}

b.fn()

const arr1 = [1,2,3,4]

console.log(arr1.findIndex((val)=> val ** 2 ))

Array.prototype.remove = function(val){
    for (let i = 0; i < this.length; i++){
        if (this[i] === val){
            this.splice(i, 1);
            return true
        }
    }
    return false
}

arr1.remove(2)

console.log(arr1)

arr1.forEach((number, index) => arr1[index] = number ** 2)


const arr2 = arr1.map((num, index) => arr1[index] = num ** 2)

console.log(arr1)
console.log(arr2)


const total = arr2.reduce((acc, current) => acc + current, 0)

console.log(total)

const list = [1,2,3,4,5,6,7,8]

const evens = list.filter(num => num % 2 === 0)

console.log(evens)

console.log(list.some(num => num < 4))
console.log(list.every(num => num < 4))


// arr1.find(item => item.id == 8)

console.log(list.indexOf(3))

const newArr = arr1.concat(arr2)

arr1.push(...arr2)


let list_obj = [{price: 14}, {price: 2}, {price: 6}]
console.log(list_obj.reverse())
console.log(list_obj.sort((a, b) => a.price - b.price))
// console.log(list_obj)

/////////////////////////////////////////////////////////////////////
//////////////////objects/////////////////////////////////////////////

const av = {name: "simcha"}

const bv = {age: 35}


const c = {...av, ...bv, password: "1234"}

Object.assign(av, bv)
console.log(av)

// console.log(d)
