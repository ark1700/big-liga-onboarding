const mainBlock = document.querySelector('.main');
const isTabelt = window.matchMedia('(max-width: 1023px)').matches;
const loaderBlock = document.querySelector('.loader');


const tabletClick = () => {
  document.addEventListener('click', (e) => {
    const isLinkTarget = e.target.closest('.header__link');

    if (!isTabelt || isLinkTarget || loaderBlock.classList.contains('loader--show') || !mainBlock) {
      return;
    }

    mainBlock.classList.toggle('main--active');
  });
};

export {tabletClick};


