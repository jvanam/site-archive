var morphing = anime({
  targets: '#lodge-nav',
  rotateZ: 360,
  easing: 'linear',
  duration: 20000,
  loop: true
});

var nav = document.querySelector('.Layer_2');

nav.addEventListener('mouseenter', function() { morphing.pause(); });
nav.addEventListener('mouseleave', function() { morphing.play(); });

window.addEventListener('touchstart', function() { morphing.pause(); });
window.addEventListener('touchend', function() { morphing.play(); });
