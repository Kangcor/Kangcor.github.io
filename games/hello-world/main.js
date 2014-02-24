// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

// This is an array to store the different states of our game. A state is a specific scene of a game like a menu, a game over screen, etc.
var game_state = {};

// And now we define our first and only state, I'll call it 'main' 
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() {
        // Load a sprite in the game
		// Parameters: name of the sprite, path to the image
		game.load.image('hello', 'assets/hello.png');  
    },

    create: function() { 
        // Display a sprite on the screen
		// Parameters: x position, y position, name of the sprite
		this.hello_sprite = game.add.sprite(250, 300, 'hello'); 
    },

    update: function() {
        // Increase the angle of the sprite by one degree
		this.hello_sprite.angle += 1;  
    } 
}

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', game_state.main);  
game.state.start('main');  