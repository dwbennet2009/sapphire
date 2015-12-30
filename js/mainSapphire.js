// ================================================================================
// ============== GLOBAL VARIABLES
// ================================================================================
var MS_PER_SECOND = 1000;
var GATHER_TIME = MS_PER_SECOND;
var TIME = 0;

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
    this.houseCostW = 20;
    this.houseCostS = 20;
    this.mills = 0;
    this.millCostW = 10;
    this.millCostS = 30;
    this.quarries = 0;
    this.quarryCostW = 30;
    this.quarryCostS = 10;

    this.woodGather = 0;
    this.stoneGather = 0;
    this.foodGather = 0;
    this.unempGather = 0;
    this.unempCost = 20;
    
    this.villagers = 0;
    this.villagersMax = 3;

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
    this.version = 0.2;
    this.player = new Player();
    this.lastUpdate = Date.now();
    TIME = Date.now();

    this.mouse = {
        up: 0,
        down: 0
    };

    this.eventTrigger = false;
    this.frame = 1;
    
    // Add listener for mousedown
    this.canvas.addEventListener("mousedown", this.onmousedown, false);
}

Game.prototype.onmousedown = function (event) {
    var x = event.x;
    var y = event.y;

    x -= this.offsetLeft;
    y -= this.offsetTop;

    for (var i = 0; i < S.buttons.length; i++) {
        if (S.buttons[i].intersect(x, y) && S.eventTrigger==false) {
            S.buttons[i].action();
        }
    }
    if (S.eventTrigger==true)
    {
        S.events[0].count++;
        S.events[0].initTime = Date.now();
    }
}

Game.prototype.begin = function () {
    this.resize();
    
    initButtons();
    initTextLabels();
    initEvents();
    requestAnimationFrame(this.loop.bind(this));
    
   Game.prototype.checkEvents.lastBeep = TIME;
    
};

Game.prototype.loop = function () {
    requestAnimationFrame(this.loop.bind(this));

    var now = Date.now();
    var dt = now - this.lastUpdate;
    this.lastUpdate = now;
    TIME = now;

    this.clearStatus();
    this.clearLand();
    this.player.town.tick(dt);
    this.renderButtons();
    this.renderStatus();
    if(this.frame == 1) this.renderLand();
    else if(this.frame == 2) this.renderCats();
    else if(this.frame == 99) this.renderAbout();
    
    this.checkEvents();
    
};

Game.prototype.checkEvents = function () {
    if(S.player.town.food > 5 && S.events[0].status == false && S.events[0].count == 0){
        S.events[0].status = true;
        S.events[0].initTime = TIME;
        S.eventTrigger = true;
    }
    
    for (var i = 0; i < this.events.length; i++)
    {
        if(this.events[i].status == true){
            this.cxt.speech = new Image();
            if(this.events[i].count<4){
            this.cxt.speech.src = "img/messageGood.png";
            var audio = new Audio('img/beepGood.wav');
            }
            else{
            this.cxt.speech.src = "img/messageEvil.png";
            var audio = new Audio('img/beepEvil.wav');
            }
            this.cxt.drawImage(this.cxt.speech, this.events[i].x, this.events[i].y, 600, 400);
            this.events[i].doneScroll = wrapText(this.cxt, this.events[i].evtTexts[this.events[i].count],this.events[i].x + 190, this.events[i].y + 40, 370, 28, this.events[i].initTime, TIME);
            
            if((TIME - Game.prototype.checkEvents.lastBeep) >= 90 && this.events[i].doneScroll == false){
                audio.play();
                console.log("BEEP");
                Game.prototype.checkEvents.lastBeep = TIME;
            }
            
            
            if(this.events[i].count>=this.events[i].maxcount)
            {
                this.events[i].status = false;
                this.eventTrigger = false;
            }
        }
    }
};

Game.prototype.clearStatus = function () {
    this.cxt.clearRect(0, 0, 1800, 1400);
    this.cxt.fillStyle="#FFFFFF";
    this.cxt.fillRect(0,0,1800,1400);
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
    this.cxt.clearRect(900, 100, 700, 550);
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

Game.prototype.renderCats = function () {

    this.cxt.cats = new Image();
    this.cxt.cats.src = 'img/cats.png';
    this.cxt.drawImage(this.cxt.cats, 900, 100, 700, 550);
};

Game.prototype.renderAbout = function () {
    this.cxt.rect(900,100,700,550);
    this.cxt.stroke();
    var aboutTxt = "This is the about screen.  Here will be various version information, as well as save and loading buttons and setup.  Before release, developer notes will go here.";
    var versionTxt = this.title+":  Version - "+this.version;
    var fontOld = this.cxt.font;
    this.cxt.font = '100 30px Arial';
    wrapText(this.cxt, aboutTxt, 920,150,650,33);
    wrapText(this.cxt, versionTxt, 920,350,650,33);
    this.cxt.font = fontOld;
    
    
};


Game.prototype.resize = function () {
    this.canvas = document.getElementById('game');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Draw static text

    this.cxt.font = '100 22px Arial';
};
