document.addEventListener('carregarPagina', function () {
    const form = document.getElementById('loan-form');
    const resultadoDiv = document.getElementById('resultado');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const cpf = document.getElementById('cpf').value;
        const valor = parseFloat(document.getElementById('valor').value);
        const prazo = parseInt(document.getElementById('prazo').value);
        const mensagem = document.getElementById('mensagem').value;

        if (isNaN(valor) || isNaN(prazo) || valor <= 0 || prazo <= 0) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        //JSON 
        const solicitacao = {
            nome: nome,
            email: email,
            cpf: cpf,
            valor: valor,
            prazo: prazo,
            mensagem: mensagem
        };

        //localStorage
        localStorage.setItem('solicitacao', JSON.stringify(solicitacao));

        // Modifica o DOM 
        resultadoDiv.innerHTML = `
            <h3>Resumo da Solicitação</h3>
            <p><strong>Nome:</strong> ${solicitacao.nome}</p>
            <p><strong>Email:</strong> ${solicitacao.email}</p>
            <p><strong>CPF:</strong> ${solicitacao.cpf}</p>
            <p><strong>Valor Solicitado:</strong> R$ ${solicitacao.valor.toFixed(2)}</p>
            <p><strong>Prazo:</strong> ${solicitacao.prazo} meses</p>
            <p><strong>Mensagem:</strong> ${solicitacao.mensagem}</p>
        `;

        // Pesquisei essa parte nio google pois necessitava disso para terminar o código
        resultadoDiv.style.visibility = 'visible';
        
    });
});

document.dispatchEvent(new Event('carregarPagina'));