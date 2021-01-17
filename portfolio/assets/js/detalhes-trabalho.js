const trabalhos = document.getElementsByClassName('conteudoPrincipal-xpProfissional-link')

trabalhos.addEventListener("click", function(event) {
    event.preventDefault();

    const detalhes = document.getElementById('detalhes-trabalho');
    
    if() {
        const layout = `
            <p>
            Vim do Brasil para ajudar minha
            mãe em seu restaurante.
              Atendimento aos clientes | caixa |
            administração | criação de anúncios
            e responsável pelo marketing |
            reposição de estoque.
            </p>
        `;
        detalhes.innerHTML = layout;
    } else {
        layout = `
        <p>
        Preparação de massa | preparação
        de cremes | manuseio de massa
        crua e sua moldagem para produto
        final | controle de estufa e
        cozimento | recheio de produtos |
        confecção e finalização |
        embalamento | montagem de 
        paletes | manuseio de máquinas
        industriais.
        </p>
        `;
        detalhes.innerHTML = layout;
    }