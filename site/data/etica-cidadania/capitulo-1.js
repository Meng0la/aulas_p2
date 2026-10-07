window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["etica-cidadania"] = window.APP_DATA.content["etica-cidadania"] || {};
window.APP_DATA.content["etica-cidadania"]["capitulo-1"] = {
  id: "capitulo-1",
  title: "Ética no Ocidente",
  subtitle: "Ética x moral, senso moral e consciência moral, e o percurso histórico da ética — da Grécia Antiga ao existencialismo de Sartre",
  estimatedMinutes: 30,
  sections: [
    {
      heading: "1. Definição de ética",
      html: `
        <p>A palavra <strong>ética</strong> vem do grego <em>ethos</em> e surgiu na Grécia antiga com Aristóteles (século IV a.C.). Significa a conduta que envolve a ação racional, ou a ciência que estuda o comportamento dos indivíduos — seu objetivo é promover a <strong>felicidade coletiva</strong>, a excelência humana e o bem comum. Na <em>Ética a Nicômaco</em>, Aristóteles descreve a felicidade como o "bem supremo": tudo o mais (honrarias, prazer, inteligência) é buscado por causa dela, mas a felicidade nunca é buscada por causa de outra coisa.</p>
        <p>A ética exige o uso da racionalidade e do senso crítico <strong>antes</strong> de qualquer ação, sempre em busca da atitude mais equilibrada para a coletividade — é a capacidade de medir os prós e contras de cada atitude diante dos outros.</p>
      `
    },
    {
      heading: "Ética × Moral",
      html: `
        <p>É comum confundir os dois termos, mas têm significados diferentes. <strong>Moral</strong> (do latim <em>moris</em>) remete a costume, tradição, hábito. Diferente da ética, a moral não exige reflexão filosófica sobre prós e contras — é carregada de juízos herdados de tradições específicas de uma sociedade, sem caráter universal, e normalmente é transmitida de geração em geração <strong>sem questionamento</strong>.</p>
        <p>Exemplo do capítulo: até meados da década de 1960, as sociedades ocidentais viam as funções femininas como restritas ao lar. Com o mercado de trabalho e os movimentos feministas, isso mudou — mostrando que a moral se transforma com o tempo e a sociedade, mesmo que pareça "natural" para quem a vive.</p>
        <div class="callout">Segundo Srour (2000): "Enquanto a ética diz respeito à disciplina teórica, ao estudo sistemático, a moral corresponde às representações imaginárias que dizem aos agentes sociais o que se espera deles."</div>
        <p>A <strong>ética</strong> tem alcance universal/coletivo: usa a reflexão e a razão para produzir o bem comum entre grupos com morais diferentes — por isso a ética <em>estuda</em> a moral (os hábitos e costumes), buscando a melhor ação possível quando grupos heterogêneos precisam conviver. A <strong>moral</strong> é relativa: suas regras valem para uma cultura, mas não necessariamente para outra, e muda ao longo da história sem que seus praticantes percebam.</p>
      `
    },
    {
      heading: "Senso moral e consciência moral",
      html: `
        <p><strong>Senso moral:</strong> o sentimento, vontade ou impulso imediato diante de uma situação (indignação, comoção ao ver uma criança com fome) — não exige justificativa imediata, vem da nossa formação moral (tradições e costumes). Segundo Chaui (2000), esse sentimento prova que somos seres morais.</p>
        <p><strong>Consciência moral:</strong> a <em>justificativa</em> para o senso moral — as explicações que damos a nós mesmos e aos outros para fundamentar nossos atos. Ajudar impulsivamente uma criança faminta é senso moral; explicar por que fiz isso é consciência moral. É a consciência moral que nos leva a assumir a responsabilidade pelos nossos atos.</p>
      `
    },
    {
      heading: "2. Percurso histórico da ética no Ocidente — a Antiguidade",
      html: `
        <p>O entendimento de "ética" muda conforme o período histórico e a escola de pensamento. Aristóteles (384-322 a.C.) teria inventado a palavra, mas reconhece que seus mestres Sócrates (469-399 a.C.) e Platão (428-348 a.C.) já buscavam entender a importância da ética para a felicidade e o bem viver em sociedade. A pergunta central da Grécia antiga, sobretudo com Sócrates: como viver de forma justa e em sociedade?</p>
        <div class="callout">Na obra <em>A política</em>, Aristóteles define o homem como "animal político por natureza" (<em>Zoon Politikon</em>) — a política é o que diferencia a humanidade dos demais animais: a capacidade de criar, discernir, construir e viver em sociedade o justo e o injusto, pelo uso da razão e das palavras.</div>
        <p>Esse período foi o primeiro da cultura ocidental com preocupações morais e políticas, baseado na confiança no homem como ser racional, capaz de se autoconhecer e decidir o destino e a felicidade da sociedade.</p>
        <h3>Idade Média</h3>
        <p>Os debates éticos ficaram nas mãos dos teólogos católicos, ligando a conduta humana aos textos bíblicos e à salvação da alma. <strong>Santo Agostinho</strong> (354-430) foi pioneiro ao compreender a liberdade humana e o livre-arbítrio: ações virtuosas e fé levam à salvação; pecado e vícios afastam de Deus. <strong>São Tomás de Aquino</strong> elaborou tratados morais sobre quais virtudes (como temperança e fé) devem guiar o comportamento humano em direção a Deus.</p>
      `
    },
    {
      heading: "Maquiavel e a teleologia",
      html: `
        <p>Com o pensamento moderno (séculos XVI-XVII), surge <strong>Maquiavel</strong> (1469-1527) com <em>O príncipe</em>. Ao contrário dos gregos (que buscavam a felicidade pela razão e pela virtude), Maquiavel vê o ser humano como naturalmente dotado de avareza e individualismo, sem real interesse no bem comum.</p>
        <p>A preocupação de Maquiavel: como o príncipe (qualquer governante) mantém a soberania e o domínio sobre os súditos? Embora nunca tenha escrito "os fins justificam os meios", sua obra permite essa leitura: o príncipe deve fazer o que for preciso (mentir, usar a força ou a paz) para se manter no poder, sendo amado pelo povo e temido pelos inimigos.</p>
        <div class="callout">"Maquiavélico" não significa fazer o mal — significa ser <strong>calculista</strong>, saber medir racionalmente prós e contras, antecipar-se aos inimigos. Para Maquiavel, o sucesso do príncipe se apoia em <strong>virtú</strong> (capacidade calculista de agir conforme as circunstâncias) e <strong>fortuna</strong> (a sorte/acaso, imprevisível, fora do controle racional).</div>
        <p>A ética maquiavélica é voltada aos <strong>fins</strong> (manter o poder, garantir apoio popular), não aos meios — daí o termo <strong>teleologia</strong> (do grego <em>telos</em>, fim; <em>logos</em>, razão): um modelo ético no qual resultados e consequências são sempre calculados.</p>
      `
    },
    {
      heading: "Adam Smith e a ética do mercado",
      html: `
        <p>Com o capitalismo e a sociedade burguesa (séculos XVIII-XIX), a ética se vincula a uma nova noção de trabalho. <strong>Adam Smith</strong> (1723-1790) é o precursor da ética do trabalho e da economia — antes dele, "economia" (do grego <em>oikos</em>) só significava administração do lar.</p>
        <div class="callout">"Adam Smith conseguiu demonstrar [...] que o lucro não é um acréscimo indevido, mas um vetor de distribuição de renda e de promoção do bem-estar social [...] a compatibilidade entre ética e atividade lucrativa" (Moreira, 1999).</div>
        <p>Antes do capitalismo, o trabalho era visto como atividade degradante, restrita a escravos, servos e comerciantes — marginalizados politicamente. As revoluções burguesas (1688, Revolução Gloriosa na Inglaterra; 1789, Revolução Francesa) alçaram os comerciantes ao poder político, dignificando o trabalho. A palavra "negócio" vem do latim <em>negotium</em> — "negar o ócio".</p>
        <p>Smith defendia que o mercado deveria funcionar por princípios éticos individualistas — a <strong>"mão invisível"</strong>: cada indivíduo busca seu próprio ganho, mas, sem pretender, acaba promovendo o interesse público. Quanto mais competitivos e produtivos forem os indivíduos, mais, indiretamente, contribuem para o progresso coletivo.</p>
      `
    },
    {
      heading: "Max Weber e a ética protestante",
      html: `
        <p><strong>Max Weber</strong> (1864-1920), em <em>A ética protestante e o espírito do capitalismo</em>, investiga a origem da racionalidade e da burocracia do capitalismo. A Reforma Protestante (séculos XVI-XVII) gerou a <strong>ascese</strong>: busca constante de domínio sobre o próprio corpo, disciplina diante das paixões, controle da natureza por ação metódica e racional.</p>
        <p>Diferente do catolicismo medieval (que via trabalho, juro e lucro como degradantes), a ética calvinista via o trabalho rígido e o "negócio" como prova de ser um escolhido por Deus (predestinado à salvação) — uma religiosidade que não se limita à contemplação, mas exige ação sobre o mundo.</p>
        <p>Weber chama isso de <strong>ética do trabalho</strong>: a crença de que "o trabalho dignifica o homem". Mesmo quem não era protestante (incluindo ateus) passou a imitar essa ética do trabalho — mas o vínculo religioso original foi se perdendo, restando só a racionalização.</p>
      `
    },
    {
      heading: "Kant e a deontologia",
      html: `
        <p>Na virada do século XVIII ao XIX, a ciência moderna e a ética liberal burguesa substituíam as interpretações religiosas medievais. <strong>Kant</strong> (1724-1804), contemporâneo da Revolução Francesa, parte da razão moderna aplicada ao direito, à indústria e à ciência para propor uma ética <strong>oposta</strong> à tradição maquiavélica/teleológica: a <strong>deontologia</strong> (do grego <em>deon</em>, obrigação/dever).</p>
        <p>A deontologia é uma ciência do <strong>dever</strong>: uma obrigação racional a ser cumprida a todo custo, <strong>sem medir as consequências</strong> — para Kant, tudo que emana da razão é necessariamente benéfico. Como iluminista, Kant confiava amplamente nos benefícios da razão humana. Daí seu famoso <strong>imperativo categórico</strong>: "Age como se a máxima de tua ação devesse tornar-se, através da tua vontade, uma lei universal" (Kant, 2009) — ou seja, toda ação ética deve poder valer como regra universal, em qualquer lugar e tempo.</p>
      `
    },
    {
      heading: "3. Liberdade, igualdade e responsabilidade: as críticas à deontologia",
      html: `
        <p>Kant herdou o Iluminismo francês (Diderot, Voltaire, Rousseau), que defendiam razão e ciência contra a religiosidade. Rousseau (França) e Locke (pai do liberalismo político, Inglaterra) defendiam que igualdade e liberdade são naturais e devem fundamentar a vida política. A ética burguesa passou a prezar as liberdades individuais — que influenciariam os direitos humanos do século XX. Kant via a humanidade a caminho da "paz perpétua" (título de um livro seu de 1795), fruto da igualdade jurídica e das liberdades políticas.</p>
        <p>No século XX, porém, vários pensadores criticaram a deontologia kantiana, alertando para os riscos de ações irresponsáveis quando há confiança cega na racionalidade.</p>
        <h3>Weber: ética da convicção × ética da responsabilidade</h3>
        <p>No ensaio "A política como vocação" (1919), Weber opõe:</p>
        <ul>
          <li><strong>Ética da convicção</strong> (ligada à deontologia): cumprir o dever moral/racional a todo custo, sem considerar as consequências. Exemplo: uma empresa de transgênicos que busca lucro sem estudar os impactos na saúde — não medir consequências é um indício de ato irresponsável.</li>
          <li><strong>Ética da responsabilidade</strong> (ligada à teleologia): valoriza os <strong>fins</strong>, calculando e refletindo sobre todas as consequências possíveis.</li>
        </ul>
        <p>Exemplo do médico que jura nunca mentir: na ética da convicção, ele diria a verdade brutal a um paciente terminal; na ética da responsabilidade, mentir (poupando o paciente) poderia ser considerado o ato mais responsável, já que os fins importam mais que os meios.</p>
      `
    },
    {
      heading: "Hannah Arendt: a banalidade do mal",
      html: `
        <p><strong>Hannah Arendt</strong> (1906-1975) criticou a ética kantiana com o conceito de <strong>banalidade do mal</strong>, na obra <em>Eichmann em Jerusalém</em> (1963). Adolf Eichmann, oficial nazista responsável pela logística do extermínio de milhões de pessoas, foi julgado em Jerusalém em 1961. Arendt, cobrindo o julgamento, descreveu-o não como um monstro, mas como um <strong>burocrata obediente</strong> às leis de seu país, que considerava racional obedecê-las — um sujeito medíocre, pouco reflexivo, conduzido por um comportamento ético deontológico.</p>
        <p>Para Arendt, a banalidade do mal é a <strong>renúncia à reflexão</strong>: a ausência de responsabilidade sobre as consequências dos próprios atos. O emprego "cego" da razão (via obediência fiel às leis) pode se voltar contra a própria humanidade, transformando pessoas em números desumanizados — como nos campos de concentração, uma organização racional e sistemática do extermínio em massa.</p>
      `
    },
    {
      heading: "Sartre: existencialismo, liberdade e responsabilidade",
      html: `
        <p><strong>Jean-Paul Sartre</strong> (1905-1980) desenvolve a <strong>ética existencialista</strong>, ligando conduta humana a liberdade e responsabilidade. Em <em>O Ser e o Nada</em> (1943) e <em>O existencialismo é um humanismo</em> (1946): <strong>a existência precede a essência</strong> — não existe natureza humana inata; ninguém nasce predestinado a ser ou agir de certo jeito. O ser humano "nasce condenado a ser livre": suas escolhas o tornam livre a todo instante para se modificar.</p>
        <p>Sartre rejeita a "natureza humana" (determinista, fatalista) e defende a <strong>condição humana</strong>: flexível, plástica, em transformação permanente — sinônimo de liberdade e responsabilidade. Ser livre é poder escolher, mas a liberdade causa <strong>angústia</strong> e <strong>náusea</strong> por dois motivos:</p>
        <ul>
          <li>Toda escolha implica abandonar todas as outras possibilidades.</li>
          <li>Todo projeto não se realiza exatamente como planejado, porque meu ser está em conflito com a realidade e com as subjetividades dos outros (daí a famosa frase: "o inferno são os outros").</li>
        </ul>
        <p>Como cada escolha tem "ressonância universal", Sartre conclui que somos <strong>sempre responsáveis pelos outros</strong> — a responsabilidade é permanente. <em>O existencialismo é um humanismo</em> foi escrito para responder às críticas de pessimismo: apesar da angústia, o ser é livre o bastante para se reconstruir sempre, de novas formas. Para Sartre, age de má-fé quem afirma não ter escolha ou não ser livre — mesmo escolher a submissão é uma escolha, e toda escolha ressoa no mundo.</p>
      `
    }
  ],
  keyPoints: [
    "Ética = reflexão racional, universal, sobre o bem comum (Aristóteles). Moral = costumes/tradições herdados, relativos a uma cultura, raramente questionados.",
    "Senso moral = reação/sentimento imediato diante de uma situação; consciência moral = a justificativa racional que damos para esse sentimento.",
    "Linha do tempo: Grécia Antiga (Sócrates/Platão/Aristóteles, busca da felicidade e do bem comum pela razão) → Idade Média (Agostinho e Aquino, ética ligada à fé e salvação) → Maquiavel (teleologia: ética voltada aos fins, não aos meios) → Adam Smith (ética do trabalho/mercado, 'mão invisível') → Max Weber (ética protestante, ascese, racionalização) → Kant (deontologia: ética do dever, imperativo categórico, sem medir consequências).",
    "Weber opõe ética da convicção (deontológica, ignora consequências) a ética da responsabilidade (teleológica, pesa as consequências).",
    "Hannah Arendt: banalidade do mal = renunciar à reflexão e à responsabilidade pelas consequências dos próprios atos, mesmo obedecendo 'racionalmente' à lei (caso Eichmann).",
    "Sartre: existência precede a essência — não há natureza humana fixa; somos 'condenados a ser livres', e cada escolha nos torna responsáveis pelo mundo e pelos outros."
  ]
};
