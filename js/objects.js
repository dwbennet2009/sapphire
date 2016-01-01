function initButtons() {
    var plusButtonFood = new Button(720, 110, 35, 35,'img/plus.png');
    plusButtonFood.action = function () {
        if (Gatherer["Unemployed"].amount > 0) {
            Gatherer["Food"].amount++;
            Gatherer["Unemployed"].amount--;
        }
    };

    var minusButtonFood = new Button(780, 110, 35, 35,'img/minus.png');
    minusButtonFood.action = function () {
        if (Gatherer["Food"].amount > 0) {
            Gatherer["Food"].amount--;
            Gatherer["Unemployed"].amount++;
        }
    };

    var plusButtonWood = new Button(720, 150, 35, 35,'img/plus.png');
    plusButtonWood.action = function () {
        if (Gatherer["Unemployed"].amount > 0) {
            Gatherer["Wood"].amount++;
            Gatherer["Unemployed"].amount--;
        }
    };

    var minusButtonWood = new Button(780, 150, 35, 35,'img/minus.png');
    minusButtonWood.action = function () {
        if (Gatherer["Wood"].amount > 0) {
            Gatherer["Wood"].amount--;
            Gatherer["Unemployed"].amount++;
        }
    };

    var plusButtonStone = new Button(720, 190, 35, 35,'img/plus.png');
    plusButtonStone.action = function () {
        if (Gatherer["Unemployed"].amount > 0) {
            Gatherer["Stone"].amount++;
            Gatherer["Unemployed"].amount--;
        }
    };

    var minusButtonStone = new Button(780, 190, 35, 35, 'img/minus.png');
    minusButtonStone.action = function () {
        if (Gatherer["Stone"].amount > 0) {
            Gatherer["Stone"].amount--;
            Gatherer["Unemployed"].amount++;
        }
    };

    var buyHouse = new Button(620, 550, 70, 35,'img/buy.png');
    buyHouse.action = function () {
        if(Resource["Wood"].amount >= Building["House"].getCostW() && Resource["Stone"].amount >= Building["House"].getCostS()){
            Building["House"].amount++;
            Resource["Wood"].amount -= Building["House"].getCostW();
            Resource["Stone"].amount -= Building["House"].getCostS();
            Building["House"].costW = Math.round(Building["House"].costW * 1.20);
            Building["House"].costS = Math.round(Building["House"].costS * 1.20);
            S.player.town.villagersMax += 3;
        }
    };

    var buyMill = new Button(620, 590, 70, 35, 'img/buy.png');
    buyMill.action = function () {
        if(Resource["Wood"].amount >= Building["Mill"].getCostW() && Resource["Stone"].amount >= Building["Mill"].getCostS()){
            Building["Mill"].amount++;
            Resource["Wood"].amount -= Building["Mill"].getCostW();
            Resource["Stone"].amount -= Building["Mill"].getCostS();
            Building["Mill"].costW = Math.round(Building["Mill"].costW * 1.20);
            Building["Mill"].costS = Math.round(Building["Mill"].costS * 1.20);
        }
    };

    var buyQuarry = new Button(620, 630, 70, 35, 'img/buy.png');
    buyQuarry.action = function () {
        if(Resource["Wood"].amount >= Building["Quarry"].getCostW() && Resource["Stone"].amount >= Building["Quarry"].getCostS()){
            Building["Quarry"].amount++;
            Resource["Wood"].amount -= Building["Quarry"].getCostW();
            Resource["Stone"].amount -= Building["Quarry"].getCostS();
            Building["Quarry"].costW = Math.round(Building["Quarry"].costW * 1.20);
            Building["Quarry"].costS = Math.round(Building["Quarry"].costS * 1.20);
        }
    };

    var farmButton = new Button(320, 400, 100, 50, 'img/farm.png');
    farmButton.action = function () {
        Resource["Food"].amount++;
    };

    var hireButton = new Button(450, 400, 100, 50,'img/hire.png');
    hireButton.action = function () {
        if (Resource["Food"].amount >= S.player.town.unempCost && S.player.town.villagers < S.player.town.villagersMax) {
            Gatherer["Unemployed"].amount++;
            Resource["Food"].amount -= S.player.town.unempCost;
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
    var foodLabel = new TextLabel(240,140,"Food: " + Resource["Food"].call(),font, color);
    var foodGatherLabel = new TextLabel(540,140,Gatherer["Food"].amount, font, color);
    var woodLabel = new TextLabel(240,180,"Wood: " + Resource["Wood"].amount, font, color);
    var woodGatherLabel = new TextLabel(540, 180, Gatherer["Wood"].amount, font, color);
    var stoneLabel = new TextLabel(240,220,"Stone: " + Resource["Stone"].amount, font, color);
    var stoneGatherLabel = new TextLabel(540, 220, Gatherer["Stone"].amount, font, color);

    var unempLabel = new TextLabel(350, 300, "Unemployed: ", font, color);
    var unempGatherLabel = new TextLabel(540, 300, Gatherer["Unemployed"].amount, font, color);
    var unempCostLabel = new TextLabel(600, 300, "(Cost: "+ S.player.town.unempCost +")", font, color);
    
    var villagersLabel = new TextLabel(350, 340, "Villagers: ", font, color);
    var villagersMaxLabel = new TextLabel(540, 340, S.player.town.villagers+" / "+S.player.town.villagersMax, font, color);

    var houseLabel = new TextLabel(240, 580, "Houses: " + Building["House"].getCount(), font, color);
    var houseCostLabel = new TextLabel(380, 580, "( "+ Building["House"].getCostW()+ " W / "+Building["House"].getCostS()+ " S )", font, color);
    var millLabel = new TextLabel(240, 620, "Mills: " + Building["Mill"].getCount(), font, color);
    var millCostLabel = new TextLabel(380, 620, "( "+ Building["Mill"].getCostW()+ " W / "+Building["Mill"].getCostS()+ " S )", font, color);
    var quarryLabel = new TextLabel(240, 660, "Quarries: " +Building["Quarry"].getCount(), font, color);
    var quarryCostLabel = new TextLabel(380, 660, "( "+ Building["Quarry"].getCostW()+ " W / "+Building["Quarry"].getCostS()+ " S )", font, color);
    
    
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

function initRes() {
    Resource["Food"] = new Resource("Food",0);
    Resource["Wood"] = new Resource("Wood",0);
    Resource["Stone"] = new Resource("Stone",0);   
}

function initBuildings() {
    Building["House"] = new Building("House",0,0,20,20);
    Building["Mill"] = new Building("Mill",0,0,10,30);
    Building["Quarry"] = new Building("Quarry",0,0,30,10); 
}

function initGatherers() {
    console.log("ONE");
    Gatherer["Food"] = new Gatherer("Food","Food",0);
    Gatherer["Wood"] = new Gatherer("Wood","Wood",0);
    Gatherer["Stone"] = new Gatherer("Stone","Stone",0); 
    Gatherer["Unemployed"] = new Gatherer("Unemployed","None",0); 
}

