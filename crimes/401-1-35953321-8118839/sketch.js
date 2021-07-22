/*

Officer: 8118839
CaseNum: 401-1-35953321-8118839

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When botulinium dips below 0.58, decrement antitoxin by 0.01
	- When novichok dips below 0.53, raise antitoxin by 0.03
	- When lead dips below 0.49, try decreasing glucagon by 0.05
	- If novichok dips below 0.73, increase glucagon by 0.02
	- When sarin dips below 0.31 or novichok goes above 0.64, decrement chalk by 0.03
	- When botulinium dips below 0.25, raise chalk by 0.03
	- If novichok dips below 0.62, decrease aspirin by 0.04
	- When sarin goes above 0.4 or botulinium dips below 0.7, increase aspirin by 0.04


Your conditional statements should:

consider the following poisons:

	- sarin
	- botulinium
	- novichok
	- lead


and modify the following antidotes:

	- antitoxin
	- glucagon
	- chalk
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var sarin;
var botulinium;
var novichok;
var lead;


//Declare the antidote variables
var antitoxin;
var glucagon;
var chalk;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	sarin = 0.5;
	botulinium = 0.5;
	novichok = 0.5;
	lead = 0.5;
	antitoxin = 0.5;
	glucagon = 0.5;
	chalk = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
    
//    - When botulinium dips below 0.58, decrement antitoxin by 0.01
//	- When novichok dips below 0.53, raise antitoxin by 0.03
//	- When lead dips below 0.49, try decreasing glucagon by 0.05
//	- If novichok dips below 0.73, increase glucagon by 0.02
//	- When sarin dips below 0.31 or novichok goes above 0.64, decrement chalk by 0.03
//	- When botulinium dips below 0.25, raise chalk by 0.03
//	- If novichok dips below 0.62, decrease aspirin by 0.04
//	- When sarin goes above 0.4 or botulinium dips below 0.7, increase aspirin by 0.04
    
    if(botulinium < 0.58)
        {
            antitoxin -= 0.01;
        }
    if(novichok < 0.53)
        {
            antitoxin += 0.03;
        }
    if(lead < 0.49)
        {
            glucagon -= 0.05;
        }
    if(novichok < 0.73)
        {
            glucagon += 0.02;
        }
    if(sarin < 0.31 || novichok > 0.64)
        {
            chalk -= 0.03;
        }
    if(botulinium < 0.25)
        {
            chalk += 0.03;
        }
    if(novichok < 0.62)
        {
            aspirin -= 0.04;
        }
    if(sarin > 0.4 || botulinium < 0.7)
        {
            aspirin += 0.04;
        }
        





	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	sarin = nextValue(graphs[0],sarin);
	botulinium = nextValue(graphs[1],botulinium);
	novichok = nextValue(graphs[2],novichok);
	lead = nextValue(graphs[3],lead);


	antitoxin = constrain(antitoxin, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	chalk = constrain(chalk, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


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
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('sarin: ' + nf(sarin,1,2), 20,20);
	fill(colors[1]);
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('novichok: ' + nf(novichok,1,2), 20,60);
	fill(colors[3]);
	text('lead: ' + nf(lead,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(antitoxin,50,'antitoxin');
	drawBar(glucagon,200,'glucagon');
	drawBar(chalk,350,'chalk');
	drawBar(aspirin,500,'aspirin');


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
