var people_button= document.getElementById("people")
var main_menu=document.getElementById("menu")
var people_screen =document.getElementById("people_screen")
var back=document.getElementById("Back")

people_button.addEventListener("click", function(){
  main_menu.style.display= "none"
  people_screen.style.display= "block"
})

back.addEventListener("click", function(){
  people_screen.style.display="none"
  main_menu.style.display="block"
})
