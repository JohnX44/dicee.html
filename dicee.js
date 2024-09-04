
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1-6

     var randomimg ="img/dice" + randomNumber1 + ".png";
     document.querySelectorAll("img")[1].setAttribute("src", randomimg);







