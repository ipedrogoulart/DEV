var form = document.getElementById('form')
var campos = document.querySelectorAll('.required')
var spans = document.querySelectorAll('.span-required')
var emailRegex =/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/



//confere se o formulário está preenxido quando aperta o botão "submit" 
form.addEventListener('submit', (event) => {
    event.preventDefault()
    nameValidate()
    emailValidate()
    senhaValidate()
    senhaConfirm()
})

//ADICIONA borda vermelha e texto abaixo quando o campo está incorreto
function setError(index){
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display ='block'
}

//REMOVE borda vermelha e texto abaixo quando o campo está correto
function removeError(index){
    campos[index].style.border = ''
    spans[index].style.display = 'none'
}



//verificação do campo NOME
function nameValidate(){
    if(campos[0].value.length < 3){
        //chama a função ERROR pro índice/chave 0
        setError(0)
    } else {
        //Chama a função Remover ERROR pro índice/chave 0
        removeError(0)
    }
}

//Verificação do campo EMAIL
function emailValidate(){
    if(emailRegex.test(campos[1].value)){
        //Chama a função Remover ERROR pro índice/chave 1
        removeError(1)
    } else {
        //chama a função ERROR pro índice/chave 1
        setError(1)
    }
}

//Verificação do campo SENHA
function senhaValidate(){
    if(campos[2].value.length < 8){
        //chama a função ERROR pro índice/chave 2
        setError(2)
    } else {
        //Chama a função Remover ERROR pro índice/chave 2
        removeError(2)
    }
}

//Verificação do campo SENHA2
function senhaConfirm(){
    if(campos[3].value == campos[2].value && campos[3] != ''){
        //Chama a função Remover ERROR pro índice/chave 3
        removeError(3)
    } else {
        //chama a função ERROR pro índice/chave 3
        setError(3)
    }
}