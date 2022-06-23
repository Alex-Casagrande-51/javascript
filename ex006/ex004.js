var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Domingo
1 = Segunda
2 = terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/
console.log(diaSem) 
switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] Dia inváldio!') 
        break        
}
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12) {
    console.log('Bom dia')
} else if(hora <= 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
var pais = 'França'
var na = 'no'
var no = 'na'
console.log(`Vivendo ${na} ${no} ${pais}`)
if (pais == 'Brasil') {
    console.log('Vocé é Brasileiro')
} else {
    console.log('Você é extrangeiro')
}
