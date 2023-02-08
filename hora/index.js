function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var zeroFill = n => {
        return ('0' + n).slice(-2);
    }

    
    var interval = setInterval(() => {
        var data = new Date();
        var hora =  zeroFill(data.getHours())
        var minuSec = zeroFill(data.getMinutes()) + '  ' + zeroFill(data.getSeconds()) + ' segundos.';
        
        msg.innerHTML = `Agora são ${hora}h${minuSec}`

if(hora >=6 && hora < 10){ 
        //manha
        img.src = 'manha.jpg'
        document.body.style.background = '#e7ccaf'
    } else if (hora >= 10 && hora < 16){
        //meio dia
        img.src = 'meiodia.jpg'
        document.body.style.background = '#6592cb'
    } else if (hora >= 16 && hora < 19) { 
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = '#e9732d'
    } else {
        //boa noite
        img.src = 'noite.jpg'
        document.body.style.background = '#1a2e39'
    }

    }, 1000);


  

    
}


