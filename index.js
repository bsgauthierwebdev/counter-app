let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function addCount() {
    count +=1
    countEl.textContent = count
}

function saveCount() {
    let countStr = count + ' - '
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}