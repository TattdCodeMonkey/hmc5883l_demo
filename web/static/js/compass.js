const width = 200,
      height = 200;

const Compass = {
  init() {
    this.img = null;
    this.needle = null;
    this.ctx = null;
    this.degrees = 0.0;
    this.loaded = false;

    let canvas = document.getElementById('compass');

    let ctx = canvas.getContext('2d');
    if (ctx) {
      this.ctx = ctx;

      // Load the needle image
			this.needle = new Image();
			this.needle.src = '/images/needle.png';

			// Load the compass image
			this.img = new Image();
			this.img.onload = this.imgLoaded.bind(this);
			this.img.onerror = function (error) {
				console.error(this.src);
			};
			this.img.src = '/images/compass.png';
    }
  },

  imgLoaded() {
    console.log('compass loaded');
		this.loaded = true;
		// initial draw
		this.draw();
  },

  clearCanvas() {
    if (!this.loaded) {
			return;
		}
		// clear canvas
		this.ctx.clearRect(0, 0, width, height);
  },

  draw() {
    if (!this.loaded) {
			return;
		}
		this.clearCanvas();

		this.ctx.drawImage(this.img, 0, 0);

		// Save the current drawing state
		this.ctx.save();

		// Now move across and down half the
		this.ctx.translate(100, 100);

		// Rotate around this point
		this.ctx.rotate(this.degrees * (Math.PI / 180));

		// Draw the image back and up
		this.ctx.drawImage(this.needle, -100, -100);

		// Restore the previous drawing state
		this.ctx.restore();
  },

  updateHeading(degrees) {
		this.degrees = degrees;

		if (!this.loaded) {
			return;
		}

		this.draw();
	}
};

export default Compass;
