$(document).ready(function () {
	$(".genre__list.owl-carousel").owlCarousel({
		loop: true,
		margin: 40,
		dots: false,
		nav: true,
		slideBy: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			769: {
				items: 4,
			},
		},
	});
	$(".playlist__list.owl-carousel").owlCarousel({
		loop: true,
		margin: 20,
		dots: false,
		nav: true,
		slideBy: 4,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 3,
			},
			769: {
				items: 4,
			},
		},
	});
});
