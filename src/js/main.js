const searchIcon = document.querySelector('.fa-magnifying-glass');
const searchBar = document.querySelector('.nav__search');
const searchInput = document.getElementById('searchInput');
const searchClean = document.querySelector('.fa-xmark');
const allLinks = document.querySelectorAll('.link-item');
const burgerMenu = document.querySelector('.navbar-collapse');
const burgerBtn = document.querySelector('.navbar__burger-inside');
const btnSliderLeft = document.querySelector('.slider__button-left');
const btnSliderRight = document.querySelector('.slider__button-right');
const slider = document.querySelector('.slider-move');
const sliderBoxes = document.querySelectorAll('.slider__box');
const carouselWidth = 100;
const carouselSpeed = 3000;
const portfolioSection = document.querySelector('.portfolio');
const portfolioGradient = document.querySelector('.portfolio__gallery-btns');
const openGalleryBtn = document.querySelector('.open-gallery');
const closeGalleryBtn = document.querySelector('.close-gallery');
const allGalleryImages = document.querySelectorAll('.portfolio__gallery-item');
const galleryPopup = document.querySelector('.popup');
const galleryPopupClose = document.querySelector('.popup__close');
const popupImg = document.querySelector('.popup__img');
const arrowRight = document.querySelector('.popup__arrow-right');
const arroLeft = document.querySelector('.popup__arrow-left');


let currentImgIndex;

let index = 0;

const msnry = new Macy({
	container: '.portfolio__gallery',
	mobileFirst: true,
	columns: 1,
	breakAt: {
		400: 2,
		992: 3,
	},
	margin: {
		x: 40,
		y: 40,
	},
});



const handleSearchBar = () => {
	searchBar.classList.toggle('nav__search-active');
};
const handleClearSearch = () => {
	searchInput.value = '';
};
const closeBurger = () => {
	burgerMenu.classList.remove('show');
	burgerBtn.classList.toggle('active');
};
const handleOpenMenu = () => {
	burgerBtn.classList.toggle('active');
};

const handleCarousel = () => {
	index++;
	changeBoxes();
};

// let startSlider = setInterval(handleCarousel, carouselSpeed);

const changeBoxes = () => {
	if (index > sliderBoxes.length - 1) {
		index = 0;
	} else if (index < 0) {
		index = sliderBoxes.length - 1;
	}
	slider.style.transform = `translateX(${-index * carouselWidth}%)`;
};

const handleBtnSliderRight = () => {
	index++;
	changeBoxes();
};
const handleBtnSliderLeft = () => {
	index--;
	changeBoxes();
};

const handleOpenGallery = () => {
	portfolioSection.classList.toggle('toggleGallery');
	portfolioGradient.classList.toggle('toggleGradient');
	openGalleryBtn.style.display = 'none';
	closeGalleryBtn.style.display = 'block';
};

const handleCloseGallery = () => {
	portfolioSection.classList.toggle('toggleGallery');
	portfolioGradient.classList.toggle('toggleGradient');
	openGalleryBtn.style.display = 'block';
	closeGalleryBtn.style.display = 'none';
};

allGalleryImages.forEach((img, index) => {
	img.addEventListener('click', (e) => {
		galleryPopup.classList.remove('hidden');
		popupImg.src = e.target.src;
		currentImgIndex = index;
	});
});

const handlePopupClose = () => {
	galleryPopup.classList.add('hidden');
};

const handleNextImage = () => {
	if (currentImgIndex === allGalleryImages.length - 1) {
		currentImgIndex = 0;
	} else {
		currentImgIndex++;
	}

	popupImg.src = allGalleryImages[currentImgIndex].src;
};
const handlePreviousImage = () => {
	if (currentImgIndex === 0) {
		currentImgIndex = allGalleryImages.length - 1;
	} else {
		currentImgIndex--;
	}
	popupImg.src = allGalleryImages[currentImgIndex].src;
};

document.addEventListener('keydown', (e) => {
	if (!galleryPopup.classList.contains('hidden')) {
		if (e.code === 'ArroRight' || e.keyCode === 39) {
			handleNextImage();
		}
		if (e.code === 'ArrowLeft' || e.keyCode === 37) {
			handlePreviousImage();
		}
		if (e.key === 'Escape' || e.keyCode === 27) {
			handlePopupClose();
		}
	}
});

galleryPopup.addEventListener('click', (e) => {
	if (e.target === galleryPopup) {
		handlePopupClose();
	}
});

allLinks.forEach((link) => link.addEventListener('click', closeBurger));
searchIcon.addEventListener('click', handleSearchBar);
searchClean.addEventListener('click', handleClearSearch);
burgerBtn.addEventListener('click', handleOpenMenu);
btnSliderLeft.addEventListener('click', handleBtnSliderLeft);
btnSliderRight.addEventListener('click', handleBtnSliderRight);
openGalleryBtn.addEventListener('click', handleOpenGallery);
closeGalleryBtn.addEventListener('click', handleCloseGallery);
galleryPopupClose.addEventListener('click', handlePopupClose);
arrowRight.addEventListener('click', handleNextImage);
arroLeft.addEventListener('click', handlePreviousImage);

