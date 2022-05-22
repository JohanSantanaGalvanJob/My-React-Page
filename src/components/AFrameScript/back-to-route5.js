window.AFRAME.registerComponent('back-to-route5', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/video-360/5/1";
        });
    }
}); 