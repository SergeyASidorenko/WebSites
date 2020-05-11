var imagePaths = ['img/slider1.png', 'img/slider2.png', 'img/slider3.png'];
var imageSlogans = ['Доставка русских пирогов<br><span>по старинным рецептам</span>', 'Акция 3<span class="other-font">+</span>1<br><span>При заказе 3-х пирогов</span><br><span>4-й пирог 500 г. в подарок</span>', 'В День Рождения<br><span>Скидка 10<span class="other-font">%</span> и</span><br><span>бесплатная доставка по Новороссийску</span>'];
var images = [];
var categoryDescriptions = { 'bread': 'Хлеб', 'cake': 'Сытные пироги', 'sweetcake': 'Сладкие пироги', 'drink': 'Напитки' };
var canvas = undefined;
var ctx = undefined;
var sliderSlogan = undefined;
var imgCounter = 0;
var OrderedPosition = function() {
    this.category = '';
    this.title = '';
    this.amount = 0;
}
var timer;
var goods = [];
init();

function init() {
    imagePaths.forEach(function(el) {
        var img = new Image();
        img.src = el;
        images.push(img);
    });
}
window.addEventListener('blur', function() {
    clearInterval(timer);
    timer = 0;
});
window.addEventListener('focus', function() {
    if (!timer)
        timer = startSlider();
});

