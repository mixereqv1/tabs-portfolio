const Tabs = {
    buttons: document.querySelectorAll('.tabs__button'),
    contents: document.querySelectorAll('.content__tabs'),
    init: function () {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', e => {
                for (let j = 0; j < this.buttons.length; j++) {
                    this.buttons[j].classList.remove('tabs__button__active');
                    this.contents[j].classList.remove('content__tabs__active');
                }
                this.buttons[i].classList.add('tabs__button__active');
                this.contents[i].classList.add('content__tabs__active');
            });
        }
    }
}
Tabs.init();

window.onload = function() {
    setTimeout(function() {
        document.querySelector('body').classList.add('loaded');
    },1000);
}