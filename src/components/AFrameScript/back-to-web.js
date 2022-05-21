window.AFRAME.registerComponent('back-to-web', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/";
        });
    }
}); 