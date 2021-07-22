/*

Officer: 8118839
CaseNum: 401-0-96531424-8118839

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When hemlock goes above 0.58, decrease charcoal by 0.01
	- If amanita_mushrooms goes above 0.45, try increasing charcoal by 0.04
	- If ricin goes above 0.73, decrement glucagon by 0.05
	- If amanita_mushrooms dips below 0.62, try increasing glucagon by 0.03
	- If amanita_mushrooms goes above 0.31, reduce aspirin by 0.02
	- If ricin dips below 0.54, try increasing aspirin by 0.03


Your conditional statements should:

consider the following poisons:

	- amanita_mushrooms
	- ricin
	- hemlock


and modify the following antidotes:

	- charcoal
	- glucagon
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var amanita_mushrooms;
var ricin;
var hemlock;


//Declare the antidote variables
var charcoal;
var glucagon;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	amanita_mushrooms = 0.5;
	ricin = 0.5;
	hemlock = 0.5;
	charcoal = 0.5;
	glucagon = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
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
//    - When hemlock goes above 0.58, decrease charcoal by 0.01
//	- If amanita_mushrooms goes above 0.45, try increasing charcoal by 0.04
//	- If ricin goes above 0.73, decrement glucagon by 0.05
//	- If amanita_mushrooms dips below 0.62, try increasing glucagon by 0.03
//	- If amanita_mushrooms goes above 0.31, reduce aspirin by 0.02
//	- If ricin dips below 0.54, try increasing aspirin by 0.03
    
    if(hemlock > 0.58)
        {
            charcoal -= 0.01;
        }
    if(amanita_mushrooms > 0.45)
        {
            charcoal += 0.04;
        }
    if(ricin > 0.73)
        {
            glucagon -= 0.05;
        }
    if(amanita_mushrooms < 0.62)
        {
            glucagon += 0.03;
        }
    if(amanita_mushrooms > 0.31)
        {
            aspirin -= 0.02;
        }
    if(ricin < 0.54)
        {
            aspirin += 0.03;
        }




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	amanita_mushrooms = nextValue(graphs[0],amanita_mushrooms);
	ricin = nextValue(graphs[1],ricin);
	hemlock = nextValue(graphs[2],hemlock);


	charcoal = constrain(charcoal, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
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
	text('amanita_mushrooms: ' + nf(amanita_mushrooms,1,2), 20,20);
	fill(colors[1]);
	text('ricin: ' + nf(ricin,1,2), 20,40);
	fill(colors[2]);
	text('hemlock: ' + nf(hemlock,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(charcoal,50,'charcoal');
	drawBar(glucagon,200,'glucagon');
	drawBar(aspirin,350,'aspirin');


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
