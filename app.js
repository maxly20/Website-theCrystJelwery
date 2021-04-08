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
const cards = document.querySelectorAll('.bestselling__card');

let current = 0;

nextArrow.onclick = () => {
  current++;
  for (let i of cards) {
    if (current === 0) {
      i.style.left = '0px';
    }
    if (current === 1) {
      i.style.left = '-250px';
    }
    if (current === 2) {
      i.style.left = '-500px';
    }
    if (current === 3) {
      i.style.left = '-750px';
    }
    if (current === 4) {
      i.style.left = '-1000px';
    }
    if (current > 4) {
      current = 4;
    }
  }
};
prevArrow.onclick = () => {
  current--;
  for (let i of cards) {
    if (current === 0) {
      i.style.left = '0px';
    }
    if (current === 1) {
      i.style.left = '-250px';
    }
    if (current === 2) {
      i.style.left = '-500px';
    }
    if (current === 3) {
      i.style.left = '-750px';
    }

    if (current < 0) {
      current = 0;
    }
  }
};
//===========================
//       UPDATES SLIDER
//===========================
$('.updates__slider').owlCarousel({
  autoplay: true,
  loop: true,
  nav: true,
  autoplayTimeout: 3000,
  items: 3,
  dots: false,
  margin: 30,
  navText: [
    '<i class="fas fa-chevron-left"></i>',
    '<i class="fas fa-chevron-right"></i>',
  ],
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});
