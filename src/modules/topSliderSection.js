const topSliderSection = () => {
    class SliderCarousel {
        constructor({
            main,
            wrap,
            next,
            prev,
            infinity = false,
            position = 0,
            slidesToShow = 1, // если поставить 4, то в css изменить cal-container width: 30%; width: 80%;
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
            this.addPicClass();
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
            this.autoPlay();
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
        addPicClass() {
            this.main.classList.add('pic-slider');
            this.wrap.classList.add('pic-slider__wrap');
            for (const item of this.slides) {
                item.classList.add('pic-slider__item');
            }
        }
        addStyle() {
            let style = document.getElementById('sliderCarousel-style');
            if (!style) {
                style = document.createElement('style');
                style.id = 'sliderCarousel-style';
            }

            style.textContent = `
                .pic-slider {
                    overflow: hidden;
                }
                .pic-slider__wrap {
                    display: flex;
                    transition: transform 0.3s;
                    will-change: transform; 
                }
                .pic-slider__item {
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
        
        autoPlay() {
            let autoplay = setInterval(() => {
                this.nextSlider();					
            }, 3000);
            
            this.prev.addEventListener('mouseover', (event) => {
                clearInterval(autoplay);
            });				
            this.prev.addEventListener('mouseout', (event) => {
                this.autoPlay();
            });
            this.next.addEventListener('mouseover', (event) => {
                clearInterval(autoplay);
            });				
            this.next.addEventListener('mouseout', (event) => {
                this.autoPlay();
            });
        }
    }
    const options = {
        main: '.top-slider', // из верстки класс
        wrap: '.slider-wrapper', // из верстки класс
        prev: '.prev', // из верстки класс
        next: '.next', // из верстки класс
        slidesToShow: 1,
        infinity: true,			
    };
    const carousel = new SliderCarousel(options);
    carousel.init();
    
};

export default topSliderSection;
