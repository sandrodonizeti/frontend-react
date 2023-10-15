function validateMessage() {
    const mensagemInput = document.getElementById("mensagem");
    const mensagemValue = mensagemInput.value.trim();
    if (mensagemValue.length === 0) {
        alert("Por favor, digite uma mensagem antes de enviar.");
        return false;
    }
    return true;
}

function atualizarConteudo() {
    fetch('/pratica1')
        .then(response => response.text())
        .then(data => {
            const textiaria = document.getElementById('textiaria');
            const isScrolledToBottom = textiaria.scrollHeight - textiaria.clientHeight <= textiaria.scrollTop + 1;
            textiaria.innerHTML = data;
            if (isScrolledToBottom) {
                textiaria.scrollTop = textiaria.scrollHeight;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar novo conteúdo:', error);
        });
}
setInterval(atualizarConteudo, 3000);