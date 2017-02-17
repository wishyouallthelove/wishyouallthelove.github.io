(function() {
	'use strict';

	var wrap = document.getElementById('wrap'),
		box = wrap.querySelector('.giftbox'),
		step = 1, stepTimes = [1000, 1000];

	function init() {
		box.addEventListener('click', runAnimation);
	}

	function runAnimation() {
		if(step === 1) {
			box.removeEventListener('click', runAnimation);
		}
		incStep(step);
		if(step === 4) {
			box.style.display = "none";
			document.getElementById('video-container').style.display = "block";
			return;
		}
		setTimeout(function() { runAnimation(); }, stepTimes[step - 1]);
		++step;
	}

	function incStep( step ) {
		classie.remove( wrap, 'step-' + Number( step - 1 ) );
		classie.add( wrap, 'step-' + step );
	}

	init();
})();