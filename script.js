var ar = [1, 2, 3, 1, 2];
var round = 1,
      score = 0;

function cheker(variant) {

      var mt = document.getElementById("main-title");

      var img1 = document.getElementById("img1");
      var img2 = document.getElementById("img2");

      var v1 = document.getElementById("var1");
      var v2 = document.getElementById("var2");
      var v3 = document.getElementById("var3");

      round++;

      if (round > 5) {
            document.location.replace('result.html');
      }

      if (ar[round - 1] == variant)
            score++;

      mt.textContent = "Сложение " + round + "/5";
      img1.src = "img/r" + round + ".img1.png";
      img2.src = "img/r" + round + ".img2.png";

      v1.src = "img/r" + round + ".var1.jpg";
      v2.src = "img/r" + round + ".var2.jpg";
      v3.src = "img/r" + round + ".var3.jpg";

      img1.alt = "img/r" + round + ".img1.png";
      img2.alt = "img/r" + round + ".img2.png";

      v1.alt = "img/r" + round + ".var1.jpg";
      v2.alt = "img/r" + round + ".var2.jpg";
      v3.alt = "img/r" + round + ".var3.jpg";

}
