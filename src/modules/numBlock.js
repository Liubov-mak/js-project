const numBlock = () => {
	let animateNumInit = false; // для отработки всего лишь один раз

	const animateNum = () => {
		const num = document.querySelectorAll('.num');

		num.forEach((elem) => {
			elem.classList.add('animated');		
		});			
		num[0].textContent = 800;
		num[1].textContent = 13;
		num[2].textContent = 40;
		num[3].textContent = 120;			

		function animateValue1(start, duration) {
			let startTimestamp = null;
			const step = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);			
				num[0].textContent = '> ' + Math.floor(progress * start);								
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
		animateValue1(num[0].textContent, 1000);
		function animateValue2(start, duration) {
			let startTimestamp = null;
			const step = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);			
				num[1].textContent = Math.floor(progress * start) + ' лет';								
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
		animateValue2(num[1].textContent, 1000);
		function animateValue3(start, duration) {
			let startTimestamp = null;
			const step = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);			
				num[2].textContent = Math.floor(progress * start) + ' мин.';								
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
		animateValue3(num[2].textContent, 1000);
		function animateValue4(start, duration) {
			let startTimestamp = null;
			const step = timestamp => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);			
				num[3].textContent = '> ' + Math.floor(progress * start);								
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
		animateValue4(num[3].textContent, 1000);
		animateNumInit = true;
	};
	window.addEventListener('scroll',(event) => {				
		if (window.scrollY >= 1400) {
			if(!animateNumInit) {
				animateNum();	
			}				
		}
	});	
};

export default numBlock;
