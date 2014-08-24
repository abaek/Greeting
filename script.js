$(document).ready(function(){

	$('#fade').click(function(){
		var fade = 1;
		setInterval(function(){
            if (fade == 1) {
            	$('#hbd').fadeOut(300);
            	fade = 2;
            } else if (fade == 2) {
            	$('#hbd').fadeIn(300);
            	fade = 3;
            } else {
            	fade = 1
            }
        }, 400)
    });

	$('#enlarge').click(function(){
		var count = 2;
		setInterval(function(){
			count += 0.5;
			var size = 80 + count;
            $('#hbd').css('font-size', size + 'px');
        }, 100)
    });

	var colours = ['red', 'blue', 'pink', 'purple', 'green'];
	var colourcount = 0;
	$('#colour').click(function(){
    	setInterval(function(){
	    	$('#hbd').css('color', colours[colourcount]);
			colourcount++;
			if (colourcount > 4) {
				colourcount = 0;
			}
        }, 500)
	})


	$('#rotate').click(function(){
    	setInterval(function(){
	    	$('#hbd').css('-webkit-transform', 'rotate(' + 360 + 'deg)');
        }, 500)
	})

	$('#balloons').click(function(){
    	setInterval(function(){
	    	$('#hbd').append(' Balloons');
        }, 1000)
	})

	var excount = 1;
	$('#explode').click(function(){
		$('#count').empty();
		$('#count').append(' ' + excount + '/100');
		excount++;
		if (excount == 101) {
			$('body').empty();
			$('body').append('It\'s gonna be awesome! ');
			$('body').css('font-size', 80 + 'px');
			$('body').css('font-family', 'Impact');
		}
	})

});