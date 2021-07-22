/*
The case of the Python Syndicate
Stage 3


Officer: 8118839
CaseNum: 301-2-65727882-8118839

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Robbie kray has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Robbie kray object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var cecilKarpinskiImage;
var rockyKrayImage;
var robbieKrayImage;
var annaKarpinskiImage;
var linaLovelaceImage;
var bonesKarpinskiImage;

var robbieKrayObject;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	robbieKrayImage = loadImage("krayBrothers2.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	linaLovelaceImage = loadImage("lina.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	robbieKrayObject = {
		x: 701,
		y: 40,
		image: robbieKrayImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(robbieKrayObject.image, robbieKrayObject.x, robbieKrayObject.y);

	image(cecilKarpinskiImage, robbieKrayObject.x - 586, robbieKrayObject.y);
	image(rockyKrayImage, robbieKrayObject.x - 293, robbieKrayObject.y);
	image(annaKarpinskiImage, robbieKrayObject.x - 586, robbieKrayObject.y + 269);
	image(linaLovelaceImage, robbieKrayObject.x - 293, robbieKrayObject.y + 269);
	image(bonesKarpinskiImage, robbieKrayObject.x, robbieKrayObject.y + 269);

}