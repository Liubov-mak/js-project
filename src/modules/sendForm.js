const sendForm = () => {

	const postData = data => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	const errorMessage = 'Что-то пошло не так...',
		loadMessage = 'Загрузка...',
		successMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

	const form1 = document.getElementById('form1');		

	const statusMessage = document.createElement('div');
	statusMessage.style.color = '#2fab6d';
	statusMessage.style.margin = '25px';

	const divClear = () => {
		setTimeout(() => {
			statusMessage.textContent = '';
		}, 3000);
	};

	
	form1.addEventListener('submit', event => {
		event.preventDefault();
		form1.appendChild(statusMessage);
		const formData = new FormData(form1);
		const body = {};
		statusMessage.textContent = loadMessage;

		formData.forEach((val, key) => {
			body[key] = val;
		});

		const clearInput = () => {
			setTimeout(() => {
				form1.querySelectorAll('input').forEach(element => { element.value = ''; });
			}, 2000);
		};

		const lengthVerify = body => {
			if (body.fio === '' || body.tel === '') {
				return false;
			} else if (body.user_name < 3) {
				return false;
			} else if (body.fio.length <= 10 || body.tel.length >= 13) {
				return false;
			} else {
				return true;
			}
		};

		if (lengthVerify(body) === false) {
			statusMessage.textContent = 'Пожалуйста, корректно внесите данные';
			lengthVerify(body);
			clearInput();
			divClear();
		} else {
			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network not 200');
					}
					statusMessage.textContent = successMesage;
					divClear();
				})
				.catch(error => {
					statusMessage.textContent = errorMessage;
					console.error(error);
					divClear();
				});
			clearInput();
		}		
	});

	const fioCallback = document.getElementById('fio-callback'),
		telCallback = document.getElementById('tel-callback');

	fioCallback.addEventListener('input', () => { // в поле "имя" только кириллица и пробел
			const regex = /[^А-ЯЁа-яё\s]+/g;
			fioCallback.value = fioCallback.value.replace(regex, '');
	});
	telCallback.addEventListener('input', () => {
		telCallback.value = telCallback.value.replace(/[^0-9+]/g, '');
		telCallback.value = telCallback.value.replace(/\w{13,}/g, '');
	});
};

export default sendForm;
