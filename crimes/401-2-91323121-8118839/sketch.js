/*

Officer: 8118839
CaseNum: 401-2-91323121-8118839

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If either Nerve_Gas goes above 0.44, botulinium dips below 0.74, or perhaps lead goes above 0.54, reduce calcium_gluconate by 0.02
	- If spiderVenom dips below 0.57 or cyanide dips below 0.49, increment calcium_gluconate by 0.05
	- If mercury dips below 0.64 or botulinium dips below 0.51, decrement aspirin by 0.03
	- When cyanide goes above 0.43, Nerve_Gas dips below 0.67, and also spiderVenom dips below 0.6, increase aspirin by 0.01
	- When lead goes above 0.56 and spiderVenom goes above 0.62, try decreasing chalk by 0.01
	- If mercury goes above 0.46 and botulinium goes above 0.43, or on the other hand, Nerve_Gas goes above 0.63, increment chalk by 0.05
	- If mercury dips below 0.32 and spiderVenom goes above 0.57, or on the other hand, Nerve_Gas goes above 0.32, decrease ethanol by 0.05
	- When cyanide dips below 0.28 and botulinium dips below 0.3, increase ethanol by 0.05


Your conditional statements should:

consider the following poisons:

	- mercury
	- botulinium
	- Nerve_Gas
	- lead
	- cyanide
	- spiderVenom


and modify the following antidotes:

	- calcium_gluconate
	- aspirin
	- chalk
	- ethanol


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var mercury;
var botulinium;
var Nerve_Gas;
var lead;
var cyanide;
var spiderVenom;


//Declare the antidote variables
var calcium_gluconate;
var aspirin;
var chalk;
var ethanol;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	botulinium = 0.5;
	Nerve_Gas = 0.5;
	lead = 0.5;
	cyanide = 0.5;
	spiderVenom = 0.5;
	calcium_gluconate = 0.5;
	aspirin = 0.5;
	chalk = 0.5;
	ethanol = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
    
//    - If either Nerve_Gas goes above 0.44, botulinium dips below 0.74, or perhaps lead goes above 0.54, reduce                 calcium_gluconate by 0.02
//	- If spiderVenom dips below 0.57 or cyanide dips below 0.49, increment calcium_gluconate by 0.05
//	- If mercury dips below 0.64 or botulinium dips below 0.51, decrement aspirin by 0.03
//	- When cyanide goes above 0.43, Nerve_Gas dips below 0.67, and also spiderVenom dips below 0.6, increase aspirin by         0.01
//	- When lead goes above 0.56 and spiderVenom goes above 0.62, try decreasing chalk by 0.01
    
//	- If mercury goes above 0.46 and botulinium goes above 0.43, or on the other hand, Nerve_Gas goes above 0.63,               increment chalk by 0.05
//	- If mercury dips below 0.32 and spiderVenom goes above 0.57, or on the other hand, Nerve_Gas goes above 0.32,               decrease ethanol by 0.05
//	- When cyanide dips below 0.28 and botulinium dips below 0.3, increase ethanol by 0.05
    
    if(Nerve_Gas > 0.44 || botulinium < 0.74 || lead > 0.54)
        {
            calcium_gluconate -= 0.02;
        }
    if(spiderVenom < 0.57 || cyanide < 0.49)
        {
            calcium_gluconate += 0.05;
        }
    if(mercury < 0.64 || botulinium < 0.51)
        {
            aspirin -= 0.03;
        }
    if(cyanide > 0.43 && Nerve_Gas < 0.67 && spiderVenom < 0.6)
        {
            aspirin += 0.01;
        }
    if(lead > 0.56 && spiderVenom > 0.62)
        {
            chalk -= 0.01;
        }
    if(mercury > 0.46 && botulinium > 0.43 || Nerve_Gas > 0.63)
        {
            chalk += 0.05;
        }
    if(mercury < 0.32 && spiderVenom > 0.57 || Nerve_Gas > 0.32)
        {
            ethanol -= 0.05;
        }
    if(cyanide < 0.28 && botulinium < 0.3)
        {
            ethanol += 0.05;
        }




	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	botulinium = nextValue(graphs[1],botulinium);
	Nerve_Gas = nextValue(graphs[2],Nerve_Gas);
	lead = nextValue(graphs[3],lead);
	cyanide = nextValue(graphs[4],cyanide);
	spiderVenom = nextValue(graphs[5],spiderVenom);


	calcium_gluconate = constrain(calcium_gluconate, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	chalk = constrain(chalk, 0, 1);
	ethanol = constrain(ethanol, 0, 1);


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
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('botulinium: ' + nf(botulinium,1,2), 20,40);
	fill(colors[2]);
	text('Nerve_Gas: ' + nf(Nerve_Gas,1,2), 20,60);
	fill(colors[3]);
	text('lead: ' + nf(lead,1,2), 20,80);
	fill(colors[4]);
	text('cyanide: ' + nf(cyanide,1,2), 20,100);
	fill(colors[5]);
	text('spiderVenom: ' + nf(spiderVenom,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(calcium_gluconate,50,'calcium_gluconate');
	drawBar(aspirin,200,'aspirin');
	drawBar(chalk,350,'chalk');
	drawBar(ethanol,500,'ethanol');


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
