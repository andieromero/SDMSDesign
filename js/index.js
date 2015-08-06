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
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});