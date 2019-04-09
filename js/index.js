// Your code goes here
// nav anchors change color mouseover
const navi = document.querySelector('nav');
navi.addEventListener('mouseover', function (event) {
      event.target.style.color = "blue";
      setTimeout(function () {
            event.target.style.color = "";
      }, 400);
}, false);

//nav anchors change font color on doubleclick
navi.addEventListener('dblclick', function (event) {
      event.target.style.color = "orange";
});

//nav prevent default
navi.addEventListener('click', function (event) {
      event.preventDefault()
});

//change img on hover with mouseovere/mouseout
const busImg = document.querySelector('img');
busImg.addEventListener('mouseover', () => {
      event.target.setAttribute('src', 'img/funbus.png');
      busImg.addEventListener('mouseout', () => {
            event.target.setAttribute('src', 'img/fun-bus.jpg');
      });
});

//click bus pic vanish bus pic
busImg.addEventListener('click', function (event) {
      event.target.style.display = "none";
      setTimeout(() => {
            event.target.style.display = "";
      }, 900);
}, false);

//clicking logo refreshes page
const logoRefresh = document.querySelector('.logo-heading');
logoRefresh.addEventListener('click', () => {
      window.setTimeout(() => {
            window.location.reload(true);
      }, 200);
});

//click footer vanish footer
const foot = document.querySelector('footer');
foot.addEventListener('click', function (event) {
      event.target.style.display = "none";
      setTimeout(() => {
            event.target.style.display = "";
      }, 900);
}, false);

// key down
const headerP = document.querySelector('p');
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyZ') {
        headerP.style.color = "red";
    }
  });

// key up
document.addEventListener('keyup', function(event) {
    if (event.code == 'KeyZ') {
        headerP.style.color = "";
    }
  });