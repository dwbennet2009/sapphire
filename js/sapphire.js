var MS_PER_SECOND = 1000;
var GATHER_TIME = MS_PER_SECOND;

function Gatherer(resource) {
    this.trips = 0;
    this.resource = resource;
}

function Town() {
    this.wood = 0;
    this.stone = 0;
    this.food = 0;
    
    this.woodGather = 0;
    this.stoneGather = 0;
    this.foodGather = 1;
    
    this.gatherClock = 0;

    this.gatherers = [];
    this.gatherers.push(new Gatherer("wood"));
}

Town.prototype.tick = function (dt) {
    this.gatherClock += dt;

    // If there is wood to be gathered, gather it
    while (this.gatherClock >= GATHER_TIME) {
        this.gatherClock -= GATHER_TIME;

        this.gatherers.forEach(function (gatherer) {
            var resource = gatherer.resource;
            gatherer.trips++;
            this[resource]++;
        }.bind(this));
    }
}

function Player() {
    this.town = new Town();
}

function Button(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.action = function(){
      alert("This button has no action");  
    };
}

Button.prototype.intersect = function(mouse_x, mouse_y) {
 
    return (mouse_x >= this.x) && (mouse_x <= this.x + this.w) && 
            (mouse_y >= this.y) && (mouse_y <= this.y + this.h);
    
}

function Game(canvas) {
    this.cxt = canvas.getContext("2d");
    this.canvas = canvas;
    
    this.title = "Sapphire";
    this.player = new Player();
    this.lastUpdate = Date.now();
    
    this.mouse = {up:0,down:0};
    
    this.canvas.addEventListener("mousedown", this.mousedown1, false);

           
}

Game.prototype.mousedown1 = function(event) {
    
    var x = event.x;
    var y = event.y;
    
    x -= this.offsetLeft;
    y -= this.offsetTop;
    
    for(var i = 0; i < S.buttons.length; i++)
    {
        if(S.buttons[i].intersect(x,y)){
            S.buttons[i].action();
        }
    }
    
    
}

Game.prototype.begin = function () {
    this.resize();
    
    var plusButton = new Button(720, 115, 35, 35);
    plusButton.img = new Image();
    plusButton.img.src = 'plus.png';
    plusButton.action = function(){
        this.player.town.foodGather++;
    }.bind(this);
    
    var minusButton = new Button(780, 115, 35, 35);
    minusButton.img = new Image();
    minusButton.img.src = 'minus.png';
    minusButton.action = function(){
        this.player.town.foodGather--;
    }.bind(this);
    
    this.buttons = [];
    
    this.buttons.push(plusButton);
    this.buttons.push(minusButton);
    
    requestAnimationFrame(this.loop.bind(this));
    
};

Game.prototype.loop = function () {
    requestAnimationFrame(this.loop.bind(this));

    var now = Date.now();
    var dt = now - this.lastUpdate;
    this.lastUpdate = now;
        
    this.clearStatus();
    this.player.town.tick(dt);
    this.renderButtons();
    this.renderStatus();
    
    
    
};

Game.prototype.clearStatus = function () {
    this.cxt.clearRect(200, 100, 500, 250);
};

Game.prototype.renderStatus = function () {
    
    
    this.cxt.fillStyle = '#434382';
    this.cxt.strokeRect(200, 100, 500, 250);

    this.cxt.fillStyle = '#434382';
    this.cxt.font = '100 26px Raleway';
    
    this.cxt.fillText("Food: " + this.player.town.food, 240, 140);
    this.cxt.fillText(this.player.town.foodGather, 540, 140);
    
    this.cxt.fillText("Wood: " + this.player.town.wood, 240, 180);
    this.cxt.fillText(this.player.town.woodGather, 540, 180);
    
    this.cxt.fillText("Stone: " + this.player.town.stone, 240, 220);
    this.cxt.fillText(this.player.town.stoneGather, 540, 220);  
    
};

Game.prototype.renderButtons = function () {
 
    for(var i = 0; i < this.buttons.length; i++){
        var button = this.buttons[i];
        this.cxt.drawImage(button.img,button.x, button.y, button.w, button.h)
    }
}

Game.prototype.resize = function () {
    this.canvas = document.getElementById('game');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    
    this.cxt.font = '100 22px Raleway';
    this.cxt.fillText("Gatherers", 500, 80);

};

$(window).resize(function () {
    S.resize();
    
});

$(document).ready(function () {
    var canvas = document.getElementById("game");

    window.S = new Game(canvas);

    S.begin();
    
});