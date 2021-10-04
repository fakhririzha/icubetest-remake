$(document).ready(function () {
	$(".genre__list.owl-carousel").owlCarousel({
		loop: true,
		margin: 40,
		dots: false,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 3,
			},
			768: {
				items: 4,
			},
		},
	});
	$(".playlist__list.owl-carousel").owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			767: {
				items: 3,
			},
			768: {
				items: 4,
			},
		},
	});
});
