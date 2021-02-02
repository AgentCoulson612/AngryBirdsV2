class Pig extends BaseClass {
        constructor(x, y) {
            super(x,y,50,50);
            this.image = loadImage("sprites/enemy.png");
            this.visibility = 255;
        }

        display() {
            if (this.body.speed < 5) {
                super.display();
            } else {
                World.remove(world, this.body);
                push();
                this.visibility -= 15;
                tint(255, this.visibility)
                image(this.image, this.body.position.x, this.body.position.y, 50, 50)
                pop();
            }

            if (this.visibility <= 0) {
                
            }
        }

        incrementScore() {
            if (this.visibility < 0 && this.visibility > -150) {
                score++;
            }
        }
    };
  