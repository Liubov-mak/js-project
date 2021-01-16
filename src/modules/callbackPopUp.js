const callbackPopUp = () => {
	const modalCallback = document.querySelector('.modal-callback'),		
        modalOverlay = document.querySelector('.modal-overlay'),		
        body = document.querySelector('body');        

        const showPopUp = () => {
            modalCallback.style.display = 'block';
            modalOverlay.style.display = 'block';
            modalCallback.classList.add('b-show');
            modalOverlay.classList.add('b-show');
        };

        const hidePopUp = () => {
            modalCallback.style.display = 'none';
			modalOverlay.style.display = 'none';
        };

        body.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('button-services') || target.closest('.element') || target.classList.contains('callback-btn')) {
                event.preventDefault();
                showPopUp();
            }
            if(target.closest('.modal-close') || target.classList.contains('modal-overlay')) {
                hidePopUp();
            }     
        });		
};

export default callbackPopUp;
