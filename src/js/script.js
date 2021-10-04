$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 40,
		dots: false,
		nav: true,
		navText: ["<", ">"],
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
