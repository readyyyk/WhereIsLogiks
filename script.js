localStorage.clear();
localStorage.answer1 = 0;
localStorage.answer2 = 0;
localStorage.answer3 = 0;
localStorage.answer4 = 0;
localStorage.answer5 = 0;
var round = 1,
      score = 0;

var ra = [1, 3, 1, 1, 2];

var mt = document.getElementById("main-title");

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

var v1 = document.getElementById("var1");
var v2 = document.getElementById("var2");
var v3 = document.getElementById("var3");

function cheker(variant) {
      round++;

      if (round > 5) {
            localStorage.res = score;
            document.location.replace('result.html');
      }

      console.log(variant, ra[round-2]);
      if(variant == ra[round]){
            score++;
            console.log("score++");
      }

      mt.textContent = "Сложение " + round + "/5";
      img1.src = "img/r" + round + "/img1.png";
      img2.src = "img/r" + round + "/img2.png";

      v1.src = "img/r" + round + "/var1.jpg";
      v2.src = "img/r" + round + "/var2.jpg";
      v3.src = "img/r" + round + "/var3.jpg";

      img1.alt = "img/r" + round + "/img1.png";
      img2.alt = "img/r" + round + "/img2.png";

      v1.alt = "img/r" + round + "/var1.jpg";
      v2.alt = "img/r" + round + "/var2.jpg";
      v3.alt = "img/r" + round + "/var3.jpg";

      console.log(score);

}
