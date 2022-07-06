function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (num.value.length == 0){
window.alert('tente novamente, ou coloce um numero')
} else {
    var n = Number(num.value)
    var c = 0
    tab.innerHTML=''
    while (c <= 100) {
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
    }
 }
}