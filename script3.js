const addButton = document.querySelector('#addButton');
const inputListItem = document.querySelector('#inputListItem');
const allToDo = [];
let counter  = 0;

var addToDoItem = function(e) {
  const data = {
    id: counter,
    info: inputListItem.value
  };
  allToDo.push(data);
  counter++;
  ui(allToDo);
  // once everything is done, making the inout box empty
  inputListItem.value = '';
}

let task = document.querySelector('.task');
const unorderedListItems = document.querySelector('.unorderedListItems');
const listItem = document.querySelector('.listItem');
function ui(toDoArr) {
  // task = task.innerHTML = toDoArr[0].info;
  // displaying all the todolists

  // so we dont want previous sata to be present,first we will remove all teh conetent anf then for will keep on adding. easy?haan.. its just that u are not trying
  unorderedListItems.innerHTML = '';

  for(let singleToDo of allToDo) {

    // console.log(singleToDo);
    // console.log(singleToDo.info); 

    // let li = document.createElement('li');
    // let checkbox = document.createElement('checkbox');
    // let taskDiv = document.createElement('div');
    // taskDiv.classList.add('task');
    // taskDiv.innerText = singleToDo.info;
    // let close = document.createElement('span');
    // close.classList.add('close');
    // close.innerText = 'x';

    // li.appendChild(checkbox);
    // li.appendChild(taskDiv);
    // li.appendChild(close);

    // unorderedListItems.appendChild(li);

    // did u got it?somewhoat...
    // so what we are doing is creating html elemenets with js, with the help of createElement command.
    // to add the class to elements with jas we use 
      // elementName.classList.add('className)
    // once all the ememenst are craeted, we have display them. for that first we will append child elments to parents element with appendChild command. it should be in same herichary as we want to do it in html.

    // rn, every time item i sadded, eemnts are getting displayed again. 

    // that appraoach is bit tedious. 2nd way
    // innetText = helps us to insert inly string in html elemenst
    // but if we want to craete html elemenst...at tat tyme we can use innerHTML
    // here we are craete html tahs within 'unorderedListItems' ie ul ellement. 
    // you know about +=  operator right?haan... it appending li tags as the for loop gaocheasa.
    // es5
    unorderedListItems.innerHTML += '<li><input type="checkbox">     <div class="task">'+ singleToDo.info +'</div>    <span class="close">x</span></li>';
    // ok?ok..got it?kindoff...i'll ask tom doubts.. can u tell whats ahappening rn? whatever u understood, type karo baatao..new list create ho raha hai..vahi how?

    // u remember `` in js?no
    // `` : this is new way of reprenting strings in ES6
    //   let li = ` <li><input type="checkbox"> 
    //   <div class="task"> Lorem ipsum dolor sit, amet</div>
    //   <span class="close">x</span>
    // </li>`
    // what is going wrong?its not creating new list..search on google onec abhi
    

  }
  // unorderedListItems.append(listItem)
  // try to delete elemnts or we wil  do kalthik hai..push the changes
  
}

addButton.addEventListener('click', addToDoItem);