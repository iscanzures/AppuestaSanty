var canvas, backgroundImage;

var gameState = 0;
var playerCount =0;

var database;

var form, player, game;

var pista
var rayomcqueen,elmasrapido
var franchisco,virgollini
var mate,troca
var sheriff,elmaschido
var lospits=[]
var participantes

function preload(){
  elmasrapido=loadImage("../images/car3.png");
  virgollini=loadImage("../images/car2.png");
  troca=loadImage("../images/car4.png");
  elmaschido=loadImage("../images/car1.png");
  pista=loadImage("../images/track.png");
}

function setup(){
  canvas = createCanvas(displayWidth-70,displayHeight-80);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw()
{
  if(playerCount===2){
    game.updateState(1) 
  } 
  if(gameState===1){
    clear();
    game.play(); 

  }
  if(gameState===2){
    game.end();
  }
  drawSprites();
}
                   