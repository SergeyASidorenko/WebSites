window.onload = function () {
    let scroller = document.getElementsByClassName('scroll_up')[0];
    scroller.addEventListener('click', function (e) {
        window.scroll(0, 0);
    });
};