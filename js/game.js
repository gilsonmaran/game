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

class Animate {}

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

window.onload = function() {
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/img.png";
	var zezim = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/scene.png";
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
			zezim.moveRight = true;
			zezim.moveLeft = false;
			zezim.moveUp = false;
			zezim.moveDown = false;
			break;
			case LEFT:
			zezim.moveRight = false;
			zezim.moveLeft = true;
			zezim.moveUp = false;
			zezim.moveDown = false;
			break;
			case UP:
			zezim.moveRight = false;
			zezim.moveLeft = false;
			zezim.moveUp = true;
			zezim.moveDown = false;
			break;
			case DOWN:
			zezim.moveRight = false;
			zezim.moveLeft = false;
			zezim.moveUp = false;
			zezim.moveDown = true;
			break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
			zezim.moveRight = false;
			break;
			case LEFT:
			zezim.moveLeft = false;
			break;
			case UP:
			zezim.moveUp = false;
			break;
			case DOWN:
			zezim.moveDown = false;
			break;
		}
	}
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = zezim.posY = 150;
	}

	function init(){
		loop();
	}

	function update(){
		zezim.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		zezim.draw(ctx);
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}
