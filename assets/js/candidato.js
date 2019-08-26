function load(){
  let card = document.getElementById("cards");
  for (var i = 1; i < 6; i++) {

    let cards = card.querySelector(".card-" + [i]).children;
    let display = false;

    cards[1].classList.remove("showUp");
    cards[0].addEventListener("click", function(){
      if(display === false){
        cards[1].classList.add("showUp");
        display = true;
      }else if(display === true){
        cards[1].classList.remove("showUp");
        display = false;
      }
    }, false);


  }
}
load();
