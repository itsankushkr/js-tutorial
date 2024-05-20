let age = "27"
console.log(typeof age)
let numAge = Number(age)
console.log(numAge)
console.log(typeof numAge) 

age = "27M"
numAge = Number(age)
console.log(numAge) //NaN
console.log(typeof numAge) //number

let isMarried = true
let isMarriedBooleanNum = Number(isMarried)
console.log(isMarriedBooleanNum) //1

let emptyString = ""
let boolValue = Boolean(emptyString)
console.log(boolValue);

let notEmptyString = "Test"
let boolValueA = Boolean(notEmptyString)
console.log(boolValueA);

let nullVar = null
let nullVarNumericValue = Number(nullVar)
console.log(nullVarNumericValue) //0
console.log(typeof NaN) //number

let undefinedVar
let undefinedNumeric = Number(undefinedVar)
console.log(undefinedNumeric) //NaN
console.log(typeof undefinedNumeric) //number