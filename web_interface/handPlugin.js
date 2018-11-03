// source http://dimsemenov.com/plugins/magnific-popup/
$(document).ready(function() {
	$('#hejha').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
    src:'<div>' +
    '<form id="test-form" class="white-popup-block mfp-hide">' +
    	'<h1>Form</h1>' +
    	'<fieldset style="border:0;">'+
  		'<p>Lightbox has an option to automatically focus on the first input. Its strongly recommended to use <code>inline</code> popup type for lightboxes with form instead of <code>ajax</code> (to keep entered data if the user accidentally refreshed the page).</p>'+
    		'<ol><li><label for="name">Name</label><input id="name" name="name" type="text" placeholder="Name" required=""></li><li>'+
    				'<label for="email">Email</label>'+
    			'	<input id="email" name="email" type="email" placeholder="example@domain.com" required="">'+
    			'</li>'+
    		'	<li>'+
    			'	<label for="phone">Phone</label>'+
    			'	<input id="phone" name="phone" type="tel" placeholder="Eg. +447500000000" required="">'+
    		'	</li>'+
    		'	<li>'+
    			'	<label for="textarea">Textarea</label><br>'+
    			'	<textarea id="textarea">Try to resize me to see how popup CSS-based resizing works.</textarea>'+
    		'	</li></ol></fieldset></form>'+
    '</div>',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});
