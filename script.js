// function newElement ()
// {
//   var x=document.getElementById("input-list-item").value
//   // document.getElementById("para").value=x
//   $("#para").val(x);
// }



// // so here what we have to do, we have to grab the value whatever user enters .
// // then store the value
// // the display all the values.
// // right?yo

// // 1. grabing the values
// // to define the variable we use var keyword. but will use es6
// // to define the varaiables we will use const or let
// // const: value will not change once set
// // let: we can change the value

// // i like to keep varaiable name and html element name. so changing.as once we get large number of elemts, we can het to easily.
// const addButton = document.querySelector('#addButton');
// const inputListItem = document.querySelector('#inputListItem');

// // //////////////////////////////////////////////////////////////
// // // /functions in es5(older way)
// // function funName() {

// // }
// // // anaomous fun
// // function()
// //  {

// //  }

// // //  ES6
// // funName1() => {

// // }

// // // anamous function
// // () => {

// // }

// // ok?yo
// // ///////////////////////////////////////////////////////////


// // as soon as add button is clicked, we will garp the value of input box.
// const addingListFun = () => {
//   console.log(inputListItem.value());
  
// }


// addButton.addEventListener('click', addingListFun);



// extracting elemnts first
const addButton = document.querySelector('#addButton');
// got it?y toh onclick nai hatana? hota hai.. i preffer to use like this.hheehehe

const inputListItem = document.querySelector('#inputListItem');
// value becuse its a input box and it has attribute value which gives user types data.thsi u have to remember

let addListItem = function(e) {
  e.preventDefault();
  // got it ??yo
  // y we were not seeing out earlier..baata...you didnt display value stored in inputListitem .value.. i did it above na..wo bhi hai..you only say hehe
  // so what was happening, above command of value ran before the button was clicked and at that there is no value in input box. thus emyoyoyo got it
  console.log(inputListItem.value);
  // now we are can see the output.
  // what should be the next thing?...display on page? li
  // sbfore that we need to store it somewhere. then display

  // we will use array to store.okoooook
  
}

// its a button , so click event
addButton.addEventListener('click', addListItem);


// this project contain 3 main parts
// showing to ui
// storing internally
// controller which can control abpve 2 things
// this is know as MVC(model view controller)
// model: storing internally
// view: displaying
// ok?okok

// so for that we will we will create 3 main functions

function modelController() {

}

function viewController() {

}

function controller() {
  // it will controll abouve 2 functions

  // 1. displaying the ui

  // 2. check for click events
  

  // 3. calling model to update its database

  // 4. once model is updated, rerendering ui
}

// so controller function will be first inilized. thus, we will only controller() explicitly 
controller();
// got it?yes sir