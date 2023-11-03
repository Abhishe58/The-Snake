const gameContainer = document.querySelector('.game-container');
const snake = document.getElementById('snake');
const food = document.getElementById('food');
const postion = document.getElementById('postion');
const damage = document.getElementById('damage');
const scoreDisplay = document.getElementById('score');
const hiscoreDisplay = document.getElementById('highscore');
const tailContainer = document.querySelector('.tail-container');
let snakeX = 0;
let snakeY = 0;
let foodX, foodY;
let postionX, postionY;
let damageX, damageY;
let score = 0;
let hiscore = 0;
let direction = 'right';
let speed = 400;
let tail = [];
let gameStarting = false;

var pointa = new Audio("getpoint.mp3");
let musica = new Audio("backgroundmusic.mp3");
var hurta = new Audio("hurt.mp3");

var root = document.querySelector(":root");

/* var sound = document.getElementById("sound");
sound.addEventListener("click", function () {
 var mute = document.getElementById("mute").style.display = "block";
   
   var sound = document.getElementById("sound").style.display = "none";
})

 var mute = document.getElementById("mute");
mute.addEventListener("click", function () {
 var mute = document.getElementById("mute").style.display = "none";
   
   var sound = document.getElementById("sound").style.display = "block";
})
  */
/* function soundFun() {
  var sound = document.getElementById("sound").style.display = "none";
  
  var mute = document.getElementById("mute").style.display = "block";
  
  alert("hello");
  
  setTimeout(function (){
     outa.pause();
    },100);
   
    
  pointa.pause();
  hurta.pause();
 }

function muteFun() {


  var sound = document.getElementById("sound").style.display = "block";
  
  var mute = document.getElementById("mute").style.display = "none";
  
  
  
  
 } */

function randomPosition() {
    return Math.floor(Math.random() * 15) * 20;
}

function placeFood() {
    foodX = randomPosition();
    foodY = randomPosition();
    food.style.left = foodX + 'px';
    food.style.top = foodY + 'px';
}

function placePostion() {
    postionX = randomPosition();
    postionY = randomPosition();
    postion.style.left = postionX + 'px';
    postion.style.top = postionY + 'px';
}

function placeDamage() {
    damageX = randomPosition();
    damageY = randomPosition();
    damage.style.left = damageX + 'px';
    damage.style.top = damageY + 'px';
}

function updateScore() {
    
}

function updateHiScore(){
    hiscoreDisplay.textContent = `Hi-Score: ${hiscore}`;
}

function gameOver() {
    var gameoContainer = document.getElementById("gameoContainer").style.visibility = "visible";
    
    var outa = new Audio("gameover.mp3");
    outa.play();
    
  /* var jm = document.getElementById("jm"); 
  if(jm.checked) {
   
   
   
     outa.pause();
    
  }else {
   
     outa.play();
    
  
  } */
 
   
    document.querySelector(".gameover-score").textContent = "Your Score: " + score;
}

placePostion();
placeFood();
placeDamage();
updateScore();
updateHiScore();

document.addEventListener('keydown', (event) => {
    if ((event.key === 'w' || event.key === 'W') && direction !== 'down') {
        direction = 'up';
    } else if ((event.key === 's' || event.key === 'S') && direction !== 'up') {
        direction = 'down';
    } else if ((event.key === 'a' || event.key === 'A') && direction !== 'right') {
        direction = 'left';
    } else if ((event.key === 'd' || event.key === 'D') && direction !== 'left') {
        direction = 'right';
    }
});

function onClickMove(move) {
    if (move == 1 && direction !== 'down') {
        direction = 'up';
    } else if (move == 2 && direction !== 'up') {
        direction = 'down';
    } else if (move == 3 && direction !== 'right') {
        direction = 'left';
    } else if (move == 4 && direction !== 'left') {
        direction = 'right';
    }
}

