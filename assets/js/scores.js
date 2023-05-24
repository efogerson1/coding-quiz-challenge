var clearButton = document.getElementById("clear");


function storeHighscores (){


    
    document.getElementById("highscores"); //grabbing the id highscores from highscores.html trying to append it to ol
    var highscores = JSON.parse(localStorage.getItem("highscores")) || [];
     //Create an li element and then assign it textcontent to be initals and score
    
    
    for (var i = 0; i < highscores.length; i++) {
        var newLi = document.createElement('li');
        newLi.textContent = highscores[i].initials + " - " + highscores[i].score;
                //append li elements to the ol element in highscore.html
                var highscoresOl = document.getElementById('highscores');
                        highscoresOl.appendChild(newLi);
                
    }
    

}

storeHighscores();

var x = "highscores";
clearButton.addEventListener("click");
document.getElementById('x').innerHTML="";


// Need to add function to clear highscore values
