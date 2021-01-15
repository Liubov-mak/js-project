const callbackPopUp = () => {
	const callbackBtn = document.querySelectorAll('.callback-btn'),
		modalCallback = document.querySelector('.modal-callback'),		
        modalOverlay = document.querySelector('.modal-overlay'),
		buttonServices = document.querySelector('.button-services'),
		servicesElements = document.querySelector('.services-elements'),
		element = servicesElements.querySelectorAll('.element'),		  
        modalClose = document.querySelector('.modal-close'); 

        const actionsPopUp = () => {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
            modalCallback.classList.add('b-show');
            modalOverlay.classList.add('b-show');
        };
	
		callbackBtn.forEach(elem => elem.addEventListener('click', () => {			
			actionsPopUp();
        }));
        buttonServices.addEventListener('click', () => {
            event.preventDefault();
            actionsPopUp();
        });         
        modalClose.addEventListener('click', () => {
            modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
        });
        modalOverlay.addEventListener('click', () => {
            modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
		});	
		element.forEach(elem => elem.addEventListener('click', (event) => {
			event.preventDefault();
			let target = event.target;
			if(target.closest('.element')) {
				event.preventDefault();
				actionsPopUp();				
			}
		}));
};

export default callbackPopUp;
