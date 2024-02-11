AOS.init()

var swiper = new Swiper(".mySwiper", {
	// Hanya satu slide yang ditampilkan pada tampilan mobile
	slidesPerView: 1,
	slidesCenter: true,
	centeredSlides: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	breakpoints: {
		900: {
			slidesPerView: 2,
		},
	},
});
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);



let smoother = ScrollSmoother.create({
	wrapper: 'html',
	content: 'body'
})