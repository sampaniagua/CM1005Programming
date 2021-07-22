/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 8118839
CaseNum: 201-3-57821405-8118839

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    
    beginShape();
    vertex(491, 224);
    vertex(487, 360);
    vertex(429, 437);
    vertex(465, 465);
    vertex(545, 329);
    vertex(765, 480);
    vertex(766, 436);
    vertex(792, 488);
    vertex(812, 483);
    vertex(812, 420);
    vertex(771, 400);
    vertex(777, 391);
    vertex(835, 428);
    vertex(837, 389);
    vertex(786, 355);
    vertex(789, 327);
    vertex(630, 242);
    vertex(661, 204);
    vertex(613, 133);
    vertex(595, 162);
    vertex(622, 199);
    vertex(491, 224);
    endShape();

}
