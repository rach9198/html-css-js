// we will do same stuff but not organized wat which is not reccommeded

const addButton = document.querySelector('#addButton');
const inputListItem = document.querySelector('#inputListItem');

// array to store all teh todo list items
// within array we will have object. wfy? because aliong with todolist info we will store the index number. as need to delete that list itme when user clicks on delete on mark it as checks

const allToDo = [];
// as we are storing the index(which should be uniqe) we will craete one counter vaiable
let counter  = 0;
// counter is of type 'let' not const. bec value of counter will get changed. righgt?yoss

// but our array is of type const although its content will also gets changed.so is it correct? 
// array is of type cinst bec.. arrays and objects are of reffece type not primitive type. refferece type means that they will be not called by thier names... they will be called by the address location and address location of first element is always same. achaa haan

// our array should look like this
// allToDo = [
//   {
//     id: 0,
//     info: complete js
//   },
//   {
//     id: 1,
//     info: complete js2
//   },
// ]

var addToDoItem = function(e) {
  // creating an object where we can store
  const data = {
    id: counter,
    // info will contain the data what user enters. now can  utell?yes or no?no..very good
    info: inputListItem.value
  };
  // our object is done. now we will push(adding the elemnet at the end of the array) it to array
  allToDo.push(data);
  // once pushing is done, increment the counter so that no two objects have same id
  counter++;
  // console.log(allToDo);

  // once storing is done,, next is displaying it to page
  ui(allToDo);
}

const task = document.querySelector('.task');

function ui(toDoArr) {
  // we can munpliate fom(html) from js... then it can chaging some text or creating html elemnts
  // <li><input type="checkbox">
  //   <div class="task">whatever</div>
  //   <span class="close">x</span>
  // </li>
  // we will create this html with js
  // 

  // befot=re that we will only change the text 
  // targetting the clas task
  // lets see what this 'task' elemnt contain
  // console.log(task);
  // got it?haan we'll do tomo..abhi kya hua?kuch nahi..samajh nahi aara?aa toh raha hai..pakka?haan

  // let me finiish this, then u can go
  // so we have to change the innser text of div which is having the class task
  // as it is an array we have to specify the index [0]
  // with in an array we have object and object is having attbuite 'info' which we are calling by dot operator.
  // task = task.innerHTML = toDoArr[0].info;
  // u are sleepy ?yup

  // fine we will do baad meitomo again papa home...ok..baata deyna whenever u want to do .okaay tata
  
}




addButton.addEventListener('click', addToDoItem);