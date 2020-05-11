<!DOCTYPE html>
<html lang="ru">

<head>
    <title>Доставка пирогов в Новороссийске</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <link rel="icon" href="favicon.png">    
    <link href="style/style.css" rel="stylesheet">
    <script src="js/main.js"></script>
</head>

<body>
    <header>
        <div id="fixedlogo" class="fixedlogo">
            <div class="left-section">
                <a href="/"><img src="img/logo.png" alt="Компания Горячий Пирог" srcset=""></a>
            </div>
            <div class="right-section">
                <p id="phone"><a  title="Телефон пекарни Золотая Кулебяка" href="tel:+79286606011 ">8 928 660-60-11</a></p>
                <p id="city">г. Новороссийск</p>
                <p id="instagram"><a href="https://www.instagram.com/gold_pirog/" alt="Instagram" target="_blank" title="Золотая Кулебяка в Instagram"><img src="img/icon-insta.png" /></a>@gold_pirog</p>
            </div>
        </div>
        <div class="slider">
            <div class="slider-content">
                <div class="image">
                    <canvas width="1366" height="768" id="canvas">Браузер не поддерживает элемент Canvas</canvas>
                    <h1 id="slider-slogan">Доставка русских пирогов</br><span>по старинным рецептам</span></h1>
                </div>
                <div class="ornament">
                    <img src="img/ornament.png" alt="">
                </div>
            </div>
        </div>
    </header>

    <div class="content">
        <div class="slide2">
            <div id="assortment-tab" class="assortment-tab">
                <button data-category="cake">Пироги сытные</button>
                <button data-category="sweetcake">Сладкие пироги</button>
                <button data-category="bread">Хлеб</button>
                <button data-category="drink">Напитки</button>
            </div>
            <?php
                $xslDoc = new DOMDocument();
                $xslDoc->load("menu.xsl");

                $xmlDoc = new DOMDocument();
                $xmlDoc->load("menu.xml");

                $proc = new XSLTProcessor();
                $proc->importStylesheet($xslDoc);
                echo $proc->transformToXml($xmlDoc);
            ?>
            <div class="order"><span class="order-button" id="order">Оформить<br>заказ</span></div>
            <div id="order-popup">
            <div class="order-inner-container">
                <form id="order-form" method="post">
                <h2>Отправить в заказ</h2>
                <button id="show-cart">Посмотреть заказ</button>
                    <div class="form-section">
                        <label for="phone-input">Ваш телефон</label><input required id="phone-input" name="phone" type="text" >
                        <p class="error"></p>
                    </div>
                    <div class="form-section">
                        <label for="address-input">Адрес доставки</label><textarea required id="address-input" name="address"></textarea>
                        <p class="error"></p>
                    </div>
                    <div class="form-section">
                        <label for="date-input">Дата доставки</label><input required id="date-input" name="date" type="text">
                        <p class="error"></p>
                    </div>
                    <p>Обращаем внимание, что заказ пирогов осуществляется не менее, чем за 10 часов до времени доставки</p>
               
                    <div class="form-section">
                        <label for="time-input">Время доставки</label> <input required id="time-input" name="time" type="text">
                        <p class="error"></p>
                    </div>
                    <p>Приём заказов Пн - Вс 9.00 до 19.00<br />Доставка заказов Пн - Пт 9.00 до 19.00 Сб с 10.00 до 13.00</p>
                    <p id="min-sum">Минимальная сумма заказа 400 р.</p>
                    <input type="hidden" name="goods" id="goods">
                    <input id="submit-order-form" name="order-submit" class="order-button" type="submit" value="Отправить заказ">
                </form>
                </div>
                <div id="cart"><h3>Корзина продуктов</h3><ul></ul><button>&#10003;</button></div>
                <div id="status-popup"><p></p><button>&#10003;</button></div>
                <span class="close-button">x</span>
        </div>
        </div>
        <div class="slide3">
            <div class="div2 left-side"><img src="img/cake.png " alt="Пирог " title="Пирог "></div>
            <div class="div2 right-side">
                <p class="schedule">Заказы на пироги принимаем</br>Пн - Вс 9.00 до 19.00</br>Сб 10.00 до 13.00</br>
                Доставка Пн - Пт 9.00 до 19.00</br>Сб с 10.00 до 13.00</p>
                <p class="deliver-phone">
                    <a title="Телефон пекарни Золотая Кулебяка" class="red-text" href="tel:+792866060611 ">8(928) 660-60-11</a>
                </p>
                <p class="red-text pay-at-purchase">Оплата при получении</p>
                <p class="note ">Каждый пирог готовится к назначенному времени и привозится точно в срок в индивидуальной упаковке</p>
                <p class="red-text">Доставка по г.Новороссийск:</p>
                <p>- при заказе от 901 руб.</p>
                <p class="red-text">бесплатно</p>
                <p>- при заказе до 900 руб.</p>
                <p class="red-text">100 руб.</p>
            </div>
        </div>
        <div class="slide4">
            <div class="div2 left-side">
                <img src="img/baker.png" alt="Валерий Пивоваров главный пекарь Золотая Кулебяка" title="Валерий Пивоваров главный пекарь Золотая Кулебяка">
                <p class="chief_baker">Валерий Пивоваров</p>
                <p>главный пекарь</p>
                <p>Золотая Кулебяка</p>
            </div>
            <div class="div2 right-side">
                <p>Мы чтим традиции и готовим пироги
                    </br>по старинным рецептам,
                    </br>что требует особого отношения
                    </br>поэтому заказы примимаем не менее
                    </br>чем за 10 часов</br>
                    В рецептуре наших пирогов нет</br>
                    консервантов, усилителей вкуса,</br>
                    красителей и прочих химических</br>добавок
                </p>
                <p class="wish">Приятного аппетита!</p>
            </div>
        </div>
        <div class="slide5">
            <div class="manual-slider">
                <div class="div8 arrow-left"><img id="arrow-left" src="img/arrow-left.png" alt="Назад " title="Предыдущий отзыв "></div>
          
                <?php
                $xslDoc = new DOMDocument();
                $xslDoc->load("reviews.xsl");

                $xmlDoc = new DOMDocument();
                $xmlDoc->load("reviews.xml");

                $proc = new XSLTProcessor();
                $proc->importStylesheet($xslDoc);
                echo $proc->transformToXml($xmlDoc);
            ?>
                <div class="div8 arrow-right"><img id="arrow-right" src="img/arrow-right.png" alt="Вперед " title="Следующий отзыв "></div>
            </div>
            <button>Оставить отзыв</button>
            <div id="review-popup">
                <form id="review-form" method="post">
                <h2>Оставить отзыв</h2>
                    <div class="form-section">
                        <label for="review-name-input">Ваше имя (компания)</label>
                        <input required id="review-name-input" name="name" type="text" >
                        <p class="error"></p>
                        </div>
                    <div class="form-section">
                        <label for="review-text-input">Текст отзыва</label>
                        <textarea required id="review-text-input" name="text"></textarea>
                        <p class="error"></p>
                    </div>
                    <input type="hidden" name="goods" id="goods">
                    <input id ="reviewsubmit" name="reviewsubmit" class="order-button" type="submit" value="Отправить">
                </form>
                <span class="close-button">x</span>
        </div>
        </div>
    </div>
    <footer>
        <div class="info">
            <div class="logo">
                <div class="div6">
                <a href="/"><img src="img/logo.png" title="" alt="Пекарня Золотая Кулебяка" srcset=" "></a>
                </div>
                <div class="div56">
                    <p class="slogan">Традиционные русские пироги с доставкой</p>
                    <p>Приём заказов</p>
                    <p><a  title="Телефон пекарни Золотая Кулебяка" style="color:white;" href="tel:+79286606011 ">8 (928) 660-60-11</a></p>
                </div>
            </div>
            <div class="copyright">
                <div class="div2">
                    <p>Русская пекарня "Золотая кулебяка ", 2017 г.</p>
                    <p>ИП Пивоваров В.Ю. ОГРНИП 315231500008490</p>
                </div>
                <div class="div2">
                    <p>Создание сайта <a title="Сайт компании IT-INTEGO" target="_blank" href="http://itintego.ru">IT-INTEGO</a></p>

                </div>
            </div>

        </div>
    </footer>
    <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter46206324 = new Ya.Metrika({
                    id:46206324,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript>
    <div>
        <img src="https://mc.yandex.ru/watch/46206324" style="position:absolute; left:-9999px;" alt="" />
    </div>
</noscript>
<!-- /Yandex.Metrika counter -->
</body>

</html>
