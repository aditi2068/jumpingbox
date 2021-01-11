var canvas;
var music;
var block,ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1200,800);

    //create 4 different surfaces
    block1 = createSprite(200,600,90,20);
    block1.shapeColor = "green";

    block2 = createSprite(400,600,90,20);
    block1.shapeColor = "pink";

    block3 = createSprite(600,600,90,20);
    block3.shapeColor = "orange";

    block4 = createSprite(700,600,90,20);
    block4.shapeColor = "blue";



    //create box sprite and give velocity
    ball = createSprite(random(20,750),20,40,30);
    ball.shapeColor = "white";
}

function draw() {
    background(rgb(0,0,0));
    //create edgeSprite
    bounceoff(ball,block1,block2,block3,block4);

 

  
    //add condition to check if box touching surface and make it box
    if(box.isTouching(block1) && box.bounceoff(block1))  {
        //change color here
        ball.shapeColor = "green";
        block1 = "green";
    }
    drawSprite();
}
