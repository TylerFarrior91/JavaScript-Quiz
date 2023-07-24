var scores = JSON.parse(localStorage.getItem('scores'))
var scoresList = document.querySelector(".highscores")
var clearBtn = document.querySelector(".clear")

for(var i = 0; i < scores.length; i++) {
    var li = document.createElement("li")
    li.innerHTML = scores[i].initials + ": " + scores[i].score
    scoresList.append(li)
}

clearBtn.addEventListener("click", function() {
    localStorage.clear()
    window.location.reload()
})

