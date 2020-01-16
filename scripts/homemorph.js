var svg = document.getElementById('home-svg');
var s = Snap(svg);

var h1 = Snap.select('#h1');
var h2 = Snap.select('#h2');

var h1Points = h1.node.getAttribute('d');
var h2Points = h2.node.getAttribute('d');

var toh2 = function(){
  h1.animate({ d: h2Points }, 1800, mina.linear, toh1);
}

var toh1 = function(){
  h1.animate({ d: h1Points }, 1800, mina.linear, toh2);
}

toh1();
