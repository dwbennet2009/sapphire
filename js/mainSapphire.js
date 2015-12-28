// ================================================================================
// ============== GLOBAL VARIABLES
// ================================================================================
var MS_PER_SECOND = 1000;
var GATHER_TIME = MS_PER_SECOND;

// ================================================================================
// ============== GATHERER
// ================================================================================
function Gatherer(resource) {
    this.trips = 0;
    this.resource = resource;
}

// ================================================================================
// ============== TOWN
// ================================================================================
function Town() {
    this.wood = 0;
    this.stone = 0;
    this.food = 0;

    this.houses = 0;
    this.mills = 0;
    this.quarries = 0;

    this.woodGather = 0;
    this.stoneGather = 0;
    this.foodGather = 0;
    this.unempGather = 0;

    this.gatherClock = 0;
}

Town.prototype.tick = function (dt) {
    this.gatherClock += dt;

    while (this.gatherClock >= GATHER_TIME) {
        this.gatherClock -= GATHER_TIME;

        this.food += this.foodGather;
        this.wood += this.woodGather;
        this.stone += this.stoneGather;
    }
}

// ================================================================================
// ============== PLAYER
// ================================================================================
function Player() {
    this.town = new Town();
}

Button.prototype.intersect = function (mouse_x, mouse_y) {
    return (mouse_x >= this.x) && (mouse_x <= this.x + this.w) &&
        (mouse_y >= this.y) && (mouse_y <= this.y + this.h);
}

// ================================================================================
// ============== GAME
// ================================================================================
function Game(canvas) {
    this.cxt = canvas.getContext("2d");
    this.canvas = canvas;

    this.title = "Sapphire";
    this.version = 0.001;
    this.player = new Player();
    this.lastUpdate = Date.now();

    this.mouse = {
        up: 0,
        down: 0
    };

    // Add listener for mousedown
    this.canvas.addEventListener("mousedown", this.onmousedown, false);
}

Game.prototype.onmousedown = function (event) {
    var x = event.x;
    var y = event.y;

    x -= this.offsetLeft;
    y -= this.offsetTop;

    for (var i = 0; i < S.buttons.length; i++) {
        if (S.buttons[i].intersect(x, y)) {
            S.buttons[i].action();
        }
    }
}

Game.prototype.begin = function () {
    this.resize();
    
    initButtons();
    initTextLabels();
    initEvents();
    requestAnimationFrame(this.loop.bind(this));
    
};

Game.prototype.loop = function () {
    requestAnimationFrame(this.loop.bind(this));

    var now = Date.now();
    var dt = now - this.lastUpdate;
    this.lastUpdate = now;

    this.clearStatus();
    this.clearLand();
    this.player.town.tick(dt);
    this.renderButtons();
    this.renderStatus();
    this.renderLand();
    
    this.checkEvents();
    
};

Game.prototype.checkEvents = function () {
    if(S.player.town.food > 5)
        S.events[0].status = true;
    
    for (var i = 0; i < this.events.length; i++)
    {
        if(this.events[i].status == true){
            console.log(this.events[i].x+" "+this.events[i].y);
            this.cxt.speech = new Image();
            this.cxt.speech.src = "img/speech_bubble.jpg";
            this.cxt.drawImage(this.cxt.speech, this.events[i].x, this.events[i].y, 500, 500);
        }
    }
};

Game.prototype.clearStatus = function () {
    this.cxt.clearRect(200, 100, 400, 250);
};

Game.prototype.renderStatus = function () {
    initTextLabels();
    for (var i = 0; i < this.textLabels.length; i++) {
        var textLabel = this.textLabels[i];
        this.cxt.fillStyle = textLabel.color;
        this.cxt.fillText(textLabel.txt, textLabel.x, textLabel.y);
    }
};

Game.prototype.renderButtons = function () {
    
    for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];
        this.cxt.drawImage(button.img, button.x, button.y, button.w, button.h)
    }
};

Game.prototype.clearLand = function () {
    this.cxt.clearRect(800, 100, 700, 700);
    this.cxt.clearRect(200, 520, 500, 250);
};

Game.prototype.renderLand = function () {

    this.cxt.land = new Image();
    this.cxt.land.src = 'img/land.png';
    this.cxt.drawImage(this.cxt.land, 900, 100, 700, 550);

    if (this.player.town.houses > 0 && this.player.town.houses <= 2) {
        this.cxt.houses = new Image();
        this.cxt.houses.src = 'img/house1.png';
        this.cxt.drawImage(this.cxt.houses, 1130, 470, 200, 200);
    } else if (this.player.town.houses > 2 && this.player.town.houses <= 4) {
        this.cxt.houses = new Image();
        this.cxt.houses.src = 'img/house2.png';
        this.cxt.drawImage(this.cxt.houses, 1130, 470, 200, 200);
    } else if (this.player.town.houses > 4) {
        this.cxt.houses = new Image();
        this.cxt.houses.src = 'img/house3.png';
        this.cxt.drawImage(this.cxt.houses, 1130, 470, 200, 200);
    }
};

Game.prototype.resize = function () {
    this.canvas = document.getElementById('game');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Draw static text

    this.cxt.font = '100 22px Arial';
    this.cxt.fillText("Gatherers", 500, 80);
};
