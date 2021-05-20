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
	
	let canvas = document.querySelector("canvas");
	let	context = canvas.getContext("2d");

	let spriteSheet = new Image();
	let scene = new Image();

	spriteSheet.src = "img/img.png";
	scene.src = "img/scene.png";
	
	let player = new Sprite(spriteSheet);
	
	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);
	
	function keydownHandler(e){
		let press = joystick.pressDown(e);
		player.move(press)
	}
	
	function keyupHandler(e){
		player.stop()
	}
	
	function update(){
		player.move();
	}

	function draw(){
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, scene.width, scene.height);
		player.draw(context);
	}

	function loop(){
		window.requestAnimationFrame(loop, canvas);
		update();
		draw();
	}

	function start(){
		loop();
	}

	start();
}
