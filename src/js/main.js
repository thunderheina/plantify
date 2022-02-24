/* ===== SHOW MENU ===== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu');
	})
}

/* ===== CLOSE MENU ===== */
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/* Close Menu by click anywhere else */
const main = document.getElementById('main');

main.addEventListener('click', function (event) {
	let target = event.target;
	if (target.closest('.nav-menu')) {
		event.stopPropagation();
	} else if (target.closest('.main')) {
		navMenu.classList.remove('show-menu');
	}
})

/* ===== REMOVE MENU MOBILE ===== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(l => l.addEventListener('click', linkAction))

/* ===== CHANGE BACKGROUND HEADER ===== */
function scrollHeader() {
	const header = document.getElementById('header')
	if (this.scrollY >= 80) {
		header.classList.add('scroll-header');
	} else {
		header.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);

/* ===== FAQs ACCORDION ===== */
const accrodionItems = document.querySelectorAll('.faqs__item');

accrodionItems.forEach((item) => {
	const accrodionHeader = item.querySelector('.faqs__header');

	accrodionHeader.addEventListener('click', () => {
		const openItem = document.querySelector('.accordion-open')

		toggleItem(item)

		if (openItem && openItem !== item) {
			toggleItem(openItem)
		}
	})
})

const toggleItem = (item) => {
	const accrodionContent = item.querySelector('.faqs__content');

	if (item.classList.contains('accordion-open')) {
		accrodionContent.removeAttribute('style')
		item.classList.remove('accordion-open')
	} else {
		accrodionContent.style.height = accrodionContent.scrollHeight + 'px'
		item.classList.add('accordion-open')
	}
}

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		} else {
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		}
	})
}
window.addEventListener('scroll', scrollActive);

/* ===== SHOW SCROLL UP ===== */
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	if (this.scrollY >= 200) {
		scrollUp.classList.add('show-scroll');
	} else {
		scrollUp.classList.remove('show-scroll');
	}
}

window.addEventListener('scroll', scrollUp);