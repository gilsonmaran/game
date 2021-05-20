class Joystick {
	constructor () {
		this.up = false;
		this.down = false;
		this.right = false;
		this.left = false;
		this.isMoving = false;
	}	

	pressDown(e) {
		return this._button(e.keyCode)
	}

	pressUp() {
		this._default()
	}

	_button(key) {
		this._default();

		if(key == 37)
			return this._left();

		if(key == 38)
			return this._up();

		if (key == 39)
			return this._right();

		if(key == 40)
			return this._down();

		return null;
	}

	_left() {
		this.isMoving = true;
		this.left = true;
		return 'left';
	}

	_up() {
		this.isMoving = true;
		this.up = true;
		return 'up';
	}

	_right() {
		this.isMoving = true;
		this.right = true;
		return 'right';
	}

	_down() {
		this.isMoving = true;
		this.down = true;
		return 'down';
	}

	_default() {
		this.up = false
		this.down = false;
		this.right = false;
		this.left = false;
		this.isMoving = false;
	}
}

window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	let joystick = new Joystick();

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
		let press = joystick.pressDown(e);
		movePlayer(press)
	}
	
	function keyupHandler(e){
		// joystick.pressUp()
		stopPlayer()
	}
	
	function movePlayer(button) {
		switch(button){
			case 'right':
			zezim.mvRight = true;
			zezim.mvLeft = false;
			zezim.mvUp = false;
			zezim.mvDown = false;
			break;
			case 'left':
			zezim.mvRight = false;
			zezim.mvLeft = true;
			zezim.mvUp = false;
			zezim.mvDown = false;
			break;
			case 'up':
			zezim.mvRight = false;
			zezim.mvLeft = false;
			zezim.mvUp = true;
			zezim.mvDown = false;
			break;
			case 'down':
			zezim.mvRight = false;
			zezim.mvLeft = false;
			zezim.mvUp = false;
			zezim.mvDown = true;
			break;
		}
	}

	function stopPlayer() {
		zezim.mvRight = false;
		zezim.mvLeft = false;
		zezim.mvUp = false;
		zezim.mvDown = false;
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
