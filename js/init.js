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

function wrapText(context, text, x, y, maxWidth, lineHeight) {
        var words = text.split(' ');
        var line = '';

    for(var n = 0; n < words.length; n++) {
      var testLine = line + words[n] + ' ';
        var metrics = context.measureText(testLine);
     var testWidth = metrics.width;
     if (testWidth > maxWidth && n > 0) {
     context.fillText(line, x, y);
    line = words[n] + ' ';
     y += lineHeight;
    }
    else {
        line = testLine;
    }
    }
    context.fillText(line, x, y);
}