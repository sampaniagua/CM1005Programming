/*
The case of the Python Syndicate
Stage 1

Officer: 8118839
CaseNum: 301-0-83319583-8118839

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var robbie_kray_img;
var rocky_kray_img;
var cecil_karpinski_img;
var lina_lovelace_img;
var countess_hamilton_img;
var anna_karpinski_img;



//declare your new variables below
var lina_lovelace_x_coordinate = 115;
var lina_lovelace_y_coordinate = 309;
var robbie_kray_x_coordinate = 115;
var robbie_kray_y_coordinate = 40;
var rocky_kray_x_coordinate = 408;
var rocky_kray_y_coordinate = 40;
var cecil_karpinski_x_coordinate = 701;
var cecil_karpinski_y_coordinate= 40;
var countess_hamilton_x_coordinate = 408;
var countess_hamilton_y_coordinate= 309;
var anna_karpinski_x_coordinate = 701;
var anna_karpinski_y_coordinate = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_img = loadImage("krayBrothers2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	lina_lovelace_img = loadImage("lina.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_img, lina_lovelace_x_coordinate, lina_lovelace_y_coordinate);

	image(robbie_kray_img, robbie_kray_x_coordinate , robbie_kray_y_coordinate);
	image(rocky_kray_img, rocky_kray_x_coordinate, rocky_kray_y_coordinate);
	image(cecil_karpinski_img, cecil_karpinski_x_coordinate,cecil_karpinski_y_coordinate);
	image(countess_hamilton_img, countess_hamilton_x_coordinate, countess_hamilton_y_coordinate);
	image(anna_karpinski_img, anna_karpinski_x_coordinate  ,  anna_karpinski_y_coordinate);
    
    //image(robbie_kray_img, 115, 40);
	//image(rocky_kray_img, 408, 40);
	//image(cecil_karpinski_img, 701, 40);
	//image(countess_hamilton_img, 408, 309);
	//image(anna_karpinski_img, 701, 309);

}