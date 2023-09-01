

const filtroInput = document.getElementById('filtro');
const linhas = document.querySelectorAll('#lista tr'); //Seleciona todos as linhas '<tr>' dentro da tabela com o ID 'Lista'
const enviarButton = document.getElementById('enviar');
let linhaSelecionada = null;

filtroInput.addEventListener('input', function() {
    const filtro = filtroInput.value.toLowerCase();

    for (let i = 0; i < linhas.length; i++) {

        const nome = linhas[i].textContent.toLowerCase();

        if (nome.includes(filtro)) {

        linhas[i].style.display = 'table-row';

        } else {

        linhas[i].style.display = 'none';

        }
    }
    //loop realizado para verificar linha por linha da tabela. 
});

for (let i = 0; i < linhas.length; i++) {
    linhas[i].addEventListener('click', function() {
        // Redefinir a cor de fundo das linhas
        for (let j = 0; j < linhas.length; j++) {
            linhas[j].style.backgroundColor = '';
        }

        if(linhaSelecionada !== linhas[i]){
            linhas[i].style.backgroundColor = 'lightblue';
            linhaSelecionada = linhas[i];
            enviarButton.style.display = 'inline'; //Faz o botão de enviar aparecer

        }else{
            linhaSelecionada = null;
            enviarButton.style.display = 'none'; //Faz o botão de enviar desaparecer
        }
        
    });
}