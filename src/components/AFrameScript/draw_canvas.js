window.AFRAME.registerComponent('draw-canvas', {
  schema: {
    textToShow: { type: 'string' },
    route: { type: 'int' },
    stop: { type: 'int' },
    available: { type: 'boolean' }
  },
  init: function () {
    this.canvas = document.getElementById(`my-canvas-${this.data.stop}`);
    this.ctx = this.canvas.getContext('2d');

    // we'll update this manually
    this.texture = null;

    // wait until the element is ready
    this.el.addEventListener('loaded', e => {
      // create the texture
      this.texture = new window.THREE.CanvasTexture(this.canvas);

      // get the references neccesary to swap the texture
      let mesh = this.el.getObject3D('mesh');
      mesh.material.map = this.texture;
      // if there was a map before, you should dispose it
    });

    this.ctx.fillStyle = `rgba(135, 135, 135, ${this.data.available ? "0.75" : "0.25"})`;
    roundRect(this.ctx, 0, 0, 1000, 100, 20, true);

    text(this.ctx, this.data.textToShow, `${this.data.available ? "white" : "gray"}`);

    this.el.addEventListener('mouseenter', () => {
      // Not beeing used right now
    });

    this.el.addEventListener('click', () => {
      const vid = document.getElementById("vid");
      vid.setAttribute("src", `/../src/assets/video/Route-${this.data.route}/Route-${this.data.route}-Stop-${this.data.stop + 1}.mp4`);
    });
  },
  tick: function () {
    // if the texture is created - update it
    if (this.texture) this.texture.needsUpdate = true;
  }
});

function drawRectangle(ctx) {
  ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
  ctx.fillRect(0, 0, 100, 100);
}

function drawGradient(ctx) {
  // Create gradient
  var grd = ctx.createLinearGradient(0, 0, 100, 0);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "white");

  // Fill with gradient
  ctx.fillStyle = grd;
  ctx.fillRect(0, 0, 100, 100);
}

// http://js-bits.blogspot.com/2010/07/canvas-rounded-corner-rectangles.html
function roundRect(ctx, x, y, width, height, radius, fill, stroke) {
  if (typeof stroke == "undefined") {
    stroke = true;
  }
  if (typeof radius === "undefined") {
    radius = 5;
  }
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (stroke) {
    ctx.stroke();
  }
  if (fill) {
    ctx.fill();
  }
}

function text(ctx, textToShow, color) {
  ctx.font = "70px Arial";
  ctx.fillStyle = color;
  ctx.fillText(textToShow, 50, 70);
}