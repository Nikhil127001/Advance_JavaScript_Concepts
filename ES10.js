// in ES10 new functions were introduced like

//1.) flat()

const arr = [1,[2,3,4],[5],];
console.log(arr.flat());

const arr1 = [1,[2,3,4],[[[5]]],];
console.log(arr1.flat(3));

const arr2 = [1,[2,3,4],[[[5]]],,,,,,,[6]];
console.log(arr2.flat(3));

//2.) flatMap
const ar = [["nikhil","23"],["don","45"], ["Harry","27"]]
ar.flatMap((entry)=>{
    return console.log(entry[0]);
})

//3.) the below function will create object from the above array
console.log(Object.fromEntries(ar));

//4.) try catch was also introduced in ES10 in which we don't have need to define error in the catch block

// before
try{
  bob + "hii";
}catch(e){
    console.log("some error occured", (e));
}

// in ES10
try{
  bob + "hii";
}catch{
    console.log("some error occured");
}