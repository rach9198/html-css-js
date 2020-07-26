// var arr = ['a', 'b', 'c','d'];

// const slicedArr = arr.slice(1,3);
// console.log(slicedArr);
// run this file..i mean execute, it given data btw those indicesnaai

// sorry bit confused in this.


// filter method

// var arr = ['a', 'b', 'c','d'];

// // i only want to extract the the 'b'
// // es5
// const filteredArr = arr.filter(function(el) {
//   if(el === 'b') {
//     return el;
//   }
// });

// console.log(filteredArr);

// filter method: it works on arrays. it will itrate over the each elemenet at a time and it takes a callback
// callback: ita function inside the filter method which will take the arg as current irrated element and do the execution which is wirten within a function.
// and if condtions are satisfied it will return that element else 'undefined' will be returned.
// filter will craete an new array.
// something u got it?yaya
// read that afterwatds



// in the above problem we are extracting only 'b'. but we want to extract all the elemnets other than 'b'.
// can u do it?
// if cond...do it.. copy again and do it

var arr = ['a', 'b', 'c','d', 10];

// es5
const filteredArr = arr.filter(function(el) {
  if(el !== '10') {
    return el;
  }
});

// es6 way
// arraw function yaad hai?nai..read that

// console.log(filteredArr);

// difference between != and !== ?
// === and !== with check both data and data type
// == and != will only check the data
// got it?yoss

// can u guess the mistake?hello?noo...object is combination of???????pata nai..noice
// what is dictonary in python??dont knoekey bal
// object is combination of key and value..right? yaad ayoaya?haan
// to define the value.. we will give the key

// now can u tell what is missing here?..so, key will be always a string, nothing else.. and value can be anything:varaiable, numeric value, functions, bool values, string, objects
// functions inside objects are called??...bol do..sahi haimethod?yo
// here we are missing keys
var obj = {
  // key is srtring but we will not put single quotes
  item1: {id: 1},
  item2:{id: 2},
  item3:{id: 3},
  item4:{id: 4}
};

var filteredObj = obj.filter(function(el) {
  console.log(el);
  return el;
});
console.log(filteredObj);
// so filter method only worls with arrays not ibjectswokay