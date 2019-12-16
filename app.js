//////////////////////////////////////////////////////////////
//SCROLL HEADER
let scrollHeader = document.querySelector('.curve');

window.addEventListener('scroll', function(){
  let value = 1 + window.scrollY/-500;
  scrollHeader.style.transform = `scaleY(${value})`
});

//////////////////////////////////////////////////////////////
//STICKY NAV
let nav = document.querySelector('.navbar');

window.addEventListener('scroll', function(){
  if(window.pageYOffset > 30){
    nav.classList += ' navbar__fixed'
  } else {
    nav.classList = 'navbar'
  }

});

//////////////////////////////////////////////////////////////
//Dark theme switcher
let checkbox = document.querySelector('input[name=theme]');
let checkboxChecked = document.querySelector('input[name=theme]').checked;



checkbox.addEventListener('change', function() {
  if(this.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
  } else {
      document.documentElement.setAttribute('data-theme', 'light')
  }
});

//////////////////////////////////////////////////////////////
//navbar active
const links = document.querySelectorAll('.navbar__link');
const sections = document.querySelectorAll('.section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('navbar__link-active'));
  links[index].classList.add('navbar__link-active');
};

changeLinkState();
window.addEventListener('scroll', changeLinkState);

//////////////////////////////////////////////////////////////
//navbar scroll
let portfolio = document.querySelector('#portfolio');
let about = document.querySelector('#about');
let contact = document.querySelector('#contact');
let portfolioLink = document.querySelector('.portfolio-link');
let aboutLink = document.querySelector('.about-link');
let contactLink = document.querySelector('.contact-link');

contactLink.addEventListener('click', function(){
  window.scrollTo(0, contact.offsetTop)
});

aboutLink.addEventListener('click', function(){
  window.scrollTo(0, about.offsetTop)
});

portfolioLink.addEventListener('click', function(){
  window.scrollTo(0, portfolio.offsetTop)
});

//////////////////////////////////////////////////////////////
//loader
window.addEventListener('load', function(){
  const loader = document.querySelector('.loader');
  const body = document.getElementsByTagName("BODY")[0];
  setTimeout(function(){
    loader.className += ' loader__hidden';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
  }, 1700);
  window.scrollTo(0, 0);
});

























