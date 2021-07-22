/*

Officer: 8118839
CaseNum: 401-3-77601518-8118839

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If arsenic goes above 0.43 or polonium goes above 0.41, whilst at the same time, insecticide goes above 0.51, decrement insulin by 0.02
	- When alcohol dips below 0.56 and methanol dips below 0.56, or on the other hand, formaldehyde dips below 0.56, increase insulin by 0.02
	- When deadly_nightshade goes above 0.35 and methanol goes above 0.63, or on the other hand, arsenic goes above 0.44 and alcohol goes above 0.66, decrement sodiumBicarbonate by 0.01
	- If polonium goes above 0.6 or insecticide dips below 0.54, whilst at the same time, formaldehyde dips below 0.62 or ricin goes above 0.72, try increasing sodiumBicarbonate by 0.04
	- If alcohol dips below 0.74, whilst at the same time, deadly_nightshade dips below 0.69 or arsenic dips below 0.42, reduce chalk by 0.01
	- If ricin dips below 0.26, polonium dips below 0.26, and also formaldehyde goes above 0.57, raise chalk by 0.05
	- If ricin dips below 0.37 and polonium dips below 0.6, or on the other hand, formaldehyde goes above 0.45 and deadly_nightshade dips below 0.61, decrement glucagon by 0.04
	- If alcohol dips below 0.54 or arsenic goes above 0.68, whilst at the same time, insecticide goes above 0.55 or methanol goes above 0.68, try increasing glucagon by 0.04
	- If methanol dips below 0.71, alcohol dips below 0.67, and also formaldehyde dips below 0.73, decrement calciumGluconate by 0.02
	- If insecticide goes above 0.28 and deadly_nightshade dips below 0.58, or on the other hand, ricin dips below 0.4 and polonium goes above 0.45, increase calciumGluconate by 0.02


Your conditional statements should:

consider the following poisons:

	- methanol
	- insecticide
	- arsenic
	- polonium
	- deadly_nightshade
	- alcohol
	- ricin
	- formaldehyde


and modify the following antidotes:

	- insulin
	- sodiumBicarbonate
	- chalk
	- glucagon
	- calciumGluconate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var methanol;
var insecticide;
var arsenic;
var polonium;
var deadly_nightshade;
var alcohol;
var ricin;
var formaldehyde;


//Declare the antidote variables
var insulin;
var sodiumBicarbonate;
var chalk;
var glucagon;
var calciumGluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	methanol = 0.5;
	insecticide = 0.5;
	arsenic = 0.5;
	polonium = 0.5;
	deadly_nightshade = 0.5;
	alcohol = 0.5;
	ricin = 0.5;
	formaldehyde = 0.5;
	insulin = 0.5;
	sodiumBicarbonate = 0.5;
	chalk = 0.5;
	glucagon = 0.5;
	calciumGluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	methanol = nextValue(graphs[0],methanol);
	insecticide = nextValue(graphs[1],insecticide);
	arsenic = nextValue(graphs[2],arsenic);
	polonium = nextValue(graphs[3],polonium);
	deadly_nightshade = nextValue(graphs[4],deadly_nightshade);
	alcohol = nextValue(graphs[5],alcohol);
	ricin = nextValue(graphs[6],ricin);
	formaldehyde = nextValue(graphs[7],formaldehyde);


	insulin = constrain(insulin, 0, 1);
	sodiumBicarbonate = constrain(sodiumBicarbonate, 0, 1);
	chalk = constrain(chalk, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals

	var colors = [
		color(255, 0, 0),
		color(0, 255, 0),
		color(0, 0, 255),
		color(255, 0, 255),
		color(255, 255, 0),
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('methanol: ' + nf(methanol,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('arsenic: ' + nf(arsenic,1,2), 20,60);
	fill(colors[3]);
	text('polonium: ' + nf(polonium,1,2), 20,80);
	fill(colors[4]);
	text('deadly_nightshade: ' + nf(deadly_nightshade,1,2), 20,100);
	fill(colors[5]);
	text('alcohol: ' + nf(alcohol,1,2), 20,120);
	fill(colors[6]);
	text('ricin: ' + nf(ricin,1,2), 20,140);
	fill(colors[7]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(insulin,50,'insulin');
	drawBar(sodiumBicarbonate,200,'sodiumBicarbonate');
	drawBar(chalk,350,'chalk');
	drawBar(glucagon,500,'glucagon');
	drawBar(calciumGluconate,650,'calciumGluconate');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
