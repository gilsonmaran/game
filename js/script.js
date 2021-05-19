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
