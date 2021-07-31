class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
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
    Form.hide();
    textSize(30);
    text("Oi Oi Oi ",200,50)
  }
}
