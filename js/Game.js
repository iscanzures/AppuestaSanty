class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  updateState(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
  if(gameState===0){
    player = new Player();

    var pcr=await database.ref('playerCount').once('value');
    if(pcr.exists()){
      playerCount=pcr.val();
      player.getCount();
      rayomcqueen=createSprite(410,700,20,20)
      franchisco=createSprite(550,700,20,20)

      rayomcqueen.addImage(elmasrapido);
      franchisco.addImage(virgollini);
      lospits=[rayomcqueen,franchisco];
    }

    player.getCount();
     form = new Form()
     form.display();
  }

    
  }
  play (){
    form.hide();
    textSize(30);
    text("1, 2, 3 ",200,50)
    Player.getPlayerInfo();
    if(participantes!=undefined){
      var displayPos=150;
      background("red")
      image(pista,0,-displayHeight*3,displayWidth,displayHeight*10)
      var index=0;
      var x=195
      var y;
      for(var plr in participantes)
      { if (plr === "player" + player.index)
       fill("red")
        else fill("black");
       text(participantes [plr].name + participantes [plr].distance, 200, displayPos) 
       displayPos += 30; index += 1;
        x += 225;
         y =displayHeight - participantes [plr].distance;
          lospits[index-1].x = x;
           lospits[index-1].y = y;
            if(index === player.index)
            { stroke(7)
               fill("#18adb5")
                ellipse(x, y, 70, 70);
                 camera.position.x = displayWidth/2;
                  camera.position.y = lospits[index-1].y;
                 } }
    }
  }
}
