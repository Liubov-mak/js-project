const accordeonSection = () => {   
	
	const accTab = document.querySelectorAll('.acc-tab');	

	for (let i = 0; i < accTab.length; i++) {
		accTab[i].addEventListener('click', function() {
		this.classList.toggle('active');
		let accTabContent = this.nextElementSibling;
			if (accTabContent.style.maxHeight){
				accTabContent.style.maxHeight = null;
			} else {
				accTabContent.style.maxHeight = accTabContent.scrollHeight + "px";
			} 
		});
	}
	
	/* var accordion = document.querySelector('.accordeon'),
		element = accordion.querySelectorAll('.element');

		element.forEach(elem => elem.addEventListener('click', () => {
			elem.classList.toggle('active');
		}));

	accordion.addEventListener('click', change);
	function change(event) {
		var target = event.target;
		if (target.tagName !== 'H3') {
			return;
		}
		if (target.classList.contains('select')) {
			hideAll();
		} else {
			hideAll();
			target.classList.add('select');
			showText(target.nextElementSibling);
		}
	}
	function hideAll() {
		var h3El = accordion.querySelectorAll('h3');
		var divEl = accordion.querySelectorAll('.element-content');
		for (var i = 0; i < h3El.length; i++) {
			h3El[i].classList.remove('select');
		}
		for (var i = 0; i < divEl.length; i++) {
			divEl[i].style.height = '0';
		}
	}
	function showText(textEl) {
		textEl.style.height = textEl.scrollHeight + 'px';
	} */
};

export default accordeonSection;
