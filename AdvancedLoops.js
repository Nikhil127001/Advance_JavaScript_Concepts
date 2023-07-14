const basket = ["apple", "banana","grapes", "mangoes"];
const basket1 = {"apples": 10, "bananas": 20, "oranges": 5};

// for of loop -> it can iterate on arrays strings

for(item of basket){
    console.log(item);
}

// for in loop -> it can enumerate on objects properties

for(item in basket1){
    console.log(item);
}