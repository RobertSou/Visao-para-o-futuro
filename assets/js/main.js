let toggle = false;
let ulista = document.getElementsByClassName("ul-options")[0];
let togglex = document.getElementsByClassName("toggle")[0];

function togglemenu(){
  if( toggle === true){
    ulista.style.display = "none";
    togglex.classList.remove("active");
    toggle = false;
  }
  else if( toggle === false){
    ulista.style.display = "block";
    togglex.classList.add("active");
    toggle = true;
  }
}
