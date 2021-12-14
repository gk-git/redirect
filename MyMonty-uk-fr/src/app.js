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

// Set a Cookie
function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

document.querySelectorAll('.languages .language').forEach(element => {
    element.addEventListener('click', function (event) {
        let lang = 'en';
        switch (this.innerText) {
            case "Arabic":
                lang = 'ar';
                break;
            case "French":
                lang = 'fr';
                break;
            case "Español":
                lang = 'es';
                break;
        }
        setCookie('lang', lang, 120);
    })
})