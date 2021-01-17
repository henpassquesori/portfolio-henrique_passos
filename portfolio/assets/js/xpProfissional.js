const empregos = querySelectorAll('empregos');

const detalhesTrabalho = document.getElementById('detalhes-trabalho');

empregos.forEach(function(listaEmpregos) {
    listaEmpregos.addEventListener('click', function(event) {
        event.preventDefault();

        if (listaEmpregos[0]){
        detalhesTrabalho.innerHTML = `
        <div class="resultado-educacao">
            <label class="entidade-educacao">ITB - Instituto Tecnológico de Barueri</label>
                
            <p><em class="entidade-educacao-titulo">Secundário com técnico de edificações integrado (fev. 2015 - dez. 2017)</em></p>

            <p class="detalhes-entidade">Após 3 anos de muita dedicação, em um total de 3450 horas, destas 150 horas foram dedicadas ao <strong class="letra-colorida">TCC (Trabalho de Conclusão de Curso)</strong> onde nos destacamos e recebemos <strong class="letra-colorida">(9,4)</strong> a maior nota entre as equipes.
            O projeto dado a sala era para desenvolver uma casa em um terreno real, com situações e clientes reais.
            Meu grupo era o de <strong class="letra-colorida">Arquitetura</strong>.</p>

            <a class="saibaMais-entidades" target="_blank" href="https://fieb.edu.br/unidade/jardim-belval/">Sobre a Entidade</a>
        </div>
        `;
        } else if (listaEmpregos [1]) {
            detalhesTrabalho.innerHTML = `
        <div class="resultado-educacao">
            <label class="entidade-educacao">ITB - Instituto Tecnológico de Barueri</label>
                
            <p><em class="entidade-educacao-titulo">Secundário com técnico de edificações integrado (fev. 2015 - dez. 2017)</em></p>

            <p class="detalhes-entidade">Abobora, em um total de 3450 horas, destas 150 horas foram dedicadas ao <strong class="letra-colorida">TCC (Trabalho de Conclusão de Curso)</strong> onde nos destacamos e recebemos <strong class="letra-colorida">(9,4)</strong> a maior nota entre as equipes.
            O projeto dado a sala era para desenvolver uma casa em um terreno real, com situações e clientes reais.
            Meu grupo era o de <strong class="letra-colorida">Arquitetura</strong>.</p>

            <a class="saibaMais-entidades" target="_blank" href="https://fieb.edu.br/unidade/jardim-belval/">Sobre a Entidade</a>
        </div>
        `;        
        }
    });
}