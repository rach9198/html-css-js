const addButton = document.querySelector('#addButton');
const inputListItem = document.querySelector('#inputListItem');
let allToDo = [];
let counter  = 0;

var addToDoItem = function(e) {
  const data = {
    id: counter,
    info: inputListItem.value
  };

  allToDo.unshift(data);
  counter++;
  ui(allToDo);
  inputListItem.value = '';
}

let task = document.querySelector('.task');
const unorderedListItems = document.querySelector('.unorderedListItems');
const listItem = document.querySelector('.listItem');
function ui(toDoArr) {
  unorderedListItems.innerHTML = '';
  for(let singleToDo of allToDo) {
    unorderedListItems.innerHTML +=`<li><input type="checkbox" style="margin-right: 1.5%"> 
    <div class="task"> ${singleToDo.info}</div>
    <div class="update">
    <i class="fa fa-pencil" id="edit" aria-hidden="true"></i>
    <span onclick=deleteToDo(event) data-id="${singleToDo.id}" class="close">x</span>

    </div>
    </li>`;
  }
}
// <span onclick=deleteToDo(event) data-id="${singleToDo.id}" class="close"><i class="fa fa-times"  aria-hidden="true"></i></span>

addButton.addEventListener('click', addToDoItem);

inputListItem.addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
    addToDoItem();   
  }
});

function deleteToDo(event) {
  console.log(event); 
  // console.log(event.path[0].dataset);

  let deleteId = event.path[0].dataset.id;

  // allToDo = allToDo.filter(function(obj){
  //   console.log(obj);
  //  });

  allToDo = allToDo.filter(el => +el.id !== +deleteId);

  ui(allToDo);
}