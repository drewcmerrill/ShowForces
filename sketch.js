

function setup() {
	createCanvas(600, 600);
  mover = new Mover(300,600, 4);
}

function draw() {
	background(51);

	let gravity = createVector(0,1);
	let weight = p5.Vector.mult(gravity, mover.mass); //calculates weight force by multiplying gravity times mass
	mover.applyForce(weight);

	if(mouseIsPressed)//when you hold the mouse, the wind blows
	{
		let windSpeed = 1;
		let wind = createVector(windSpeed,0);
		mover.applyForce(wind);
	}
	// if(keyIsPressed)
	// {
	// 	let windSpeed = -1;
	// 	let wind = createVector(windSpeed,0);
	// 	mover.applyForce(wind);
	// }


	mover.friction();
	mover.drag(.2);
	mover.showVelocity();
	mover.update();
	mover.edges();
	mover.show();

}

function keyPressed() {
  	let jump = createVector(0, -50);
		mover.applyForce(jump);
  }
