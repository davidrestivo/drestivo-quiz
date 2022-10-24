function printHighscores(){
    var highscores = JSON.parse(window.localStorage.getItem('highScores'));
    highscores.sort(function(a,b){
        return b.score -a.score
    })
}
printHighscores()