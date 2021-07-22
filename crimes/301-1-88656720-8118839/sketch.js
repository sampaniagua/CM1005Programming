/*
The case of the Python Syndicate
Stage 2


Officer: 8118839
CaseNum: 301-1-88656720-8118839

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Lina lovelace

- The variables for Lina lovelace have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Lina lovelace for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var robbie_kray_image;
var bones_karpinski_image;
var lina_lovelace_image;
var anna_karpinski_image;
var countess_hamilton_image;
var pawel_karpinski_image;


var lina_lovelace_x_position = 701;
var lina_lovelace_y_position = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	bones_karpinski_image = loadImage("karpinskiDog.png");
	lina_lovelace_image = loadImage("lina.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_image, lina_lovelace_x_position, lina_lovelace_y_position);

	image(robbie_kray_image, lina_lovelace_x_position - 586, lina_lovelace_y_position);
	image(bones_karpinski_image, lina_lovelace_x_position - 293, lina_lovelace_y_position);
	image(anna_karpinski_image, lina_lovelace_x_position - 586, lina_lovelace_y_position + 269);
	image(countess_hamilton_image, lina_lovelace_x_position - 293, lina_lovelace_y_position + 269);
	image(pawel_karpinski_image, lina_lovelace_x_position, lina_lovelace_y_position + 269);

}