class Player {}

class Controller {
	constructor () {
		this.up = false
		this.down = false;
		this.right = false;
		this.left = false;
		this.isMoving = false;
	}

	reset() {
		this.up = false
		this.down = false;
		this.right = false;
		this.left = false;
		this.isMoving = false;
	}
}

class Game {}

function Sprite(img){
	this.moveLeft = false;
	this.moveRight = false;
	this.moveUp = false;
	this.moveDown = false;
	this.isMoving = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = this.srcY = 0;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
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
	this.move = function() {
		if(this.moveRight) {
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.moveLeft){
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		} else
		if(this.moveUp){
			this.posY -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(this.moveDown){
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}
	}
	
	//Anima a figura
	this.animation = function(){
		if(this.moveLeft || this.moveUp || this.moveRight || this.moveDown){
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;
			if(this.countAnim >= 40){
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 5) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = 0;
		}
		
	}
}