function gameLoop() {
    tail.push({ x: snakeX, y: snakeY });

    if (tail.length > score) {
        tail.shift();
    }

    if (direction === 'up') {
        snakeY -= 20;
    } else if (direction === 'down') {
        snakeY += 20;
    } else if (direction === 'left') {
        snakeX -= 20;
    } else if (direction === 'right') {
        snakeX += 20;
    }

    if (snakeX === foodX && snakeY === foodY) {
        score++;
        updateScore();
        if (score > hiscore){
          hiscore++;
          updateHiScore();
          
          
          pointa.play();
    
  /* var jpm = document.getElementById("jm"); 
  if(jpm.checked) {
   
   var mutep = document.getElementById("mute").style.display = "none";
   
   var soundp = document.getElementById("sound").style.display = "block";
   
     pointa.pause();
    
  }else {
   
     pointa.play();
    
  
  } */
          
          
          
          var snakepoint = document.getElementById("snakepoint").innerHTML = "+1";
          
         var snakepoint = document.getElementById("snakepoint").style.opacity = 1;
          setTimeout(function (){
          var snakepoint = document.getElementById("snakepoint").style.opacity = 0;
          },800);
        }
        
        
        placeFood();
        placePostion();
        placeDamage();
        
    }
    
    
var at = screen.width;
var ajt = screen.height;
    if (
        snakeX < 0 ||
        snakeY < 0 ||
        snakeX >= at ||
        snakeY >= ajt ||
        checkCollision() || 
        checkPostion()
        ) {
        gameOver();
        return;
    }

    tailContainer.innerHTML = '';
    for (let i = 0; i < tail.length; i++) {
        
        var tailSegment = document.createElement('div');
     
 tailSegment.className = 'tail';
      
     
        tailSegment.style.left = tail[i].x + 'px';
        tailSegment.style.top = tail[i].y + 'px';
        tailContainer.appendChild(tailSegment);
        
        
        
        /* tail color */
        var acolor = document.getElementById("acolor");
        var bcolor = document.getElementById("bcolor");
        var ccolor = document.getElementById("ccolor");
        var dcolor = document.getElementById("dcolor");
        var ecolor = document.getElementById("ecolor");
   if(acolor.checked) {
    var sno = document.getElementById('snake').style.background = "lightskyblue";
      var u = document.getElementById('snake').style.boxShadow = "0px 0px 20px lightskyblue";
      
      tailSegment.style.background = "lightskyblue";
      tailSegment.style.boxShadow = "0px 0px 20px lightskyblue";
      
      
   }
   else if (bcolor.checked){
    var soo = document.getElementById('snake').style.background = "lightslategrey";
      var uu = document.getElementById('snake').style.boxShadow = "0px 0px 20px lightslategrey";
      
      tailSegment.style.background = "lightslategrey";
      tailSegment.style.boxShadow = "0px 0px 20px lightskyblue";
   }
   else if (dcolor.checked){
    var sco = document.getElementById('snake').style.background = "steelblue";
      var uqc = document.getElementById('snake').style.boxShadow = "0px 0px 20px steelblue";
      
      tailSegment.style.background = "steelblue";
      tailSegment.style.boxShadow = "0px 0px 20px steelblue";
   }
   else if (ccolor.checked){
    var sdo = document.getElementById('snake').style.background = "royalblue";
      var uu = document.getElementById('snake').style.boxShadow = "0px 0px 20px royalblue";
      
      tailSegment.style.background = "royalblue";
      tailSegment.style.boxShadow = "0px 0px 20px royalblue";
   }
   else if (ecolor.checked){
    var sxo = document.getElementById('snake').style.background = "tomato";
      var huu = document.getElementById('snake').style.boxShadow = "0px 0px 20px tomato";
      
      tailSegment.style.background = "tomato";
      tailSegment.style.boxShadow = "0px 0px 20px tomato";
   }
   else {
    
   }
   
   
   /* snake shape */
    var squarefive = document.getElementById("squarefive");
    
    var square = document.getElementById("square");
    
    var circle = document.getElementById("circle");
    
    if(squarefive.checked) {
    
     tailSegment.style.borderRadius = "5px";
    }
    else if (square.checked){
    
     tailSegment.style.borderRadius = "0px";
    }
    else if (circle.checked){
    
     tailSegment.style.borderRadius = "50px";
     }
    else {
     
    }
    
   
   
   
   
   
   
   
   
    }
   
   var squarefive = document.getElementById("squarefive");
    
    var square = document.getElementById("square");
    
    var circle = document.getElementById("circle");
    
    if(squarefive.checked) {
    
    var stysqf = document.getElementById('snake').style.borderRadius = "5px";
     
    }
    else if (square.checked){
    var stysq = document.getElementById('snake').style.borderRadius = "0px";
     
    }
    else if (circle.checked){
    
    var stycr = document.getElementById('snake').style.borderRadius = "50px";
     }
    else {
     
    }
      
if (snakeX === damageX && snakeY === damageY ) {
/*
&& tailContainer.hasChildNodes() tailContainer.removeChild(tailContainer.children[0]); */

       score--;
        updateScore();
        if (score > hiscore){
          hiscore--;
          updateHiScore();
          pointa.play();
          
          
        }
        var snakepointb = document.getElementById("snakepointb").innerHTML = "-1";
          
         var snakepointb = document.getElementById("snakepointb").style.opacity = 1;
          setTimeout(function (){
          var snakepointb = document.getElementById("snakepointb").style.opacity = 0;
          },800);
          
    
    var hurta = new Audio("hurt.mp3");
    hurta.play();
    
  /* var jhm = document.getElementById("jm"); 
  if(jhm.checked) {
   
   var muteh =() document.getElementById("mute").style.display = "none";
   
   var soundh = document.getElementById("sound").style.display = "block";
   
     hurta.pause();
    
  }else {
   
     hurta.play();
    
  
  } */
  
  
    
        placeFood();
        placePostion();
        placeDamage();
 }
 

    snake.style.left = snakeX + 'px';
    snake.style.top = snakeY + 'px';

    setTimeout(gameLoop, speed);
}

