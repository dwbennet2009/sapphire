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

// ================================================================================
// ============== BUTTON
// ================================================================================
function Button(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.action = function () {
        alert("This button has no action");
    };
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

    var plusButtonFood = new Button(720, 110, 35, 35);
    plusButtonFood.img = new Image();
    plusButtonFood.img.src = 'img/plus.png';
    plusButtonFood.action = function () {
        if (this.player.town.unempGather > 0) {
            this.player.town.foodGather++;
            this.player.town.unempGather--;
        }
    }.bind(this);

    var minusButtonFood = new Button(780, 110, 35, 35);
    minusButtonFood.img = new Image();
    minusButtonFood.img.src = 'img/minus.png';
    minusButtonFood.action = function () {
        if (this.player.town.foodGather > 0) {
            this.player.town.foodGather--;
            this.player.town.unempGather++;
        }
    }.bind(this);

    var plusButtonWood = new Button(720, 150, 35, 35);
    plusButtonWood.img = new Image();
    plusButtonWood.img.src = 'img/plus.png';
    plusButtonWood.action = function () {
        if (this.player.town.unempGather > 0) {
            this.player.town.woodGather++;
            this.player.town.unempGather--;
        }
    }.bind(this);

    var minusButtonWood = new Button(780, 150, 35, 35);
    minusButtonWood.img = new Image();
    minusButtonWood.img.src = 'img/minus.png';
    minusButtonWood.action = function () {
        if (this.player.town.woodGather > 0) {
            this.player.town.woodGather--;
            this.player.town.unempGather++;
        }
    }.bind(this);

    var plusButtonStone = new Button(720, 190, 35, 35);
    plusButtonStone.img = new Image();
    plusButtonStone.img.src = 'img/plus.png';
    plusButtonStone.action = function () {
        if (this.player.town.unempGather > 0) {
            this.player.town.stoneGather++;
            this.player.town.unempGather--;
        }
    }.bind(this);

    var minusButtonStone = new Button(780, 190, 35, 35);
    minusButtonStone.img = new Image();
    minusButtonStone.img.src = 'img/minus.png';
    minusButtonStone.action = function () {
        if (this.player.town.stoneGather > 0) {
            this.player.town.stoneGather--;
            this.player.town.unempGather++;
        }
    }.bind(this);

    var buyHouse = new Button(620, 550, 70, 35);
    buyHouse.img = new Image();
    buyHouse.img.src = 'img/buy.png';
    buyHouse.action = function () {
        this.player.town.houses++;
    }.bind(this);

    var buyMill = new Button(620, 590, 70, 35);
    buyMill.img = new Image();
    buyMill.img.src = 'img/buy.png';
    buyMill.action = function () {}.bind(this);

    var buyQuarry = new Button(620, 630, 70, 35);
    buyQuarry.img = new Image();
    buyQuarry.img.src = 'img/buy.png';
    buyQuarry.action = function () {}.bind(this);

    var farmButton = new Button(320, 400, 100, 50);
    farmButton.img = new Image();
    farmButton.img.src = 'img/farm.png';
    farmButton.action = function () {
        this.player.town.food++;
    }.bind(this);

    var hireButton = new Button(450, 400, 100, 50);
    hireButton.img = new Image();
    hireButton.img.src = 'img/hire.png';
    hireButton.action = function () {
        if (this.player.town.food >= 20) {
            this.player.town.unempGather++;
            this.player.town.food -= 20;
        }
    }.bind(this);

    this.buttons = [];

    this.buttons.push(plusButtonFood);
    this.buttons.push(minusButtonFood);
    this.buttons.push(plusButtonWood);
    this.buttons.push(minusButtonWood);
    this.buttons.push(plusButtonStone);
    this.buttons.push(minusButtonStone);
    this.buttons.push(buyHouse);
    this.buttons.push(buyMill);
    this.buttons.push(buyQuarry);
    this.buttons.push(farmButton);
    this.buttons.push(hireButton);

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
};

Game.prototype.clearStatus = function () {
    this.cxt.clearRect(200, 100, 400, 250);
};

Game.prototype.renderStatus = function () {
    // Text style
    this.cxt.fillStyle = '#434382';
    this.cxt.strokeRect(200, 100, 500, 250);

    // Gatherers
    this.cxt.font = '100 26px Raleway';

    this.cxt.fillText("Food: " + this.player.town.food, 240, 140);
    this.cxt.fillText(this.player.town.foodGather, 540, 140);
    this.cxt.fillText("Wood: " + this.player.town.wood, 240, 180);
    this.cxt.fillText(this.player.town.woodGather, 540, 180);
    this.cxt.fillText("Stone: " + this.player.town.stone, 240, 220);
    this.cxt.fillText(this.player.town.stoneGather, 540, 220);
    this.cxt.fillText("Unemployed: ", 350, 300);
    this.cxt.fillText(this.player.town.unempGather, 540, 300);

    // Buildings
    this.cxt.strokeRect(200, 520, 400, 250);

    this.cxt.fillText("Houses: " + this.player.town.houses, 240, 580);
    this.cxt.fillText("Mills: " + this.player.town.mills, 240, 620);
    this.cxt.fillText("Quarries: " + this.player.town.quarries, 240, 660);
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

Game.prototype.renderButtons = function () {
    for (var i = 0; i < this.buttons.length; i++) {
        var button = this.buttons[i];
        this.cxt.drawImage(button.img, button.x, button.y, button.w, button.h)
    }
};

Game.prototype.resize = function () {
    this.canvas = document.getElementById('game');
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    // Draw static text
    this.cxt.font = '100 22px Raleway';
    this.cxt.fillText("Gatherers", 500, 80);
};

// ================================================================================
// ============== INITIALIZATION
// ================================================================================
$(window).resize(function () {
    S.resize();
});

$(document).ready(function () {
    var canvas = document.getElementById("game");
    window.S = new Game(canvas);
    document.title = S.title + " " + S.version;

    S.begin();
});