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
      rayomcqueen=createSprite
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
  }
}
