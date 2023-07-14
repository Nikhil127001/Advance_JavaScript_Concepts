// IIFE (imediately invoked functional expressions)
//following is its syntex
(function () {
    console.log("hiii");
})();


var Script11 = (function () {
    function a() {
        console.log("a");
        return "i am function a";
    };
    function b() {
        console.log("b");
    }
    return {
        a: a,
        b: b
    }
})();

Script11.a();
Script11.b();

//** */ this
// Defination - this is an object that the function is a property of

const obj = {
    name: "billi",
    sing: function () { //or  sing(){}
        return "lalala " + this.name;
    },
    singAgain() {
        return this.sing();
    }
}

console.log("My name is " + obj.name + " " + obj.sing());

// gives method access to their object
// execute same code for multiple objects
const name = 'sunny';

function ImportantPerson() {
    console.log(this.name + "!");
}


const obj1 = {
    name: "jacob",
    ImportantPerson: ImportantPerson
}
const obj2 = {
    name: "Tyler",
    ImportantPerson: ImportantPerson
}

ImportantPerson();
console.log(obj2.ImportantPerson());
console.log(obj1.ImportantPerson());

// call() apply() bind()


const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2) {
        return this.health += num1 + num2
    }
}

const archer = {
    name: "Bobby",
    health: 30
}

//   console.log(archer);
//   wizard.heal.call(archer,30,60);
//   console.log(archer);
//   wizard.heal.apply(archer,[30,40]);
//   console.log(archer);
const abc = wizard.heal.bind(archer, 30, 40);
abc();
console.log(archer);

// Exercise
const array = [1, 2, 3];

let max = 0;
const obj111 = {
    findMax(array){
        array.forEach((item)=>{
            max = Math.max(item,max)
        })
        return max;
    }
}
function getMaxNumber(array) {
    //code here  
   return Math.max.apply(null,array);
}

console.log(getMaxNumber(array)) // should return 3

//Cool use of bind

function multiply(a,b){
    return a*b;
}

const multiplyBY2 = multiply.bind(this,2);
console.log(multiplyBY2(4));
const multiplyBY10 = multiply.bind(this,10);
console.log(multiplyBY10(10));

const character = {
    name: 'Simon',
    getCharacter() {
      return this.name;
    }
  };
  const giveMeTheCharacterNOW = character.getCharacter;
   
  //How Would you fix this?
  console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

//   // solution
//   const character = {
//     name: 'Simon',
//     getCharacter() {
//       return this.name;
//     }
//   };
//   const giveMeTheCharacterNOW = character.getCharacter.bind(character);
  
  
//   console.log('?', giveMeTheCharacterNOW());
