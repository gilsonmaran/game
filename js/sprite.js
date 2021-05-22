function Player(img) {
	this.isMoving = false;
	
	this.srcX = 0;
	this.srcY = 0;
	this.posX = this.posY = 150;
	this.width = 24;
	this.height = 32;
	this.speed = 1;
	this.img = img;
	this.countAnim = 0;

	this.draw = function(ctx) {
		ctx.drawImage(this.img, 
			this.srcX, this.srcY, 
			this.width, this.height, 
			this.posX, this.posY,
			this.width,	this.height);
		this.animation();
	}

	this.move = function(button) {
		if(button == 'right'){
			this.isMoving = true;
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(button == 'left'){
			this.isMoving = true;
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		} else
		if(button == 'up'){
			this.isMoving = true;
			this.posY -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(button == 'down'){
			this.isMoving = true;
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		} 
	}

	//Anima a figura
	this.animation = function() {
		this.isMoving ? this.animate() : this.idle();
	}

	this.animate = function() {
		this.countAnim++;

		if(this.countAnim >= 40)
			this.countAnim = 0;

		this.srcX = Math.floor(this.countAnim / 5) * this.width;
	}

	this.idle = function() {
		this.isMoving = false;
		this.srcX = 0;
		this.countAnim = 0;
	}
}