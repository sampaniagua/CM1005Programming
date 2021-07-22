/*
The case of the Python Syndicate
Stage 4

Officer: 8118839
CaseNum: 301-3-36547056-8118839

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var bones_karpinski_img;
var pawel_karpinski_img;
var countess_hamilton_img;
var robbie_kray_img;
var anna_karpinski_img;
var rocky_kray_img;

var countess_hamilton_obj;


//declare your new objects below


//var bones_karpinski_x_location = 115;
//var bones_karpinski_y_location = 40;
//var pawel_karpinski_x_location = 408;
//var pawel_karpinski_y_location = 40;
//var robbie_kray_x_location = 115;
//var robbie_kray_y_location = 309;
//var anna_karpinski_x_location = 408;
//var anna_karpinski_y_location = 309;
//var rocky_kray_x_location = 701;
//var rocky_kray_y_location = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_img = loadImage("karpinskiDog.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	countess_hamilton_img = loadImage("countessHamilton.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countess_hamilton_obj = {
		x: 701,
		y: 40,
		image: countess_hamilton_img
	};
    
    createCanvas(photoBoard.width, photoBoard.height);
	bones_karpinski_obj = {
		x: 115,
		y: 40,
		image: bones_karpinski_img
	};
    
     createCanvas(photoBoard.width, photoBoard.height);
	pawel_karpinski_obj = {
		x: 408,
		y: 40,
		image: pawel_karpinski_img
	};
    
      createCanvas(photoBoard.width, photoBoard.height);
	robbie_kray_obj = {
		x: 115,
		y: 309,
		image: robbie_kray_img
	};
    
     createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_obj = {
		x: 408,
		y: 309,
		image: anna_karpinski_img
	};
    
        createCanvas(photoBoard.width, photoBoard.height);
	rocky_kray_obj = {
		x: 701,
		y: 309,
		image: rocky_kray_img
	};



	//define your new objects below
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bones_karpinski_obj.image, bones_karpinski_obj.x, bones_karpinski_obj.y);
	image(pawel_karpinski_obj.image, pawel_karpinski_obj.x, pawel_karpinski_obj.y);
	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);
	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);
	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);


}