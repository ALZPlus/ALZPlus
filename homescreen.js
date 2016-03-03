var people_button = document.getElementById("people")
var main_menu= document.getElementById("menu")
var people_screen= document.getElementById("people_screen")
var back= document.getElementById("back")
var tap_to_show= document.getElementById("tap to show")
var things= document.getElementById ("things")

things.addEventListener("click", function (){
  main_menu.style.display= "none"
  things.style.display= "block"
})

people_button.addEventListener("click", function() {
  main_menu.style.display = "none"
  people_screen.style.display = "block"
})

back.addEventListener("click", function() {
  main_menu.style.display = "block"
  people_screen.style.display="none"
})

var people = new CollectionManager({
  name: 'people',
  fields: ['name', 'title'],
  photo: true,
  list: document.querySelector('#people_screen'),
  new_form: document.querySelector("#add_person")
})

people.restore()
