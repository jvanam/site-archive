var morphing = anime({
  targets: '#index-nav',
  rotateZ: 360,
  easing: 'linear',
  duration: 20000,
  loop: true
});

var nav = document.querySelector('.Layer_2');
var touchnav = document.querySelector('#index-nav');

nav.addEventListener('mouseenter', function() { morphing.pause(); });
nav.addEventListener('mouseleave', function() { morphing.play(); });
