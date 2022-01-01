// /** @type {Phaser.Physics.Arcade.StaticGroup} */
// // var music;
// var spacebar;

// input = "Xinchao"
var x = 150, y = 660
var checkButton;
var validText;
var ans1;
var a1;
var s2;
var arrow;
// var List = [
// 	{'q', 395,y: 535},
// 	{char:'u',x: 395,y: 535},
//  ]
	
class scene2 extends Phaser.Scene{
	constructor(){
		super('playGame');
	}

	preload(){
        this.load.image('bgg','assets/bg7.png');
		

	}

	create(){
		this.add.image(610, 350, 'bgg');
		

			
	}
	update() {	

	}	
}

  
 