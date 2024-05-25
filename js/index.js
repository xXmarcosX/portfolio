const inputNome = document.querySelector('.input-nome');
const inputEmail = document.querySelector('.input-email');
const inputAssunto = document.querySelector('.input-assunto');
const inputMsg = document.querySelector('.input-mensagem');
const camposForm = document.querySelectorAll('[required]');
const btn = document.querySelector('#contato__sbmt');
const msgNomeErro = document.querySelector('.contato__inputs__error__nome')
const msgErroEmail = document.querySelector('.contato__inputs__error__email')
const msgErroAssunto = document.querySelector('.contato__inputs__error__assunto')
const msgErroMensagem = document.querySelector('.contato__inputs__error__mensagem')
const form = document.querySelector('.contato__form')

inputNome.maxLength = 50; 
inputAssunto.maxLength = 50; 
inputMsg.maxLength = 300; 

camposForm.forEach((campo) => {
    campo.addEventListener('keyup', () => {
        verificaCampos()
    })
    campo.addEventListener('invalid', e => {
        e.preventDefault()
    })
});

form.addEventListener('submit', () => alert('Formulário enviado!'))



function verificaCampos(){
    if(inputNome.value.trim() !== '' && inputAssunto.value.trim() !== '' && inputMsg.value.trim() !== '' ){
        btn.disabled = false
    } else {
        btn.disabled = true
    }

    inputNome.addEventListener('input', () => {
        msgNomeErro.innerHTML = ''
        if (inputNome.value.length === 50) {
            msgNomeErro.innerHTML = 'O campo de nome deve conter no máximo 50 caracteres.'
        } else if (inputNome.value.trim() === ''){
            msgNomeErro.innerHTML = 'O campo do nome não deve ficar em branco ou vazio.'
        }
    });
    
    inputEmail.addEventListener('input', () => {
        msgErroEmail.innerHTML = ''
        validaEmail(inputEmail.value)
        if(validaEmail(inputEmail.value) !== true){
            msgErroEmail.innerHTML = `Deve estar em formato de e-mail contendo o caractere especial @ seguido por um domínio ou provedor seguido por um ponto (.)
            Exemplo: text@texto.com`
        }  
        else if (inputEmail.value.trim() === ''){
            msgErroEmail.innerHTML = 'O campo do e-mail não deve ficar em branco ou vazio.'
        }
    })

    inputAssunto.addEventListener('input', () => {
        msgErroAssunto.innerHTML = ''
        if (inputAssunto.value.length === 50) {
            msgErroAssunto.innerHTML = 'O campo de assunto deve conter no máximo 50 caracteres.'
        } else if(inputAssunto.value.trim() === ''){
            msgErroAssunto.innerHTML = 'O campo Assunto não deve ficar em branco ou vazio.'
        }
    });
    
    inputMsg.addEventListener('input', () => {
        msgErroMensagem.innerHTML = ''
        if (inputMsg.value.length === 300) {
            msgErroMensagem.innerHTML = 'O campo de mensagem deve conter no máximo 300 caracteres.';
        } else if (inputMsg.value.trim() === ''){
            msgErroMensagem.innerHTML = 'O campo da mensagem não deve ficar em branco ou vazio.'
        }
    });
}

function validaEmail(email) {
  let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  return emailPattern.test(email);
}


