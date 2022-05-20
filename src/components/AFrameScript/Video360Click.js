const setVideoActive = () => {
  var vid = document.getElementById('vid');
  // console.log(vid);

  setTimeout(() => {
    // this.style.display = 'none';
    vid.play();  
  }, 3000);
  
  // document.getElementById('play-button').addEventListener("click", function (e) {
  //   this.style.display = 'none';
  //   vid.play();
  // }, false);
}

export {
  setVideoActive
}
