   /* 
   this file defines functions and eventlisteners 
   that reference elements outside of the canvas 
   */

var orClick = document.getElementById("or");
var andClick = document.getElementById("and");
var notClick = document.getElementById("not");
var norClick = document.getElementById("nor");
var nandClick = document.getElementById("nand");
var xorClick = document.getElementById("xor");


orClick.onclick = function(){
    var newOr = new Or(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, orImg);
    newOr.render();
    gates.push(newOr);  
} 
andClick.onclick = function(){
    var newAnd = new And(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, andImg);
    newAnd.render();
    gates.push(newAnd);  
}
notClick.onclick = function(){
    var newNot = new Not(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, notImg);
    newNot.render();
    gates.push(newNot); 
}
norClick.onclick = function(){
    var newNor = new Nor(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, orImg);
    newNor.render();
    gates.push(newNor); 
}
nandClick.onclick = function(){
    var newNand = new Nand(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, andImg);
    newNand.render();
    gates.push(newNand); 
}
xorClick.onclick = function(){
    var newXor = new Xor(win.ctx.canvas.width/2-50, win.ctx.canvas.height/10, win, orImg);
    newXor.render();
    gates.push(newXor); 
}

function hidePopUp() {
    document.getElementById('popUp').className = 'popUpClass2';
}