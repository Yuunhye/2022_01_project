function changeCard(event){
    var card = document.getElementsByClassName("card");
    var card_mine = document.getElementsByClassName("card-mine");
    if(event.target.checked){
        for(var i=0; i<card_mine.length; i++){
            card_mine[i].classList.remove("card-mine-color");
        }
        for(var i=0; i<card.length; i++){
            card[i].style.display = "none";
        }
    }
    else {
        for(var i=0; i<card_mine.length; i++){
            card_mine.item(i).classList.add("card-mine-color");
        }
        for(var i=0; i<card.length; i++){
            card[i].style.display = "block";
        }
    }

}




