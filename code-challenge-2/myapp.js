let mySalutation = Salutation('Peter', 'Forsberg')
let mySalutation2 = Salutation('Joe', 'Sakic')
let pTag = document.createElement('p')
let pTag2 = document.createElement('p')

document.getElementById("peter").addEventListener("click", appendGreeting)
document.getElementById("joe").addEventListener("click", appendName)

function appendGreeting() {
    pTag.innerText = mySalutation.greeting()
    document.getElementById('salutation').appendChild(pTag)
}

function appendName() {
    pTag2.innerText = mySalutation2.fullName()
    document.getElementById('fullname').appendChild(pTag2)
}