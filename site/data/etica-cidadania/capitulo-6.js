window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["etica-cidadania"] = window.APP_DATA.content["etica-cidadania"] || {};
window.APP_DATA.content["etica-cidadania"]["capitulo-6"] = {
  id: "capitulo-6",
  title: "Relações de gênero",
  subtitle: "Gênero x sexo, a sigla LGBTQIA+, as ondas do feminismo, o multiculturalismo e a história das conquistas de gênero no Brasil",
  estimatedMinutes: 36,
  sections: [
    {
      heading: "1. Fundamentos das questões de gênero: cultura × natureza",
      html: `
        <p>A cultura é feita de símbolos e significados construídos nas relações sociais; a natureza é biológica/genética. <strong>Claude Lévi-Strauss</strong> ("Raça e história", 1952) demonstrou a <strong>autonomia da cultura sobre a natureza</strong>: comportamentos humanos não são reflexo da biologia, mas criações sociais — por isso o indivíduo é, ao mesmo tempo, produto e produtor de sua cultura. Lévi-Strauss nega a existência de "raças" humanas superiores/inferiores: biologicamente há apenas uma espécie humana, com as mesmas faculdades cognitivas.</p>
        <div class="callout">No final dos anos 1990, a genética comprovou essa tese: as diferenças genéticas entre negros, brancos e asiáticos são mínimas (às vezes maiores entre brancos do que entre um branco e um negro) — "raça" não tem fundamento biológico, é uma <strong>construção cultural</strong>, hoje usada em sentido político (ex.: nas lutas dos movimentos negros). No século XIX e até metade do XX, porém, raça e gênero eram tratados (erroneamente) como categorias biológicas, servindo de álibi para o racismo e o machismo.</div>
      `
    },
    {
      heading: "Gênero × sexo: Beauvoir, Sartre e Judith Butler",
      html: `
        <p><strong>Simone de Beauvoir</strong> (<em>O segundo sexo</em>, 1949) distingue: <strong>sexo</strong> = biológico; <strong>gênero</strong> = cultural, histórico, social. Ela se apoia no existencialismo de <strong>Sartre</strong> (<em>O ser e o nada</em>, 1943): a <strong>condição humana</strong> resulta da liberdade e das escolhas — "a existência precede a essência" — não existe "natureza humana" fixa (profissão, honestidade, riqueza não são biológicas, são produto de contradições sociais).</p>
        <p>Com base nisso, Beauvoir afirma: <strong>"Ninguém nasce mulher: torna-se mulher"</strong> — ser mulher é uma construção histórica, não um destino biológico com desejo "natural" de maternidade ou submissão. Da mesma forma, o <strong>machismo é construção social</strong>, não natureza — e pode ser combatido e desconstruído.</p>
        <p><strong>Judith Butler</strong> vai além: questiona até o binarismo sexo(natural)/gênero(social). Para ela, <strong>nem o corpo "natural" é pré-existente</strong> — todo corpo é produzido pela linguagem e pelas práticas sociais, inclusive o que chamamos de "sexo". A historiadora Joan Scott complementa: "gênero é a organização social da diferença sexual percebida [...] é o saber que estabelece significados para as diferenças corporais" — não um reflexo direto da biologia.</p>
      `
    },
    {
      heading: "A sigla LGBTQIA+",
      html: `
        <p>Assim como homem/mulher são construções sociais, as demais identidades de gênero também o são. A <strong>sexualidade</strong> é diferente do sexo: é o modo como cada um expressa sentimentos, desejos e identidade em relação ao sexo. A <strong>identidade</strong> se constitui pelo autorreconhecimento (ou pela falta dele, ou pelo que os outros impõem).</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Sigla</th><th>Significado</th><th>Características</th></tr></thead>
          <tbody>
            <tr><td><strong>L</strong></td><td>Lésbicas</td><td>Mulheres que se atraem afetiva/sexualmente por pessoas do mesmo gênero.</td></tr>
            <tr><td><strong>G</strong></td><td>Gays</td><td>Homens que se atraem afetiva/sexualmente por pessoas do mesmo gênero.</td></tr>
            <tr><td><strong>B</strong></td><td>Bissexuais</td><td>Pessoas que se atraem por ambos os gêneros masculino e feminino.</td></tr>
            <tr><td><strong>T</strong></td><td>Transexuais</td><td>Não se identificam com o gênero atribuído ao nascer; inclui travestis, consideradas um terceiro gênero.</td></tr>
            <tr><td><strong>Q</strong></td><td>Queer</td><td>Transitam entre diferentes gêneros (ex.: drag queens).</td></tr>
            <tr><td><strong>I</strong></td><td>Intersexo</td><td>Limiar entre masculino/feminino, podendo envolver genitália, gônadas, cromossomos ou hormônios.</td></tr>
            <tr><td><strong>A</strong></td><td>Assexual</td><td>Escassa ou nenhuma atração sexual por outros; relação sexual não é prioridade.</td></tr>
            <tr><td><strong>+</strong></td><td>Outras variações</td><td>Inclui pansexuais (atração por qualquer gênero) e demais identidades.</td></tr>
          </tbody>
        </table></div>
        <p><strong>Cisgênero (cis)</strong>: o sexo biológico corresponde ao gênero com que a pessoa se identifica. <strong>Transgênero</strong>: identifica-se com o gênero oposto ao sexo biológico.</p>
        <div class="callout warn"><strong>Misoginia</strong> (grego: <em>miseo</em>, ódio + <em>gyne</em>, mulher): aversão/desprezo por valores tidos como femininos — atitude machista baseada na suposta superioridade natural masculina.</div>
      `
    },
    {
      heading: "Diferença × desigualdade",
      html: `
        <p>Segundo Barros (2006): <strong>diferenças</strong> são inerentes à natureza e à cultura (sexo, cor de pele, crenças, idiomas) — não podem ser evitadas, são normais, resultado da diversidade humana. O problema é transformar diferença em <strong>desigualdade</strong>: desigualdades são circunstanciais, construídas historicamente (econômica, política, juridicamente) — ex.: diferenças étnicas viram racismo; diferenças de gênero viram desigualdade salarial ou exclusão do mercado de trabalho. Desigualdade <strong>não é normal</strong>, é fruto de contradição social, exclusão ou preconceito.</p>
      `
    },
    {
      heading: "Multiculturalismo",
      html: `
        <p>Diferente de "multicultural" (descrever uma sociedade culturalmente heterogênea — Stuart Hall), o <strong>multiculturalismo</strong> é um conjunto de <strong>políticas públicas</strong> voltadas a reduzir desigualdades e incluir grupos historicamente excluídos — cotas, equiparação salarial independente de raça/gênero, direitos ao casamento/herança/liberdade religiosa. Busca o "direito à diferença": ampliar direitos a quem é marginalizado por diferenças culturais, permitindo coexistência pacífica entre identidades distintas.</p>
      `
    },
    {
      heading: "2. Questões de gênero no cenário internacional: as ondas do feminismo",
      html: `
        <p>O feminismo não é "antítese" do machismo (não é vingança), mas sua <strong>superação</strong>: busca igualdade de direitos políticos, econômicos e sociais entre gêneros. Céli Regina Pinto ("Feminismo, história e poder", 2010) identifica fases ("ondas"):</p>
        <ul>
          <li><strong>1ª onda</strong> (final séc. XIX até 1940): pauta <strong>sufragista</strong> — direito ao voto e à participação política, questionando a submissão feminina à vida doméstica.</li>
          <li><strong>2ª onda</strong> (1950, força nos anos 1960-70): pautas sobre <strong>corpo, prazer e combate ao patriarcado</strong> — a pílula anticoncepcional (anos 1960) foi revolucionária, dando às mulheres controle sobre a maternidade. Movimento majoritariamente de mulheres brancas de classe média com acesso à universidade. <strong>Angela Davis</strong> foi pioneira ao apontar que mulheres negras enfrentam opressões ainda piores que mulheres brancas. A 2ª onda também deu voz ao movimento de lésbicas.</li>
          <li><strong>3ª onda</strong> (a partir dos anos 1990, com globalização e internet): rompe com a ideia de "mulher" como categoria única e universal, introduzindo o conceito de <strong>interseccionalidade</strong> — opressões variam conforme raça, religião, região, gênero e classe social, exigindo estratégias de luta diferenciadas. Crítica à 3ª onda: risco de individualização/fragmentação da luta e de "capitalização" do discurso feminista pelo mercado (daí o conceito de <strong>transversalismo</strong>: unir os diferentes movimentos preservando suas particularidades).</li>
          <li><strong>4ª onda</strong> (em debate, a partir de 2010): ligada à popularização das redes sociais/smartphones, que tiraram o monopólio da pauta de sindicatos, universidades e mídia tradicional. Permitiu denúncias de cultura do estupro, do apagamento de mulheres negras na mídia, de <strong>mansplaining</strong> (homem explicando o óbvio a uma mulher) e <strong>manterrupting</strong> (interromper mulheres ao falar). Exemplo: protestos de 2019 no Chile organizados via redes sociais.</li>
        </ul>
      `
    },
    {
      heading: "O movimento LGBTQIA+ no mundo",
      html: `
        <p>Historicamente, no Ocidente, pessoas fora do padrão cisheteronormativo sofreram perseguição: condenação à morte na Idade Média (por preceitos religiosos), e, a partir do século XIX, "tratamentos" médico-científicos (Foucault, <em>História da sexualidade</em>) — torturas, castrações químicas, estupros corretivos, lobotomias, promovidos até por médicos nazistas, ingleses, franceses e americanos.</p>
        <div class="callout">A <strong>Rebelião de Stonewall</strong> (Nova York, 1969) — protagonizada por gays, lésbicas, travestis e drag queens — é o marco inicial do movimento LGBT, gerando grupos como o Gay Liberation Front (GLF) e a Gay Activists Alliance (GAA). Em 1989, a Dinamarca realizou o primeiro casamento gay do mundo.</div>
        <p>Pautas atuais: criminalização da LGBTfobia; retirada do rótulo de "doença" da medicina/psicologia/direito; reconhecimento legal da identidade de gênero; direitos civis plenos (casamento, trabalho, herança, adoção); educação de combate ao preconceito.</p>
      `
    },
    {
      heading: "3. Questões de gênero no Brasil — feminismo",
      html: `
        <p><strong>1ª onda</strong> (1930-1940): sufrágio universal. A <strong>Federação Brasileira pelo Progresso Feminino</strong> (Bertha Luz, 1922) teve papel central na conquista do voto feminino em <strong>1932</strong> — mas, inicialmente, só para mulheres com renda própria (excluindo pobres e separadas); em <strong>1934</strong>, o voto foi ampliado a todas acima de 18 anos.</p>
        <p><strong>2ª onda</strong> (a partir de 1960): direito reprodutivo e sexualidade, contemporânea à ditadura militar (1968-1985) — o movimento feminista também lutou pela redemocratização e anistia.</p>
        <p><strong>3ª onda</strong> (a partir de 1980): cruzamento de gênero e raça — nasce o <strong>feminismo negro</strong> brasileiro, discutindo a condição específica (e mais vulnerável) da mulher negra, menos dependente das pautas feministas americanas/europeias.</p>
        <p><strong>4ª onda</strong> (desde 2010): redes sociais, denúncias de assédio/feminicídio, questionamento de padrões de beleza; em 2018, grandes manifestações de mulheres durante as eleições presidenciais contra discursos conservadores.</p>
      `
    },
    {
      heading: "O movimento LGBTQIA+ no Brasil",
      html: `
        <p>Nos anos 1980, o <strong>Grupo Gay da Bahia</strong> fez campanha nacional contra o termo "homossexualismo" (então tratado como doença) — em <strong>1985</strong>, o Conselho Federal de Medicina atendeu a essa reivindicação, <strong>antes mesmo</strong> da OMS, que só retirou a homossexualidade da lista de doenças em <strong>1990</strong>. O <strong>Grupo Triângulo Rosa</strong> conseguiu substituir o termo "opção sexual" por "orientação sexual" nas legislações e meios educacionais.</p>
        <p>Em <strong>1997</strong>, a primeira Parada LGBT de São Paulo deu visibilidade à luta. Em <strong>2013</strong>, o CNJ passou a permitir a <strong>união estável</strong> entre pessoas do mesmo sexo em cartório. Em <strong>2008</strong>, o SUS passou a oferecer a cirurgia de redesignação sexual; em <strong>2018</strong>, foi concedido o direito à mudança de <strong>nome social</strong> nos registros civis. A LDB (1996) prevê educação para igualdade racial, orientação e identidade de gênero — ainda pouco aplicada devido ao conservadorismo.</p>
        <div class="callout warn">O capítulo destaca que a expectativa de vida da população <strong>trans</strong> no Brasil é uma das mais baixas do mundo, com espancamentos e intolerância frequentes. Diante da sub-representação política, crescem os <strong>mandatos coletivos</strong> (um cargo legislativo ocupado por um eleito, mas compartilhado/debatido coletivamente com um grupo de causas semelhantes), ampliando a representatividade LGBTQIA+ no poder público.</div>
      `
    }
  ],
  keyPoints: [
    "Lévi-Strauss: a cultura tem autonomia sobre a natureza — raças humanas não têm fundamento biológico (confirmado depois pela genética), são construções culturais/políticas.",
    "Beauvoir ('Ninguém nasce mulher: torna-se mulher') e Sartre: gênero (cultural/histórico) é diferente de sexo (biológico); não existe 'natureza humana' fixa que determine comportamentos de gênero.",
    "Judith Butler vai além de Beauvoir: questiona até a ideia de um 'sexo natural' pré-existente — para ela, tanto sexo quanto gênero são produzidos pela linguagem e pelas práticas sociais.",
    "LGBTQIA+: Lésbicas, Gays, Bissexuais, Transexuais, Queer, Intersexo, Assexual, + (outras identidades, como pansexuais). Cisgênero = sexo e identidade de gênero coincidem; transgênero = não coincidem.",
    "Diferença é normal (natural ou cultural); desigualdade é construída histórica/politicamente e deve ser combatida — não deve ser confundida com diferença.",
    "4 ondas do feminismo: 1ª (sufrágio, até 1940), 2ª (corpo/prazer/patriarcado, 1960-70, com Angela Davis apontando a especificidade da mulher negra), 3ª (interseccionalidade, anos 1990), 4ª (redes sociais, desde 2010).",
    "No Brasil: voto feminino em 1932 (restrito) e 1934 (universal); Grupo Gay da Bahia retirou 'homossexualismo' do vocabulário médico brasileiro em 1985, antes da OMS (1990); união estável homoafetiva permitida em 2013.",
    "Mandatos coletivos são uma estratégia recente no Brasil para ampliar a representatividade política de grupos LGBTQIA+ sub-representados nas eleições."
  ]
};
