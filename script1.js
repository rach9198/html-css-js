// function modelController(fn) {
//   

//   var addListItem = function() {
//     console.log(inputListItem.value);
    
//   }
// }

// function viewController() {

// }

// function controller() {
//   // it will controll abouve 2 functions

//   // 1. displaying the ui

//   // 2. check for click events
//   const addButton = document.querySelector('#addButton');
//   // your bro using wifi?no...ok
//   // if the button is cllicked, we will grab the data in model controller
//   // now we have tolink the function which is in another fuction..right?where are u?yo 
//   addButton.addEventListener('click', modelController(addListItem));

//   // 3. calling model to update its database

//   // 4. once model is updated, rerendering ui
// }

// // so controller function will be first inilized. thus, we will only controller() explicitly 
// controller();


// we will craete 3 function, not not normal functions, we will cerate function expresstion. why? bec we will have functions inside another functiona nd we need to call them.

// wait

// GLOBAL VARIABLES
const inputListItem = document.querySelector('#inputListItem');

var modelController = 
(function() {

  // console.log('modelController');
  var addToDoList = function(e) {
    console.log(inputListItem.value);
  }
  
// })this whole one function and its scope is within this. varaibles decalered within this range cant be used outside.
// (); calling IIF's...

// so i told u about IIFS(instantly invoked functions) : these are used whne u have to use a function only once and dont want to store it into the mememory.
// as its a funcyion, we have call it.

var viewController = function() {
  console.log('viewController');
  
}

// as it revicing some args
var controller = function(modelFn, viewFn) {
  // modelFn();
  // viewFn();
  // ok? we are able to call those function from another function.h
  
  const addButton = document.querySelector('#addButton');
  addButton.addEventListener('click', modelFn.addToDoList);
}

// we will just call the call function, but we will pass the values to its ie 2 functions as args. so that we can use thier properties which are within them.
controller(modelController, viewController)


// sorry lets do bootstrap...abhi mujay nahi hora