


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body

$(document).ready(function ($) {
	$body = $('body');
	if(devStatus) {
		pageWidget(['index']);
		pageWidget(['policy']);
		pageWidget(['catalog']);
		pageWidget(['subcategory']);
		pageWidget(['category']);
		pageWidget(['portfolio']);
		pageWidget(['portfolio-card']);
		pageWidget(['delivery']);
		pageWidget(['contacts']);
		pageWidget(['download']);
		pageWidget(['product']);
		pageWidget(['product-form']);
		pageWidget(['placing-an-order']);
		pageWidget(['cart']);
		pageWidget(['thanks']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	showMoreText();
	productSlide();
	changeQuantity();
	modal();
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

function succes(success) {
	$(success).toggleClass('active');
		setTimeout(function() {
			$(success).removeClass('active')
		}, 3000)
}

function failed(failed) {
	$(failed).toggleClass('active');
		setTimeout(function() {
			$(failed).removeClass('active')
		}, 3000)
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}




$(document).ready(function() {
	const btns = document.querySelectorAll('.btn')

	btns.forEach(el => {
			el.addEventListener('click', function(e) {
					let
							size = Math.max(this.offsetWidth, this.offsetHeight),
							x = e.offsetX - size / 2,
							y = e.offsetY - size / 2,
							wave = this.querySelector('.wave')
	
					// Create an element if it doesn't exist
					if (!wave) {
							wave = document.createElement('span')
							wave.className = 'wave'
					}
					wave.style.cssText = `width:${size}px;height:${size}px;top:${y}px;left:${x}px`
					this.appendChild(wave)
			})
	})
})



$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})



async function maps(street, city, size) {

	function init() {
		const geocoder = ymaps.geocode(`${street} ${city}`);
		geocoder.then(
			async function (res) {
				var myMapMobile = await new ymaps.Map('map', {
						center: res.geoObjects.get(0).geometry.getCoordinates(),
						zoom: 16,
					}, {
						searchControlProvider: 'yandex#search'
					}),
					myPlacemark = new ymaps.Placemark(myMapMobile.getCenter(), {
						balloonContent: `${street} ${city}`
					}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/global/map.svg',
						iconImageSize: size,
						iconImageOffset: [-5, -38]
					});

				myMapMobile.geoObjects
					.add(myPlacemark)
				myMapMobile.behaviors.disable('scrollZoom')
			}
		);
	}
	await ymaps.ready(init);

}


function heroSlide() {
	var galleryThumbs = new Swiper(".hero_sliderThumb", {
		direction: "horizontal",
		spaceBetween: 12,
		slidesPerView: 4,
		breakpoints: {
			480: {
				direction: "horizontal",
				slidesPerView: 4,
				spaceBetween: 30,
			}
		},
				navigation: {
						prevEl: '.prev',
						nextEl: '.next'
				}
	});
	var galleryTop = new Swiper(".hero_slider", {
		direction: "horizontal",
		spaceBetween: 10,
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
		},
		keyboard: {
			enabled: true,
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
}



function singleProductsSlider() {
var galleryThumbs = new Swiper(".hero_sliderThumb", {
	spaceBetween: 11,
	slidesPerView: 4,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
	watchOverflow: true,
	navigation: {
			prevEl: '.product-prev',
			nextEl: '.product-next'
		},

});
var galleryTop = new Swiper(".hero_slider ", {
	direction: "horizontal",
	spaceBetween: 10,
	navigation: {
		prevEl: '.hero_slider_btn_prewios',
		nextEl: '.hero_slider_btn_next'
	},
	a11y: {
		prevSlideMessage: "Предыдущий слайд",
		nextSlideMessage: "Следущий слайд",
	},
	keyboard: {
		enabled: true,
	},
	thumbs: {
		swiper: galleryThumbs
	}
});
}

singleProductsSlider();


const swiperpop = new Swiper('.swiperPop', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
			freeMode: false,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 25
    },
		1024: {
			slidesPerView: 4,
      spaceBetween: 25
		}
	},
	navigation: {
    nextEl: '.popular_slider_btn_next',
    prevEl: '.popular_slider_btn_previos',
  }
});


const swipercer = new Swiper('.swiperCer', {
	breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
			freeMode: false,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 25,
			freeMode: false,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 25
    },
		1024: {
			slidesPerView: 4,
      spaceBetween: 25
		}
	},
	navigation: {
    nextEl: '.certificate_slider_btn_next',
    prevEl: '.certificate_slider_btn_previos',
  }
});


