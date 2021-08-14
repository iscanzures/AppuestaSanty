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
  
      player = new Player();
      
     player.getCount();
      form = new Form()
      form.display();
    
  }
  play (){
    form.hide();
    textSize(30);
    text("1, 2, 3 ",200,50)
  }
}
