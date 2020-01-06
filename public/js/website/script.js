var intro = document.getElementById('intro'),
  navbar = document.getElementById('main-navbar'),
  navbarTop = navbar.offsetTop,
  navbarBottom = navbar.offsetTop + navbar.offsetHeight,
  introTop = intro.offsetTop,
  sidebar = document.getElementById('mobile-sidebar'),
  OpenSidebarButton = document.getElementById('mobile-nav-button'),
  CloseSidebarButton = document.getElementById('mobile-nav-button-close'),
  barsIcon = document.getElementsByClassName('fa-bars'),
  overLay = document.getElementById('mobile-overlay'),
  achievement = document.getElementById('achievement');
let countTriggered;
function myFunction() {

  // if (window.pageYOffset + window.innerHeight / 2 > achievement.offsetTop) {
  //   if (!countTriggered) {
  //     requestAnimationFrame(step);
  //     countTriggered = true;
  //   }
  // }
  window.pageYOffset > introTop
    ? navbar.classList.remove('navbar--ontop')
    : navbar.classList.add('navbar--ontop');
}

document.addEventListener('scroll', function(t) {
  myFunction();
});
OpenSidebarButton.addEventListener('click', function(t) {
  sidebar.classList.add('mobile--active');
  overLay.classList.add('mobile--active');
});
CloseSidebarButton.addEventListener('click', function(t) {
  sidebar.classList.remove('mobile--active');
  overLay.classList.remove('mobile--active');
});

let start; // set on the first step to the timestamp provided
const el = document.getElementsByClassName('count'); // get the element
const final = parseInt(el.textContent, 10); // parse out the final number
const duration = 500; // duration in ms
const step = ts => {
  if (!start) {
    start = ts;
  }
  let progress = (ts - start) / duration;
  el.textContent =
    Math.floor(progress * final) > final ? final : Math.floor(progress * final);
  // set the text
  if (progress < 1) {
    // if we're not 100% complete, request another animation frame
    requestAnimationFrame(step);
  }
};

var slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 'page',
  autoPlayButton:false,
  autoplayResetOnVisibility:false,
  controls:false,
  navPosition:'bottom',
  autoplay: true,
  center:true,
  nav:false,
});
var sliderTeam = tns({
  container: '.my-slider-team',
  items: 3,
  slideBy: 'page',
  autoPlayButton:false,
  autoplayResetOnVisibility:false,
  controls:false,
  navPosition:'bottom',
  autoplay: true,
  center:true,
  nav:false,
});
// start the animation

// sidebarButton
// .addEventListener('click', function(t) {

//   let hasClass = sidebarButton.children[0].className;
//   if (hasClass == 'fa fa-bars') {
//     sidebar.classList.add('mobile--active');
//     overLay.classList.add('mobile--active')
//     sidebarButton.children[0].classList.add('fa-times');
//     sidebarButton.children[0].classList.remove('fa-bars');
//   } else {
//     sidebar.classList.remove('mobile--active');
//     sidebarButton.children[0].classList.add('fa-bars');
//     sidebarButton.children[0].classList.remove('fa-times');
//     overLay.classList.remove('mobile--active')
//   }
// });
