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
        if(S.player.town.wood >= S.player.town.houseCostW && S.player.town.stone >= S.player.town.houseCostS){
            S.player.town.houses++;
            S.player.town.wood -= S.player.town.houseCostW;
            S.player.town.stone -= S.player.town.houseCostS;
            S.player.town.houseCostW = Math.round(S.player.town.houseCostW * 1.20);
            S.player.town.houseCostS = Math.round(S.player.town.houseCostS * 1.20);
            S.player.town.villagersMax += 3;
        }
    };

    var buyMill = new Button(620, 590, 70, 35, 'img/buy.png');
    buyMill.action = function () {
        if(S.player.town.wood >= S.player.town.millCostW && S.player.town.stone >= S.player.town.millCostS){
            S.player.town.mills++;
            S.player.town.wood -= S.player.town.millCostW;
            S.player.town.stone -= S.player.town.millCostS;
            S.player.town.millCostW = Math.round(S.player.town.millCostW * 1.20);
            S.player.town.millCostS = Math.round(S.player.town.millCostS * 1.20);
        }
    };

    var buyQuarry = new Button(620, 630, 70, 35, 'img/buy.png');
    buyQuarry.action = function () {
        if(S.player.town.wood >= S.player.town.quarryCostW && S.player.town.stone >= S.player.town.quarryCostS){
            S.player.town.quarries++;
            S.player.town.wood -= S.player.town.quarryCostW;
            S.player.town.stone -= S.player.town.quarryCostS;
            S.player.town.quarryCostW = Math.round(S.player.town.quarryCostW * 1.20);
            S.player.town.quarryCostS = Math.round(S.player.town.quarryCostS * 1.20);
        }
    };

    var farmButton = new Button(320, 400, 100, 50, 'img/farm.png');
    farmButton.action = function () {
        S.player.town.food++;
    };

    var hireButton = new Button(450, 400, 100, 50,'img/hire.png');
    hireButton.action = function () {
        if (S.player.town.food >= S.player.town.unempCost && S.player.town.villagers < S.player.town.villagersMax) {
            S.player.town.unempGather++;
            S.player.town.food -= S.player.town.unempCost;
            S.player.town.unempCost = Math.round(S.player.town.unempCost*1.15);
            S.player.town.villagers++;
        }
    };
    
    var oneButton = new Button(910, 66, 70, 32,'img/oneA.png');
    var twoButton = new Button(1000, 66, 70, 32,'img/twoA.png');
    var aboutButton = new Button(1500, 66, 70, 32,'img/aboutA.png');
    
    oneButton.action = function () { 
        if(oneButton.imgSrc == 'img/oneA.png'){
            oneButton.imgSrc = 'img/oneB.png';
            twoButton.imgSrc = 'img/twoA.png';
            aboutButton.imgSrc = 'img/aboutA.png';
            S.frame = 1;
        }
        oneButton.update();
        twoButton.update();
        aboutButton.update();
    };
    twoButton.action = function () {
        if(twoButton.imgSrc == 'img/twoA.png'){
            twoButton.imgSrc = 'img/twoB.png';
            oneButton.imgSrc = 'img/oneA.png';
            aboutButton.imgSrc = 'img/aboutA.png';
            S.frame = 2;
        }
        oneButton.update();
        twoButton.update();
        aboutButton.update();
    };
    aboutButton.action = function () {
        if(aboutButton.imgSrc == 'img/aboutA.png'){
            aboutButton.imgSrc = 'img/aboutB.png';
            oneButton.imgSrc = 'img/oneA.png';
            twoButton.imgSrc = 'img/twoA.png';
            S.frame = 99;
        }
        oneButton.update();
        twoButton.update();
        aboutButton.update();
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
    
    S.buttons.push(oneButton);
    S.buttons.push(twoButton);
    S.buttons.push(aboutButton);
}

function initTextLabels() {
    var font = '100 26px Arial';
    var color = '#434382';
   
    var gatherersLabel = new TextLabel(500, 80, "Gatherers", font, color);
    var foodLabel = new TextLabel(240,140,"Food: " + S.player.town.food,font, color);
    var foodGatherLabel = new TextLabel(540,140,S.player.town.foodGather, font, color);
    var woodLabel = new TextLabel(240,180,"Wood: " + S.player.town.wood, font, color);
    var woodGatherLabel = new TextLabel(540, 180, S.player.town.woodGather, font, color);
    var stoneLabel = new TextLabel(240,220,"Stone: " + S.player.town.stone, font, color);
    var stoneGatherLabel = new TextLabel(540, 220, S.player.town.stoneGather, font, color);

    var unempLabel = new TextLabel(350, 300, "Unemployed: ", font, color);
    var unempGatherLabel = new TextLabel(540, 300, S.player.town.unempGather, font, color);
    var unempCostLabel = new TextLabel(600, 300, "(Cost: "+ S.player.town.unempCost +")", font, color);
    
    var villagersLabel = new TextLabel(350, 340, "Villagers: ", font, color);
    var villagersMaxLabel = new TextLabel(540, 340, S.player.town.villagers+" / "+S.player.town.villagersMax, font, color);

    var houseLabel = new TextLabel(240, 580, "Houses: " + S.player.town.houses, font, color);
    var houseCostLabel = new TextLabel(380, 580, "( "+ S.player.town.houseCostW+ " W / "+S.player.town.houseCostS+ " S )", font, color);
    var millLabel = new TextLabel(240, 620, "Mills: " + S.player.town.mills, font, color);
    var millCostLabel = new TextLabel(380, 620, "( "+ S.player.town.millCostW+ " W / "+S.player.town.millCostS+ " S )", font, color);
    var quarryLabel = new TextLabel(240, 660, "Quarries: " + S.player.town.quarries, font, color);
    var quarryCostLabel = new TextLabel(380, 660, "( "+ S.player.town.quarryCostW+ " W / "+S.player.town.quarryCostS+ " S )", font, color);
    
    
    S.textLabels = [];
    
    S.textLabels.push(gatherersLabel);
    S.textLabels.push(foodLabel);
    S.textLabels.push(foodGatherLabel);
    S.textLabels.push(woodLabel);
    S.textLabels.push(woodGatherLabel);
    S.textLabels.push(stoneLabel);
    S.textLabels.push(stoneGatherLabel);
    S.textLabels.push(unempLabel);
    S.textLabels.push(unempGatherLabel);
    S.textLabels.push(unempCostLabel);
    S.textLabels.push(villagersLabel);
    S.textLabels.push(villagersMaxLabel);
    S.textLabels.push(houseLabel);
    S.textLabels.push(houseCostLabel);
    S.textLabels.push(millLabel);
    S.textLabels.push(millCostLabel);
    S.textLabels.push(quarryLabel);
    S.textLabels.push(quarryCostLabel);
}

function initEvents() {
    
    var evtIntroText = ["", "Hello!", "Welcome to Sapphire!  I am a good fairy thing.  You can tell by my cool colored eyes and smiling face and shading.  Also my beeps are rather light and higher pitches.", "But", "I am the evil fairy thing.  My eyes are red, a common theme for evil.  Also I have a more sinister mouth.  In addition, my beeps are lower.", "Goodbye", ""]; 
    var evtIntro = new Event(450, 200, false, 0, evtIntroText.length-1, evtIntroText, 0, false);

    S.events = [];
    
    S.events.push(evtIntro);

}
