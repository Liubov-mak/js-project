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
};

export default accordeonSection;
