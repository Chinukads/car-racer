var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

background_image="th (2).jpg";

rover_image="th";
rover_x=10;
rover_y=10;

rover_image="th (1).jpg";
rover_x=15;
rover_y=10;

function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;

    rover_image_tag=new Image();
    rover_image_tag.onload=uploadrover;
    rover_image_tag.src=rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_image_tag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_image_tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0)
    {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed, x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function down(){
    if(rover_y<=500)
    {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed, x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function left(){
    if(rover_x>=0)
    {
        rover_x=rover_x-10;
        console.log("when left arrow is pressed, x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadrover();
    }
    
}
function right(){
    if(rover_x<=700)
    {
        rover_x=rover_x+10;
        console.log("when right arrow is pressed, x= "+rover_x+" y= "+rover_y);
        uploadBackground();
        uploadrover();
    }
    
}

