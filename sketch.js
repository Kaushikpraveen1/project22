var bullet
var wall,thickness;
var bullet,speed,weight;


function setup() {
  
  
  speed=random(55,90);
  weight=random(400,1500);
  
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  
  wall=createSprite(1500,200,60,height/2);
  wall=createSprite(1200,200,thickness,height/2);
  bullet=createSprite(200,100,50,50);


 

  
  car.velocityX=0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180)
{
bullet.shapeColor=color("white");
}

if(deformation<180 && deformation>100)
{
  bullet.shapeColor=color("white");
} 

if(deformation<100)
{
  bullet.shapeColor=color("white");

  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,52); 
  
  function hasCollided(Lbullet,Lwall);
  {
    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;


  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight *speed *speed/(thickness *thickness *thickness);

    if(damage>10);
    {
      wall.shapeColor=color(255,0,0);
    
    }


    if(damage>10);
    {
      wall.shapeColor=color(0,255,0);
    }

thickness=random(22,83);
  }

  function draw() {
  background("white");  
  drawSprites();{


