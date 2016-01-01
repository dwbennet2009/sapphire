// ================================================================================
// ============== BUTTON
// ================================================================================
function Button(x, y, w, h, imgSrc) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.imgSrc = imgSrc;
    
    this.img = new Image();
    this.img.src = imgSrc;

    this.action = function () {
        alert("This button has no action");
    };
    this.update = function () {
        this.img.src = this.imgSrc;
    }
}

// ================================================================================
// ============== Text Label
// ================================================================================
function TextLabel(x, y, txt, font, color) {
    this.x = x;
    this.y = y;
    
    this.txt = txt;
    this.font = font;
    this.color = color;
    
    this.update = function() {
        this.txt = txt;   
    }
}


// ================================================================================
// ============== Events
// ================================================================================
function Event(x, y, status, count, maxcount, evtTexts, initTime, doneScroll) {
    this.x = x;
    this.y = y;
    
    this.status = false;
    
    this.count = count;
    this.maxcount = maxcount;
    
    this.evtTexts = evtTexts;
    
    this.initTime = initTime;
    
    this.doneScroll = doneScroll;
}

// ================================================================================
// ============== Resource
// ================================================================================
function Resource(name, amount) {
    this.name = name;
    this.amount = amount;
    
    this.call = function () {
        return this.amount;
    };

}

// ================================================================================
// ============== Resource
// ================================================================================
function Building(name, amount, costF, costW, costS){
    this.name = name;
    this.amount = amount;
    this.costF = costF;
    this.costW = costW;
    this.costS = costS;
    
    this.getCount = function () {
        return this.amount;
    };
    
    this.getCostF = function () {
        return this.costF;
    };
    
    this.getCostW = function () {
        return this.costW;
    };
    
    this.getCostS = function () {
        return this.costS;
    }; 

}

// ================================================================================
// ============== Gatherers
// ================================================================================
function Gatherer(name, resource, amount){
    this.name = name;
    this.resource = resource;
    this.amount = amount;
}