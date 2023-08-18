gsap.registerPlugin(ScrollTrigger);

const dropdownItem = document.querySelectorAll('.dropdown-item');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownIcon = document.querySelector('.fa-angle-down');
const dropdownBtn = document.querySelector('.dropdown-toggle');
const splitHeader = document.querySelectorAll('.slider__box-content h1');
const imgHeader = document.querySelector('.header-img');
const splitSectionTitles = document.querySelectorAll('.section__header h2');
const offerCards = document.querySelectorAll('.offer__card');
const heroImg = document.querySelector('.offer__hero-img');
const offerDesc = document.querySelector('.offer__hero-desc');
const allImgs = document.querySelectorAll('.portfolio__gallery img');
const contactContainer = document.querySelector('.contact__container');

let durationDelay = 0.2;

if (window.innerWidth > 992) {
	const lenis = new Lenis({
		// syncTouch: true,
		// smoothToch: true,
	});

	lenis.on('scroll', (e) => {
		console.log(e);
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}

	requestAnimationFrame(raf);
}

const handleOffer = () => {
	dropdownItem.forEach((item) => item.classList.toggle('menuAnim'));
	dropdownMenu.classList.toggle('openMenu');
	dropdownIcon.classList.toggle('iconAnim');
	setTimeout(() => {
		dropdownMenu.classList.remove('openMenu');
		dropdownItem.forEach((item) => item.classList.remove('menuAnim'));
	}, 2000);
};

splitHeader.forEach((char, i) => {
	const text = new SplitType(char, { types: 'words' });
	gsap.from(text.words, {
		scrollTrigger: {
			trigger: char,
			start: 'top 100%',
			markers: false,
		},
		scaleY: 0,
		y: -100,
		transformOrigin: 'top',
		stagger: 0.04,
	});
});

gsap.fromTo(
	imgHeader,
	{ scaleY: 0 },
	{
		scaleY: 1,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: imgHeader,
			start: 'top 100%',
		},
	}
);

splitSectionTitles.forEach((char, i) => {
	const text = new SplitType(char, { types: 'words' });
	gsap.from(text.words, {
		scrollTrigger: {
			trigger: char,
			start: 'top 75%',
			end: 'top 50%',
			markers: false,
			scrub: true,
		},
		opacity: 0.2,
		stagger: 0.07,
	});
});

offerCards.forEach((card) => {
	gsap.fromTo(
		card,
		{ scaleX: 0, opacity: 0, y: '+=200' },
		{
			scaleX: 1,
			opacity: 1,
			y: 0,
			duration: 1,
			delay: durationDelay,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: card,
				start: 'top 75%',
			},
		}
	);
	durationDelay = durationDelay + 0.2;
});

gsap.fromTo(
	heroImg,
	{ scaleY: 0 },
	{
		scaleY: 1,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: heroImg,
			start: 'top 120%',
		},
	}
);
gsap.fromTo(
	offerDesc,
	{ scaleY: 0 },
	{
		scaleY: 1,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: offerDesc,
			start: 'top 65%',
		},
	}
);

allImgs.forEach((img) => {
	gsap.fromTo(
		img,
		{ opacity: 0 },
		{
			opacity: 1,
			duration: 1,
			stagger: 0.2,
			ease: 'none',
			scrollTrigger: {
				trigger: img,
				start: 'top 60%',
			},
		}
	);
});

gsap.fromTo(
	contactContainer,
	{ scaleY: 0 },
	{
		scaleY: 1,
		duration: 1,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: contactContainer,
			start: 'top 65%',
		},
	}
);

dropdownItem.forEach((item) => item.addEventListener('click', handleOffer));
dropdownBtn.addEventListener('click', handleOffer);
