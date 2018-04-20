let pTag = document.createElement('p')
let pTag2 = document.createElement('p')

document.getElementById("peter").addEventListener("click", appendGreeting)
document.getElementById("joe").addEventListener("click", appendName)

function appendGreeting() {
    pTag.innerText = Salutation.greeting('Peter', 'Forsberg')
    document.getElementById('salutation').appendChild(pTag)
}

function appendName() {
    pTag2.innerText = Salutation.fullName('Joe', 'Sakic')
    document.getElementById('fullname').appendChild(pTag2)
}