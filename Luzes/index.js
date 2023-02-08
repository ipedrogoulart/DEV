function clicou(){
    var img = document.getElementById('img')
    var button = document.getElementById('button')
    var body = document.getElementById('body')

    button.innerText='Ligar' 
    img.src = 'luz-apagada.jpg'
    body.style.background = '#1d1c1cde'
    img.style.mixBlendMode = 'color-burn'
}

function mousesai(){
    button.innerText='Deligar' 
    img.style.mixBlendMode = ''
    body.style.background = '#ffffffc7'
    img.src = 'luz-acesa.jpg'
}

function doisclicks(){
    img.src = 'luz-broken.jpg'
    img.style.height = '340px'
}




