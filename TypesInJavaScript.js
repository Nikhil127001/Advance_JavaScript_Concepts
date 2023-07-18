var a = 5;
var b = a;

b++;

let obj = {a: 'a', b: 'b', c: 'c'};
// let clone = obj; // call by referance
let clone = Object.assign({}, obj);
//or
let clone2 = {...obj};

obj.c = 5;
console.log(clone)
console.log(clone2)


let obj2 = {a: 'a', b: 'b', c: {
    deep: 'try and copy'
}};
// let clone = obj; // call by referance

// The Object.assign() method creates a new object by copying the properties from obj to an empty object. This approach is suitable for shallow copying, which means that only the top-level properties are copied, while nested objects are still referenced.

let clone3 = Object.assign({}, obj2);
//or

// The spread syntax also creates a new object with the properties of obj. Similar to Object.assign(), this method performs shallow copying.
let clone4 = {...obj2};

// This approach is used to create a deep copy of the object. By converting obj to a JSON string (JSON.stringify()), and then parsing it back into an object (JSON.parse()), a completely new object is created, including nested objects. This method ensures that changes made to the original object or its nested objects do not affect the cloned object.
let SuperClone = JSON.parse(JSON.stringify(obj2));

obj2.c.deep = 'hahaha';

console.log(clone3)
console.log(clone4)
console.log(SuperClone)

// let str = '{"name": "John", "age": 30, "isStudent": true}';

// let ppr = JSON.parse(str);
// console.log(ppr);

//Exercise

// This question already has answers here:
// How to determine equality for two JavaScript objects? (82 answers)
// Closed 7 years ago.
// What is the best way to compare objects in JavaScript?

//Example:

// var user1 = {name : "nerd", org: "dev"};
// var user2 = {name : "nerd", org: "dev"};
// var eq = user1 == user2;
// alert(eq); // gives false
// // I know that two objects are equal if they refer to the exact same object, but is there a way to check if they have the same attributes' values?

// // The following way works for me, but is it the only possibility?

// var eq = Object.toJSON(user1) == Object.toJSON(user2);
// alert(eq); // gives true

// For the longest time, you had to resort to workarounds and libraries to create a deep copy of a JavaScript object. However, most browsers have a new structuredClone(), a built-in function for deep-copying!

// JS can be weird when it comes to type coercion. Try to guess what the output for each of the lines below are:

// false == ""  
// false == []  
// false == {}  
// "" == 0      
// "" == []     
// "" == {}     
// 0 == []      
// 0 == {}      
// 0 == null  

// Type coercion in JavaScript can indeed lead to some unexpected results. Let's go through each line and predict the output based on the rules of type coercion:

// false == ""
// The boolean false will be coerced to a numeric value (0), and an empty string "" will also be coerced to a numeric value (0). Therefore, both sides of the equality operator are equivalent numerically, resulting in true.

// false == []
// An empty array [] will be coerced to an empty string "". As we saw in the previous example, an empty string is coerced to the numeric value 0. However, the boolean false is also coerced to 0. Since both sides have the same numeric value, the result is true.

// false == {}
// An empty object {} cannot be directly converted to a primitive value that can be compared with false. Therefore, the coercion rules do not apply, and the result is false.

// "" == 0
// An empty string "" is coerced to the numeric value 0, so both sides of the equality operator have the same numeric value. Therefore, the result is true.

// "" == []
// Similar to the previous example, an empty string "" is coerced to 0, and an empty array [] is also coerced to 0. As a result, the comparison yields true.

// "" == {}
// As with the previous case, an empty string "" is coerced to 0. However, an empty object {} does not have a well-defined way to be converted to a numeric value. Therefore, the coercion rules do not apply, and the result is false.

// 0 == []
// An empty array [] is coerced to an empty string "". The empty string is then coerced to the numeric value 0. Both sides of the comparison have the same numeric value, so the result is true.

// 0 == {}
// Similar to the previous case, an empty object {} cannot be directly converted to a numeric value. Therefore, the coercion rules do not apply, and the result is false.

// 0 == null
// In JavaScript, null is coerced to 0 when compared with a numeric value. Therefore, 0 == null evaluates to false.

// Based on the rules of type coercion, the predicted outputs are as follows:

// true
// true
// false
// true
// true
// false
// true
// false
// false

//** */ Closures

function a(){ // Higher order function since it returns another function
    let Grandpa = 'Grandpa'
    return function b(){ // HOF
        let father  = 'father'
        return function c(){
            let Son = 'son'
            return `${Grandpa} > ${father} > ${Son}`
        }
    }
}


const boo = (String) => (name1) => (name2) => console.log(`${String} > ${name1} > ${name2}`);

// HOF
boo('hii')('becca')('and anna');

