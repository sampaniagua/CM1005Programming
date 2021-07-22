/*
The case of the Python Syndicate
Stage 1

Officer: 8118839
CaseNum: 301-0-97603523-8118839

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
var cecilKarpinskiImage;
var annaKarpinskiImage;
var linaLovelaceImage;
var bonesKarpinskiImage;
var robbieKrayImage;
var countessHamiltonImage;



//declare your new variables below
var bonesKarpinskiXLoc = 115;
var bonesKarpinskiYLoc = 309;
var cecilKarpinskiXLoc =115;
var cecilKarpinskiYLoc = 40;
var annaKarpinskiXLoc = 408;
var annaKarpinskiYLoc = 40;
var linaLovelaceXLoc = 701;
var linaLovelaceYLoc = 40;
var robbieKrayXLoc = 408;
var robbieKrayYLoc = 309;
var countessHamiltonXLoc = 701;
var countessHamiltonYLoc = 309;



function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	countessHamiltonImage = loadImage("countessHamilton.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiXLoc, bonesKarpinskiYLoc);

	image(cecilKarpinskiImage, cecilKarpinskiXLoc,  cecilKarpinskiYLoc);
	image(annaKarpinskiImage, annaKarpinskiXLoc,annaKarpinskiYLoc);
	image(linaLovelaceImage,linaLovelaceXLoc,  linaLovelaceYLoc);
	image(robbieKrayImage, robbieKrayXLoc, robbieKrayYLoc);
	image(countessHamiltonImage, countessHamiltonXLoc, countessHamiltonYLoc);

}