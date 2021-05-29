/* Assagettare tra mostrando e nascondere i collegamenti del menu di navigazione quando l'utente fa clic sull'icona del menu / barra hamburger*/
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }