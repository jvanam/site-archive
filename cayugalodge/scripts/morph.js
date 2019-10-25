var morphing = anime({
  targets: '.nav_svg',
  rotateZ: 360,
  easing: 'linear',
  duration: 20000,
  loop: true
});

var nav = document.querySelector('#Layer_2');
var touchnav = document.querySelector('.nav_svg');

nav.addEventListener('mouseenter', function() { morphing.pause(); });
nav.addEventListener('mouseleave', function() { morphing.play(); });
touchnav.addEventListener('touchstart', function() { morphing.pause(); });
touchnav.addEventListener('touchend', function() { morphing.play(); });
