var drop,rain=[],umbrella, engine,world,city;

var light1,light2,light3,light,thunder

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

function preload(){
    city = loadImage("city.jpg");
    light1=loadImage("light1.png");
    light2=loadImage("light2.png");
    light3=loadImage("light4.png");

    thunder = loadSound("lightning.mp3")
}

function setup(){
    createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;


    for(var i=0; i<200; i=i+1){
        drop = new Drop(random(0,width),random(0,height))
        rain.push(drop)
    }
   
    umbrella = new Umbrella(width/2,height/2+140)

    light = createSprite(random(20,width-20),0,20,20)
}

function draw(){
    background(city)
    Engine.update(engine);
    umbrella.display();

    thunder.play();

    light.x = random(20,width-20);
    var rand = Math.round(random(1,3))
  switch (rand) {
      case 1 : light.addImage(light1)
          
          break;

          case 2 : light.addImage(light3)
          
          break;

          case 3: light.addImage(light3)
          
          break;

  
      default:
          break;
  }

  

    for(var i=0; i<rain.length; i=i+1){
        rain[i].showDrop();
        rain[i].fall()
    }

    drawSprites();
    
}   

