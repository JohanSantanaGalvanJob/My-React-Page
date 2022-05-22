window.AFRAME.registerComponent('back-to-route2', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/video-360/2/1";
        });
    }
}); 