/* const ol = document.querySelector("#highscores"); */

function storeHighscores (){
    document.getElementByID("#highscores"); //grabbing the id highscores from highscores.html trying to append it to ol
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];

    for (var i = 0; i < highscores.length; i++) {
        
        li.textContent = highscores[i].initials + " - " + highscores[i].score;
                //append li elements to the ol element in highscore.html
                ol.appendChild(li.textContent);
    }

}

storeHighscores();