function checkCollision() {
    for (let i = 0; i < tail.length; i++) {
        if (snakeX === tail[i].x && snakeY === tail[i].y) {
            return true;
        }
    }
    return false;
}

function checkPostion() {
 if (snakeX === postionX && snakeY === postionY) {
            return true;
        }
        return false;
}

function oneTail() {
 
}
    
function gameIntStart() {
    if (gameStarting == false) {
        gameStart();
    }
    else{
        return
    }
} 

function gameStart() {
    gameStarting = true;
   
   var gameoContainer = document.getElementById("gameoContainer").style.visibility = "hidden";
   
   var maAbi = document.getElementById("maAbhi").style.display = "block";
   
  var playername = document.getElementById("playername").value;
  
  var snakename = document.getElementById("snakename").innerHTML = playername;
   
   
   
    document.querySelector(".start-btn").textContent = "Play\r\nAgain";
    root.style.setProperty('--dim-visibility', "hidden");
    root.style.setProperty('--blur-amount', "0");
    snakeX = 0;
    snakeY = 0;
    foodX, foodY;
    postionX, postionY;
    score = 0;
    direction = 'right';
    speed = 400;
    tail = [];
    updateScore();
    gameLoop();
}

function homefun() {
  
  var maAi = document.getElementById("maAbhi").style.display = "none";
  
  gameStarting = false;

}
/* stor */
function shStor() {
 var storContainer = document.getElementById("storContainer").style.display = "block";
}

function hiStor() {
 var storContainer = document.getElementById("storContainer").style.display = "none";
} 

lightskybluej.addEventListener("click", function() {
      var slh = document.getElementById('snake').style.background = "lightskyblue";
      
      var i = document.getElementById('snake').style.boxShadow = "0px 0px 20px lightskyblue";
    });
   
   lightslategreyj.addEventListener("click", function() {
      var snh = document.getElementById('snake').style.background = "lightslategrey";
      
      var o = document.getElementById('snake').style.boxShadow = "0px 0px 20px lightslategrey";
    });
    
    steelbluej.addEventListener("click", function() {
      var snz = document.getElementById('snake').style.background = "steelblue";
      
      var k = document.getElementById('snake').style.boxShadow = "0px 0px 20px steelblue";
    });
    
    royalbluej.addEventListener("click", function() {
      var sny = document.getElementById('snake').style.background = "royalblue";
      var l = document.getElementById('snake').style.boxShadow = "0px 0px 20px royalblue";
      
    });
    
   tomatoj.addEventListener("click", function() {
      var snx = document.getElementById('snake').style.background = "tomato";
      
      var i = document.getElementById('snake').style.boxShadow = "0px 0px 20px tomato";
    });
    
    function smileeye() {
    
    var imga = document.getElementById("imgio");
     imga.setAttribute("src", "smyleeye.jpg");
    }
    function smile() {
     var imgb = document.getElementById("imgio");
     imgb.setAttribute("src", "smile.jpg");
    }
    function shoke() {
     var imgc = document.getElementById("imgio");
     imgc.setAttribute("src", "shoke.jpg");
    }
    function angry() {
     var imgd = document.getElementById("imgio");
     imgd.setAttribute("src", "angry.jpg");
    }
    
    function snakeeye() {
     var imgf = document.getElementById("imgio");
     imgf.setAttribute("src", "snakeeye.jpg");
    }
    
    
    function gameIntstop() {
    
 }
 
 
 function hpClose() {
  var howtoPlay = document.getElementById("howtoPlay").style.display = "none";
 }
 
 function howPlay() {
  var howtoPlay = document.getElementById("howtoPlay").style.display = "block";
 }
 