

let num = [9, 6, 2, 5, 8, 7]
num.push(1)
num.sort()
console.log(num)

console.log(`O vetor tem ${num.length} prossião`)
console.log(`O primeiro valor é ${num[0]}`)
let pos = num.indexOf(3) 
    if (pos == -1) {
        console.log(`O valor não foi encontrado`)
    } else {
    console.log(`O valor 3 está na posição ${pos}`)
}


/*let num = [5, 8, 2, 9, 3]
num [5] = 6
num.push(1)
num.sort()
console.log(`Nosso vetor é ${num}`)
console.log(`E também tem ${num.length} posições`)*/