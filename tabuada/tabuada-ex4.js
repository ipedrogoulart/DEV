function calcular(){
    var numero = document.getElementById('numero')
    var resul = document.getElementById('resul')

    if(numero.value.length == ''){
        window.alert('Por favor, digite algum número!')
    } else {
        var n = Number(numero.value)
        var t = 1
        resul.innerHTML = ''
        while (t <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${t} = ${n*t}`
            resul.appendChild(item)
            t++
        }
    
    }
        

     
    



}