var w = window.innerWidth;
var h = window.innerHeight;


window.addEventListener("scroll", function(event) {
  var topDistance = this.pageYOffset;
  var w = window.innerWidth;
  var h = window.innerHeight;
  var layers = document.querySelectorAll("[data-type='parallax']");
  if(w < 600){
    for (var i = 0; i < layers.length; i++){
      var layer = layers[i];
      var depth = layer.getAttribute("data-depth2");
      var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
    }
  }else{
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var depth = layer.getAttribute("data-depth");
      var translate3d = 'translate3d(0, ' + -(topDistance * depth) + 'px, 0)';
      layer.style['-webkit-transform'] = translate3d;
      layer.style['-moz-transform'] = translate3d;
      layer.style['-ms-transform'] = translate3d;
      layer.style['-o-transform'] = translate3d;
      layer.style.transform = translate3d;
  }

}
})
