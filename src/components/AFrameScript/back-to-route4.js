window.AFRAME.registerComponent('back-to-route4', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/video-360/4/1";
        });
    }
}); 