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
	let joystick = new Joystick();
	
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/img.png";
	var player = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/scene.png";
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		let press = joystick.pressDown(e);
		player.move(press)
	}
	
	function keyupHandler(e){
		player.stop()
	}
	
	function loop(){
		window.requestAnimationFrame(loop,cnv);
		update();
		draw();
	}

	function update(){
		player.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		player.draw(ctx);
	}

	function start(){
		loop();
	}
	start();
}
