
// 1
const lowerName = (name) => name.toLowerCase()

// console.log(lowerName("SIMcha"))

// 2

const cut_spaces = (str) => str.trim()

// console.log(cut_spaces("   Hello World    "))


// 3

const validEmail = (email) => email.includes("@")

// console.log(validEmail("simcha"))
// console.log(validEmail("s@gmail.com"))

// 4

const isCom = (domain) => domain.endsWith(".com")

// console.log(isCom("google.com"))
// console.log(isCom("google.co.il"))


// 5

const onlyFirstName = (str ="") => str.split(" ")[0]

// console.log(onlyFirstName("simcha copperman"))


/////////////////////////////////////////////////////////

// 1

const keysArray = (obj) => Object.keys(obj)

// console.log(keysArray({name: "simcha", age: 24, pass: true}))


// 2

const valuesArray = (obj) => Object.values(obj)

// console.log(valuesArray({name: "simcha", age: 24}))


// 3

const keysAndValues = (obj) => Object.entries(obj)

// console.log(keysAndValues({name: "simcha", age: 25}))



// 4

const grades = { math: 80, english: 99, science: 70 }

const getAvg = (grades) => {
    const values = Object.values(grades);
    const sum = values.reduce((acc, current) => acc + current, 0)
    const avg = sum / values.length
    return avg
}

// console.log(getAvg(grades))

// 5

const user = {name: "Aviv"}

// console.log(Object.assign(user, {age: 25}))

// 6

const default1 = { theme: "light", lang: "en" }

const userConfig = { lang: "he" }

const final = (defaultConfig, userConfig1) => {
    const new1 = defaultConfig;
    Object.assign(new1, userConfig)
    return new1
}

// console.log(final(default1, userConfig))


// 7


const isExistsKey = (obj, key) => Object.hasOwn(obj, key)

// console.log(isExistsKey({name: "simcha", age: 25, pass: true}, "pass"))


// 8

const user4 = {name: "simcha", age: 24}
Object.freeze(user)
// user.name = "Moshe"
// user.wow = true
// delete user.name

// 9

const toObject = (arr) => Object.fromEntries(arr)

const arr16 = [["name", "Alice"], ["age", 25]]

console.log(toObject(arr16))

// 10

const prices = { apple: 10, banana: 5, mango: 20 }

const discount = (obj)=>{
    const list = Object.entries(obj).map((item) => [item[0], item[1] * 0.9]);
    return Object.fromEntries(list)
}

console.log(discount(prices))


// 11

const onlyNumbersFields = (obj) => {
    inList = Object.entries(obj).filter(item => typeof(item[1])==="number");
    return Object.fromEntries(inList)
}

// Object.assign(prices, {name: true})

// console.log(onlyNumbersFields(prices))

// 12


const shallowCopy = (obj) => {return {...obj}}

const newPrices = shallowCopy(prices)

newPrices.babanan = 80

// console.log(prices)
// console.log(newPrices)


// 13

const isEqualKeys = (obj1, obj2) => {
    keys1 = Object.keys(obj1)
    keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) return false
    for (const key of keys1){
        if (!keys2.includes(key)) return false
    }
    return true
    
}

// console.log(isEqualKeys(prices, newPrices))`