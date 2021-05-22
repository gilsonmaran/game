function Joystick() {
	this.up = false;
	this.down = false;
	this.right = false;
	this.left = false;
	this.isMoving = false;


	this.pressDown = function(e) {
		return this._button(e.keyCode)
	}

	this.pressUp = function() {
		this._default()
	}

	this._button = function(key) {
		this._default();

		if(key == 37) return this._left();
		if(key == 38) return this._up();
		if(key == 39) return this._right();
		if(key == 40) return this._down();
		return null;
	}

	this._left = function() {
		this.isMoving = true;
		this.left = true;
		return 'left';
	}

	this._up = function() {
		this.isMoving = true;
		this.up = true;
		return 'up';
	}

	this._right = function() {
		this.isMoving = true;
		this.right = true;
		return 'right';
	}

	this._down = function () {
		this.isMoving = true;
		this.down = true;
		return 'down';
	}

	this._default = function() {
		this.up = false
		this.down = false;
		this.right = false;
		this.left = false;
		this.isMoving = false;
	}
}