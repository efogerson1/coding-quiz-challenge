/* const ol = document.querySelector("#highscores"); */

function storeHighscores (){


    
    document.getElementById("highscores"); //grabbing the id highscores from highscores.html trying to append it to ol
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
     //Create an li element and then assign it textcontent to be initals and score
    
    
    for (var i = 0; i < highscores.length; i++) {
        var newLi = document.createElement('li');
        newLi.textContent = highscores[i].initials + " - " + highscores[i].score;
                //append li elements to the ol element in highscore.html
                /* document.getElementByID("highscores").appendChild(li.textContent);
                li.textContent.appendChild("highscores"); */

                var highscoresOl = document.getElementById('highscores');
                        highscoresOl.appendChild(newLi);
                
    }
    

}

storeHighscores();
