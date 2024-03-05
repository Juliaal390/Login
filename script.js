document.getElementById('showPasswordBtn').addEventListener('mousedown', function(event) {
    event.preventDefault(); /* impede que o foco seja alterado */
    var senha = document.getElementById('senha');
    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
    
    this.querySelector('i').classList.toggle('bi-eye-fill');
    this.querySelector('i').classList.toggle('bi-eye-slash-fill');
});

document.getElementById('senha').addEventListener('focus', function() {
    document.getElementById('showPasswordBtn').style.visibility = "visible";
});

document.getElementById('senha').addEventListener('blur', function() {
    document.getElementById('showPasswordBtn').style.visibility = "hidden";
});