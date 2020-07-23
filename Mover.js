class Mover
{
  constructor(x, y, m)
  {
    this.pos = createVector(x,y);
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.mass = m;
    this.r = sqrt(this.mass) * 10; //scales the objects according to their mass
    this.direction = createVector(0,0);
  }

  friction()
  {
    let dif = height - (this.pos.y + this.r);
    if(dif < 1)
    {
      let friction = this.vel.copy();
      friction.normalize();
      friction.mult(-1);

      let mu = 0.1;
      let normal = this.mass;
      friction.setMag(mu * normal);

      this.applyForce(friction);

    }
  }

  applyForce(force)
  {
    let f = p5.Vector.div(force, this.mass); // A = F/M calculates acceleration according to mass
    this.acc.add(f);//adds new acceleration to old acceleration
  }

  edges()
  {
    if (this.pos.y >= height - this.r)
    {
      this.pos.y = height - this.r;
      this.vel.y *= -1;
    }
    // if (this.pos.y <= 0 + this.r)
    // {
    //   this.pos.y = 0 + this.r;
    //   this.vel.y *= -1;
    // }
    if (this.pos.x >= width - this.r)
    {
      this.pos.x = width - this.r;
      this.vel.x *= -1;
    }
    if (this.pos.x <= 0 + this.r)
    {
      this.pos.x = 0 + this.r;
      this.vel.x *= -1;
    }
  }

  showVelocity()
  {
    this.direction = p5.Vector.add(this.pos, this.vel);
    let scale = p5.Vector.mult(this.vel, 2.5);
    this.direction.add(scale);
  }

  update()
  {
    this.vel.add(this.acc);//adds acceleration to velocity to get new velocity
    this.pos.add(this.vel);//adds velocity to position to get new position
    this.acc.set(0,0); //resets acceleration
  }
  show()
  {
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x, this.pos.y, this.r *2, this.r * 2);



    stroke(255,0,255);
    line(this.pos.x, this.pos.y, this.direction.x, this.direction.y);
  }
}
