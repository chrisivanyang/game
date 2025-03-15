let score = 0;
        document.getElementById("gameButton").addEventListener("click", function() {
            score++;
            document.getElementById("score").textContent = "分數: " + score;
        });
        document.getElementById("resetButton").addEventListener("click", function() {
            score = 0;
            document.getElementById("score").textContent = "分數: " + score;
        });