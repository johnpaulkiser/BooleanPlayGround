/* this files defines global variables and starts program execution */

var gates = []
var gate_index = -1;
var mousedown = false;
var InOutType = -1
var OutFlag = false;
var LastInputSelected = 0;
var lastClicked = null;
var win = new Frame();
win.render();
var andImg = new Image();
var orImg = new Image();
var notImg = new Image();
var norImg = new Image();
var nandImg = new Image();
var xorImg = new Image();
var cursorX;
var cursorX;
andImg.src = "images/gates/and_labeled.png";
orImg.src = "images/gates/or_labeled.png";
notImg.src = "images/gates/not_stylized.png";
norImg.src = "images/gates/nor.png";
xorImg.src = "images/gates/xor.png";
nandImg.src = "images/gates/nand.png";



var trash = {
    x: window.innerWidth / 10,
    y: window.innerHeight - window.innerHeight / 9
};

setInterval(updateGates, 500);

