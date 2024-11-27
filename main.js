const form = document.getElementById('idForm');
const seunomecompleto = document.getElementById('seuNome');
let formEValido = false;

function validaNome(nomeCompleto){
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}


form.addEventListener('submit', function(e){   
    e.preventDefault();
    
    const OseuEmail = document.getElementById('seuEmail');
    const OemailDestinatario = document.getElementById('emailDestinatario');
    const SuaMensagem = document.getElementById('descricao')
    const mensagemSucesso = ` <b>${seunomecompleto.value}</b>, o seu Email foi enviado para <b>: ${OemailDestinatario.value}</b>, do seu Email <b>: ${OseuEmail.value}</b>, com a mensagem <b>: " ${SuaMensagem.value} "</b> <b>.</b>`

    formEValido = validaNome(seunomecompleto.value)
    if (formEValido){
        
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        seunomecompleto.value = '';
        OseuEmail.value = '';
        OemailDestinatario.value = '';
        SuaMensagem.value = '';




    } else {
        seunomecompleto.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    }
})

seunomecompleto.addEventListener('keyup', function(e){
    console.log(e.target.value);
    formEValido = validaNome(e.target.value);

    if (!formEValido){
        seunomecompleto.classList.add('error')
        // seunomecompleto.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        seunomecompleto.classList.remove('error')
        document.querySelector('.error-message').style.display = 'none';
    }


});
