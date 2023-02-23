var input = document.querySelector('.login-input')
var button = document.querySelector('.login-button')
var form = document.querySelector('.login-form')

var validateInput = ({target}) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    } else {
        button.setAttribute('disabled', '')
    }
}

var handleSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('player', input.value)
    window.location = 'game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)
