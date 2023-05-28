let menu = document.querySelector(".logo")
let navbar = document.querySelector(".navbar")
let header = document.querySelector(".header")
let second_header = document.querySelector(".second-header")
// let course = document.getElementsByClassName("course")
let blck = document.querySelector("#blck")

console.log(menu)

menu.addEventListener("click",()=>{
    navbar.classList.toggle("meu")
})

blck.addEventListener("click",()=>{
    header.classList.toggle("bh")
    second_header.classList.toggle("bh")
    // course.classList.toggle("bco")
    document.body.classList.toggle("bc")
    if(document.body.classList.contains("bc")){
        blck.style.color = "gray"
    }
    else{
        blck.style.color = "#7e22ce"
    }
})