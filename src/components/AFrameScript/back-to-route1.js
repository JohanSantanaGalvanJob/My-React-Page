window.AFRAME.registerComponent('back-to-route1', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/video-360/1/1";
        });
    }
}); 