function Player(sprite) {
	this.isMoving = false;
	
	this.srcX = 0;
	this.srcY = 0;
	this.posX = 150;
	this.posY = 150;
	this.width = 24;
	this.height = 32;
	this.speed = 1;
	this.sprite = sprite;
	this.contadorDaAnimacao = 0;

	this.draw = function(ctx) {
		ctx.drawImage(this.sprite, 
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
		this.isMoving ? this.walk() : this.idle();
	}

	this.walk = function() {
		this.contadorDaAnimacao++;

		if(this.contadorDaAnimacao >= 40)
			this.contadorDaAnimacao = 0;

		this.srcX = Math.floor(this.contadorDaAnimacao / 5) * this.width;
	}

	this.idle = function() {
		this.isMoving = false;
		this.srcX = 0;
		this.contadorDaAnimacao = 0;
	}
}