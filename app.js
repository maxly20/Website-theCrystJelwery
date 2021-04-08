//===========================
//       HEADER SLIDER
//===========================

const myslide = document.querySelectorAll('.myslide'),
  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 4000);
function autoSlide() {
  counter += 1;
  slidefun(counter);
}
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
  let i;
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' active', '');
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = 'block';
  dot[counter - 1].className += ' active';
}
//===========================
//      FEATURES TABS
//===========================
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');

const tabActive = $('.tab-item.active');

tabs.forEach((tab, index) => {
  const pane = panes[index];

  tab.onclick = function () {
    $('.tab-item.active').classList.remove('active');
    $('.tab-pane.active').classList.remove('active');
    this.classList.add('active');
    pane.classList.add('active');
  };
});

//===========================
//       BEST SELLING SLIDER
//===========================
const nextArrow = document.querySelector('.fa-chevron-right');
const prevArrow = document.querySelector('.fa-chevron-left');
