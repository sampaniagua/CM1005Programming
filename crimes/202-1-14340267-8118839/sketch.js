/*

Officer: 8118839
CaseNum: 202-1-14340267-8118839

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Khaki filled text with a Indigo outline.
Only comment out text commands - leave fill & stroke commands uncommented.
240 230 140	
75   0 130	
Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(510,417);
	textFont(letterFont);
	textSize(25);
}

function draw()
{
	background(255);

	fill(139,0,139);
	stroke(255,0,255);
//	text("Bob,", 84,25);
	fill(255,0,255);
	stroke(154,205,50);
//	text("to", 470,137);
	fill(148,0,211);
	stroke(25,25,112);
//	text("to", 174,106);
	fill(240,128,128);
	stroke(0,255,255);
//	text("in", 256,106);
	fill(153,50,204);
	stroke(128,0,0);
//	text("at", 93,192);
	fill(240,230,140);
	stroke(75,0,130);
	text("place", 246,75);
	fill(153,50,204);
	stroke(0,255,255);
//	text("When", 150,165);
	fill(255,0,255);
	stroke(0,250,154);
//	text("I", 343,106);
	fill(128,128,0);
	stroke(0,255,255);
//	text("yours,", 64,269);
	fill(0,0,128);
	stroke(218,165,32);
//	text("think", 154,137);
	fill(255,215,0);
	stroke(128,0,0);
//	text("How", 278,137);
	fill(222,184,135);
	stroke(255,255,0);
//	text("return.", 86,219);
	fill(25,25,112);
	stroke(128,0,0);
//	text("longing", 86,165);
	fill(30,144,255);
	stroke(148,0,211);
//	text("many", 321,75);
	fill(100,149,237);
	stroke(139,0,0);
//	text("up", 400,106);
	fill(75,0,130);
	stroke(184,134,11);
//	text("My", 6,25);
	fill(238,130,238);
	stroke(32,178,170);
//	text("arms.", 298,106);
	fill(128,0,128);
	stroke(210,105,30);
//	text("my", 114,192);
	fill(0,255,255);
	stroke(199,21,133);
//	text("?", 352,165);
	fill(219,112,147);
	stroke(124,252,0);
//	text("ift", 62,219);
	fill(255,69,0);
	stroke(139,0,139);
//	text("stare", 356,106);
	fill(255,99,71);
	stroke(160,82,45);
//	text("I", 40,75);
	fill(0,191,255);
	stroke(0,206,209);
//	text("my", 272,106);
	fill(240,230,140);
	stroke(255,69,0);
//	text("only", 193,137);
	fill(128,0,0);
	stroke(0,191,255);
//	text("miss", 53,75);
	fill(173,255,47);
	stroke(107,142,35);
//	text("s", 453,75);
	fill(244,164,96);
	stroke(0,255,255);
//	text("on", 479,192);
	fill(240,230,140);
	stroke(75,0,130);
	text("united", 268,165);
	fill(220,20,60);
	stroke(0,128,128);
//	text("kissed", 65,106);
	fill(238,232,170);
	stroke(220,20,60);
//	text("I", 420,137);
	fill(255,165,0);
	stroke(139,0,0);
//	text("small", 211,192);
	fill(240,230,140);
	stroke(75,0,130);
	text("bank", 425,192);
	stroke(139,69,19);
//	text("you", 65,192);
	fill(144,238,144);
	stroke(0,255,127);
//	text("last", 32,106);
	fill(160,82,45);
	stroke(128,0,128);
//	text("we", 222,165);
	fill(30,144,255);
	stroke(255,140,0);
//	text("much", 312,137);
	fill(75,0,130);
	stroke(0,0,205);
//	text("do", 398,137);
	fill(218,165,32);
	stroke(199,21,133);
//	text("night", 8,137);
	fill(255,69,0);
	stroke(0,250,154);
//	text("and", 83,137);
	fill(127,255,212);
	stroke(255,140,0);
//	text("be", 248,165);
	fill(255,127,80);
	stroke(0,255,127);
//	text("this", 178,192);
	fill(152,251,152);
	stroke(0,0,205);
//	text("store", 9,165);
	fill(255,140,0);
	stroke(75,0,130);
//	text("darling", 34,25);
	fill(147,112,219);
	stroke(0,128,0);
//	text("this", 53,165);
	fill(154,205,50);
	stroke(165,42,42);
//	text("of", 225,137);
	fill(152,251,152);
	stroke(32,178,170);
//	text("it", 437,75);
	fill(0,0,139);
	stroke(0,139,139);
//	text("around", 168,75);
	fill(255,165,0);
//	text("I'm", 397,192);
	fill(250,128,114);
	stroke(0,0,255);
//	text("sky,", 47,137);
	fill(255,105,180);
	stroke(0,206,209);
//	text("I", 129,106);
	fill(34,139,34);
	stroke(178,34,34);
//	text("ince", 462,75);
	fill(107,142,35);
	stroke(46,139,87);
//	text("x", 50,319);
	fill(0,0,255);
	stroke(0,128,128);
//	text("your", 7,219);
	fill(255,69,0);
	stroke(0,255,0);
//	text("you", 140,75);
	fill(186,85,211);
	stroke(255,165,0);
//	text("How", 287,75);
	fill(0,191,255);
	stroke(139,0,0);
//	text("I", 112,137);
	fill(173,216,230);
	stroke(50,205,50);
//	text("longer", 352,137);
	fill(30,144,255);
	stroke(0,255,255);
//	text("hold", 195,106);
	fill(240,230,140);
	stroke(75,0,130);
	text("is", 419,75);
	text("the", 218,75);
	fill(0,100,0);
	stroke(0,128,0);
//	text("?", 115,106);
	fill(0,255,255);
	stroke(0,139,139);
//	text("in", 403,165);
	fill(0,0,205);
	stroke(0,255,255);
//	text("Fore", 6,269);
	fill(178,34,34);
	stroke(255,0,0);
//	text("desolate.", 331,192);
	fill(255,69,0);
	stroke(220,20,60);
//	text("How", 6,75);
	fill(124,252,0);
	stroke(0,0,205);
//	text("having", 92,75);
	fill(186,85,211);
	stroke(0,0,255);
//	text("the", 442,106);
	fill(147,112,219);
	stroke(0,139,139);
//	text("ing", 455,192);
	fill(219,112,147);
	stroke(0,255,255);
//	text("the", 419,165);
	fill(186,85,211);
	stroke(220,20,60);
//	text("town", 252,192);
	fill(199,21,133);
	stroke(0,100,0);
//	text("ver", 36,269);
	fill(128,0,0);
	stroke(0,0,139);
//	text("Daisy", 6,319);
	fill(222,184,135);
	stroke(184,134,11);
//	text("at", 421,106);
	fill(127,255,0);
	stroke(75,0,130);
//	text("without", 6,192);
	fill(25,25,112);
	stroke(50,205,50);
//	text("again", 312,165);
	fill(0,250,154);
	stroke(46,139,87);
//	text("?", 136,165);
	fill(25,25,112);
	stroke(255,165,0);
//	text("you.", 247,137);
	fill(65,105,225);
	stroke(255,255,0);
//	text("sw", 42,219);
	fill(178,34,34);
	stroke(184,134,11);
//	text("long", 142,106);
	fill(148,0,211);
	stroke(160,82,45);
//	text("side,", 140,192);
	fill(0,255,0);
	stroke(0,0,205);
//	text("Even", 366,165);
	fill(0,0,139);
	stroke(218,165,32);
//	text("spring,", 447,165);
	fill(205,133,63);
	stroke(255,140,0);
//	text("months", 362,75);
	fill(0,0,205);
	stroke(0,250,154);
//	text("you", 228,106);
	fill(139,69,19);
	stroke(218,165,32);
//	text("we", 6,106);
	fill(0,128,0);
	stroke(0,255,255);
//	text("can", 125,137);
	fill(178,34,34);
	stroke(32,178,170);
//	text("have", 433,137);
	fill(222,184,135);
	stroke(34,139,34);
//	text("feels", 291,192);
	fill(0,206,209);
	stroke(107,142,35);
//	text("will", 193,165);



}
