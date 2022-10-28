let valores = [8, 1, 7, 4, 2, 9]
valores.push(6)
valores.sort()
for (let pos = 0; pos < valores.length; pos++){
  
  console.log(`a posicao ${pos} tem o valor ${valores[pos]}`)
}
//outro jeito para vetores

for (let pos in valores) {
  console.log(`- a posicao ${pos} tem o valor ${valores[pos]}`)
}
console.log(`o valor 7 esta na posicao ${valores.indexOf(7)}`)
console.log(`se o valor nao existir ele mostra ${valores.indexOf(17)}`)
