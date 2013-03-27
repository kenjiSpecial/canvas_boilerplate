window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
})();

var canvas, context;
var width = window.innerWidth;
var height = window.innerHeight;


canvas = document.getElementById("myCanvas");
canvas.width = width;
canvas.height = height;

context = canvas.getContext("2d");

// example

var posx = 0
var posy = height/2;

loop();

function loop(){
    posx += 10;

    context.clearRect(0, 0, width, height);

    context.beginPath();
    context.fillStyle = "#ff0000";
    context.arc( posx, posy, 10, 0, 2*Math.PI, false);
    context.fill();
    context.closePath();

    if(posx > width + 10){
        posx = -10;
    }

    requestAnimFrame(loop);
}


// resize the window
$(window).resize(function(){

    context.clearRect(0, 0, width, height);

    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;



    posy = height/2;
});