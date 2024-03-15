let senha = document.getElementById('senha');
let email = document.getElementById('email');
let error = document.getElementById('error');
let btnEntrar = document.querySelector('.btnForm');

document.getElementById('showPasswordBtn').addEventListener('mousedown', (e)=> {
    e.preventDefault(); /* Cancela o evento se for cancelável, sem parar a propagação do mesmo */
    if (senha.type === 'password') {
        senha.type = 'text';
    } else {
        senha.type = 'password';
    }
    let botao = this.querySelector('i');
    botao.querySelector('i').classList.toggle('bi-eye-fill'); /* this -> showPasswordBtn */
    botao.querySelector('i').classList.toggle('bi-eye-slash-fill');
});

document.getElementById('senha').addEventListener('focus', ()=> {
    document.getElementById('showPasswordBtn').style.visibility = "visible";
});

document.getElementById('senha').addEventListener('blur', ()=> {
    document.getElementById('showPasswordBtn').style.visibility = "hidden";
});

btnEntrar.addEventListener('click', (e)=>{
    let message = null;
    if(!email.checkValidity()){
        message = email.validationMessage;
        email.style.borderColor ='#cd1c0c';
        e.preventDefault();
    }
    if(!senha.checkValidity()){
        message = senha.validationMessage;
        senha.style.borderColor ='#cd1c0c';
        e.preventDefault();
    }
    error.innerHTML=message;
});
