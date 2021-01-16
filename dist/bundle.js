(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var a,l,c,d;d=document.querySelector(".up"),window.addEventListener("scroll",(function(){window.scrollY>=400?d.classList.add("is-visible"):d.classList.remove("is-visible")})),d.addEventListener("click",(function t(){0!==window.scrollY&&setTimeout((function(){window.scrollTo(0,window.scrollY-30),t()}),5)})),function(){var e,n=function(e,n){var i;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(i=function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e))||n&&e&&"number"==typeof e.length){i&&(e=i);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){i=e[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw s}}}}(document.querySelectorAll('a[href^="#"]'));try{var i=function(){var t=e.value;t.addEventListener("click",(function(e){var n=t.getAttribute("href"),i=document.querySelector(n).offsetTop-95;window.scroll({top:i,behavior:"smooth"}),history.pushState(null,null,n),e.preventDefault()}))};for(n.s();!(e=n.n()).done;)i()}catch(t){n.e(t)}finally{n.f()}}(),l=document.querySelector(".modal-callback"),c=document.querySelector(".modal-overlay"),document.querySelector("body").addEventListener("click",(function(t){var e=t.target;(e.classList.contains("button-services")||e.closest(".element")||e.classList.contains("callback-btn"))&&(t.preventDefault(),l.style.display="block",c.style.display="block",l.classList.add("b-show"),c.classList.add("b-show")),(e.closest(".modal-close")||e.classList.contains("modal-overlay"))&&(l.style.display="none",c.style.display="none")})),function(){var t=document.querySelector(".accordeon");function e(){for(var e=t.querySelectorAll("h3"),n=t.querySelectorAll(".element-content"),i=0;i<e.length;i++)e[i].classList.remove("select");for(i=0;i<n.length;i++)n[i].style.height="0"}t.querySelectorAll(".element").forEach((function(t){return t.addEventListener("click",(function(){t.classList.toggle("active")}))})),t.addEventListener("click",(function(t){var n,i=t.target;"H3"===i.tagName&&(i.classList.contains("select")?e():(e(),i.classList.add("select"),(n=i.nextElementSibling).style.height=n.scrollHeight+"px"))}))}(),function(){var t=document.getElementById("form1"),e=document.createElement("div");e.style.color="#2fab6d",e.style.margin="25px";var n=function(){setTimeout((function(){e.textContent=""}),3e3)};t.addEventListener("submit",(function(i){i.preventDefault(),t.appendChild(e);var o=new FormData(t),r={};e.textContent="Загрузка...",o.forEach((function(t,e){r[e]=t}));var s,a=function(){setTimeout((function(){t.querySelectorAll("input").forEach((function(t){t.value=""}))}),2e3)},l=function(t){return!(""===t.fio||""===t.tel||t.user_name<3||t.fio.length<=10||t.tel.length>=13)};!1===l(r)?(e.textContent="Пожалуйста, корректно внесите данные",l(r),a(),n()):((s=r,fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).then((function(t){if(200!==t.status)throw new Error("status network not 200");e.textContent="Спасибо! Мы скоро с Вами свяжемся!",n()})).catch((function(t){e.textContent="Что-то пошло не так...",console.error(t),n()})),a())}));var i=document.getElementById("fio-callback"),o=document.getElementById("tel-callback");i.addEventListener("input",(function(){i.value=i.value.replace(/[^А-ЯЁа-яё\s]+/g,"")})),o.addEventListener("input",(function(){o.value=o.value.replace(/[^0-9+]/g,""),o.value=o.value.replace(/\w{13,}/g,"")}))}(),new(function(){function t(e){var n=e.main,i=e.wrap,o=e.next,r=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?1:d,h=e.responsive,f=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.options={position:c,infinity:a,widthSlide:Math.floor(100/u)},this.slidesToShow=u,this.responsive=f}var o,r;return o=t,(r=[{key:"init",value:function(){this.addPicClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit(),this.autoPlay()}},{key:"responsInit",value:function(){var t,i=this,o=this.slidesToShow,r=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return n(t)}(t=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var t=document.documentElement.clientWidth;if(t<s)for(var e=0;e<r.length;e++)t<r[e]&&(i.slidesToShow=i.responsive[e].slideToShow,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle());else i.slidesToShow=o,i.options.widthSlide=Math.floor(100/i.slidesToShow),i.addStyle()};a(),window.addEventListener("resize",a)}},{key:"addPicClass",value:function(){this.main.classList.add("pic-slider"),this.wrap.classList.add("pic-slider__wrap");var t,n=function(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=e(t))){i&&(t=i);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw s}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("pic-slider__item")}catch(t){n.e(t)}finally{n.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style");t||((t=document.createElement("style")).id="sliderCarousel-style"),t.textContent="\n                .pic-slider {\n                    overflow: hidden;\n                }\n                .pic-slider__wrap {\n                    display: flex;\n                    transition: transform 0.3s;\n                    will-change: transform; \n                }\n                .pic-slider__item {\n                    flex: 0 0 ".concat(this.options.widthSlide,"%;\n                    margin: auto 0;\n                }\n            "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"autoPlay",value:function(){var t=this,e=setInterval((function(){t.nextSlider()}),3e3);this.prev.addEventListener("mouseover",(function(t){clearInterval(e)})),this.prev.addEventListener("mouseout",(function(e){t.autoPlay()})),this.next.addEventListener("mouseover",(function(t){clearInterval(e)})),this.next.addEventListener("mouseout",(function(e){t.autoPlay()}))}}])&&i(o.prototype,r),t}())({main:".top-slider",wrap:".slider-wrapper",prev:".prev",next:".next",slidesToShow:1,infinity:!0}).init(),new(function(){function t(e){var n=e.main,i=e.wrap,o=e.next,r=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?3:d,h=e.responsive,f=void 0===h?[]:h;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.querySelector(n),this.wrap=document.querySelector(i),this.slides=document.querySelector(i).children,this.next=document.querySelector(o),this.prev=document.querySelector(r),this.options={position:c,infinity:a,widthSlide:Math.floor(100/u)},this.slidesToShow=u,this.responsive=f}var e,n;return e=t,(n=[{key:"init",value:function(){this.addServClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responsInit()}},{key:"responsInit",value:function(){var t,e=this,n=this.slidesToShow,i=this.responsive.map((function(t){return t.breakpoint})),s=Math.max.apply(Math,function(t){if(Array.isArray(t))return r(t)}(t=i)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var t=document.documentElement.clientWidth;if(t<s)for(var o=0;o<i.length;o++)t<i[o]&&(e.slidesToShow=e.responsive[o].slideToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=n,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};a(),window.addEventListener("resize",a)}},{key:"addServClass",value:function(){this.main.classList.add("serv-slider"),this.wrap.classList.add("serv-slider__wrap");var t,e=function(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=o(t))){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("serv-slider__item")}catch(t){e.e(t)}finally{e.f()}}},{key:"addStyle",value:function(){var t=document.getElementById("servicesCarousell-style");t||((t=document.createElement("style")).id="servicesCarousel-style"),t.textContent="\n\t\t\t\t.serv-slider {\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t}\n\t\t\t\t.serv-slider__wrap {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\ttransition: transform 0.3s;\n\t\t\t\t\twill-change: transform; \n\t\t\t\t}\n\t\t\t\t.serv-slider__item {\n\t\t\t\t\tflex: 0 0 ".concat(this.options.widthSlide,"%;\n\t\t\t\t\tmargin: auto 0;\n\t\t\t\t}\n\t\t\t"),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.slides.length-this.slidesToShow),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.length-this.slidesToShow)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}}])&&s(e.prototype,n),t}())({main:".services-elements",wrap:".services-carousel",prev:".services-arrow .arrow-left",next:".services-arrow .arrow-right",slidesToShow:3,infinity:!0,responsive:[{breakpoint:1024,slideToShow:3},{breakpoint:768,slideToShow:2},{breakpoint:530,slideToShow:1}]}).init(),a=!1,window.addEventListener("scroll",(function(t){var e,n,i;window.scrollY>=1400&&(a||((i=document.querySelectorAll(".num")).forEach((function(t){t.classList.add("animated")})),i[0].textContent=800,i[1].textContent=13,i[2].textContent=40,i[3].textContent=120,e=i[0].textContent,n=null,window.requestAnimationFrame((function t(o){n||(n=o);var r=Math.min((o-n)/1e3,1);i[0].textContent="> "+Math.floor(r*e),r<1&&window.requestAnimationFrame(t)})),function(t,e){var n=null;window.requestAnimationFrame((function e(o){n||(n=o);var r=Math.min((o-n)/1e3,1);i[1].textContent=Math.floor(r*t)+" лет",r<1&&window.requestAnimationFrame(e)}))}(i[1].textContent),function(t,e){var n=null;window.requestAnimationFrame((function e(o){n||(n=o);var r=Math.min((o-n)/1e3,1);i[2].textContent=Math.floor(r*t)+" мин.",r<1&&window.requestAnimationFrame(e)}))}(i[2].textContent),function(t,e){var n=null;window.requestAnimationFrame((function e(o){n||(n=o);var r=Math.min((o-n)/1e3,1);i[3].textContent="> "+Math.floor(r*t),r<1&&window.requestAnimationFrame(e)}))}(i[3].textContent),a=!0))}))})();