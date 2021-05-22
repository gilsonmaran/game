
window.onload = function() {
	let canvas = document.querySelector("canvas");
	let	context = canvas.getContext("2d");
	let joystick = new Joystick();
	console.log(joystick)
	let sprite = new Image();
	let scene = new Image();

	sprite.src = "img/img.png";
	scene.src = "img/scene.png";
	
	let player = new Player(sprite);
	
	window.addEventListener("keydown", keydownHandler, false);
	window.addEventListener("keyup", keyupHandler, false);
	
	function keydownHandler(e) {
		let press = joystick.pressDown(e);
		player.move(press)
	}
	
	function keyupHandler(e) {
		player.idle()
	}
	
	function update() {
		clearScene()
		drawScene()
		drawPlayer()
	}

	function clearScene() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	}

	function drawScene() {
		context.drawImage(scene, 0, 0, scene.width, scene.height, 0, 0, scene.width, scene.height);
	}

	function drawPlayer() {
		player.draw(context);
	}

	function start() {
		loop();
	}

	function loop() {
		window.requestAnimationFrame(loop, canvas);
		update();
	}

	start();
}
