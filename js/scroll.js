/*var condition = 0;
var test = 0;
var compteur = 0;

(function () {
	condition = $('#premiere-sectio').outerHeight();

	$(document).on('mousewheel keydown DOMMouseScroll', function(event)
	{
		if(!event.keyCode)
		    var delta = event.originalEvent.wheelDelta || - event.originalEvent.detail;

	    if(delta > 0 || event.keyCode === 38)
	    {
	    	//if($('main').scrollTop() < $('#premiere-section').outerHeight())
		    	//scroll(0);
	    }
	    
	    if(delta < 0 || event.keyCode === 40)
	    {
	    	if($('main').scrollTop() < 400)
		    	test = $('#premiere-section').outerHeight();
	    }

	    if(compteur === 0)
	    	scroll(test);
	})
}());

function scroll(xcoord)
{
	$('main').animate({
    	scrollTop: xcoord
	}, {
		duration: 300,
		step: function(){
			compteur++;
		},
		complete: function(){
			compteur = 0;
		}
	});
}*/

(function() {
	var container = 0;
	var height = 0;
	var posX = 0;

	$(window).on("resize load", function(){
	    container = $('#seconde-section .row .col').outerHeight();
		console.log(container);

		$('#seconde-section .row .col .card').each(function(e){
	        console.log($('#seconde-section .row .col .card'));
	        height = this.offsetHeight;
			console.log(height);
			posX = (container/2) - (height/2);
			posX += "px";
			console.log(posX);
	        this.style.top = posX;
	    })
	})
}());