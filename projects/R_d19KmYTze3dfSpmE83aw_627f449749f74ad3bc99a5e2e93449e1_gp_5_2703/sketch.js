/*

The Game Project 5 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var cloud;
var mountains;
var treePos_x;
var treePos_y;
var canyon;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    treePos_y = height/2 + 100;
    canyon = {x_pos: 150, y_pos: floorPos_y, width: 100};
    collectables = {x_pos: 85, y_pos: floorPos_y, size: 15, isFound: false};

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;

	// Initialise arrays of scenery objects.
    treePos_x = [900, 700, 350, 1150];
    collectables = [
         {x_pos: 700, y_pos: floorPos_y, size: 50, isFound: false},
         {x_pos: 900, y_pos: floorPos_y, size: 50, isFound: false},
         {x_pos: 1500, y_pos: floorPos_y, size: 50, isFound: false}
     ];
    mountains = [
        {x_pos: 400, y_pos: 200},
        {x_pos: 800, y_pos: 200},
        {x_pos: 900, y_pos: 200}
    ];
    
    cloud = [
        {x_pos: 200, y_pos: 100, width: 85}, 
        {x_pos: 400, y_pos: 100, width: 85}, 
        {x_pos: 600, y_pos: 100, width: 85}
    ];
    
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    push();
    translate(scrollPos,0);

	// Draw clouds.
      drawClouds();


	// Draw mountains.
    
    drawMountains();

	// Draw trees.
    drawTrees();
    

	// Draw canyons.
    drawCanyon();

	// Draw collectable items.
    for(var i = 0; i < collectables.lengh; i++ );
    {
        if(dist(gameChar_x, gameChar_y, collectables[i].x_pos, collectables[i].y_pos) < 25)
        {
            collectables[i].isFound = true;
        }
       else if(collectables[i].isFound == false)
        {
            drawCollectable(collectables[i]);
            
        }
          
    }
    

	// Draw game character.
	
	drawGameChar();
    
    pop();

	// Logic to make the game character move or the background scroll.
	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.

	// Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
}


// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

    if(key == 'A' || keyCode == 37)
        {
            isLeft = true;
        }

        if(key == 'D' || keyCode == 39)
        {
            isRight = true;
        }
      if(keyCode == 32)
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

        if(key == 'A' || keyCode == 37)
        {
            isLeft = false;
        }

        if(key == 'D' || keyCode == 39)
        {
            isRight = false;
        }

}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar()
{
        if(isLeft)
        {
            if(gameChar_x > width * 0.8)
            {
        gameChar_x -= 5;
        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -40, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -50, 30);
        fill(25);
        ellipse(gameChar_x - 7, gameChar_y,11);
        ellipse(gameChar_x + 5, gameChar_y,11);

            }
            else
            {
        scrollPos += 5;
        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -40, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -50, 30);
        fill(25);
        ellipse(gameChar_x - 7, gameChar_y,11);
        ellipse(gameChar_x + 5, gameChar_y,11);

            }
        }

        else if(isRight)
        {
            if(gameChar_x < width * 0.8)
            {
                gameChar_x  += 5;
                fill(255,0,255);
                rect(gameChar_x -10, gameChar_y -40, 20,35);
                fill(35,100,155);
                ellipse(gameChar_x,gameChar_y -50, 30);
                fill(25);
                ellipse(gameChar_x - 5, gameChar_y,11);
                ellipse(gameChar_x + 7, gameChar_y,11);
            }
            else
            {
        scrollPos -= 5; // negative for moving against the background
        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -40, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -50, 30);
        fill(25);
        ellipse(gameChar_x - 5, gameChar_y,11);
        ellipse(gameChar_x + 7, gameChar_y,11);
            }

        }
        else if(isRight && isFalling)
        {
            // add your jumping-right code
        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -50, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -60, 30);
        fill(25);
        ellipse(gameChar_x - 5, gameChar_y - 15,11);
        ellipse(gameChar_x + 8, gameChar_y -15,11);

        }
        else if(isLeft && isFalling)
        {
            // add your jumping-left code

        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -50, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -60, 30);
        fill(25);
        ellipse(gameChar_x - 8, gameChar_y - 15,11);
        ellipse(gameChar_x + 5, gameChar_y -15,11);


        }
        else
        {
            // add your standing front facing code

        fill(255,0,255);
        rect(gameChar_x -10, gameChar_y -40, 20,35);
        fill(35,100,155);
        ellipse(gameChar_x,gameChar_y -50, 30);
        fill(25);
        ellipse(gameChar_x - 5, gameChar_y,11);
        ellipse(gameChar_x + 5, gameChar_y,11);

        }

        if(gameChar_y < floorPos_y)
            {
                isFalling = true
                gameChar_y +=2;
            }
        else 
            {
                isFalling = false;
            }

}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.

function drawClouds()
{
for(var i = 0; i < cloud.length; i++)
   { 
    fill(255);
	ellipse(cloud[i].x_pos, cloud[i].y_pos, cloud[i].width, 85);
	ellipse(cloud[i].x_pos + 40, cloud[i].y_pos, cloud[i].width, 55);
	ellipse(cloud[i].x_pos - 40, cloud[i].y_pos, cloud[i].width, 55);
    
    fill(255);
	ellipse(cloud[i].x_pos + 220, cloud[i].y_pos, cloud[i].width, 85);
	ellipse(cloud[i].x_pos + 250, cloud[i].y_pos, cloud[i].width, 55);
	ellipse(cloud[i].x_pos + 200, cloud[i].y_pos, cloud[i].width, 55);
   }
}

// Function to draw mountains objects.

function drawMountains()
{
      for(var i = 0; i < mountains.length; i++)
    
   {    
    fill(20, 20, 20);
	triangle(mountains[i].x_pos, mountains[i].y_pos + 240, mountains[i].x_pos + 100, mountains[i].y_pos - 20, mountains[i].x_pos + 200, mountains[i].y_pos + 240);
	fill(145, 145, 145);
	triangle(mountains[i].x_pos + 75, mountains[i].y_pos + 40, mountains[i].x_pos + 100, mountains[i].y_pos - 20, mountains[i].x_pos + 125, mountains[i].y_pos + 40);
	fill(225, 225, 225);
	triangle(mountains[i].x_pos + 85, mountains[i].y_pos + 20, mountains[i].x_pos + 100, mountains[i].y_pos - 20, mountains[i].x_pos + 115, mountains[i].y_pos + 20);
	fill(20, 20, 20);
	triangle(mountains[i].x_pos + 100, mountains[i].y_pos + 240, mountains[i].x_pos + 200, mountains[i].y_pos + 40, mountains[i].x_pos + 300, mountains[i].y_pos + 240);
	fill(225, 225, 225);
	triangle(mountains[i].x_pos + 190, mountains[i].y_pos + 55, mountains[i].x_pos + 200, mountains[i].y_pos + 40, mountains[i].x_pos + 210, mountains[i].y_pos + 55);
    }
}

// Function to draw trees objects.

function drawTrees()
{
   for(var i =0; i < treePos_x.length; i++)
    {
            
    noStroke();
	fill(180, 100, 50);
	rect(treePos_x[i], treePos_y, 35, 70);
	fill(20, 130, 20);
	triangle(treePos_x[i] - 50, treePos_y + 10, treePos_x[i] + 20, treePos_y - 100, treePos_x[i] + 90, treePos_y + 10);
	fill(20, 150, 20);
	triangle(treePos_x[i] - 50, treePos_y - 30, treePos_x[i] + 20, treePos_y - 140, treePos_x[i] + 90, treePos_y - 30);
	fill(30, 170, 50);
	triangle(treePos_x[i] - 50, treePos_y - 60, treePos_x[i] + 20, treePos_y - 180, treePos_x[i] + 90, treePos_y - 60);
    }  
}


// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon()
{
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
}

// Function to check character is over a canyon.

function checkCanyon(t_canyon)
{

}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable)
{
      noFill();
            strokeWeight(6);
            stroke(220, 185, 0);
            ellipse(t_collectable.x_pos,
                   t_collectable.y_pos -20,
                   t_collectable.size,t_collectable.size);
            fill(255,0,255);
            stroke(255);
            strokeWeight(1);

}

// Function to check character has collected an item.

function checkCollectable(t_collectable)
{

}
