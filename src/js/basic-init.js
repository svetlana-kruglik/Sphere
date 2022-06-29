document.addEventListener('DOMContentLoaded', () => {
    console.log('js works');
    // custom select

    let selectHeaders = document.querySelectorAll('.js-select__header');
    let selectItems = document.querySelectorAll('.js-select__item');

    selectHandler();

    function selectHandler() {

        selectHeaders.forEach((item) => {
            item.addEventListener('click', selectToggle)
        })

        selectItems.forEach((item) => {
            item.addEventListener('click', selectChose)
        })

        function selectToggle() {
            console.log(this.parentElement);
            this.parentElement.classList.toggle('is-active');
        }

        function selectChose() {
            let textSelect = this.innerText,
                select = this.closest('.js-select'),
                currentText = select.querySelector('.js-select__current');
            currentText.innerText = textSelect;
            select.classList.remove('is-active');
        }
    }
})
