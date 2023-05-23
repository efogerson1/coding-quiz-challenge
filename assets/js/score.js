function storeHighscores (){

    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    for (var i = 0; i < highscores.length; i++) {
        
        li.textContent = highscores[i].initials + " - " + highscores[i].score;
                //append li elements to the ol element in highscore.html
                
    }

}

storeHighscores();
