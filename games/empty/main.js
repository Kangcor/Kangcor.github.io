// We start by initializing Phaser
// Parameters: width of the game, height of the game, how to render the game, the HTML div that will contain the game
var game = new Phaser.Game(500, 600, Phaser.AUTO, 'game_div');

// This is an array to store the different states of our game. A state is a specific scene of a game like a menu, a game over screen, etc.
var game_state = {};

// And now we define our first and only state, I'll call it 'main' 
game_state.main = function() { };  
game_state.main.prototype = {

    preload: function() {
        // Everything in this function will be executed at the beginning. That’s where we usually load the game’s assets (images, sounds, etc.)
    },

    create: function() { 
        // This function will be called after the preload function. Here we set up the game, display sprites, add labels, etc.
    },

    update: function() {
        // This is where we will spend the most of our time. This function is called 60 times per second to update the game.
    } 
}

// And finally we tell Phaser to add and start our 'main' state
game.state.add('main', game_state.main);  
game.state.start('main');  