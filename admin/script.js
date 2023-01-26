function onSubmitForm(event) {
    event.preventDefault()
    var username = document.getElementById('floatingInput').value
    var password =  document.getElementById('floatingInput').value
    
    console.log(username)
    console.log(password)

    if(username === 'admin') {
        if(password === 'admin') {
            window.location.href = "/index.html";
        }
    }
}

const form = document.getElementById('form')
form.addEventListener('submit', onSubmitForm)