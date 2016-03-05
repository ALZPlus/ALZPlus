var people_button = document.getElementById("people")
var main_menu= document.getElementById("menu")
var people_screen= document.getElementById("people_screen")
var things_screen= document.getElementById("things_screen")
var settings_screen=document.getElementById("settings_screen")

var back= document.getElementById("back")
var tap_to_show= document.getElementById("tap to show")
var things_button= document.getElementById ("things")
var settings_button=document.getElementById("settings")

settings_button.addEventListener("click", function (){
  main_menu.style.display= "none"
  settings_screen.style.display= ""
})

things_button.addEventListener("click", function (){
  main_menu.style.display= "none"
  things_screen.style.display= ""
})

people_button.addEventListener("click", function() {
  main_menu.style.display = "none"
  people_screen.style.display = ""
})

back.addEventListener("click", function() {
  main_menu.style.display = "block"
  people_screen.style.display="none"
})

var people = new CollectionManager({
  name: 'people',
  fields: ['name', 'title'],
  photo: true,
  list: document.querySelector('#people_list'),
  new_form: document.querySelector("#add_person")
})

people.restore()

var things = new CollectionManager({
  name: 'things',
  fields: ['name'],
  photo: true,
  list: document.querySelector('#things_list'),
  new_form: document.querySelector("#add_thing")
})

things.restore()

var reset_people_button = document.getElementById("reset_people")
reset_people_button.addEventListener('click', function(event){
  event.preventDefault()
  
  localStorage.removeItem("people")
  alert("People List Reset")
})

var reset_things_button = document.getElementById("reset_things")
reset_things_button.addEventListener('click', function(event){
  event.preventDefault()
  
  localStorage.removeItem("things")
  alert("Things List Reset")
})