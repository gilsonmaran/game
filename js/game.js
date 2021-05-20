class Player {
	constructor(sprite) {
		this.moveTo = null;
		this.isMoving = false;

		this.srcX = 150;
		this.srcY = 150;
		this.posX = 0 ;
		this.posY = 0;
		this.width = 24;
		this.height = 32;
		this.speed = 1;
		this.sprite = sprite;
		this.countAnim = 0;
	}

	moveTo(direction) {
		console.log('player: ' + direction)
		if(direction == 'up') {
			this.posY -= this.speed;
			this.srcY = this.height * 1;
		}
		if(direction == 'right') {
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		}
		if(direction == 'down') {
			this.posY += this.speed;
			this.srcY = this.height * 0;
		}
		if(direction == 'left') {
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		}
	}
}

class Game {
	constructor(context, player) {
		this.context = context;
		this.player = player;
		this.scene =  new Image();
		this.scene.src = "img/scene.png";
	}

	start() {


		console.log('Start Game')
		this.loop();
	}

	loop() {
		this._clearScene();
		this._drawScene();
		// window.requestAnimationFrame(loop, this.context);
	}

	_clearScene() {
		this.context.clearRect(0, 0, this.context.width, this.context.height);
		// this.player.draw(this.context);
	}

	_drawScene() {
		this.context.drawImage(this.scene, 0, 0, this.scene.width, this.scene.height, 0, 0, this.scene.width, this.scene.height);
	}
}



function Sprite(img){
	this.moveLeft = false;
	this.moveRight = false;
	this.moveUp = false;
	this.moveDown = false;
	this.isMoving = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = 150;
	this.srcY = 150;
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
	let	context = document.querySelector("canvas").getContext("2d");
	
	let joystick = new Joystick();
	document.addEventListener('keydown', keydownHandler, false);
	document.addEventListener('keyup', keyupHandler, false);

	function keydownHandler(e) {
		let button = joystick.pressDown(e);
		console.log(button)
	}
	
	function keyupHandler(e){
		joystick.pressUp();
	}

	let sprite = new Image();
	sprite.src = "img/img.png";

	let player = new Player(sprite);
	
	

	
	// console.log(game)

	sprite.onload = function(e) {
		let game = new Game(context, player);
		game.start();
	}
}