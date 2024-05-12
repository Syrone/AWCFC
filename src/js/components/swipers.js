import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const swiperProductClass = document.querySelectorAll('.swiper-product')

swiperProductClass?.forEach((swiperClass) => {
	const swiper = swiperClass.querySelector('.swiper'),
				btnNext = swiperClass.querySelector('.swiper-button-next'),
				btnPrev = swiperClass.querySelector('.swiper-button-prev'),
				pagination = swiperClass.querySelector('.swiper-pagination')

	new Swiper(swiper, {
		slidesPerView: 1,
		spaceBetween: 32,
		loop: true,
		navigation: {
			nextEl: btnNext,
			prevEl: btnPrev,
		},
		pagination: {
			el: pagination,
			clickable: true,
		},
	})
})