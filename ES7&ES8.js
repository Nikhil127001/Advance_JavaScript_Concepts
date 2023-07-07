// Updates in ES7
// includes function

const pets = ["dog", "cat", "elephant", "rat"];

console.log(pets.includes('dog'));

// square 

const square = (x) => x**2;
const cube  = (x) => x**3;
console.log(square(2));
console.log(cube(2));

// Updates in ES8
// new functions were introduced in this version like
// .padStart();
// .padEnd();

console.log("honey".padStart(10));
console.log("honey".padEnd(10));

// keys, values,entries,map

const obj ={
    "username0": "nikhil",
    "username1": "don",
    "username3": "Harry"
}
const obj2 =[{
    "username": "nikhil"},
    {"username": "don"},
    {"username": "Harry"}
]

Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key]);
});

// const a = obj2.map((key)=>{
//     return key.username;
// })
// console.log(a);

Object.values(obj).forEach((value)=>{
    console.log(value);
});

Object.entries(obj).map((key)=>{
   return console.log(key[0].replace("username", " "));
})

Object.entries(obj).forEach((entry)=>{
    console.log(entry);
})

Object.entries(obj).forEach((value)=>{
    console.log(value[0].replace("username",""));
})





