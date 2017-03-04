/*
 * BACK TO TOP
 */
	clearifyAdmin.directive('backToTop', function() {
		return {
			restrict: 'E',
			replace: true,
			template: '<div id="back-top"><a href="#top"><span><i class="fa fa-angle-double-up fa-3x"></i></span></a></div>',
			link: function($scope, element, attrs) {
				$(window).scroll(function() {
					if($(window).scrollTop() <= 100) {
						$(element).fadeOut();
					} else {
						$(element).fadeIn();
					}

				});

				$(element).on('click', function(){
					$('html, body').animate({ scrollTop: 0 }, 'fast');
				});
			}
		}
	});
