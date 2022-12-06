class Ninja {
    constructor(name, health){
    this.name = name;
    this.health = health;
    this.speed = 3;
    this.strength = 3;

    }

    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
    }

}

// const myninja = new Ninja("John", 70);
// myninja.sayName();
// myninja.showStats();
// myninja.drinkSake();
// myninja.showStats();

class Sensei extends Ninja {
    constructor(name) {
        super(name, 200, 10, 10);
        this.wisdom = 10;
        
    }
    speakWisdom(){
        this.drinkSake();
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();