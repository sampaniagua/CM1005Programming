/*

Officer: 8118839
CaseNum: 202-3-94045863-8118839

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Tomato filled text with a Sienna outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.
255  99  71	
160  82  45	

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(558,424);
	textSize(24);
}

function draw()
{
	background(255);

	fill(205,133,63);
	stroke(50,205,50);
	textFont(Melissa);
	// text("?", 176,72);
	fill(154,205,50);
	stroke(139,69,19);
	textFont(RonsFont);
	// text("go", 346,72);
	fill(128,0,128);
	stroke(160,82,45);
	textFont(Ballpointprint);
	// text("send", 327,130);
	push();
	fill(138,43,226);
	stroke(210,105,30);
	textFont(Diggity);
	// text("darling", 44,24);
	pop();
	stroke(210,105,30);
	textFont(Melissa);
	// text("more", 68,181);
	fill(148,0,211);
	stroke(255,69,0);
	// text("Is", 245,102);
	fill(0,139,139);
	stroke(255,215,0);
	textFont(Diggity);
	// text("yours,", 87,253);
	fill(107,142,35);
	stroke(0,0,255);
	textFont(RonsFont);
	// text("Forever", 6,253);
	fill(127,255,0);
	// text("away", 373,72);
	fill(0,128,0);
	stroke(255,165,0);
	// text("If", 198,130);
	fill(240,128,128);
	stroke(210,105,30);
	textFont(Ballpointprint);
	// text("Are", 10,72);
	fill(233,150,122);
	stroke(0,0,128);
	textFont(Diggity);
	// text("Bob,", 100,24);
	push();
	fill(64,224,208);
	stroke(255,0,255);
	textFont(Melissa);
	// text("and", 75,102);
	pop();
	fill(0,206,209);
	// text("we", 268,72);
	fill(127,255,0);
	stroke(0,0,139);
	textFont(RonsFont);
	// text("this", 138,102);
	fill(147,112,219);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("are", 474,181);
	push();
	fill(250,128,114);
	stroke(0,250,154);
	textFont(RonsFont);
	// text("Dai", 10,301);
	pop();
	fill(176,224,230);
	stroke(128,128,0);
	textFont(RonsFont);
	// text("The", 232,181);
	fill(153,50,204);
	stroke(220,20,60);
	textFont(Melissa);
	// text("times.", 129,205);
	push();
	fill(255,0,255);
	stroke(255,69,0);
	textFont(Ballpointprint);
	// text("much", 19,181);
	pop();
	fill(32,178,170);
	stroke(0,128,0);
	textFont(Ballpointprint);
	// text("My", 6,24);
	fill(0,255,255);
	stroke(199,21,133);
	// text("x", 65,301);
	push();
	fill(144,238,144);
	stroke(128,0,128);
	// text("so", 514,181);
	pop();
	fill(106,90,205);
	stroke(0,100,0);
	textFont(Melissa);
	// text("delays.", 291,156);
	fill(160,82,45);
	stroke(165,42,42);
	textFont(RonsFont);
	// text("You", 432,181);
	fill(255,99,71);
	stroke(32,178,170);
	textFont(Melissa);
	// text("no", 472,130);
	fill(64,224,208);
	stroke(154,205,50);
	// text("sort", 103,102);
	fill(72,209,204);
	stroke(46,139,87);
	textFont(Diggity);
	// text("cash.", 379,130);
	fill(238,232,170);
	stroke(139,0,0);
	textFont(Ballpointprint);
	// text("me", 139,72);
	fill(139,0,0);
	stroke(160,82,45);
	textFont(Melissa);
	// text("I", 424,130);
	fill(100,149,237);
	stroke(0,206,209);
	textFont(Diggity);
	// text("all", 180,102);
	stroke(128,0,128);
	textFont(RonsFont);
	// text("how", 469,156);
	fill(205,133,63);
	stroke(255,165,0);
	textFont(Diggity);
	// text("you", 13,130);
	push();
	fill(255,99,71);
	stroke(255,255,0);
	textFont(Melissa);
	// text("not", 396,156);
	pop();
	fill(0,191,255);
	stroke(107,142,35);
	textFont(Ballpointprint);
	// text("relationship", 299,102);
	fill(255,0,255);
	stroke(0,255,255);
	textFont(Diggity);
	// text("?", 180,130);
	push();
	fill(0,250,154);
	stroke(107,142,35);
	textFont(Melissa);
	// text("money", 133,130);
	pop();
	stroke(139,0,139);
	textFont(Ballpointprint);
	// text("our", 266,102);
	fill(220,20,60);
	stroke(255,215,0);
	textFont(Melissa);
	// text("should", 301,72);
	fill(255,69,0);
	stroke(0,206,209);
	// text("silence.", 381,181);
	fill(34,139,34);
	stroke(0,128,128);
	textFont(RonsFont);
	// text("out.", 203,102);
	fill(135,206,235);
	stroke(128,128,0);
	textFont(Melissa);
	// text("you", 54,72);
	fill(75,0,130);
	stroke(184,134,11);
	textFont(Ballpointprint);
	// text("ed", 58,205);
	push();
	fill(255,0,0);
	stroke(139,0,0);
	textFont(RonsFont);
	// text("?", 454,102);
	// text("these", 142,156);
	pop();
	fill(255,69,0);
	textFont(Diggity);
	// text("secrets,", 268,181);
	fill(64,224,208);
	stroke(0,255,255);
	textFont(RonsFont);
	// text("ignore", 76,156);
	fill(0,0,128);
	stroke(139,69,19);
	textFont(Diggity);
	// text("I", 106,181);
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Melissa);
	// text("avoiding", 82,72);
	fill(219,112,147);
	stroke(107,142,35);
	textFont(RonsFont);
	// text("so,", 229,130);
	stroke(0,255,127);
	textFont(Ballpointprint);
	// text("sure", 424,156);
	push();
	fill(240,230,140);
	stroke(0,191,255);
	textFont(Diggity);
	// text("can", 437,130);
	pop();
	stroke(199,21,133);
	// text("for", 429,72);
	fill(138,43,226);
	stroke(210,105,30);
	textFont(RonsFont);
	// text("continual", 197,156);
	fill(32,178,170);
	stroke(0,128,128);
	// text("a", 467,72);
	push();
	fill(255,99,71);
	stroke(160,82,45);
	textFont(Ballpointprint);  //here
	text("I", 261,130);
	pop();
	fill(244,164,96);
	stroke(154,205,50);
	// text("of", 105,130);
	fill(0,0,128);
	stroke(0,0,255);
	textFont(Ballpointprint);
	// text("Perhaps", 190,72);
	fill(0,206,209);
	stroke(32,178,170);
	// text("I'm", 341,156);
	fill(100,149,237);
	stroke(0,206,209);
	// text("?", 205,181);
	fill(0,255,0);
	stroke(165,42,42);
	textFont(Melissa);
	// text("some", 95,205);
	fill(0,250,154);
	stroke(32,178,170);
	textFont(Ballpointprint);
	// text("can", 118,181);
	fill(255,255,0);
	stroke(139,0,139);
	textFont(RonsFont);
	// text("sy", 38,301);
	fill(176,224,230);
	stroke(210,105,30);
	// text("Are", 471,102);
	fill(135,206,235);
	stroke(154,205,50);
	// text("longer", 10,156);
	fill(255,99,71);
	stroke(160,82,45);
	textFont(Ballpointprint); //here
	text("can", 290,130);
	text("break", 13,102);
	text("safe", 401,102);
	text("guard", 13,205);
	text("the", 340,181);
	text("take", 155,181);
	push();
	fill(127,255,0);
	stroke(0,191,255);
	textFont(RonsFont);
	// text("short", 48,130);
	pop();



}
