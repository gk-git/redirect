console.log('Hello world!');

document.querySelectorAll('.navigation__select__option .title').forEach(element => {
    element.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.navigation__select__option').forEach(elem => {
            elem.classList.remove('selected')
            elem.querySelectorAll('.languages').forEach(languageElement => {
                languageElement.classList.add('hidden')
            })
        })
        this.closest('.navigation__select__option').classList.add('selected')
        this.closest('.navigation__select__option').querySelectorAll('.languages').forEach(languageElement => {
            languageElement.classList.remove('hidden')
        })
    })
})