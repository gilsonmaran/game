function Sprite(img) {
	//Atributos ****************
	// this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	let isMoving = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = this.srcY = 0;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 150;
	this.width = 24;
	this.height = 32;
	this.speed = 1;
	this.img = img;
	this.countAnim = 0;

	//Métodos *****************
	//Desenha a figura
	this.draw = function(ctx){
		ctx.drawImage(	this.img,	//Imagem de origem
						//Captura da imagem
						this.srcX,	//Origem da captura no eixo X
						this.srcY,	//Origem da captura no eixo Y
						this.width,	//Largura da imagem que será capturada
						this.height,//Altura da imagem que será capturada
						//Exibição da imagem
						this.posX,	//Posição no eixo X onde a imagem será exibida 
						this.posY,	//Posição no eixo Y onde a imagem será exibida 
						this.width,	//Largura da imagem a ser exibida 
						this.height	//Altura da imagem a ser exibida 
						);
		this.animation();
	}

	//Move a figura
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


	this.stop = function() {
		this.isMoving = false;
		
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
		this.srcX = 0;
		this.countAnim = 0;
	}
}