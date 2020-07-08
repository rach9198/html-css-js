function newElement ()
{
  var x=document.getElementById("input-list-item").value
  // document.getElementById("para").value=x
  $("#para").val(x);
}



// so here what we have to do, we have to grab the value whatever user enters .
// then store the value
// the display all the values.
// right?yo

// 1. grabing the values
// to define the variable we use var keyword. but will use es6
// to define the varaiables we will use const or let
// const: value will not change once set
// let: we can change the value

// i like to keep varaiable name and html element name. so changing.as once we get large number of elemts, we can het to easily.
const addButton = document.querySelector('#addButton');
const inputListItem = document.querySelector('#inputListItem');

// //////////////////////////////////////////////////////////////
// // /functions in es5(older way)
// function funName() {

// }
// // anaomous fun
// function()
//  {

//  }

// //  ES6
// funName1() => {

// }

// // anamous function
// () => {

// }

// ok?yo
// ///////////////////////////////////////////////////////////


// as soon as add button is clicked, we will garp the value of input box.
const addingListFun = () => {
  console.log(inputListItem.value());
  
}


addButton.addEventListener('click', addingListFun);
