window.AFRAME.registerComponent('canvas-dropdown', {
    init: function () {
      console.log("llega")
  
      this.el.addEventListener('click', function(){
        console.log("adios");
          document.getElementById("hidden-canvas").setAttribute("visible", true);
          document.getElementById("menu-canvas").setAttribute("visible", false);
      });
    },
  });