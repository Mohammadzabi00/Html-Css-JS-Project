let eat = document.querySelector(".eat");
let drink = document.querySelector(".drink");

eat.addEventListener("click", function () {
  document.getElementById("eat-container").style.display = "block";
  document.getElementById("drink-container").style.display = "none";

  document.querySelector(".eat").style.backgroundColor = "#616161";
  document.querySelector(".drink").style.backgroundColor = "white";
});

drink.addEventListener("click", function () {
  document.getElementById("drink-container").style.display = "block";
  document.getElementById("eat-container").style.display = "none";

  document.querySelector(".drink").style.backgroundColor = "#616161";
  document.querySelector(".eat").style.backgroundColor = "white";
  document.querySelector(".eat").style.color = "black";
});
