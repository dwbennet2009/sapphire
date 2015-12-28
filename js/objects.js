function initButtons() {
    
<<<<<<< HEAD
<<<<<<< HEAD
    var plusButtonFood = new Button(720, 110, 35, 35, 'img/plus.png');
=======
    var plusButtonFood = new Button(720, 110, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var plusButtonFood = new Button(720, 110, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    plusButtonFood.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.foodGather++;
            S.player.town.unempGather--;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var minusButtonFood = new Button(780, 110, 35, 35, 'img/minus.png');
=======
    var minusButtonFood = new Button(780, 110, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var minusButtonFood = new Button(780, 110, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    minusButtonFood.action = function () {
        if (S.player.town.foodGather > 0) {
            S.player.town.foodGather--;
            S.player.town.unempGather++;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var plusButtonWood = new Button(720, 150, 35, 35, 'img/plus.png');
=======
    var plusButtonWood = new Button(720, 150, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var plusButtonWood = new Button(720, 150, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    plusButtonWood.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.woodGather++;
            S.player.town.unempGather--;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var minusButtonWood = new Button(780, 150, 35, 35, 'img/minus.png');
=======
    var minusButtonWood = new Button(780, 150, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var minusButtonWood = new Button(780, 150, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    minusButtonWood.action = function () {
        if (S.player.town.woodGather > 0) {
            S.player.town.woodGather--;
            S.player.town.unempGather++;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var plusButtonStone = new Button(720, 190, 35, 35, 'img/plus.png');
=======
    var plusButtonStone = new Button(720, 190, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var plusButtonStone = new Button(720, 190, 35, 35,'img/plus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    plusButtonStone.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.stoneGather++;
            S.player.town.unempGather--;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var minusButtonStone = new Button(780, 190, 35, 35, 'img/minus.png');
=======
    var minusButtonStone = new Button(780, 190, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var minusButtonStone = new Button(780, 190, 35, 35,'img/minus.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    minusButtonStone.action = function () {
        if (S.player.town.stoneGather > 0) {
            S.player.town.stoneGather--;
            S.player.town.unempGather++;
        }
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var buyHouse = new Button(620, 550, 70, 35, 'img/buy.png');
=======
    var buyHouse = new Button(620, 550, 70, 35,'img/buy.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var buyHouse = new Button(620, 550, 70, 35,'img/buy.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    buyHouse.action = function () {
        S.player.town.houses++;
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var buyMill = new Button(620, 590, 70, 35, 'img/buy.png');
    buyMill.action = function () {};

    var buyQuarry = new Button(620, 630, 70, 35, 'img/buy.png');
    buyQuarry.action = function () {};

    var farmButton = new Button(320, 400, 100, 50, 'img/farm.png');
=======
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    var buyMill = new Button(620, 590, 70, 35,'img/buy.png');
    buyMill.action = function () {};

    var buyQuarry = new Button(620, 630, 70, 35,'img/buy.png');
    buyQuarry.action = function () {};

    var farmButton = new Button(320, 400, 100, 50,'img/farm.png');
<<<<<<< HEAD
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    farmButton.action = function () {
        S.player.town.food++;
    };

<<<<<<< HEAD
<<<<<<< HEAD
    var hireButton = new Button(450, 400, 100, 50, 'img/hire.png');
=======
    var hireButton = new Button(450, 400, 100, 50,'img/hire.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
    var hireButton = new Button(450, 400, 100, 50,'img/hire.png');
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    hireButton.action = function () {
        if (S.player.town.food >= 20) {
            S.player.town.unempGather++;
            S.player.town.food -= 20;
        }
    };

    S.buttons = [];

    S.buttons.push(plusButtonFood);
    S.buttons.push(minusButtonFood);
    S.buttons.push(plusButtonWood);
    S.buttons.push(minusButtonWood);
    S.buttons.push(plusButtonStone);
    S.buttons.push(minusButtonStone);
    S.buttons.push(buyHouse);
    S.buttons.push(buyMill);
    S.buttons.push(buyQuarry);
    S.buttons.push(farmButton);
    S.buttons.push(hireButton);
    
<<<<<<< HEAD
<<<<<<< HEAD
}

function initTextLabels() {
    
    var font = '100 26px Arial';
=======
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
};

function initTextLabels() {
    
    var font = '100 26px Raleway';
<<<<<<< HEAD
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
    var color = '#434382';

   
    var foodLabel = new TextLabel(240,140,"Food: " + S.player.town.food,font, color);
    var foodGatherLabel = new TextLabel(540,140,S.player.town.foodGather, font, color);
    var woodLabel = new TextLabel(240,180,"Wood: " + S.player.town.wood, font, color);
    var woodGatherLabel = new TextLabel(540, 180, S.player.town.woodGather, font, color);
    var stoneLabel = new TextLabel(240,220,"Stone: " + S.player.town.stone, font, color);
    var stoneGatherLabel = new TextLabel(540, 220, S.player.town.stoneGather, font, color);

    var unempLabel = new TextLabel(350, 300, "Villagers: ", font, color);
    var unempGatherLabel = new TextLabel(540, 300, S.player.town.unempGather, font, color);

    var houseLabel = new TextLabel(240, 580, "Houses: " + S.player.town.houses, font, color);
    var millLabel = new TextLabel(240, 620, "Mills: " + S.player.town.mills, font, color);
    var quarryLabel = new TextLabel(240, 660, "Quarries: " + S.player.town.quarries, font, color);
    
    
    S.textLabels = [];
    
    S.textLabels.push(foodLabel);
    S.textLabels.push(foodGatherLabel);
    S.textLabels.push(woodLabel);
    S.textLabels.push(woodGatherLabel);
    S.textLabels.push(stoneLabel);
    S.textLabels.push(stoneGatherLabel);
    S.textLabels.push(unempLabel);
    S.textLabels.push(unempGatherLabel);
    S.textLabels.push(houseLabel);
    S.textLabels.push(millLabel);
    S.textLabels.push(quarryLabel);
    
    
}
<<<<<<< HEAD
<<<<<<< HEAD

function initEvents() {

    var evtIntro = new Event(300, 300, false);

    
    S.events = [];
    
    S.events.push(evtIntro);

}
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
=======
>>>>>>> 8fed4c300363e1d933a0a45d0c958639f2784e44
