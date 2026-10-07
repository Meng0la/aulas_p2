window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["etica-cidadania"] = window.APP_DATA.content["etica-cidadania"] || {};
window.APP_DATA.content["etica-cidadania"]["capitulo-2"] = {
  id: "capitulo-2",
  title: "Direitos humanos",
  subtitle: "O que são os direitos humanos, os filósofos contratualistas, a afirmação histórica e as gerações dos direitos humanos",
  estimatedMinutes: 32,
  sections: [
    {
      heading: "1. O que são os direitos humanos",
      html: `
        <p>A consolidação jurídica dos direitos humanos aconteceu em <strong>1948</strong>, logo após a Segunda Guerra Mundial (1939-1945) e atrocidades como o Holocausto, com a <strong>Declaração Universal dos Direitos Humanos da ONU</strong>. O consenso entre juristas: os direitos humanos devem zelar universalmente pela <strong>dignidade da pessoa humana</strong> — todo ser humano, desde o nascimento e de forma inalienável, tem direitos fundamentais, independentemente de origem, gênero ou época.</p>
        <div class="callout">Artigo 1º da Declaração: "Todos os seres humanos nascem livres e iguais em dignidade e em direitos. Dotados de razão e de consciência, devem agir uns para com os outros em espírito de fraternidade" (ONU, 1948).</div>
        <p>O conceito de <strong>dignidade humana</strong> tem origem na filosofia de <strong>Kant</strong> (<em>Fundamentação da metafísica dos costumes</em>, 1785): a dignidade não pode ser negociada ou trocada por nada — "no reino dos fins tudo tem ou um preço ou uma dignidade [...] quando uma coisa está acima de todo o preço [...] então ela tem dignidade" (Kant, 2011). A dignidade é um fim em si mesma, ligada à autonomia, consciência e liberdade do sujeito, e à igualdade jurídica entre todos.</p>
      `
    },
    {
      heading: "Crítica ao universalismo: o pluriverso dos direitos humanos",
      html: `
        <p>Será que a noção de dignidade de Kant (europeia) vale igualmente para todas as sociedades e épocas? Santos e Martins (2019), em <em>O pluriverso dos direitos humanos</em>, distinguem:</p>
        <ul>
          <li><strong>Direitos humanos convencionais (hegemônicos):</strong> ambições universalistas ocidentais/modernas que, na prática, impõem uma visão eurocêntrica ("epistemologia do Norte") sobre países economicamente dominados, ignorando concepções de dignidade de outras sociedades (sobretudo do Sul global).</li>
          <li><strong>Ecologia de dignidades pós-abissais:</strong> uma perspectiva que busca superar esse "abismo" entre culturas, reconhecendo múltiplas formas de entender a dignidade — daí o termo "pluriverso".</li>
        </ul>
        <p>Exemplo citado: as comunidades indígenas da Bolívia aprovaram democraticamente os <em>Derechos de La Madre Tierra</em> (2010), protegendo juridicamente a natureza segundo suas próprias tradições (a Mãe Terra como divindade) — uma concepção de dignidade diferente da ocidental convencional.</p>
        <p>Importante: os autores <strong>não são contra</strong> os direitos humanos — defendem sua <strong>ampliação</strong>, dando voz a outras comunidades para que suas próprias reivindicações de dignidade sejam reconhecidas juridicamente.</p>
      `
    },
    {
      heading: "Arendt e Bobbio: direitos humanos como processo, não conceito fechado",
      html: `
        <p><strong>Hannah Arendt</strong>, em <em>As origens do totalitarismo</em> (1989), prefere ver os direitos humanos não como um conceito definitivo, mas como um <strong>movimento</strong> em permanente transformação, que muda conforme as lutas políticas. <strong>Norberto Bobbio</strong>, em <em>A era dos direitos</em> (1992), concorda: os direitos humanos não nascem todos de uma vez.</p>
        <div class="callout">Segundo Piovesan (2004): "Para Hannah Arendt, os direitos humanos não são um dado, mas um constructo, uma invenção humana, em constante processo de construção e reconstrução."</div>
      `
    },
    {
      heading: "A base filosófica: jusnaturalismo e contratualismo",
      html: `
        <p>Os direitos humanos se relacionam com o <strong>jusnaturalismo</strong> (séculos XVII-XVIII, França e Inglaterra) e o <strong>contratualismo</strong>. O ponto de partida é a distinção entre <strong>direito</strong> e <strong>lei</strong>:</p>
        <ul>
          <li><strong>Direito</strong> é natural — arraigado universalmente aos indivíduos (liberdade, igualdade, segurança, vida), existe no "estado de natureza", não pode ser usurpado.</li>
          <li><strong>Lei</strong> é humana/artificial — convenção criada pelos indivíduos para gerar sociabilidade e paz, existe no "estado civil" (sociedade com Estado).</li>
        </ul>
        <div class="callout"><strong>Contratualismo:</strong> o Estado, a sociedade e as instituições não são naturais, mas convenções resultantes de contratos/pactos/legislações — permitindo a passagem do estado de natureza para o estado civil. Principais pensadores: Hobbes, Locke, Spinoza e Rousseau.</div>
      `
    },
    {
      heading: "Hobbes, Locke e a Declaração da ONU",
      html: `
        <p><strong>Hobbes</strong> (<em>O Leviatã</em>): o direito natural inviolável é a <strong>vida e a segurança pessoal</strong> — não incluía a liberdade, por considerá-la um poder de fazer qualquer coisa (até matar), que deveria ser limitado pelo Estado. O Artigo 3º da Declaração ecoa isso: "Todo indivíduo tem direito à vida, à liberdade e à segurança pessoal."</p>
        <p><strong>Locke</strong> (<em>Dois tratados sobre os governos civis</em>) e <strong>Rousseau</strong> defendiam, com otimismo, a <strong>liberdade e a igualdade</strong> como direitos naturais a serem preservados no estado civil — todos nascem livres e iguais (Artigos 2º, 7º, 10º e 18º da Declaração tratam dessas liberdades e igualdades).</p>
        <div class="callout warn">Contradição apontada no capítulo: Locke defendia que todos nascem livres e iguais, mas nunca se opôs à escravidão nas colônias — reforçando as críticas de Arendt e de Santos/Martins sobre os limites de buscar uma dignidade "universal".</div>
        <p>Locke, "pai do liberalismo político", também defendia a <strong>propriedade privada</strong> como direito natural (anterior ao Estado) — refletida no Artigo 17: "Toda pessoa [...] tem direito à propriedade [...] Ninguém pode ser arbitrariamente privado da sua propriedade."</p>
      `
    },
    {
      heading: "Hobbes × Rousseau: visões opostas do estado de natureza",
      html: `
        <p>Para <strong>Hobbes</strong>, o estado de natureza é negativo — uma guerra de todos contra todos ("o homem é lobo do próprio homem"), por isso a liberdade precisa ser limitada pelo Estado em nome da vida e da segurança.</p>
        <p>Para <strong>Rousseau</strong>, é o oposto: o estado de natureza é positivo — o "bom selvagem" ("o homem nasce bom, a sociedade o corrompe"). Os indivíduos nasceriam livres, iguais e felizes; o que os corrompeu, segundo Rousseau, foi a invenção da <strong>propriedade privada</strong>, que criou a desigualdade entre ricos e pobres — ao contrário de Locke, para quem a propriedade era um direito natural a ser protegido.</p>
      `
    },
    {
      heading: "Spinoza e Rousseau: democracia como direito natural",
      html: `
        <p><strong>Spinoza</strong> (<em>Ética e tratado teológico-político</em>) vê continuidade entre estado de natureza e estado civil, através do conceito de <strong>conatus</strong>: os indivíduos naturalmente interagem por afetos (empatia e aversão). Com o crescimento das multidões (<em>potentia multitudo</em>), é preciso um contrato que preserve essa liberdade — e esse contrato, para Spinoza, deve ser <strong>democrático</strong>, já que a democracia equivale a um direito natural.</p>
        <p><strong>Rousseau</strong> (<em>O contrato social</em>): liberdade e igualdade só se mantêm no estado civil através da <strong>vontade geral</strong> — o povo reunido em assembleia é o poder soberano. Pela primeira vez na história política, um governo só é legítimo quando reflete a vontade popular (o povo é, ao mesmo tempo, soberano e súdito). Isso ecoa no Artigo 21: "A vontade do povo é o fundamento da autoridade dos poderes públicos [...] através de eleições honestas [...] por sufrágio universal."</p>
      `
    },
    {
      heading: "2. Afirmação histórica dos direitos humanos",
      html: `
        <p>O século XVIII, o "Século das Luzes" (Iluminismo + Revolução Francesa), foi crucial: direitos civis e políticos baseados nos direitos naturais se espalharam pela burguesia revolucionária, acabando com privilégios do clero e da nobreza. A <strong>Revolução Gloriosa</strong> (1688, Inglaterra) fortaleceu o parlamento; a <strong>Revolução Americana</strong> (1776) gerou a Declaração de Direitos (1787, em vigor em 1791); a <strong>Revolução Francesa</strong> (1789) gerou a <strong>Declaração dos Direitos do Homem e do Cidadão</strong>.</p>
        <p>Mas igualdade <strong>jurídica</strong> não significava igualdade <strong>econômica/social</strong>, nem direitos políticos universais. Segundo Thomas Marshall, só no século XIX as classes operárias conquistaram, por lutas e sindicatos, direitos à participação política — o que, no final do século, levou às primeiras lutas feministas pelo sufrágio universal.</p>
        <p>No século XX, Marshall identifica a acumulação de direitos civis, políticos e <strong>sociais</strong> (escolas públicas, saúde, lazer, emprego, previdência, saneamento) — a "era da cidadania".</p>
        <p>Segundo Bobbio (1992), após o Holocausto e a perseguição a judeus, ciganos, homossexuais e comunistas na 2ª Guerra, as minorias sociais passaram a adquirir direitos gradualmente — processo que continua hoje com deficientes, indígenas, movimentos negro e feminista, e que se conecta à expansão do terceiro setor e da responsabilidade social/ambiental.</p>
      `
    },
    {
      heading: "3. As gerações dos direitos humanos",
      html: `
        <p>Santos e Martins (2019) classificam os direitos humanos em "gerações" — não um conceito estático, mas um <strong>movimento</strong> que incorpora novas reivindicações conforme a época:</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Geração</th><th>Características</th><th>Principais conquistas</th></tr></thead>
          <tbody>
            <tr><td><strong>1ª geração</strong> (século XVIII)</td><td>Direitos políticos: liberdades individuais e igualdade jurídica</td><td>Declaração dos Direitos do Homem e do Cidadão (1789); Declaração de Direitos dos EUA (1787)</td></tr>
            <tr><td><strong>2ª geração</strong> (séc. XIX até início do séc. XX)</td><td>Direitos sociais e prestacionais: universalização dos direitos políticos</td><td>Sindicatos e associações conquistam direito ao voto; mulheres conquistam o voto no Ocidente</td></tr>
            <tr><td><strong>3ª geração</strong> (final do séc. XX até hoje)</td><td>Direitos de solidariedade/fraternidade</td><td>Declaração Universal dos Direitos Humanos; direito ambiental; multiculturalismo</td></tr>
          </tbody>
        </table></div>
        <p>A <strong>1ª geração</strong> nasce com o jusnaturalismo-contratualismo: direitos naturais, liberdades individuais, igualdade jurídica — de matriz liberal, individualista e ocidental.</p>
        <p>A <strong>2ª geração</strong> expande os direitos políticos (que antes eram só burgueses) para trabalhadores e mulheres, e cria direitos sociais/prestacionais — o Estado de bem-estar social, responsável por educação, saúde, moradia, saneamento, lazer.</p>
        <p>A <strong>3ª geração</strong>, pós-Segunda Guerra, inclui proteção a povos tradicionais (indígenas) e ao meio ambiente — surgem movimentos ambientalistas (ex.: Greenpeace, anos 1970). Inclui também o <strong>multiculturalismo</strong>: políticas para integrar sociedades com múltiplas origens culturais, como leis de proteção a mulheres e à comunidade LGBTQIA+, e políticas de cotas para indígenas e negros. A Conferência de Viena (1993) consolidou a <strong>indivisibilidade</strong> entre direitos civis, políticos, econômicos, sociais e culturais.</p>
      `
    },
    {
      heading: "4ª e 5ª gerações (em debate)",
      html: `
        <p>Há debate sobre se novas gerações existiriam:</p>
        <ul>
          <li><strong>4ª geração (proposta):</strong> o debate ético sobre manipulação genética — os limites da ciência genética aplicada a seres humanos.</li>
          <li><strong>5ª geração (proposta):</strong> os "direitos virtuais", ligados à rápida inovação em tecnologias de informação — preservação de dados pessoais, privacidade on-line, segurança de bancos de dados, documentos eletrônicos.</li>
        </ul>
        <p>No Brasil, o <strong>Marco Civil da Internet</strong> (MCI, 2014) é referência mundial: garante sigilo e inviolabilidade de dados/registros pessoais (salvo ordem judicial) e o direito de acesso à informação e liberdade de expressão. Em 2018, a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> complementou essa legislação, regulamentando dados de compras, publicidade e serviços públicos on-line.</p>
      `
    }
  ],
  keyPoints: [
    "Direitos humanos foram consolidados juridicamente em 1948 (Declaração Universal da ONU), após o Holocausto — fundamentados no conceito kantiano de dignidade humana (um valor que não tem preço, fim em si mesma).",
    "Crítica de Santos e Martins: os direitos humanos 'convencionais' refletem uma visão eurocêntrica; propõem um 'pluriverso' que reconheça outras concepções de dignidade (ex.: Derechos de La Madre Tierra, na Bolívia).",
    "Arendt e Bobbio veem os direitos humanos não como conceito fixo, mas como processo histórico em permanente construção.",
    "Jusnaturalismo: direito é natural (vida, liberdade, igualdade — anteriores à sociedade); lei é humana/artificial (convenção do estado civil).",
    "Hobbes: estado de natureza negativo, só a vida/segurança são invioláveis. Locke/Rousseau: estado de natureza positivo, liberdade e igualdade são naturais. Locke defende a propriedade privada como direito natural; Rousseau a vê como origem da desigualdade.",
    "Spinoza e Rousseau ligam democracia/vontade geral ao direito natural — base do Artigo 21 da Declaração (a vontade do povo fundamenta o poder público).",
    "3 gerações de direitos humanos: 1ª (política/liberdades individuais, séc. XVIII), 2ª (sociais/prestacionais, séc. XIX-XX), 3ª (solidariedade: meio ambiente e multiculturalismo, pós-1945). 4ª (manipulação genética) e 5ª (direitos digitais/LGPD) ainda em debate.",
    "No Brasil: Marco Civil da Internet (2014) e Lei Geral de Proteção de Dados (2018) são exemplos de direitos de 5ª geração em discussão."
  ]
};
