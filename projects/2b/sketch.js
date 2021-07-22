/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    
	treePos_x = width/2;
	treePos_y = height/2 - 10;
    
    canyon = {x_pos: 0, width: 100};
	collectable = {x_pos: 110, y_pos: 380, size: 50};
	mountain = {x_pos: 280, y_pos: 200};
	cloud = {x_pos: 200, y_pos: 100, width: 85};
   
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); //draw some green ground
    
    // game character
    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -40, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -50, 30);
    fill(25);
    ellipse(gameChar_x - 5, gameChar_y,11);
    ellipse(gameChar_x + 5, gameChar_y,11);
    
	// tree
	noStroke();
	fill(180, 100, 50);
	// rect(800, 280, 35, 155);
	rect(treePos_x, treePos_y, 35, 155);
	fill(20, 130, 20);
	triangle(treePos_x - 50, treePos_y + 10, treePos_x + 20, treePos_y - 100, treePos_x + 90, treePos_y + 10);
	fill(20, 150, 20);
	triangle(treePos_x - 50, treePos_y - 30, treePos_x + 20, treePos_y - 140, treePos_x + 90, treePos_y - 30);
	fill(30, 170, 50);
	triangle(treePos_x - 50, treePos_y - 60, treePos_x + 20, treePos_y - 180, treePos_x + 90, treePos_y - 60);
    
    
    // draw clouds
    fill(255);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.width, 85);
	ellipse(cloud.x_pos + 40, cloud.y_pos, cloud.width, 55);
	ellipse(cloud.x_pos - 40, cloud.y_pos, cloud.width, 55);
    
 // mountain
	fill(20, 20, 20);
	triangle(mountain.x_pos, mountain.y_pos + 240, mountain.x_pos + 100, mountain.y_pos - 20, mountain.x_pos + 200, mountain.y_pos + 240);
	fill(145, 145, 145);
	triangle(mountain.x_pos + 75, mountain.y_pos + 40, mountain.x_pos + 100, mountain.y_pos - 20, mountain.x_pos + 125, mountain.y_pos + 40);
	fill(225, 225, 225);
	triangle(mountain.x_pos + 85, mountain.y_pos + 20, mountain.x_pos + 100, mountain.y_pos - 20, mountain.x_pos + 115, mountain.y_pos + 20);
	fill(20, 20, 20);
	triangle(mountain.x_pos + 100, mountain.y_pos + 240, mountain.x_pos + 200, mountain.y_pos + 40, mountain.x_pos + 300, mountain.y_pos + 240);
	fill(225, 225, 225);
	triangle(mountain.x_pos + 190, mountain.y_pos + 55, mountain.x_pos + 200, mountain.y_pos + 40, mountain.x_pos + 210, mountain.y_pos + 55);
    
    // canyon
    noStroke();
	fill(100, 155, 255);
	rect(canyon.x_pos, 400, canyon.width, 200);
    
    // collectable
    fill(153, 153, 1);
    arc(collectable.x_pos + 40, collectable.y_pos + 20, 80, 80, 150, PI + HALF_PI, PIE);
	fill(0);
	ellipse(collectable.x_pos + 20, collectable.y_pos, 10, 10);

	

}

function mousePressed()
{
gameChar_x = mouseX;
gameChar_y = mouseY;    

}
