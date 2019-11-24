"use strict";

const button = document.getElementById("hide-me");
button.addEventListener("click", (event) => {
  event.currentTarget.hidden = true;
});
