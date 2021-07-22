var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var scene;
var clouds;

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 150,
		y: groundHeight + 20,
		trunkWidth: 40,
		trunkHeight: 150,
		canopyWidth: 50,
		canopyHeight: 255
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    scene = {
		x: 1,
		y: 1,
		height: 700,
		width: 800
	};
    
     clouds = {
		x: 1,
		y: 1,
		height: 50,
		width: 100
	};
    
    //TASK: intialise a moon object with an extra property for brightness


	//set the initial darkness
	darkness = -25;
}



function draw()
{
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(150, 200, 255);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, sun.y, sun.diameter);
    sun.y = sun.y + 1;
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour

	//draw the ground and make it green
	fill(70, 200, 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(120);
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //TASK: You can draw the tree yourself
    fill(102,51,0);
    rect(tree.x,tree.y,tree.canopyWidth,tree.canopyHeight);
    fill(51,102,0);
    ellipse(tree.x + 20,tree.y - 6, 175);
    
      // clouds
    
    fill(255,255,255);
    ellipse(clouds.x, clouds.y + 25, 115 );
    ellipse(clouds.x + 75, clouds.y + 50, 100 );
    ellipse(clouds.x + 100, clouds.y + 50, 115 );
    ellipse(clouds.x + 175, clouds.y + 50, 125 );
    clouds.x = clouds.x +1;
    

	//TASK: make the scene dark by drawing a rectangle that covers the whole canvas.
	//Use the alpha value of fill to determine how dark to make it
    fill(0,0,0,darkness);
    rect(scene.x,scene.y,scene.width,scene.height);
    darkness = darkness + 0.5;
    
    



}