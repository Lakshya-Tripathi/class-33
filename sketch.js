var name = "lakshya"
console.log(name)

var num =777
console.log(num)

var bool = true
console.log(bool)

var object 
console.log(object)

object=null
console.log(object)

var array1 = [1,2,3,4,5]
console.log(array1[0])

var array2 = [[1,2],[3,4],[5,6]]
console.log(array2[1][0])

array2.push(7)
console.log(array2)

array2.pop()
console.log(array2)

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var box1, pig1;
var backgroundImg;

var score = 0

function preload() {
    getBG()
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150,305,300,175)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    c_log = new Log(100,100,100, PI/2);

    slingShot = new SlingShot(bird.body,{x:200,y:50})

    
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);
    else
    background(0)

    noStroke()
    textSize(35)
    fill("white")
    text("score: "+score,width-300,50)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
 
    bird.display();
    platform.display();
    c_log.display();
slingShot.display();
  
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})


}
function mouseReleased(){
    slingShot.fly()
}

function keyPressed(){
    if(keyCode ===32){
        bird.trajectory=[]
        Matter.Body.setPosition(bird.body,{x:200,y:50})
        slingShot.attach(bird.body)
    }
}
async function getBG(){
    var response =  await fetch("http://worldtimeapi.org/api/timezone/australia/sydney")
    var responseJSON=await response.json()
    console.log(responseJSON.datetime.slice(11,13))

    var hour = responseJSON.datetime.slice(11,13)
    if(hour>06&&hour<18){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else{
        backgroundImg = loadImage("sprites/bg2.jpg");
    }
}
