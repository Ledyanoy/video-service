class CustomScroll {
    constructor(element) {
        this.scrollContainer = element.current;
        this.scrollContentWrapper = this.scrollContainer.querySelector('.scrollable__wrapper');
        this.contentPosition = 0;
        this.scrollerBeingDragged = false;
        this.scroller = null;
        this.topPosition = null;
        this.scrollerHeight = null;
        this.normalizedPosition = null;
        this.init();
    }

    calculateScrollerHeight = () => {
        // Высчитываем высоту скролла
        const visibleRatio = this.scrollContainer.offsetHeight / this.scrollContentWrapper.scrollHeight;
        return visibleRatio * this.scrollContainer.offsetHeight;
    }

    moveScroller = (evt) => {
        // Начальное положение сроллбара у в верху контента
        const scrollPercentage = evt.target.scrollTop / this.scrollContentWrapper.scrollHeight;
        this.topPosition = scrollPercentage * (this.scrollContainer.offsetHeight - 5);
        this.scroller.style.top = this.topPosition + 'px';
    }

    startDrag = (evt) => {
        this.normalizedPosition = evt.pageY;
        this.contentPosition = this.scrollContentWrapper.scrollTop;
        this.scrollerBeingDragged = true;
    }

    stopDrag = () => {
        this.scrollerBeingDragged = false;
    }

    scrollBarScroll = (evt) => {
        if (this.scrollerBeingDragged === true) {
            const mouseDifferential = evt.pageY - this.normalizedPosition;
            const scrollEquivalent = mouseDifferential * (this.scrollContentWrapper.scrollHeight / this.scrollContainer.offsetHeight);
            this.scrollContentWrapper.scrollTop = this.contentPosition + scrollEquivalent;
        }
    }

    createScroller = () => {
        // Создаем сам скролл внутри контейнера
        this.scroller = document.createElement("div");
        this.scroller.className = 'scroller';

        // вычисляем его высоту
        this.scrollerHeight = this.calculateScrollerHeight();

        if (this.scrollerHeight / this.scrollContainer.offsetHeight < 1) {
            // нужен ли скролл в зависмости от высоты контейнера
            this.scroller.style.height = this.scrollerHeight + 'px';

            // добавляем скролл в контейнер
            this.scrollContainer.appendChild(this.scroller);

            // добавялем класс контейнеру
            this.scrollContainer.className += ' showScroll';

            this.scroller.addEventListener('mousedown', this.startDrag);
            window.addEventListener('mouseup', this.stopDrag);
            window.addEventListener('mousemove', this.scrollBarScroll);
        }

    }

    clearListeners = () => {
        this.scroller.removeEventListener('mousedown', this.startDrag);
        window.removeEventListener('mouseup', this.stopDrag);
        window.removeEventListener('mousemove', this.scrollBarScroll);
        this.scrollContentWrapper.removeEventListener('scroll', this.moveScroller);
    }

    init = () => {
        this.createScroller();
        this.scrollContentWrapper.addEventListener('scroll', this.moveScroller);
    }

}

export default CustomScroll