function startSlider() {
    return setInterval(function() {
        ctx.globalAlpha = 0;
        var counter = 0;
        intrl = setInterval(function() {
            if (counter == 0) {
                sliderSlogan.innerHTML = imageSlogans[imgCounter];
                sliderSlogan.style.lineHeight = 1.4 / ((imageSlogans[imgCounter].match(/<br>/g) || []).length) + 'em';
            }
            ctx.globalAlpha += 0.1;
            ctx.drawImage(images[imgCounter], 0, 0, canvas.width, canvas.height);
            ++counter;
            if (counter >= 10) {

                imgCounter++;
                if (imgCounter >= imagePaths.length) {
                    imgCounter = 0;
                }
                clearInterval(intrl);
            }

        }, 100);
    }, 5000);

}
window.addEventListener('load', function(e) {
    var menuTabs = document.getElementById('assortment-tab');
    var menuButtons = menuTabs.getElementsByTagName('button');
    var menus = document.getElementsByClassName('assortment');
    var curCategory = 'cake';
    var curMenu = document.getElementById('currentMenu');
    var moreDiv = document.getElementById('more');
    var arrowLeft = document.getElementById('arrow-left');
    var arrowRight = document.getElementById('arrow-right');
    var slider5Frame = document.getElementById('frame');
    slider5Frame.slideIndex = 1;
    var slider5frameCount = slider5Frame.getAttribute('data-slides-count');
    var menuDiv = document.getElementsByClassName('menu')[0];
    var amountInputs = menuDiv.getElementsByTagName('input');
    var amountButtons = menuDiv.getElementsByTagName('button');
    var okButtons = menuDiv.getElementsByClassName('ok-button');
    var orderButton = document.getElementById('order');
    var orderButtonDiv = document.getElementsByClassName('order')[0];
    var showCartButton = document.getElementById('show-cart');
    var cart = document.getElementById('cart');
    sliderSlogan = document.getElementById('slider-slogan');
    var popup = document.getElementById('order-popup');
    var timeInput = document.querySelector('#time-input');
    var dateInput = document.querySelector('#date-input');
    var phoneInput = document.querySelector('#phone-input');
    var reviewPopup = document.getElementById('review-popup');
    var closeButtonOrderForm = popup.getElementsByClassName('close-button')[0];
    var closeButtonReviewForm = reviewPopup.getElementsByClassName('close-button')[0];
    var orderForm = document.getElementById('order-form');
    var reviewForm = document.getElementById('review-form');
    var reviewFormNameInput = reviewForm['name'];
    var reviewFormTextArea = reviewForm['text'];
    var orderFormInputs = orderForm.getElementsByTagName('input');
    var orderFormTextArea = orderForm.getElementsByTagName('textarea')[0];
    var okCartButton = cart.getElementsByTagName('button')[0];
    var slide5 = document.getElementsByClassName('slide5')[0];
    var reviewButton = slide5.getElementsByTagName('button')[0];
    var statusPopup = document.querySelector('#status-popup');
    var okStatusButton = statusPopup.getElementsByTagName('button')[0];
    var submitOrderFormButton = document.querySelector('#submit-order-form');
    var submitReviewFormButton = document.querySelector('#reviewsubmit');
    canvas = document.getElementById('canvas');
    var fixedLogoDiv = document.getElementById('fixedlogo');
    ctx = canvas.getContext('2d');
    if (screen.width <= 800) {
        if (document.documentElement.scrollTop > 0) {
            fixedLogoDiv.style.transform = "translateY(-100%)";
        } else {
            fixedLogoDiv.style.transform = "translateY(0)";
        }
    }

    for (var i = 0; i < amountButtons.length; i++) {
        addClickEventToAmountButton(amountButtons[i]);
    }
    for (var i = 0; i < okButtons.length; i++) {
        addClickEventToOkButton(okButtons[i]);
    }
    window.addEventListener('scroll', function(e) {
        if (screen.width <= 800) {
            if (document.documentElement.scrollTop > 0) {
                fixedLogoDiv.style.transform = "translateY(-100%)";
            } else {
                fixedLogoDiv.style.transform = "translateY(0)";
            }
        }

    });
    phoneInput.addEventListener('blur', function() {
        var xhttp = new XMLHttpRequest();
        var el = this;
        xhttp.open("GET", "order.php?phone=" + phoneInput.value, true);
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                if (this.responseText == 'format') {
                    el.style.backgroundColor = "tomato";
                    var errEl = el.parentNode.getElementsByClassName('error')[0];
                    errEl.innerHTML = 'Неверный формат';
                }
            }
        };

        xhttp.send();
    });

    for (var i = 0; i < orderFormInputs.length; i++) {
        addFocusEventOnInput(orderFormInputs[i]);
        addKeyPressEventOnFormInput(orderFormInputs[i]);
    }
    for (var i = 0; i < amountInputs.length; i++) {
        addKeyPressEventOnAmountInput(amountInputs[i]);
    }

    addFocusEventOnInput(orderFormTextArea);
    addKeyPressEventOnFormInput(orderFormTextArea);
    addFocusEventOnInput(reviewFormTextArea);
    addKeyPressEventOnFormInput(reviewFormTextArea);
    addFocusEventOnInput(reviewFormNameInput);
    addKeyPressEventOnFormInput(reviewFormNameInput);
    submitOrderFormButton.addEventListener('click', function(e) {
        e.preventDefault();
        error = false;
        if (orderForm['phone'].value.trim().length == 0) {
            orderForm['phone'].style.backgroundColor = "tomato";
            var errEl = orderForm['phone'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        if (orderForm['address'].value.trim().length == 0) {
            orderForm['address'].style.backgroundColor = "tomato";
            var errEl = orderForm['address'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        if (orderForm['date'].value.trim().length == 0) {
            orderForm['date'].style.backgroundColor = "tomato";
            var errEl = orderForm['date'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        if (orderForm['time'].value.trim().length == 0) {
            orderForm['time'].style.backgroundColor = "tomato";
            var errEl = orderForm['time'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        errorDivs = this.parentNode.getElementsByClassName('error');
        for (var i = 0; i < errorDivs.length; i++) {
            if (errorDivs[i].innerHTML.length > 0) {
                error = true;
                break;
            }
        }
        if (error) {
            return;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "order.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        params = "ordersubmit=ok&phone=" + orderForm['phone'].value + "&address=" + orderForm['address'].value +
            "&date=" + orderForm['date'].value + "&time=" + orderForm['time'].value + "&goods=" + orderForm['goods'].value;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var statusText = 'Ошибка! Заявка не была отправлена';
                console.log(this.responseText);
                if (this.responseText == 'ok') {
                    statusText = 'Заявка успешно отправлена!'
                }
                pEl = statusPopup.getElementsByTagName('p')[0];
                pEl.innerHTML = statusText;
                statusPopup.style.display = 'block';
            }
        };

        xhttp.send(params);
    });

    submitReviewFormButton.addEventListener('click', function(e) {
        e.preventDefault();
        error = false;
        if (reviewForm['name'].value.trim().length == 0) {
            reviewForm['name'].style.backgroundColor = "tomato";
            var errEl = reviewForm['name'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        if (reviewForm['text'].value.trim().length == 0) {
            reviewForm['text'].style.backgroundColor = "tomato";
            var errEl = reviewForm['text'].parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = 'Поле пустое';
            error = true;
        }
        if (error) {
            return;
        }
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "review.php", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        params = "reviewsubmit=ok&name=" + reviewForm['name'].value + "&text=" + reviewForm['text'].value;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var statusText = 'Ошибка! Письмо не было отправлено';
                console.log(this.responseText);
                if (this.responseText == 'ok') {
                    statusText = 'Письмо успешно отправлено!'
                }
                pEl = statusPopup.getElementsByTagName('p')[0];
                pEl.innerHTML = statusText;
                statusPopup.style.display = 'block';
            }
        };

        xhttp.send(params);
    });
    // Обработчик события нажатия кнопки Показать еще
    menuDiv.addEventListener('click', function(e) {
        if (e.target.parentNode.className == 'more assortment4' || e.target.className == 'more assortment4') {
            moreDiv.parentNode.removeChild(moreDiv);
            hiddenPositions = curMenu.getElementsByClassName('hidden');
            count = hiddenPositions.length;
            for (var i = 0; i < count; i++) {
                hiddenPositions[0].setAttribute('class', 'assortment4');
            }
        }

    });
    //нажатие на кнопку закрыть форму заказа
    closeButtonOrderForm.addEventListener('click', function(e) {
        popup.style.display = 'none';

    });
    //нажатие на кнопку закрыть форму отзывов
    closeButtonReviewForm.addEventListener('click', function(e) {
        reviewPopup.style.display = 'none';

    });

    showCartButton.addEventListener('click', function(e) {
        e.preventDefault();
        cart.style.display = 'block';
    });
    okCartButton.addEventListener('click', function(e) {
        e.preventDefault();
        cart.style.display = 'none';

    });
    okStatusButton.addEventListener('click', function(e) {
        e.preventDefault();
        statusPopup.style.display = 'none';

    });
    // Обработчик нажатия стрелок на слайдере (левая стрелка)
    arrowLeft.addEventListener('click', function(e) {
        showSlides(slider5Frame.slideIndex += 1);
    });

    // Обработчик нажатия стрелок на слайдере (правая стрелка)
    arrowRight.addEventListener('click', function(e) {
        showSlides(slider5Frame.slideIndex += 1);
    });

    // Запуск главного слайдера
    ctx.drawImage(images[imgCounter++], 0, 0, canvas.width, canvas.height);
    timer = startSlider();

    var currentButton = document.querySelector('[data-category=' + curCategory + ']');
    currentButton.style.backgroundColor = '#f2be47';

    [].forEach.call(menuButtons, function(el) {
        addClickEventToMenuTab(el);
    }, menuButtons);

    // запуск слайдера slider5
    showSlides(slider5Frame.slideIndex);


    // Обработчик оформления заказа
    orderButton.addEventListener('click', function(e) {

        popup.style.display = 'block';
    });
    // Обработчик добавления отзыва
    reviewButton.addEventListener('click', function(e) {

        reviewPopup.style.display = 'block';
    });
    //----------------- Вспомогательные функции-----------------
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("slide-frame");
        if (n > slides.length) { slider5Frame.slideIndex = 1 }
        if (n < 1) { slider5Frame.slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slider5Frame.slideIndex - 1].style.display = "block";
    }

    function addClickEventToAmountButton(el) {
        el.addEventListener('click', function(e) {
            var amountContainer = this.parentNode.getElementsByClassName('amount-container')[0];
            amountContainer.style.right = "0";
        });
    }

    function addClickEventToOkButton(el) {
        el.addEventListener('click', function(e) {
            var amount = this.parentNode.getElementsByClassName('amount')[0];
            var curPosition = this.parentNode.parentNode;
            var category = curPosition.parentNode.getAttribute('data-menu');
            var catDescription = categoryDescriptions[category];
            var positionTitle = curPosition.getElementsByClassName('title')[0].innerHTML;
            //Определяем, есть ли данный товар уже в корзине
            var existingGoodIndex = findGood(catDescription, positionTitle);
            var amountContainer = this.parentNode;
             //Если выбранный товар уже есть в корзине, и пользователь очистил количество данного товара, удаляем товар из корзины
            if (existingGoodIndex != -1 && Number(amount.value.trim()) === 0) {
                goods.splice(existingGoodIndex, 1);

            } 
            //Если выбранный товар уже есть в корзине, и пользователь ввел новое значение количества, обновляем количество
            else if (existingGoodIndex != -1 && Number(amount.value.trim()) !== 0) {
                goods[existingGoodIndex].amount = amount.value;

            } else if (Number(amount.value.trim()) === 0) {
                amountContainer.style.right = "-100%";
                return;
            } else {
                var newGood = new OrderedPosition();
                newGood.category = catDescription;
                newGood.title = positionTitle;
                newGood.amount = amount.value;
                goods.push(newGood);
            }
            var cartList = cart.getElementsByTagName('ul')[0];
            //Очистка списка товаров
            while (cartList.firstChild) {
                cartList.removeChild(cartList.firstChild);
            }
            orderForm['goods'].value = '';
            for (var i = 0; i < goods.length; i++) {
                var liEl = document.createElement('li');
                var pos = goods[i].category + ' : ' + goods[i].title + ', количество: ' + goods[i].amount;
                liEl.innerHTML = pos;
                if (i < goods.length - 1) {
                    pos += '**';
                }
                orderForm['goods'].value += pos;
                cartList.appendChild(liEl);
            }

            amountContainer.style.right = "-100%";
            if (goods.length === 0) {
                orderButtonDiv.style.display = "none";
            } else {
                orderButtonDiv.style.display = "block";
            }
        });
    }

    function addClickEventToMenuTab(o) {
        o.addEventListener('click', function(e) {
            category = this.getAttribute('data-category');
            if (category == 'data-' + curCategory) {
                return;
            }
            renderMenu(category);
            document.querySelector('[data-category=' + curCategory + ']').style.backgroundColor = '#9c0e0e';
            this.style.backgroundColor = '#f2be47';
            curCategory = category;
            moreDiv = document.getElementById('more');
        });
    }

    function renderMenu(cat) {
        [].forEach.call(menus, function(el) {
            if (el.getAttribute('data-menu') == cat) {
                if (moreDiv) {
                    moreDiv.removeAttribute('id');
                }
                moreDiv = el.getElementsByClassName('more assortment4')[0];
                if (moreDiv) {
                    moreDiv.setAttribute('id', 'more');
                }
                el.setAttribute('id', 'currentMenu');
                curMenu = el;
                el.setAttribute('class', 'assortment');
                return;
            }
            el.removeAttribute('id', 'currentMenu');
            el.setAttribute('class', 'hidden assortment');

        });
    }

    function findGood(cat, title) {
        var i = -1;
        goods.forEach(function(el, index) {
            if (el.category == cat && el.title == title) {
                i = index;
                return;
            }
        });
        return i;
    }

    function addFocusEventOnInput(ob) {
        ob.addEventListener('focus', function() {
            this.style.backgroundColor = "";
            var errEl = this.parentNode.getElementsByClassName('error')[0];
            errEl.innerHTML = '';
        });
    }

    function addKeyPressEventOnAmountInput(ob) {
        ob.addEventListener('keypress', function(e) {
            if (e.keyCode == 13) {
                var amountOkButton = this.parentNode.getElementsByClassName('ok-button')[0];
                amountOkButton.click();
                document.activeElement.blur();
                this.blur();
            }
        });
    }

    function addKeyPressEventOnFormInput(ob) {
        ob.addEventListener('keypress', function(e) {
            if (e.keyCode == 13) {
                document.activeElement.blur();
                this.blur();
            }
        });
    }
});