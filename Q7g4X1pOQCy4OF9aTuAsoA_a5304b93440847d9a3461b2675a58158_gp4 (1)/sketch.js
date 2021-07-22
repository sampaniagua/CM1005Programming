



var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var cloud;
var mountains;
var trees_x;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
//    cloud = {x_pos: 200, y_pos: 100, width: 85};
	treePos_y = height/2 - 10;
    canyon = {x_pos: 150, y_pos: floorPos_y, width: 100};
//    mountain = {x_pos: 500, y_pos: 200};

    
    isLeft = false;
    isRight = false;
    isPlummeting = false; 
    isFalling = false;
    collectable = {x_pos: 85, y_pos: floorPos_y, size: 15, isFound: false};

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    
    treePos_x = [850, 750, 650, 1050];
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
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground
    
    push();
    translate(scrollPos,0);

	// Draw clouds.
    
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
    

	// Draw mountains.
    
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

	// Draw trees.
    
    for(var i =0; i < treePos_x.length; i++)
        {
            
    noStroke();
	fill(180, 100, 50);
	rect(treePos_x[i], treePos_y, 35, 155);
	fill(20, 130, 20);
	triangle(treePos_x[i] - 50, treePos_y + 10, treePos_x[i] + 20, treePos_y - 100, treePos_x[i] + 90, treePos_y + 10);
	fill(20, 150, 20);
	triangle(treePos_x[i] - 50, treePos_y - 30, treePos_x[i] + 20, treePos_y - 140, treePos_x[i] + 90, treePos_y - 30);
	fill(30, 170, 50);
	triangle(treePos_x[i] - 50, treePos_y - 60, treePos_x[i] + 20, treePos_y - 180, treePos_x[i] + 90, treePos_y - 60);
        }
    
   

	// Draw canyons
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

	// Draw collectable items
    
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
    
    pop();


	// Draw the game character - this must be last

	//////// Game character logic ///////
	// Logic to move
    
    if(isLeft && isFalling)
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
	else if(isLeft)
	{
		// add your walking left code


      
        //Add your code here ...
    fill(255,0,255);
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

    
     fill(255,0,255);
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

     
    fill(255,0,255);
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

    fill(255,0,255);
    rect(gameChar_x -10, gameChar_y -40, 20,35);
    fill(35,100,155);
    ellipse(gameChar_x,gameChar_y -50, 30);
    fill(25);
    ellipse(gameChar_x - 5, gameChar_y,11);
    ellipse(gameChar_x + 5, gameChar_y,11);

	}

//	if(isLeft)
//	{
//		else if(gameChar_x > width * 0.2)
//		{
//			gameChar_x -= 5;
//		}
//		else
//		{
//			scrollPos += 5;
//		}
//	}
//
//	if(isRight)
//	{
//		if(gameChar_x < width * 0.8)
//		{
//			gameChar_x  += 5;
//		}
//		else
//		{
//			scrollPos -= 5; // negative for moving against the background
//		}
//
//	}
//}
    
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

//function keyPressed()
//{
//
//	if(key == 'A' || keyCode == 37)
//	{
//		isLeft = true;
//	}
//
//	if(key == 'D' || keyCode == 39)
//	{
//		isRight = true;
//	}
//
//}
//
//function keyReleased()
//{
//	if(key == 'A' || keyCode == 37)
//	{
//		isLeft = false;
//	}
//
//	if(key == 'D' || keyCode == 39)
//	{
//		isRight = false;
//	}
//}

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