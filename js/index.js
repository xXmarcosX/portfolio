const inputNome = document.querySelector('.input-nome');
const inputEmail = document.querySelector('.input-email')
const inputAssunto = document.querySelector('.input-assunto')
const inputMsg = document.querySelector('.input-mensagem')
const btn = document.querySelector('#contato__sbmt');

inputNome.maxLength = 50; 
inputAssunto.maxLength = 50; 
inputMsg.maxLength = 300; 

function showBtn() {
    if (inputNome.value.trim() !== '' && inputEmail.value.trim() !== '' && inputAssunto.value.trim() !== '' && inputMsg.value.trim() !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function alerta(){
    if (inputNome.value.length === 50 || inputAssunto.value.length === 50 ){
        alert('O campo deve conter no máximo 50 caracteres.')

        btn.disabled = true
    }
}

function alertaMsg(){
    if (inputMsg.value.length === 300){
        alert('O campo de mensagem deve conter no máximo 300 caracteres.')
    }
}