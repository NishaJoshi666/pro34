//Create variables here
var dog,dog1,dogimg,doghappy;
var database;
var foodS;
var foodStock;

function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  dog1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  var foodStock = database.ref("Food");
  foodStock.on("value",readStock);
  dog = createSprite(300,400,40,20);
  dog.addImage("dogSad",dog);
  
}


function draw() {  
  background(46,139,87);
text("Note:PRESS 'UP_ARROW' KEY TO FEED DRAGO MILK!");
  if(keyWentDown(UP_ARROW)){
    writwStock(foodS);
    dog1.addImage("dogHappy",doghappy);
  }

  drawSprites();
  //add styles here
  textSize(30);
  fill("white");
  Stroke(4);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }

  else{
    x=x-1;
  }

  database.ref('/').update({
    Food : x
  })
}



