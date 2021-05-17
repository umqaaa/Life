
$( function() {
    $( ".area-scroll" ).slider({
      range: true,
      min: 0,
      max: 100,
      values: [ 0, 100 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.values[ 0 ] + ui.values[ 0 ] );
        $( "#amount2" ).val( ui.values[ 1 ] + ui.values[ 1 ] );
      }
    });
} );
$( function() {
    $( ".area-scroll2" ).slider({
      range: true,
      min: 0,
      max: 10,
      values: [ 0, 10 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val( ui.values[ 0 ] + ui.values[ 0 ] );
        $( "#amount4" ).val( ui.values[ 1 ] + ui.values[ 1 ] );
      }
    });
} );
const btn = document.querySelector('.arrows__right');
const bgvideo1 = document.querySelector('.bgvideo1');
const bgvideo2 = document.querySelector('.bgvideo2');
const flat = document.querySelector('.main-list__item');
const flatImg = document.querySelector('.flat__img');

btn.addEventListener('click', () => {
    bgvideo2.classList.toggle('none');
    bgvideo1.classList.toggle('none');
});
flat.addEventListener('click', () => {
    flatImg.classList.toggle('opacity');
});
$('body').on('input', '#amount, #amount2', function(){
	var value = this.value.replace(/[^0-9]/g, '');
	if (value < $(this).data('min')) {
		this.value = $(this).data('min');
	} else if (value > $(this).data('max')) {
		this.value = $(this).data('max');
	} else {
		this.value = value;
	}
});