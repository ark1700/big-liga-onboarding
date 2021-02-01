import {disableScrolling, enableScrolling} from '../utils/scroll-lock';

const loaderBlock = document.querySelector('.loader');
const headerLink = document.querySelector('.header__link');
const mainBlock = document.querySelector('.main');
const isTablet = window.matchMedia('(max-width: 1023px)').matches;

const showLoader = () => {
  if (!loaderBlock || !headerLink || !mainBlock) {
    return;
  }

  loaderBlock.classList.add('loader--show');
  headerLink.classList.add('header__link--active');
  mainBlock.classList.remove('main--loaded');
  disableScrolling();
};

const hideLoader = () => {
  if (!loaderBlock || !headerLink || !mainBlock) {
    return;
  }

  headerLink.classList.remove('header__link--active');

  setTimeout(() => {
    loaderBlock.classList.remove('loader--show');
    mainBlock.classList.add('main--loaded');
    enableScrolling();
  }, 500);
};

const loaderClickHandler = () => {
  hideLoader();

  document.removeEventListener('keydown', loaderClickHandler);
};

const loaderKeydownHandler = (e) => {
  if (e.key === 'Enter') {
    hideLoader();
    document.removeEventListener('keydown', loaderKeydownHandler);
  }
};

const ready = () => {
  showLoader();

  if (isTablet) {
    document.addEventListener('click', loaderClickHandler);
    return;
  }

  document.addEventListener('keydown', loaderKeydownHandler);
};

const loader = () => {
  if (!loaderBlock) {
    return;
  }

  document.addEventListener('DOMContentLoaded', ready);
};

export {loader};
