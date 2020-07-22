function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if(hora >=0 && hora <12) {
        //BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = 'w#D5BF85'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos.`
    } else if (hora >=12 && hora <18) {
        // BOA TARDE!!
        img.src = 'fototarde.png'
        document.body.style.background = '#D46212'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos.`
    } else {
        // BOA NOITE!!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2B3236'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos.`
    }
}