function showMoreText() {
  let showMoreBlock = document.querySelectorAll('.showMoreBlock')
  Array.from(showMoreBlock).map((item) => {
    let showMoreBtn = item.querySelector('.showMoreBtn')
    let showMoreTxt = item.querySelector('.showMoreTxt')

    showMoreBtn.addEventListener('click', function() {
      showMoreTxt.classList.toggle('visible')
      if (showMoreTxt.classList.contains('visible')) {
        this.innerHTML = `
					<div class="company_btn_more showMoreBtn active_more_btn"> 
						<p>Свернуть</p><img src="i/arrowbottomtxt.png" alt="">
				</div>
        `
      } else {
        this.innerHTML = `
				<div class="seo_btn_more showMoreBtn">
					<p>Показать больше</p><img src="i/arrowbottomtxt.png" alt="">
				</div>
        `;
      }
    })
  })
}




function productSlide() {
	var galleryThumbs = new Swiper(".product_sliderThumb", {
		spaceBetween: 12,
		slidesPerView: 5,
		breakpoints: {
			480: {
				direction: "horizontal",
				slidesPerView: 5,
				spaceBetween: 30,
			},
			1200: {
				direction: "vertical",
				slidesPerView: 5,
				spaceBetween: 10,
			}
		},
				navigation: {
						prevEl: '.prev',
						nextEl: '.next'
				}
	});
	var galleryTop = new Swiper(".product_slider", {
		direction: "horizontal",
		spaceBetween: 10,
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
		},
		keyboard: {
			enabled: true,
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
}


function modal() {
	let popup = document.querySelectorAll('.popup')
	let btnArray = document.querySelectorAll('.trigger')
	
	btnArray.forEach((el) => {
		el.addEventListener('click', function(e) {
			e.preventDefault();
			let path = e.currentTarget.dataset.target
			
			popup.forEach((el) => {
				if(el.dataset.id == path) {
					isOpen(el)
				}
			})
			
		})
	})
	

	popup.forEach((pop) => {
		let remove = pop.querySelectorAll('.remove')
		remove.forEach(el => {
			el.addEventListener('click', (e) => {
				isRemove(pop);
			})
		});
	})
}



function isOpen(popup) {
	document.body.classList.add('fixed')
	popup.classList.add('active')
}

function isRemove(popup) {
	popup.classList.remove('active')
	document.body.classList.remove('fixed')
}

modal();



function changeQuantity(change) {
	var quantityInput = document.querySelector('.product_quantity');
	
	if (quantityInput) {
			var currentQuantity = parseInt(quantityInput.value);

			if (!isNaN(currentQuantity)) {
					var newQuantity = currentQuantity + change;

					if (newQuantity >= 1) {
							quantityInput.value = newQuantity;
					}
			}
	}
}



function jui() {
	const mnogoHui = document.querySelectorAll('input[name="deliveryCheck"]')
	const BistreE = document.querySelector('.palcing_main_addres')


	mnogoHui.forEach(item => {		
		item.addEventListener('change', () => {
			const huiJUI = item.getAttribute('id')

			if(huiJUI === 'box') {
				BistreE.style.display = "none"
			} else {
				BistreE.style.display = "block"

			}
		})
	});
}

jui();

document.addEventListener('DOMContentLoaded', () => {
	const openMegaMenu = document.querySelector('.openMegaMenu');
	const megaMenu = document.querySelector('.popup_menu');
	document.addEventListener('click', (e) => {
			if (e.target.classList.contains('popup_form_m')) {
					openMegaMenu.classList.remove('active');
					megaMenu.classList.remove('active');
			}
	});
	document.addEventListener('scroll', () => {
			if (openMegaMenu.classList.contains('active')) {
					openMegaMenu.classList.remove('active');
					megaMenu.classList.remove('active');
			}
	});

	openMegaMenu.addEventListener('click', (e) => {
			if (e.currentTarget.classList.contains('openMegaMenu')) {
					if (openMegaMenu.classList.contains('active')) {
							openMegaMenu.classList.remove('active');
							megaMenu.classList.remove('active');
					} else {
							openMegaMenu.classList.add('active');
							megaMenu.classList.add('active');
					}
			}
	});
});




