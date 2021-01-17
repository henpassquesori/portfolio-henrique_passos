const slideValue = document.getElementById('sliderEntidade');

const inputSlider = document.getElementById('barraSlider');

inputSlider.oninput = (()=>{
  let value = inputSlider.value;
  slideValue.textContent = value;
  slideValue.style.left = value + '%';
  slideValue.classList.add('show');
  const detalhesEducacao = document.getElementById('detalhes-educacao');
  
  if(value == 1) {
    slideValue.textContent = 'ITB';
    const layout = `
    <div class="resultado-educacao">
      <label class="entidade-educacao">ITB - Instituto Tecnológico de Barueri</label>
          
      <p><em class="entidade-educacao-titulo">Secundário com técnico de edificações integrado (fev. 2015 - dez. 2017)</em></p>

      <p class="detalhes-entidade">Após 3 anos de muita dedicação, em um total de 3450 horas, destas 150 horas foram dedicadas ao <strong class="letra-colorida">TCC (Trabalho de Conclusão de Curso)</strong> onde nos destacamos e recebemos <strong class="letra-colorida">(9,4)</strong> a maior nota entre as equipes.
      O projeto dado a sala era para desenvolver uma casa em um terreno real, com situações e clientes reais.
      Meu grupo era o de <strong class="letra-colorida">Arquitetura</strong>.</p>

      <a class="saibaMais-entidades" target="_blank" href="https://fieb.edu.br/unidade/jardim-belval/">Sobre a Entidade</a>
    </div>
    `;
    detalhesEducacao.innerHTML = layout;
  } else if(value == 2) {
    slideValue.textContent = 'SAGA';
    layout = `
    <div class="resultado-educacao">
      <label class="entidade-educacao">SAGA - School of Art, Game and Animation</label>
          
      <p><em class="entidade-educacao-titulo">Computação Gráfica (fev. 2016 - nov. 2016)</em></p>
      
      <p class="detalhes-entidade">Sou artista desde criança e comecei a estudar design pelo youtube. Nesse ano resolvi profissionalizar ainda mais meus conhecimentos, estudando na <strong class="letra-colorida">SAGA</strong> dominei programas que utilizo até hoje como o <strong class="letra-colorida">Photoshop</strong> e o <strong class="letra-colorida">Illustrator</strong>.</p>

      <a class="saibaMais-entidades" target="_blank" href="https://saga.art.br/a-escola-saga/">Sobre a Entidade</a>
    </div>  
    `
    detalhesEducacao.innerHTML = layout;
  } else if(value == 3) {
    slideValue.textContent = 'Udemy';
    layout = `
    <div class="resultado-educacao">
      <label class="entidade-educacao">Udemy - iMedia</label>
          
      <p><em class="entidade-educacao-titulo">Design Gráfico | Edição de Vídeo (jan. 2018 - dez. 2018)</em></p>
      
      <p class="detalhes-entidade">Por conta de motivos financeiros tive que descontinuar meus estudos na <strong class="letra-colorida">SAGA</strong>, porém sempre continuei estudando sobre design gráfico no youtube. Nesse ano busquei também outras alternativas, foi quando conheci a <strong class="letra-colorida">Udemy</strong>, com isso expandi ainda mais meus conhecimentos nessa área.</p>

      <a class="saibaMais-entidades" target="_blank" href="https://www.udemy.com/">Sobre a Entidade</a>
    </div>  
    `
    detalhesEducacao.innerHTML = layout;
  } else {
    slideValue.textContent = 'Alura';
    layout = `
    <div class="resultado-educacao">
      <label class="entidade-educacao">Alura</label>
          
      <p><em class="entidade-educacao-titulo">Programação | Front-End (nov. 2020 - atualmente)</em></p>
      
      <p class="detalhes-entidade">Depois de obter o domínio em ferramentas de design, resolvi dar o próximo passo e aprender programação. A <strong class="letra-colorida">Alura</strong> era a entidade certa para adquirir esses conhecimentos por ser a maior do Brasil nessa área. Optei por começar desenvolvendo em <strong class="letra-colorida">Front-End(HTML 5 |CSS 3 | JavaScript)</strong>, pois se relaciona bem com design.</p>

      <a class="saibaMais-entidades" target="_blank" href="https://www.alura.com.br/">Sobre a Entidade</a>
    </div>  
    `
    detalhesEducacao.innerHTML = layout;
  }
  
});

inputSlider.onblur = (()=>{
slideValue.classList.remove("show");
});