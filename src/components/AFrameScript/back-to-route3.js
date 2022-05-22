window.AFRAME.registerComponent('back-to-route3', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/video-360/3/2";
        });
    }
}); 