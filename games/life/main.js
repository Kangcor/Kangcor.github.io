var game = new Phaser.Game(750, 750, Phaser.CANVAS, 'game_div', {create: create, update: update, render: render });

Point = function (i, j) {

    this.x = i*10;
    this.y = j*10;
    this.r = game.rnd.integerInRange(0, 255);
    this.g = game.rnd.integerInRange(0, 255);
    this.b = game.rnd.integerInRange(0, 255);

};


var points;

function create() {
//    p1 = new Phaser.Point(game.world.centerX, game.world.centerY);
//    p2 = new Phaser.Point(p1.x - 50, p1.y - 50);
//    p3 = new Phaser.Point(p2.x - 50, p2.y - 50);
//    p4 = new Phaser.Point(p3.x - 50, p3.y - 50);
    
    
    points = [];

    length = 75;
    height = 75;

    for (var i = 0; i < height; i++)
    {
        for (var j = 0; j < length; j++)
        {
            points.push(new Point(i, j));
    
        }
    }
}

function update() {
    for(var i = 0; i < 75*75; ++i) {
        points[i].r = (points[i].r + 1)%255;
        points[i].g = (points[i].g + 1)%255;
        points[i].b = (points[i].b + 1)%255;
    }
}

function render() {
    for(var i = 0; i < 75*75; i++) {
        
        game.context.fillStyle = 'rgb('+points[i].r+', '+points[i].g+', '+points[i].b+')';
        game.context.fillRect(points[i].x, points[i].y, 10, 10); 
        
    }

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
