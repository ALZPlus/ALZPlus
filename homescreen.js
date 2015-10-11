var people_button = document.getElementById("people")
var main_menu= document.getElementsByTagName("main_menu")[0]
var people_screen= document.getElementById("people_screen")

people_button.addEventListener("click", function() {
    main_menu.style.display = "none"
    people_button. style.display= "none"
    people_screen.style.display = "block"


})
