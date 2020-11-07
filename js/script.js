const buttonOpen = document.querySelector('#btn-contact-modal');
const buttonClose = document.querySelector('#btn-close-modal');
const modal = document.querySelector('#contact-modal');

function openModal(e) {
    e.preventDefault();
    modal.classList.add('modal-window-show');
}

function closeModal() {
    modal.classList.remove('modal-window-show');
}

buttonClose.addEventListener('click', closeModal);
buttonOpen.addEventListener('click', openModal);


const slides = document.querySelector('.slides');

if (slides) {
    const slideOne = slider.querySelector('.slide-control-one');
  const slideTwo = slider.querySelector('.slide-control-two');
  const slideThree = slider.querySelector('.slide-control-three');
  const controlOne = slider.querySelector('.slider-control-one');
  const controlTwo = slider.querySelector('.slider-control-two');
  const controlThree = slider.querySelector('.slider-control-three');
  controlOne.addEventListener('click', function(evt) {
    evt.preventDefault();

    controlOne.classList.add('slider-control-active');
    slideOne.classList.add('slide-current');

    controlTwo.classList.remove('slider-control-active');
    slideTwo.classList.remove('slide-current');
    controlThree.classList.remove('slider-control-active');
    slideThree.classList.remove('slide-current');
  });

}

controlThree.addEventListener('click', function(evt) {
    evt.preventDefault();

    controlThree.classList.add('slider-control-active');
    slideThree.classList.add('slide-current');

    controlOne.classList.remove('slider-control-active');
    slideOne.classList.remove('slide-current');
    controlTwo.classList.remove('slider-control-active');
    slideTwo.classList.remove('slide-current');
  });
}
