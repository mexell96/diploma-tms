var addDD = document.getElementById("add"); // ДОБАВИТЬ ЭЛЕМЕНТ
var delet = document.getElementById("del"); // УДАЛИТЬ ВСЁ
var selectITEM = document.querySelector("select"); //СПИСОК ВСЕХ ЭЛЕМЕНТОВ
var list = document.querySelector("h5"); // СЮДА ДОБАВЛЯТСЯ НОВЫЕ ЭЛЕМЕНТЫ
var lee = "apple"; // ВИДИМО ПЕРВЫЙ ЭЛЕМЕНТ 

var stateITEMS = {
    items: []
}; // ЭЛЕМЕНТЫ ПОСЛЕ ПЕРЕЗАГРУЗКИ СТРАНИЦЫ localstorage
console.log({stateITEMS});

var dataLS = localStorage.getItem("dataLS");
console.log({dataLS}); 
if(dataLS) {
    stateITEMS = JSON.parse(dataLS);
    console.log({stateITEMS});
}  // запускается при перезагрузке, получает данные из localstorage


window.onload = function() {
    console.log("страница загрузилась")
    var loaded = sessionStorage.getItem("loaded");
    console.log({loaded}); // ----------------------------------
    if(loaded) {
        console.log("есть loader")
        update();
    } else {
        console.log("нет loader")
        sessionStorage.setItem("loaded", true);
    }
}

function update(){
    list.innerHTML = "";
    for(var i = 0; i < stateITEMS.items.length; i++) {
        var lishka = document.createElement("li");
        console.log({lishka}); //------------------------------------------
        lishka.innerText = stateITEMS.items[i];
        list.appendChild(lishka); 
        console.log({list});//------------------------------------------
    }
}

selectITEM.addEventListener("change", function(e) {
    lee = this.value;
    console.log({lee});//--- просто выбирает имя элемента
});


function addItem(event) {
    event.preventDefault();
    var lish = document.createElement("li");
    lish.textContent = lee;
    list.appendChild(lish);
    
    stateITEMS.items.push(lee);
    localStorage.setItem("dataLS", JSON.stringify(stateITEMS));
}

function delItem(event){
    event.preventDefault();
    localStorage.clear();
    list.innerHTML = "";
    stateITEMS.items = [];
}

addDD.addEventListener("click", addItem); //на клик запускаем функцию addItem
delet.addEventListener("click", delItem); //на клик запускаем функцию delItem






{/* <button onclick="createItem()">Create local storage item</button>

<h2>Get the value of the local storage item named "mytime"</h2>

<p>Click the button to get the item value:</p>

<button onclick="myFunction()">Get the item value</button>

<p id="demo"></p>

<script>

function createItem() {
  localStorage.mytime = Date.now();
}

function myFunction() {
  var x = localStorage.getItem("mytime");
  document.getElementById("demo").innerHTML = x; */}
}