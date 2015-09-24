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