var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");

var body = document.getElementById("body");

var footer = document.getElementById("footer");

var result = document.getElementById("result");

function greener() {
      line1.classList.remove("line", "line1");
      line1.classList.add("green--line", "green--line1");

      line2.classList.remove("line", "line2");
      line2.classList.add("green--line", "green--line2");

      body.classList.add("green--body");

      footer.innerHTML = 'поздравляем вы прошли вы можете <a href="index.html" class="link link-g"> перейти на главную </a>';
}

var res = localStorage.res;

      console.log(res);

if(res == 5){
      greener();
}

result.textContent = "результат " + res + "/5";
