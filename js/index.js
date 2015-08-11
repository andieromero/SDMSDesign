$('.menu-section').affix({
	offset: {
		top: $('div.navbar').height()
	}
});

// Dropdown Menu Fade    
jQuery(document).ready(function(){
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).fadeOut("fast");
    });
});


var width = $(window).width();
if (width < (768)) {
	$('.dropdown-toggle').prop('disabled', true);
	$('.dropdown-toggle').attr("href", "schedule.html");
}

// $.getJSON("json/content.json", function(data) {
// 	console.log(terms);
// 	var terms = [];
// 	$.each( data, function (header, content) {
// 		terms.push("<li id='" + header + "'>" + content + "</li>")
// 	});

// });

// var text = $.getJSON("json/content.json")

$(document).ready(function(){
	$('.responsive').slick({

	  dots: true,
	  arrows: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        arrows: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        arrows: false
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
	 $(window).scroll(function(){
  		var y = $(window).scrollTop() - 300;
  		if( y > 0 ){
      		$("#top-shadow").css({'display':'block', 'opacity':y/20});
      		$("#active").addClass('menu-top-active');
  		} else {
      	$("#top-shadow").css({'display':'block', 'opacity':y/20});
      		$("#active").removeClass('menu-top-active');

  		}
 	});
});

    $(function () {
		function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
    		$form.find('input').val('');
			$form.removeClass('active');
		}

		// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
		$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$form.addClass('active');
			$input.focus();
			console.log('CLICK');
		});
		// ONLY FOR DEMO // Please use $('form').submit(function(event)) to track from submission
		// if your form is ajax remember to call `closeSearch()` to close the search container
		$(document).on('click', '.navbar-collapse form[role="search"].active button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$('#showSearchTerm').text($input.val());
            closeSearch()
		});
    });