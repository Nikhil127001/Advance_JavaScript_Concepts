
// this following way of array iteration is not recommended because it leads to Side Effects and decrease functional purity 
const array = [1,3,18,19,21];
const doubleArray = [];
const foeEach = array.forEach((num)=>{
    doubleArray.push(num*2);
})
console.log(doubleArray);

//recommended ---> map, filter, reduce

//1.) map function
const mapArray = array.map((num) => {
    return num*4;
})
console.log(mapArray);

//2.) filter function
const filterArray = array.filter(num=>num>5);
console.log(filterArray);

//3.) Reduce function
const ReduceArray = array.reduce((accumulator,num)=>{
    return accumulator+num;
},0)
console.log(ReduceArray);


