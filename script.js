localStorage.clear();

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
      if(variant == ra[round-1])
            score++;


      round++;

      if (round > 5) {
            alert(score);
            localStorage.res = score;
            document.location.replace('result.html');
      }

      mt.textContent = "Сложение " + round + "/5";
      img1.src = "img/r" + round + "/img1.jpg";
      img2.src = "img/r" + round + "/img2.jpg";

      v1.src = "img/r" + round + "/var1.jpg";
      v2.src = "img/r" + round + "/var2.jpg";
      v3.src = "img/r" + round + "/var3.jpg";

      img1.alt = "img/r" + round + "/img1.jpg";
      img2.alt = "img/r" + round + "/img2.jpg";

      v1.alt = "img/r" + round + "/var1.jpg";
      v2.alt = "img/r" + round + "/var2.jpg";
      v3.alt = "img/r" + round + "/var3.jpg";
}
