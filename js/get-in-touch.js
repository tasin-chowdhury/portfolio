const name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let errorMsg = []
    if (name.value === '' || name.value === null) {
        errorMsg.push('name is required!')
    }
    if (message.value === '' || message.value === null) {
        errorMsg.push('message is required!')
    }
    if (errorMsg.length > 0) {
        e.preventDefault()
        errorElement.innerText = errorMsg.join(' , ')
    }
})

