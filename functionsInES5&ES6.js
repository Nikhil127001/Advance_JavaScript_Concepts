// //1.)Template strings
// const a = "hellow";
// const b = "nikhil";
// let age = 25;


// const string = `${a} my name is ${b} and my age is ${age}`;
// console.log(string);

// // 2.)default arguments

// function greet(a='Hiiiii', b = '' , age = 20 ){
// const string = `${a} my name is ${b} and my age is ${age}`;
// console.log(string);
// }

// greet();
// greet("hellow", "nike", 25);

// // 3.) arrow functions

// //without arrow function 
// function add(a,b){
//     return a+b;
// }

// // with arrow funtion
// const add2 = (a,b) => a+b;

// //4.)Currying
// const add = (a, b) => a + b;
// const add2 = (a) => (b) => a + b;
// const add5 = add2(5);
// console.log(add5(5));

// //5.)Combine
// const multiply = (f, g) => (a) => f(g(a));
// const sum = (a) => a + 1;
// const combine = multiply(sum, sum)(5);
// console.log(combine);

// 6.) Avoiding Side Effects, functional Purity

// in order to maintain functional purity we want to minimise Side Effects means we want to create functions in such a manner so that they will return some value and do not effects other values outside the function

// unlike the function below
var a = 1;
function b(){
    a=2;// it is affecting a variable (a)outside the scope of the function
}