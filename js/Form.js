class Form {
  constructor() {
    this. title = createElement('h2')
    this. hula = createElement('h2')
  
    
    this. input = createInput("Name");
    this. button = createButton('Play');
    
  }
hide(){
  this.title.hide();
  this.input.hide();
  this.button.hide();
}
  display(){
    
    this.title.html("Juego de Carreras de Autos");
    this.title.position(130, 0);
  
    
   this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount
      player.update()
      player.updateCount(playerCount);
      console.log(playerCount);
      this.hula.html("hula " + player.name )
     this.hula.position(130, 160)
    });

  }
}
