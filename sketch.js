const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ground2, ground3;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground1 = new ground(400, 798, 806, 20);
    ground2 = new ground(250, 670, 280, 15);
    ground3 = new ground(560, 570, 220, 15);

    //1st pyramid 1st level
    block1 = new block(215, 666, 30, 40);
    block2 = new block(220, 666, 30, 40);
    block3 = new block(230, 666, 30 ,40);
    block4 = new block(240, 666, 30, 40);
    block5 = new block(250, 666, 30, 40);
    block6 = new block(260, 666, 30, 40);
    block7 = new block(270, 666, 30, 40);
    //1st pyramid 2nd level
    block8 = new block(220, 646, 30, 40); 
    block9 = new block(230, 646, 30, 40);
    block10 = new block(240, 646, 30, 40);
    block11 = new block(250, 646, 30, 40);
    block12 = new block(260, 646, 30, 40);
    //1st pyramid 3rd level
    block13 = new block(230, 626, 30, 40);
    block14 = new block(240, 626, 30, 40);
    block15 = new block(250, 626, 30, 40);
    //1st pyramid top
    block16 = new block(240, 606, 30, 40);
    //2nd pyramid 1st level
    block17 = new block(545, 566, 30, 40);
    block18 = new block(550, 566, 30, 40);
    block19 = new block(560, 566, 30, 40);
    block20 = new block(570, 566, 30, 40);
    block21 = new block(580, 566, 30, 40);
    //2nd pyramid 2nd level
    block22 = new block(555, 546, 30, 40);
    block23 = new block(560, 546, 30, 40);
    block24 = new block(570, 546, 30, 40);
    //2nd pyramid top
    block25 = new block(560, 526, 30, 40);

}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(20);
    fill("yellow");
    text("Drag the hexagonal stone and release it, to launch it towards the blocks", 100, 400)
    
    

    ground1.display();
    ground2.display();
    ground3.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
}
