const servicesSlider = () => {
	class ServicesCarousel {
		constructor({
			main,
			wrap,
			next,
			prev,
			infinity = false,
			position = 0,
			slidesToShow = 3, // если поставить 4, то в css изменить cal-container width: 30%; width: 80%;
			responsive = [],
		}) {
			this.main = document.querySelector(main);
			this.wrap = document.querySelector(wrap);
			this.slides = document.querySelector(wrap).children;
			this.next = document.querySelector(next);
			this.prev = document.querySelector(prev);
			this.options = {
				position,
				infinity,
				widthSlide: Math.floor(100 / slidesToShow),
			};
			this.slidesToShow = slidesToShow;
			this.responsive = responsive;
		}
		init() {
			this.addServClass();
			this.addStyle();
			if (this.prev && this.next) {
				this.controlSlider();
			} else {
				this.addArrow();
				this.controlSlider();
			}
			if (this.responsive) {
				this.responsInit();
			}
			/* this.autoPlay(); */
		}
		responsInit() {
			const slidesToShowDefault = this.slidesToShow;
			const allResponse = this.responsive.map(item => item.breakpoint);
			const maxResponse = Math.max(...allResponse);

			const checkResponse = () => {
				const widthWindow = document.documentElement.clientWidth;
				if (widthWindow < maxResponse) {
					for (let i = 0; i < allResponse.length; i++) {
						if (widthWindow < allResponse[i]) {
							this.slidesToShow = this.responsive[i].slideToShow;
							this.options.widthSlide = Math.floor(100 / this.slidesToShow);
							this.addStyle();
						}
					}
				} else {
					this.slidesToShow = slidesToShowDefault;
					this.options.widthSlide = Math.floor(100 / this.slidesToShow);
					this.addStyle();
				}
			};
			checkResponse();
			window.addEventListener('resize', checkResponse);
		}
		addServClass() {
			this.main.classList.add('serv-slider');
			this.wrap.classList.add('serv-slider__wrap');
			for (const item of this.slides) {
				item.classList.add('serv-slider__item');
			}
		}
		addStyle() {
			let style = document.getElementById('servicesCarousell-style');
			if (!style) {
				style = document.createElement('style');
				style.id = 'servicesCarousel-style';
			}

			style.textContent = `
				.serv-slider {
					overflow: hidden;
				}
				.serv-slider__wrap {
					display: flex;
					transition: transform 0.3s;
					will-change: transform; 
				}
				.serv-slider__item {
					flex: 0 0 ${this.options.widthSlide}%;
					margin: auto 0;
				}
			`;
			document.head.appendChild(style); // вставляем данный блок в документ
		}

		controlSlider() {
			this.prev.addEventListener('click', this.prevSlider.bind(this));
			this.next.addEventListener('click', this.nextSlider.bind(this));
		}

		prevSlider() {
			if (this.options.infinity || this.options.position > 0) {
				--this.options.position;
				if (this.options.position < 0) {
					this.options.position = this.slides.length - this.slidesToShow;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
		}

		nextSlider() {
			if (this.options.infinity ||  this.options.position < this.slides.length - this.slidesToShow) {
				++this.options.position;
				if (this.options.position > this.slides.length - this.slidesToShow) {
					this.options.position = 0;
				}
				this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
			}
		}
		
		/* autoPlay() {
			let autoplay = setInterval(() => {
				this.nextSlider();					
			}, 3000);
			
			this.main.addEventListener('mouseover', (event) => {
				clearInterval(autoplay);
			});
			
			this.main.addEventListener('mouseout', (event) => {
				this.autoPlay();
			});
		} */
	}
	const options = {
		main: '.services-elements', // из верстки класс
		wrap: '.services-carousel', // из верстки класс
		prev: '.services-arrow .arrow-left', // из верстки класс
		next: '.services-arrow .arrow-right', // из верстки класс
		slidesToShow: 3,
		infinity: true,
		responsive: [{   // если slidesToShow: 4 и более, разблокировать responsive
			breakpoint: 1024,
			slideToShow: 3
		},
		{
			breakpoint: 768,
			slideToShow: 2
		},
		{
			breakpoint: 530,
			slideToShow: 1
		}
		]
	};
	const carouselServ = new ServicesCarousel(options);
	carouselServ.init();
};

export default servicesSlider;
