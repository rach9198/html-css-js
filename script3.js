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

  // // u can use tradition for loop also. try doing that once
  // // 1.
  // console.log('using of');
  // for(let singleToDo of allToDo) {
  //   console.log(singleToDo);
  // }

  // // 2.
  // console.log('using in');
  // for(let singleToDo in allToDo) {
  //   console.log(singleToDo);
  // }

  // // 3.
  // for(let i = 0; i < allToDo.length; i++) {
  //   console.log(allToDo[i].info);
  // }


  // create script4.js

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
    // unorderedListItems.innerHTML += '<li><input type="checkbox">     <div class="task">'+ singleToDo.info +'</div>    <span class="close">x</span></li>';
    // ok?ok..got it?kindoff...i'll ask tom doubts.. can u tell whats ahappening rn? whatever u understood, type karo baatao..new list create ho raha hai..vahi how?

    // es6.. u got this?yup
    unorderedListItems.innerHTML +=`<li><input type="checkbox"> 
    <div class="task"> ${singleToDo.info}</div>
    <span class="close">x</span>  
  </li>`;
    // what is going wrong?its not creating new list..search on google onec abhi
    

  }
  // unorderedListItems.append(listItem)
  // try to delete elemnts or we wil  do kalthik hai..push the changes
  
}

addButton.addEventListener('click', addToDoItem);


// before wwe start, we want list to be added after pressing enter key. rn we have to click on button

inputListItem.addEventListener('keypress', function(e){
  // console.log(e);
  // console.log(e.key);
  // console.log(e.keyCode);
  // if enter key is pressed, whaich function should excute. can u write the condition?
  // ? conditino dont know - on keypress call allToDoItem...i did that pehle it didnt workkkkkkkkk..ok. the way you used call method was wrong.okok
  // u want to learn react?haan ku..maybe iwill be teaching react in to inifidata online....woooww.noice
  // so u can also join in meeting with my name...tqtqa. react is very vast but i will be only teaching basics things and little bit advance bec sir just charging 3k from each student as they are teaching online.ach asoa so in 5 days try to learn as much js as u can but i will teaching js to them from screatch.haan okay
  if (e.keyCode == 13) {
    addToDoItem();   
  }
});

// so whenever an keyis pressed in that box, key is recorded. we are interested in enter key
// are u getting?yaya
// so ither u can use e.key to get the key name which is pressed or its value
// what is 'e'? can u tell?argument..its a event object. what we do in html page (or DOM) that is an event and it recorded.
// other than keypress, there is keydown, keyup.. search ;key events in dom and read from mdn page