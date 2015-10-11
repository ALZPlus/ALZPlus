var people_button= document.getElementByID("people")
var main_menu =document.getElementByID("menu")
var people_screen =document.getElementById("people_screen")

people_button.addEventListener("click", function(){
  main_menu.style.display= "none"
  people_screen.style.display= "block"
})
