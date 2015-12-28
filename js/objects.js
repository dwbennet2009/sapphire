function initButtons() {
    var plusButtonFood = new Button(720, 110, 35, 35,'img/plus.png');
    plusButtonFood.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.foodGather++;
            S.player.town.unempGather--;
        }
    };

    var minusButtonFood = new Button(780, 110, 35, 35,'img/minus.png');
    minusButtonFood.action = function () {
        if (S.player.town.foodGather > 0) {
            S.player.town.foodGather--;
            S.player.town.unempGather++;
        }
    };

    var plusButtonWood = new Button(720, 150, 35, 35,'img/plus.png');
    plusButtonWood.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.woodGather++;
            S.player.town.unempGather--;
        }
    };

    var minusButtonWood = new Button(780, 150, 35, 35,'img/minus.png');
    minusButtonWood.action = function () {
        if (S.player.town.woodGather > 0) {
            S.player.town.woodGather--;
            S.player.town.unempGather++;
        }
    };

    var plusButtonStone = new Button(720, 190, 35, 35,'img/plus.png');
    plusButtonStone.action = function () {
        if (S.player.town.unempGather > 0) {
            S.player.town.stoneGather++;
            S.player.town.unempGather--;
        }
    };

    var minusButtonStone = new Button(780, 190, 35, 35, 'img/minus.png');
    minusButtonStone.action = function () {
        if (S.player.town.stoneGather > 0) {
            S.player.town.stoneGather--;
            S.player.town.unempGather++;
        }
    };

    var buyHouse = new Button(620, 550, 70, 35,'img/buy.png');
    buyHouse.action = function () {
        S.player.town.houses++;
    };

    var buyMill = new Button(620, 590, 70, 35, 'img/buy.png');
    buyMill.action = function () {};

    var buyQuarry = new Button(620, 630, 70, 35, 'img/buy.png');
    buyQuarry.action = function () {};

    var farmButton = new Button(320, 400, 100, 50, 'img/farm.png');

    farmButton.action = function () {
        S.player.town.food++;
    };

    var hireButton = new Button(450, 400, 100, 50,'img/hire.png');
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
}

function initTextLabels() {
    var font = '100 26px Arial';
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

function initEvents() {
    var evtIntro = new Event(300, 300, false);

    S.events = [];
    
    S.events.push(evtIntro);
}
