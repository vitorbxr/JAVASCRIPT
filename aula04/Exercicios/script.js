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

function contar () {
  let inicio = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')
  if (p <= 0) {
    alert('Impossivel contare')
    p = 1
  }
  if (inicio.value.length == '' || fim.value.length == '' || passo.value.length == '') {
    res.innerHTML = 'Impossivel contar'
  }
  else {
    res.innerHTML = 'Contando <br/>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (i < f) {
      for (let c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
      }
    }
    else {
      for (let c = i; c >= f; c -= p){
        res.innerHTML += ` ${c} \u{1F449}`  
    }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}

function tabuada() {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  if (num.value.length == '') {
    alert('Digite um numero')
  }
  else {
    let n = Number(num.value)  
    let c = 1
    tab.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      tab.appendChild(item)
      c++
    }
  }
}

function isNumero (n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  }
  else {
    return false
  }
}
function inLista (n,l) {
  if(l.indexOf(Number(n)) != -1) {
    return true
  }
  else {
    return false
  }
}

let valores = []

function adicionar () {
  let num = document.querySelector('input#fnum')
  let lista = document.querySelector('select#flista')
  let res = document.querySelector('div#res')


  if (isNumero(num.value) && !inLista(num.value,valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
    
  }
  else {
    alert('Valor invalido ou nao encontrado na lista')
  }
  num.value = ''
  num.focus()
}

function finalizar(){
  if (valores.length == 0) {
    alert('Adicione valores')
  }
  else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores){
      if (valores[pos] > maior) {
        maior = valores[pos]
      }
      if (valores[pos] < menor) {
        menor = valores[pos]
      }
      soma += valores[pos]
    }
    media = soma/valores.length
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo temos, ${tot} numeros cadastrados </p>`
    res.innerHTML += `<p> O maior valor informado foi ${maior} </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor} </p>`
    res.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
    res.innerHTML += `<p> A media de todos os valores é ${media} </p>`
  }
}