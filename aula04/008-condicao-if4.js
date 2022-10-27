var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
console.log(`agora sa ${hora}:${min}`)
if(hora<12){
  console.log('Bom Dia')
}
else if (hora < 18) {
  console.log('Boa Tarde')
}
else {
  console.log('Boa Noite')
}