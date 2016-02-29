var people_button = document.getElementById("people")
var main_menu= document.getElementById("menu")
var people_screen= document.getElementById("people_screen")
var back= document.getElementById("back")
var tap_to_show= document.getElementById("tap to show")
var things= document.getElementById ("things")

things.addEventListener("click", function (){
  main_menu.style.display= "none"
  things.style.display= "none"
})

people_button.addEventListener("click", function() {
    main_menu.style.display = "none"
    people_button.style.display= "none"
    people_screen.style.display = "block"
  })

back.addEventListener("click", function() {
    main_menu.style.display = "block"
    shibangi.style.display = "none"
    liliana.style.display = "none"

  })
