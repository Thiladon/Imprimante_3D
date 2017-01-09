(function() {
	var container = 0;
	var height = 0;
	var posX = 0;

	$(window).on("resize load", function()
	{
	    container = $('#seconde-section .row .col').outerHeight();
		
		$('#seconde-section .row .col .card').each(function()
		{
	        height = this.offsetHeight;
			posX = (container/2) - (height/2);
			posX += "px";
	        this.style.top = posX;
	    })
	})
}());
