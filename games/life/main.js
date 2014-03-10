var game = new Phaser.Game(750, 750, Phaser.CANVAS, 'game_div', {create: create, update: update, render: render });

var aPoint = Array({
    'x': 3, 
    'y': 4,
    'doStuff': function() {
    alert(this.a + this.b);
  }
});
function create() {
//    p1 = new Phaser.Point(game.world.centerX, game.world.centerY);
//    p2 = new Phaser.Point(p1.x - 50, p1.y - 50);
//    p3 = new Phaser.Point(p2.x - 50, p2.y - 50);
//    p4 = new Phaser.Point(p3.x - 50, p3.y - 50);
    for(var i = 0; i < 150*150; ++i) {
        aPoint[i].x = i*5;
        aPoint[i].y = i*5;
    }
}

function update() {

}

function render() {

    game.context.fillStyle = 'rgb(255, 0, 0)';
    game.context.fillRect(aPoint[0].x, aPoint[0].y, 5, 5); 
    

//    game.context.strokeStyle = 'rgb(0,255,255)';
//    game.context.beginPath();
//    game.context.moveTo(p1.x, p1.y);
//    game.context.lineTo(p2.x, p2.y);
//    game.context.lineTo(p3.x, p3.y);
//    game.context.lineTo(p4.x, p4.y);
//    game.context.stroke();
//    game.context.closePath();

//    game.context.fillStyle = 'rgb(255,255,0)';
//    game.context.fillRect(p1.x, p1.y, 4, 4);

//    game.context.fillStyle = 'rgb(255,0,0)';
//    game.context.fillRect(p2.x, p2.y, 4, 4);

//    game.context.fillStyle = 'rgb(0,255,0)';
//    game.context.fillRect(p3.x, p3.y, 4, 4);

//    game.context.fillStyle = 'rgb(255,0,255)';
//    game.context.fillRect(p4.x, p4.y, 4, 4);

}
