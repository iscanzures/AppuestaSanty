var canvas, backgroundImage;

var gameState = 0;
var playerCount =0;

var database;

var form, player, game;


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
    clear();
    game.play();  
  } 
}
