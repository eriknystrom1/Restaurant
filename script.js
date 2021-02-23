const sidemenuButton = document.querySelector(".sidemenu-btn")

const sidemenuButton2 = document.querySelector(".sidemenu-btn2")

sidemenuButton.addEventListener("click", minFunktion)
sidemenuButton2.addEventListener("click", minFunktion2)

function minFunktion() {
    document.querySelector(".sidemenu").classList.toggle("sidemenu-hidden")
}

function minFunktion2() {
    document.querySelector(".sidemenu").classList.toggle("sidemenu-hidden")
}