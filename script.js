// Memilih variant dalam class masing-masing
var modal = document.getElementById("subscribeModal");

var btn = document.getElementById("subscribeBtn");

var options = document.getElementById("options");

var closeBtn = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "flex";
}

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* Payment btn */

paymentBtn.onclick = function(event) {
  event.preventDefault();
  options.style.display = "block";
}
