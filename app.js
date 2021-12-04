'use strict';
document.addEventListener("DOMContentLoaded", (event) => {
//========================
console.warn("JS LOADED");
//========================
function logThis () {console.log(this)};
document.querySelector("#favorites").onclick = logThis;
})
