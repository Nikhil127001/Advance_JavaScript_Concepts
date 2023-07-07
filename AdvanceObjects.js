// Initialization
class Player{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

   Introduce(){
    console.log(`hii my name is ${this.name} and my type is ${this.type}`);
  }
}

class Wizard extends Player{
    constructor(name, type){
        super(name, type);
    }

    play(){
        console.log(`runnning ${this.type}`);
    }
}


 const Wizard1 = new Wizard("sheffy", "healer");
 const Wizard2 = new Wizard("Ronny", "king");

 Wizard1.Introduce();
 Wizard2.Introduce();
 Wizard1.play();
 Wizard2.play();