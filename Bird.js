class Bird extends BaseClass{
  constructor(x,y){
    super(x,y,50,50);
    /*var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.9,
    }
    this.width = 50;
    this.height = 50;
    this.body = Bodies.rectangle(x, y, width, height, options);*/
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path = [];
    // s
  }
  display() {
    super.display();
    if (released) {
        this.path.push([this.body.position.x, this.body.position.y])
        for (var i = 0; i < this.path.length; i++) {
            image(this.smoke, this.path[i][0], this.path[i][1]);
        }
    }
  }

  mousePos() {
    // this.body.position.x = mouseX;
    // this.body.position.y = mouseY;
  }
}