window.AFRAME.registerComponent('text-canvas', {

    init: function () {
        this.canvas = document.getElementById("my-canvas");
        this.ctx = this.canvas.getContext('2d');

        // we'll update this manually
        this.texture = null;
        // let canvas = document.getElementById("source-canvas");
        // wait until the element is ready
        this.el.addEventListener('loaded', e => {

        });

        this.ctx.fillStyle = "#709775";
        draw(this.ctx);
        this.ctx.fillStyle = "#ffffff";

        this.ctx.font = "30px Arial ";
        this.ctx.fillText("Jardin Canario", 60, 65);
        this.ctx.font = "14px Arial ";
        this.ctx.fillText("El botánico sueco Eric Ragnor Svensson",40 , 90);
        this.ctx.fillText("concibió la idea que inspiró este Jardín",40 , 110);
        this.ctx.fillText("reunir en un solo lugar toda la riqueza",40 , 130);
        this.ctx.fillText("botánica de las islas, de tal forma que las",40 , 150);
        this.ctx.fillText("plantas se sintieran casi tan cómodas",40 , 170);
        this.ctx.fillText("como en sus sitios de origen. ",40 , 190);
        this.el.addEventListener('mouseenter', function () {

        });
    },
    tick: function () {
        // if the texture is created - update it
        if (this.texture) this.texture.needsUpdate = true
    }
});

function draw(ctx) {
    // Quadratric curves example

ctx.fillRect(25,25,300,300);
}