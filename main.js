canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var mouseEvent = "empty";
var last_pos_of_x, last_pos_of_y;
color = "black";
width_of_the_line = 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_the_line = document.getElementById("width_of_the_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_pos_of_mouse_x = e.clientX-canvas.offsetLeft;
    current_pos_of_mouse_y = e.clientY-canvas.offsetTop;
    
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_the_line;

        console.log("last pos of x n y coordinates = ");
        console.log("x = " + last_pos_of_x + "y = " + last_pos_of_y);
        ctx.moveTo(last_pos_of_x, last_pos_of_y);
        
        console.log("current pos of x n y coordinates = ");
        console.log("x = " + current_pos_of_mouse_x + "y = " + current_pos_of_mouse_y);
        ctx.lineTo(current_pos_of_mouse_x, current_pos_of_mouse_y);
        ctx.stroke();
    }
    last_pos_of_x = current_pos_of_mouse_x;
    last_pos_of_y = current_pos_of_mouse_y;
    
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUP";

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
    
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height )

}