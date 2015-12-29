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
function Event(x, y, status, count, maxcount, evtTexts) {
    this.x = x;
    this.y = y;
    
    this.status = false;
    
    this.count = count;
    this.maxcount = maxcount;
    
    this.evtTexts = evtTexts;
}