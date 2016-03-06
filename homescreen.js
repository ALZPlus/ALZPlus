var main_menu= document.getElementById("menu")

var back= document.getElementById("back")
var people_button = document.getElementById("people")
var things_button= document.getElementById ("things")
var help_button = document.getElementById("help")
var settings_button=document.getElementById("settings")

var current_screen = null

Vue.filter('tel', function (value) {
  return 'tel://' + value
})

function switchToScreen(screen_name){
  current_screen = document.getElementById(screen_name)
  main_menu.style.display = "none"
  current_screen.style.display = ""
  back.style.display = ""
}

people_button.addEventListener("click", function() {
  switchToScreen('people_screen')
})

things_button.addEventListener("click", function (){
  switchToScreen('things_screen')
})

help_button.addEventListener("click", function() {
  switchToScreen('help_screen')
})

settings_button.addEventListener("click", function (){
  switchToScreen('settings_screen')
})

back.addEventListener("click", function() {
  main_menu.style.display = ""
  current_screen.style.display="none"
  back.style.display = "none"
})

var people = new CollectionManager({
  name: 'people',
  fields: ['name', 'title'],
  photo: true,
  display: document.querySelector('#person_display'),
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

var contacts = new CollectionManager({
  name: 'contacts',
  fields: ['name', 'phone'],
  photo: false,
  list: document.querySelector('#help_screen'),
  new_form: document.querySelector('#add_contact')
})

contacts.restore()

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

var reset_contacts_button = document.getElementById("reset_contacts")
reset_contacts_button.addEventListener('click', function(event){
  event.preventDefault()
  
  localStorage.removeItem("contacts")
  alert("Contacts List Reset")
})