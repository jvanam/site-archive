var morphing = anime({
  targets: '.nav_svg',
  rotateZ: 360,
  easing: 'linear',
  duration: 20000,
  loop: true
});

var nav = document.querySelector('#Layer_2');
var body= document.querySelector('#indexBody');

nav.addEventListener('mouseenter', function() { morphing.pause(); });
nav.addEventListener('mouseleave', function() { morphing.play(); });
body.addEventListener('touchstart', function() { morphing.pause(); });
body.addEventListener('touchend', function() { morphing.pplay(); });
