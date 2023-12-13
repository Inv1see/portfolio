const franceBtn = document.querySelector('#france__btn')
const germanyBtn = document.querySelector('#germany__btn')
const englandBtn = document.querySelector('#england__btn')

const france = document.querySelector('#france')
const germany = document.querySelector('#germany')
const england = document.querySelector('#england')

franceBtn.addEventListener('click', () => {
    franceBtn.classList.add('list-btn-active')
    germanyBtn.classList.remove('list-btn-active')
    englandBtn.classList.remove('list-btn-active')

    france.classList.remove('catalog-list_hide')
    germany.classList.add('catalog-list_hide')
    england.classList.add('catalog-list_hide')
}
)
germanyBtn.addEventListener('click', () => {
    germanyBtn.classList.add('list-btn-active')
    franceBtn.classList.remove('list-btn-active')
    englandBtn.classList.remove('list-btn-active')

    germany.classList.remove('catalog-list_hide')
    france.classList.add('catalog-list_hide')
    england.classList.add('catalog-list_hide')
}
)
englandBtn.addEventListener('click', () => {
    englandBtn.classList.add('list-btn-active')
    franceBtn.classList.remove('list-btn-active')
    germanyBtn.classList.remove('list-btn-active')

    england.classList.remove('catalog-list_hide')
    france.classList.add('catalog-list_hide')
    germany.classList.add('catalog-list_hide')
}
)