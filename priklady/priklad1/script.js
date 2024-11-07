var tlacitko= document.querySelector(".tlacitko button");
var menu = document.querySelector(".menu");
tlacitko.addEventListener("click", function()
{
menu.classList.toggle("menu--open");
});