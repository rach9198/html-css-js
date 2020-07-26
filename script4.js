const addButton = document.querySelector('#addButton');
const inputListItem = document.querySelector('#inputListItem');
let allToDo = [];
let counter  = 0;

var addToDoItem = function(e) {
  const data = {
    // what is 'id'? 
    // id=> key
    // counter => value
    // if u are within object, u will not say varaible
    id: counter,
    info: inputListItem.value
  };

  // 
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


// to delete the element, we should know the id of that todolist
// so, inhtml, whne we want to pass some extra info to html elemnet tag... we use an attribute known as 'data-name'
// eg: <div data-id="1" data-user-name="alex" data-whatever="something">hello</div>
// so we need to pass teh id to close button also

function deleteToDo(event) {
  // console.log(event); 
  //want to see event log again? just see your self, there are soo many things u can control
  // so i told u whenver something happens on screen, event object will hacve all the info. we only want to know where this event took place which we found out in path.
  // path is an array which which gives path in heirarchical which goes from target element to parent elemnet.
  // whats the parent elemhent of 'span' where cross button is embedded?div..konsi?li..ya not a div...parent element of li?ul...or uska?div with the class name list-items.. soo like this it will till 'html' tag which is at the top. this is known as event bubbling. action occured at one place but it can cause it effect till html tage which warraping whole website. place where action took place is called target element.ok?okok

  // so we are only interested in tagert element ie span which is placed at index 0. and to extract the data-set value, we will use dataset.
  // console.log(event.path[0].dataset);

  // within dataset, we want to extract the value of data-id
  // console.log(event.path[0].dataset.id);
  let deleteId = event.path[0].dataset.id;

  // so we have an array and inside it object for iondivudal todolist..right?haan
  // console.log(allToDo);

  // now what we want... this array should contain all the todolist except the one one whose id has been passed to us by 'event.path[0].dataset.id'. can u do it? it similar to what u did in text.js
  allToDo = allToDo.filter(function(obj){

    // code
    // obj ka id?.id?.. object kai andar id HTMLDetailsElement.apply.... object ka kuch id nahi HTMLDetailsElement, and neither we care about it ..toh lhs kaise

    // ok, just seee
    console.log(obj);
    // tell me how do we extract/read from  values from objienfoc?t?info?..write browing through mobile ah?NOooo
    // not happy.. i thought u are getting everything...samajh nahi aaya to baata deyti na..to ask i should go thourgh na..ok
    // should i move ahead or u will revise>(.if u get time)..revise better..ok..not agood student😅..yo
    // ok boi bye

   });

}


// next staep... before cross icon, put pencil icon so that user can update /edit that dotolist.ok?okaay
// push the changes and close tq boi..bye
