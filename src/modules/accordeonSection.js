const accordeonSection = () => { 	

	/* [].forEach.call(document.querySelectorAll('.acc-tab'), function(item) {
		item.addEventListener('click', function(e) {			
			let display=(this.nextElementSibling.style.display==='block') ? 'none' : 'block';
			[].forEach.call(document.querySelectorAll('.acc-content'), function(panels) {
				panels.style.display='none';				
			});
			this.nextElementSibling.style.display=display;			
		});
	}); */
	
	const accTab = document.querySelectorAll('.acc-tab');				
		
	for (let i = 0; i < accTab.length; i++) {
		accTab[i].addEventListener('click', function() {		
			this.classList.add('active');
			let accTabContent = this.nextElementSibling;
			const hideContent = () => {
				accTabContent.style.maxHeight = null;	
				this.classList.remove('active');
			};
			const showContent = () => {
				accTabContent.style.maxHeight = accTabContent.scrollHeight + "px";
				this.classList.add('active');
			};
			if (accTabContent.style.maxHeight){
				hideContent();			
			} else {
				showContent();
			}
		});
	}	
};

export default accordeonSection;
