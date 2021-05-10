const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;

console.log(slides);

const startSlide = () => {
  slideId = setInterval(() => {
    moveToNextSlide();
  }, interval);
};

const getSlides = () => document.querySelectorAll('.slide');

slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();

//SEGUNDO CARRUSEL
const slideContainer2 = document.querySelector('.best-container');
const slide2 = document.querySelector('.best-slides');
const nextBtn2 = document.getElementById('bestNextBtn');
const prevBtn2 = document.getElementById('bestPrevBtn');
const interval2 = 3000;

let slides2 = document.querySelectorAll('.best-slide');
let index2 = 1;
let slideId2;

const firstClone2 = slides2[0].cloneNode(true);
const lastClone2 = slides2[slides2.length - 1].cloneNode(true);

firstClone2.id = 'firstClone2';
lastClone2.id = 'lastClone2';

slide2.append(firstClone2);
slide2.prepend(lastClone2);

const slideWidth2 = slides2[index2].clientWidth;

slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;

const startSlide2 = () => {
  slideId2 = setInterval(() => {
    moveToNextSlide2();
  }, interval2);
};

const getSlides2 = () => document.querySelectorAll('.best-slide');

slide2.addEventListener('transitionend', () => {
  slides2 = getSlides2();
  if (slides2[index2].id === firstClone2.id) {
    slide2.style.transition = 'none';
    index2 = 1;
    slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
  }

  if (slides2[index2].id === lastClone2.id) {
    slide2.style.transition = 'none';
    index2 = slides2.length - 2;
    slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
  }
});

const moveToNextSlide2 = () => {
  slides2 = getSlides2();
  if (index2 >= slides2.length - 1) return;
  index2++;
  slide2.style.transition = '.7s ease-out';
  slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
};

const moveToPreviousSlide2 = () => {
  if (index2 <= 0) return;
  index2--;
  slide2.style.transition = '.7s ease-out';
  slide2.style.transform = `translateX(${-slideWidth2 * index2}px)`;
};

slideContainer2.addEventListener('mouseenter', () => {
  clearInterval(slideId2);
});

slideContainer2.addEventListener('mouseleave', startSlide2);
nextBtn2.addEventListener('click', moveToNextSlide2);
prevBtn2.addEventListener('click', moveToPreviousSlide2);

startSlide2();