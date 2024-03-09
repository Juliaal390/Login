document.getElementById('showPasswordBtn').addEventListener('mousedown', (e)=> {
    e.preventDefault(); /* Cancela o evento se for cancelável, sem parar a propagação do mesmo */
    let senha = document.getElementById('senha');
    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
    let botao = this.querySelector('i');
    botao.querySelector('i').classList.toggle('bi-eye-fill'); /* this -> showPasswordBtn */
    botao.querySelector('i').classList.toggle('bi-eye-slash-fill');
});

document.getElementById('senha').addEventListener('focus', function() {
    document.getElementById('showPasswordBtn').style.visibility = "visible";
});

document.getElementById('senha').addEventListener('blur', function() {
    document.getElementById('showPasswordBtn').style.visibility = "hidden";
});
