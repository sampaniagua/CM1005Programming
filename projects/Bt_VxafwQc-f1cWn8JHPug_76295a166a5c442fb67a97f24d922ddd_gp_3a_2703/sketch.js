/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRght;
var isPlummeting;
var isFalling;
var cloud;
var treePos_x;
var treePos_y;
var canyon;
var mountain;
var collectable;



function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    cloud = {x_pos: 200, y_pos: 100, width: 85};
    treePos_x = 850;
	treePos_y = height/2 - 10;
    canyon = {x_pos: 150, y_pos: floorPos_y, width: 100};
    mountain = {x_pos: 500, y_pos: 200};
    
    isLeft = false;
    isRight = false;
    isPlummeting = false; 
    isFalling = false;
    collectable = {x_pos: 85, y_pos: floorPos_y, size: 15, isFound: false};
    
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    // draw clouds
    fill(255);
	ellipse(cloud.x_pos, cloud.y_pos, cloud.width, 85);
	ellipse(cloud.x_pos + 40, cloud.y_pos, cloud.width, 55);
	ellipse(cloud.x_pos - 40, cloud.y_pos, cloud.width, 55);
    
      fill(255);
	ellipse(cloud.x_pos + 220, cloud.y_pos, cloud.width, 85);
	ellipse(cloud.x_pos + 250, cloud.y_pos, cloud.width, 55);
	ellipse(cloud.x_pos + 200, cloud.y_pos, cloud.width, 55);
    
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
    
     // collectable
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 25)
        {
            collectable.isFound = true;
        }
        
     if(collectable.isFound == false)
         
    {   
    fill(153, 200, 1);
    arc(collectable.x_pos, collectable.y_pos, 50, 50, 150, PI + HALF_PI, PIE);
	fill(0);
	ellipse(collectable.x_pos + 15, collectable.y_pos, 5, 5);
    }

    
       // canyon
//    if(dist(gameChar_x, gameChar_y, canyon.x_pos, canyon.y_pos) < 25)
      if(gameChar_x <= canyon.x_pos + 100 && gameChar_y >= canyon.y_pos && gameChar_x > canyon.x_pos)
             
        {
            isPlummeting = true;
            gameChar_y += 2;
        }
    else 
    {
        
        isPlummeting = false;
        
    }
    noStroke();
	fill(100, 155, 255);
	rect(canyon.x_pos, canyon.y_pos, canyon.width, 200);
    
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

	//draw the canyon


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        
    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -50, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -60, 30);
    fill(25);
    ellipse(gameChar_x - 8, gameChar_y - 15,11);
    ellipse(gameChar_x + 5, gameChar_y -15,11);


	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -50, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -60, 30);
    fill(25);
    ellipse(gameChar_x - 5, gameChar_y - 15,11);
    ellipse(gameChar_x + 8, gameChar_y -15,11);

	}
	else if(isLeft)
	{
		// add your walking left code


      
        //Add your code here ...
    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -40, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -50, 30);
    fill(25);
    ellipse(gameChar_x - 7, gameChar_y,11);
    ellipse(gameChar_x + 5, gameChar_y,11);


	}
	else if(isRight)
	{
		// add your walking right code

    
     fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -40, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -50, 30);
    fill(25);
    ellipse(gameChar_x - 5, gameChar_y,11);
    ellipse(gameChar_x + 7, gameChar_y,11);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code

     
    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -50, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -60, 30);
    fill(25);
    ellipse(gameChar_x - 7, gameChar_y - 15,11);
    ellipse(gameChar_x + 7, gameChar_y -15,11);

        
        

	}
	else
	{
		// add your standing front facing code

    fill(255,200,100);
    rect(gameChar_x -10, gameChar_y -40, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -50, 30);
    fill(25);
    ellipse(gameChar_x - 5, gameChar_y,11);
    ellipse(gameChar_x + 5, gameChar_y,11);

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    
    if(isLeft == true)
        {
            gameChar_x -=3;
        }
    if(isRight == true)
        {
            gameChar_x += 3;
        }
//    if(isFalling  == true)
//        {
//           if (gameChar_y < floorPos_y)
//            gameChar_y -= 100;
//            else if (gameChar_y > floorPos_y)
//            gameChar_y += 100;
//               
//        }
    if(gameChar_y < floorPos_y)
        {
            isFalling = true
            gameChar_y +=2;
        }
    else 
        {
            isFalling = false;
        }
//    if(gameChar_x < canyon.x_pos)
//        {
//            isPlummeting = true;
//            gameChar_y +=2;
//        }
//    else{
//        isPlummeting = false;
//    }


}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    
    if(keyCode == 37)
        {
            console.log("left arrow");
            isLeft = true;
        }
    else if(keyCode == 39)
        {
            console.log("right arrow");
            isRight = true;
        }
    else if(keyCode == 32)
        {
           if (gameChar_y == floorPos_y)
               {
                   console.log("spacebar");
                   gameChar_y -=100;
               }
        }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    
    if(keyCode == 37)
        {
            console.log("left arrow");
            isLeft = false;
        }
    else if(keyCode == 39)
        {
            console.log("right arrow");
            isRight = false;
        }
//    else if(keyCode == 32)
//        console.log("space bar");
//        isFalling = false;
}
