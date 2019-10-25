var morphing = anime({
  targets: '.nav_svg',
  rotateZ: 360,
  easing: 'linear',
  duration: 20000,
  loop: true
});

var nav = document.querySelector('#Layer_2');

nav.addEventListener('mouseenter', function() { morphing.pause(); });
nav.addEventListener('mouseleave', function() { morphing.play(); });
nav.addEventListener('ontouchstart', function() { morphing.pause(); });
nav.addEventListener('ontouchend', function() { morphing.pplay(); });
