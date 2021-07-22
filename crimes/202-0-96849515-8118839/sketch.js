/*

Officer: 8118839
CaseNum: 202-0-96849515-8118839

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Goldenrod text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(672,504);
	textFont(letterFont);
	textSize(28);
}

function draw()
{
	background(255);

	fill(75,0,130);
//	text("l", 342,174);
	fill(244,164,96);
//	text("ce", 356,113);
	fill(176,224,230);
//	text("harp.", 104,142);
	fill(106,90,205);
//	text("am", 494,84);
	fill(0,128,128);
//	text("D", 125,28);
	fill(0,100,0);
//	text("last", 127,236);
	fill(255,99,71);
//	text("saw", 244,174);
//	text("luckiest", 350,266);
	fill(32,178,170);
//	text("lovely", 57,28);
	fill(0,250,154);
//	text("Ever", 589,208);
	fill(127,255,212);
//	text("e", 98,266);
	fill(144,238,144);
//	text("is", 364,84);
	fill(165,42,42);
//	text("Oh", 15,28);
//	text("that", 136,113);
	fill(0,139,139);
//	text("moment", 76,174);
//	text("can", 271,236);
	fill(255,69,0);
//	text("I", 210,174);
//	text("true", 479,208);
//	text("when", 395,84);
	fill(75,0,130);
//	text("e,", 443,174);
	fill(0,255,255);
//	text("like", 395,113);
//	text("Bob", 15,409);
	fill(218,112,214);
//	text("you", 281,208);
	fill(255,105,180);
//	text("blessed", 496,113);
	fill(219,112,147);
//	text("are", 210,142);
	fill(0,0,255);
//	text("chosen.", 110,297);
	fill(100,149,237);
//	text("alive", 509,266);
	fill(165,42,42);
//	text("quiet", 69,113);
//	text("were", 325,208);
	fill(255,255,0);
//	text("of", 426,236);
	fill(138,43,226);
//	text("my", 390,208);
	fill(152,251,152);
//	text("your", 280,113);
//	text("since", 23,236);
	fill(72,209,204);
//	text("your", 463,236);
//	text("in", 414,142);
	fill(25,25,112);
//	text("I", 460,84);
	fill(186,85,211);
//	text("those", 18,208);
	fill(0,0,205);
//	text("voi", 331,113);
	fill(205,133,63);
//	text("and", 76,353);
	fill(255,0,255);
//	text("few", 84,208);
	fill(127,255,0);
//	text("sunny", 298,142);
//	text("the", 20,113);
	fill(255,215,0);
//	text("hear", 221,113);
	fill(153,50,204);
//	text("must", 203,266);
	fill(72,209,204);
//	text("I", 237,236);
	fill(255,0,0);
//	text("I", 169,266);
	fill(65,105,225);
//	text("day", 363,142);
	fill(154,205,50);
//	text("your", 59,297);
	fill(233,150,122);
//	text("of", 18,142);
//	text("a", 153,84);
	fill(255,105,180);
//	text("date,", 172,236);
	fill(210,105,30);
//	text("I", 187,113);
	fill(218,165,32);
	text("make", 103,84);
	text("April", 446,142);
	fill(255,140,0);
//	text("only", 315,236);
	fill(30,144,255);
//	text("music", 591,113);
//	text("the", 55,142);
	fill(255,165,0);
//	text("one", 431,208);
	fill(128,0,128);
//	text("confession", 178,84);
	fill(147,112,219);
//	text("my", 257,142);
	fill(128,128,0);
//	text("think", 364,236);
	fill(0,128,0);
//	text("am", 20,297);
//	text("ovely", 346,174);
	fill(127,255,212);
//	text("be", 257,266);
	fill(250,128,114);
//	text("g", 23,266);
	fill(240,128,128);
//	text("Love", 15,353);
	fill(218,165,32);
	text("It", 323,84);
	text("first", 17,174);
	fill(128,0,128);
//	text("ais", 146,28);
	fill(240,230,140);
//	text("darling,", 514,236);
	fill(255,0,0);
//	text("our", 88,236);
	fill(30,144,255);
//	text("y,", 172,28);
	fill(238,232,170);
//	text("I", 477,174);
//	text("kisses,", 125,353);
	fill(199,21,133);
//	text("reen", 36,266);
//	text("seconds", 141,208);
//	text("knew", 511,174);
//	text("the", 563,142);
	fill(148,0,211);
//	text("that", 570,266);
//	text("May", 15,84);
	fill(250,128,114);
//	text("that", 159,174);
	fill(240,230,140);
//	text("?", 292,84);
	fill(238,232,170);
//	text("that", 230,208);
	fill(147,112,219);
//	text("alone", 533,84);
	fill(220,20,60);
//	text("I", 69,84);
	fill(238,232,170);
//	text("the", 447,113);
	fill(0,255,255);
//	text("from", 575,174);
//	text("your", 291,174);
	fill(0,255,0);
//	text("x", 69,409);
	fill(72,209,204);
//	text("the", 301,266);
//	text("fac", 410,174);
	fill(0,255,0);
//	text("person", 436,266);
	fill(0,255,255);
//	text("You", 162,142);
	fill(255,0,0);
//	text("in", 595,84);
//	text("yes.", 113,266);
	fill(0,255,255);
//	text("love.", 532,208);
//	text("I", 621,266);
//	text("From", 504,142);



}
