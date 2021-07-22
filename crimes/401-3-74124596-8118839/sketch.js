/*

Officer: 8118839
CaseNum: 401-3-74124596-8118839

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If AmanitaMushrooms goes above 0.39, or on the other hand, ricin goes above 0.28 and insecticide goes above 0.33, try decreasing antibodies by 0.04
	- If either strychnine dips below 0.71, botulinium goes above 0.69, or perhaps lead dips below 0.61, try increasing antibodies by 0.05
	- When lead dips below 0.45, Spider_Venom goes above 0.59, strychnine dips below 0.58, and also ricin goes above 0.69, decrement Calcium_Chloride by 0.04
	- If either botulinium goes above 0.57, AmanitaMushrooms dips below 0.38, or perhaps polonium goes above 0.25, try increasing Calcium_Chloride by 0.04
	- When strychnine dips below 0.45, insecticide dips below 0.47, and also lead dips below 0.44, reduce protamine by 0.05
	- When botulinium dips below 0.73, whilst at the same time, ricin goes above 0.55 or AmanitaMushrooms dips below 0.75, try increasing protamine by 0.04
	- When lead goes above 0.52 and ricin dips below 0.55, or on the other hand, polonium goes above 0.44 or botulinium dips below 0.54, reduce paracetamol by 0.01
	- When AmanitaMushrooms dips below 0.38 or Spider_Venom dips below 0.41, or on the other hand, strychnine dips below 0.66 and insecticide dips below 0.46, increment paracetamol by 0.03
	- If botulinium goes above 0.66, Spider_Venom goes above 0.38, and also lead dips below 0.33, try decreasing antivenom by 0.02
	- When ricin goes above 0.46 or strychnine dips below 0.58, or on the other hand, polonium dips below 0.54 and AmanitaMushrooms dips below 0.35, raise antivenom by 0.05


Your conditional statements should:

consider the following poisons:

	- botulinium
	- AmanitaMushrooms
	- Spider_Venom
	- ricin
	- lead
	- polonium
	- strychnine
	- insecticide


and modify the following antidotes:

	- antibodies
	- Calcium_Chloride
	- protamine
	- paracetamol
	- antivenom


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var botulinium;
var AmanitaMushrooms;
var Spider_Venom;
var ricin;
var lead;
var polonium;
var strychnine;
var insecticide;


//Declare the antidote variables
var antibodies;
var Calcium_Chloride;
var protamine;
var paracetamol;
var antivenom;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	botulinium = 0.5;
	AmanitaMushrooms = 0.5;
	Spider_Venom = 0.5;
	ricin = 0.5;
	lead = 0.5;
	polonium = 0.5;
	strychnine = 0.5;
	insecticide = 0.5;
	antibodies = 0.5;
	Calcium_Chloride = 0.5;
	protamine = 0.5;
	paracetamol = 0.5;
	antivenom = 0.5;


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

    
//        	- If AmanitaMushrooms goes above 0.39, or on the other hand, ricin goes above 0.28 and insecticide goes above 0.33, try decreasing antibodies by 0.04
    
    if(AmanitaMushrooms > 0.39 || ricin > 0.28 && insecticide > 0.33)
        {
            antibodies -= 0.04;
        }
//    - If either strychnine dips below 0.71, botulinium goes above 0.69, or perhaps lead dips below 0.61, try increasing antibodies by 0.05
    if(strychnine < 0.71 || botulinium > 0.69 || lead < 0.61)
        {
            antibodies += 0.05;
        }
//    - When lead dips below 0.45, Spider_Venom goes above 0.59, strychnine dips below 0.58, and also ricin goes above 0.69, decrement Calcium_Chloride by 0.04
    if(lead < 0.45 && Spider_Venom > 0.59 && strychnine < 0.58 && ricin > 0.69)
        {
            Calcium_Chloride -= 0.04;
        }
//    - If either botulinium goes above 0.57, AmanitaMushrooms dips below 0.38, or perhaps polonium goes above 0.25, try increasing Calcium_Chloride by 0.04
    if(botulinium > 0.57 || AmanitaMushrooms < 0.38 || polonium > 0.25)
        {
            Calcium_Chloride += 0.04;
        }
//    - When strychnine dips below 0.45, insecticide dips below 0.47, and also lead dips below 0.44, reduce protamine by 0.05
    if(strychnine < 0.45 && insecticide < 0.47 && lead < 0.44)
        {
            protamine -= 0.05;
        }
//    - When botulinium dips below 0.73, whilst at the same time, ricin goes above 0.55 or AmanitaMushrooms dips below 0.75, try increasing protamine by 0.04
    if(botulinium < 0.73 && (ricin > 0.55 || AmanitaMushrooms < 0.75))
        {
            protamine += 0.04;
        }
//    - When lead goes above 0.52 and ricin dips below 0.55, or on the other hand, polonium goes above 0.44 or botulinium dips below 0.54, reduce paracetamol by 0.01
    if(lead > 0.52 && ricin < 0.55 || polonium > 0.44 || botulinium < 0.54)
        {
            paracetamol -= 0.01;
        }
//    - When AmanitaMushrooms dips below 0.38 or Spider_Venom dips below 0.41, or on the other hand, strychnine dips below 0.66 and insecticide dips below 0.46, increment paracetamol by 0.03
    if(AmanitaMushrooms < 0.38 || Spider_Venom < 0.41 || strychnine < 0.66 && insecticide < 0.46)
        {
           paracetamol += 0.03; 
        }
//    	- If botulinium goes above 0.66, Spider_Venom goes above 0.38, and also lead dips below 0.33, try decreasing antivenom by 0.02
    if(botulinium > 0.66 && Spider_Venom > 0.38 && lead < 0.33)
        {
            antivenom -= 0.02;
        }
//    - When ricin goes above 0.46 or strychnine dips below 0.58, or on the other hand, polonium dips below 0.54 and AmanitaMushrooms dips below 0.35, raise antivenom by 0.05
if(ricin > 0.46 || strychnine < 0.58 || polonium < 0.54 && AmanitaMushrooms < 0.35)
    {
        antivenom += 0.05;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	botulinium = nextValue(graphs[0],botulinium);
	AmanitaMushrooms = nextValue(graphs[1],AmanitaMushrooms);
	Spider_Venom = nextValue(graphs[2],Spider_Venom);
	ricin = nextValue(graphs[3],ricin);
	lead = nextValue(graphs[4],lead);
	polonium = nextValue(graphs[5],polonium);
	strychnine = nextValue(graphs[6],strychnine);
	insecticide = nextValue(graphs[7],insecticide);


	antibodies = constrain(antibodies, 0, 1);
	Calcium_Chloride = constrain(Calcium_Chloride, 0, 1);
	protamine = constrain(protamine, 0, 1);
	paracetamol = constrain(paracetamol, 0, 1);
	antivenom = constrain(antivenom, 0, 1);


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
	text('botulinium: ' + nf(botulinium,1,2), 20,20);
	fill(colors[1]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,40);
	fill(colors[2]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,60);
	fill(colors[3]);
	text('ricin: ' + nf(ricin,1,2), 20,80);
	fill(colors[4]);
	text('lead: ' + nf(lead,1,2), 20,100);
	fill(colors[5]);
	text('polonium: ' + nf(polonium,1,2), 20,120);
	fill(colors[6]);
	text('strychnine: ' + nf(strychnine,1,2), 20,140);
	fill(colors[7]);
	text('insecticide: ' + nf(insecticide,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antibodies,50,'antibodies');
	drawBar(Calcium_Chloride,200,'Calcium_Chloride');
	drawBar(protamine,350,'protamine');
	drawBar(paracetamol,500,'paracetamol');
	drawBar(antivenom,650,'antivenom');


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
