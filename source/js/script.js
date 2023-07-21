const initMenu = () => {
  const headerToggle = document.querySelector('.header__toggle')
  const header = document.querySelector('.header')

  header.classList.remove('no-js');
  headerToggle.addEventListener('click', () => header.classList.toggle('is-open'));
};

const initModal = () => {
  var modalButton = document.querySelectorAll(".modal-button");
  var modalSizeButton = document.querySelectorAll(".modal__size-button");
  var modalSizeButtonFirst = document.querySelector(".modal__size-item:nth-child(1) .modal__size-button");
  var modalButtonAdd = document.querySelector(".modal__button-add");

  if (modalButton.length > 0) {
    var modal = document.querySelector('.modal');

    for (var i = 0; i < modalButton.length; i++) {
      modalButton[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal--close');
      });

      modal.addEventListener('click', (evt) => {
        if (evt.target.closest('.modal__container--buy')) {
          return;
        }
        evt.preventDefault();
        modal.classList.toggle('modal--close');
      });

      document.addEventListener('keydown', (evt) => {
        if (evt.key === 'Escape') {
          evt.preventDefault();
          modal.classList.toggle('modal--close');
        }
      });
    };
  };

  for (let i = 0; i < modalSizeButton.length; i++)
    modalSizeButton[i].onclick = function() {
    modalSizeButton[i].classList.toggle("modal__size-button--current");

    modalButtonAdd.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalSizeButton[i].classList.remove('modal__size-button--current');
      modalSizeButtonFirst.classList.add('modal__size-button--current');
    });

    modal.addEventListener('click', (evt) => {
      if (evt.target.closest('.modal__container--buy')) {
        return;
      }
      evt.preventDefault();
      modalSizeButton[i].classList.remove('modal__size-button--current');
      modalSizeButtonFirst.classList.add('modal__size-button--current');
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        modalSizeButton[i].classList.remove('modal__size-button--current');
        modalSizeButtonFirst.classList.add('modal__size-button--current');
      }
    });
  };
};

initMenu();
initModal();
