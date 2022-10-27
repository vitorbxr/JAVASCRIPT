function carregar () {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')  
  var data = new Date()
  var hora = data.getHours()
  var hora = 22
  msg.innerHTML = `Agora sao ${hora} horas`
  if (hora >8 && hora < 12) {
    img.src = 'manha.png'
    document.body.style.background = '#e2cd0f'
  }
  else if (hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
  }
  else {
    img.src = 'noite.png'
    document.body.style.background = '#515154'
  }
}
function verificar () {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  var img = document.createElement('img')
  img.setAttribute('id', 'foto')

  if (fano.value == 0 || fano.value > ano) {
    window.alert('Verifique o ano')
  }
  var fsex = document.getElementsByName('radsex')
  var idade = ano - Number(fano.value)
  var genero = ''
  if (fsex[0].checked) {
    genero = 'Homem'
    if (idade > 0 && idade < 18) {
      img.setAttribute('src', 'menino.png')
    }
    else if (idade >= 18 && idade < 65) {
      img.setAttribute('src', 'homem.png')
    }
    else {
      img.setAttribute('src', 'velho.png')
    }
  }
  else {
    genero = 'Mulher'
    if (idade > 0 && idade < 18) {
      img.setAttribute('src', 'menina.png')
    }
    else if (idade >= 18 && idade < 65) {
      img.setAttribute('src', 'mulher.png')
    }
    else {
      img.setAttribute('src', 'velha.png')
    }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos ${genero} com idade calculada de ${idade}`
  res.appendChild(img)
}
