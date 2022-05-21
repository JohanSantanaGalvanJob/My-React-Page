window.AFRAME.registerComponent('back-to-home', {
    init: function () {
        this.el.addEventListener('click', () => {
            window.location.href = "/";
        });
    }
}); 