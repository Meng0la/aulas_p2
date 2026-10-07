window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-2"] = {
  id: "capitulo-2",
  title: "Modelagem conceitual: Diagrama Entidade-Relacionamento (DER)",
  subtitle: "Modelo conceitual, MER (entidades, atributos, relacionamentos e restrições) e MERE (especialização, generalização, agregação)",
  estimatedMinutes: 20,
  sections: [
    {
      heading: "Os três níveis de modelagem de dados",
      html: `
        <p>Modelar dados é representar um pedaço da realidade (o "minimundo") para poder guardá-lo em um banco de dados. Esse processo passa por três níveis, do mais abstrato para o mais concreto:</p>
        <ul>
          <li><strong>Modelo conceitual:</strong> entende e estrutura os dados a partir da necessidade do usuário, sem pensar em como eles serão fisicamente guardados. É o nível dos diagramas.</li>
          <li><strong>Modelo lógico:</strong> já pensa em como organizar os dados em tabelas (ou outra estrutura lógica), mas ainda sem escolher um SGBD específico.</li>
          <li><strong>Modelo físico:</strong> descreve como os dados realmente ficam armazenados — tipo de dado, tamanho de campo, forma de acesso etc.</li>
        </ul>
        <p>Este capítulo foca no <strong>modelo conceitual</strong>, usando o <strong>Modelo Entidade-Relacionamento (MER)</strong> e sua versão ampliada, o <strong>MER Estendido (MERE)</strong>.</p>
      `
    },
    {
      heading: "1. Modelo conceitual",
      html: `
        <p>O modelo conceitual é uma abstração dos dados que se quer armazenar, sem se preocupar com a implementação física. Ele parte da definição de um <strong>universo de discurso</strong>: o contexto que está sendo modelado (pode ser algo real, como uma empresa, ou abstrato, como personagens de um jogo).</p>
        <p>Para que essa abstração funcione, ela segue um <strong>formalismo</strong> — regras e convenções que evitam ambiguidade. Um bom modelo conceitual deve ter:</p>
        <ul>
          <li><strong>Propósito</strong> bem definido;</li>
          <li><strong>Simplificação da realidade</strong>, com só os elementos essenciais;</li>
          <li><strong>Conexão com a realidade</strong>, refletindo informações reais;</li>
          <li><strong>Padrão visual</strong>, que ajuda diferentes pessoas do projeto a entenderem o modelo.</li>
        </ul>
        <p>Usar um formalismo padronizado — como o MER ou a UML — deixa o modelo mais claro e facilita a comunicação entre a equipe.</p>
      `
    },
    {
      heading: "2. Modelo Entidade-Relacionamento (MER)",
      html: `
        <p>O MER é um modelo conceitual de alto nível, muito usado em projetos de banco de dados relacionais. Ele representa o universo modelado como <strong>entidades</strong> e os <strong>relacionamentos</strong> entre elas.</p>
        <div class="callout">
          <strong>MER × DER:</strong> o <strong>MER</strong> é o conjunto de conceitos usados para modelar (o "idioma"). O <strong>DER</strong> (Diagrama Entidade-Relacionamento) é o desenho concreto que resulta desse processo — o esquema conceitual em si. Ou seja: o projetista usa os conceitos do MER para desenhar um DER.
        </div>
      `
    },
    {
      heading: "2.1 Entidade e conjunto de entidades",
      html: `
        <p>Uma <strong>entidade</strong> é um objeto que existe no universo modelado e é diferente de qualquer outro objeto. Pode ser:</p>
        <ul>
          <li><strong>Física</strong>: um objeto concreto, visível no mundo real — pessoa, casa, carro, funcionário.</li>
          <li><strong>Lógica</strong>: um objeto com existência conceitual — empresa, cargo, curso.</li>
        </ul>
        <p>Uma coleção de entidades com a mesma estrutura e o mesmo significado forma um <strong>conjunto de entidades</strong> (ou tipo de entidade). No DER, segundo o modelo proposto por Peter Chen (1976), um conjunto de entidades é desenhado como um <strong>retângulo</strong> com o nome da entidade dentro, sempre no singular.</p>
        <p>Exemplo: numa empresa, João da Silva e Carla Gomes são entidades (instâncias). O conjunto de todos os funcionários forma o conjunto de entidades "Funcionário":</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig1.png", caption: "Figura 1 – Conjunto de entidades Funcionário." }
      ]
    },
    {
      heading: "2.2 Atributo do conjunto de entidades",
      html: `
        <p>Cada entidade tem <strong>atributos</strong>: informações que a descrevem. Quanto mais atributos, mais detalhada é a entidade. Por exemplo, "Funcionário" pode ter: nome, CPF, celular, endereço, salário.</p>
        <p>Para cada atributo existe um <strong>domínio</strong>: o conjunto de valores válidos que ele pode assumir (ex.: nome é uma string de até 50 caracteres; nota de avaliação vai de 1 a 10).</p>
        <p>Os atributos se classificam em:</p>
        <ul>
          <li><strong>Simples (atômicos):</strong> não dá para dividir. Ex.: nome, idade, CPF.</li>
          <li><strong>Compostos:</strong> dá para dividir em subatributos com significado próprio. Ex.: endereço → rua, número, bairro, CEP.</li>
          <li><strong>Monovalorados:</strong> um único valor por entidade. Ex.: data de nascimento.</li>
          <li><strong>Multivalorados:</strong> podem ter vários valores para a mesma entidade. Ex.: telefones, e-mails, diplomas.</li>
          <li><strong>Derivados:</strong> calculados a partir de outro atributo. Ex.: idade, derivada da data de nascimento.</li>
        </ul>
        <p>Quando um atributo não tem valor (ou o valor é desconhecido), ele recebe <strong>valor nulo</strong> — por exemplo, "apartamento" fica nulo para quem não mora em prédio.</p>
        <p>Para identificar cada entidade de forma única dentro do conjunto, usam-se <strong>atributos-chave</strong>. Uma <strong>chave candidata</strong> é um conjunto mínimo de atributos que identifica a entidade sem ter subconjuntos que também sirvam como chave; pode haver várias chaves candidatas, e uma delas é escolhida como <strong>chave primária</strong> — o identificador principal.</p>
        <p>No DER, o atributo é uma <strong>elipse</strong> ligada por uma linha ao retângulo da entidade:</p>
        <ul>
          <li>elipse simples → atributo simples/monovalorado;</li>
          <li>elipse dupla → atributo multivalorado;</li>
          <li>elipse pontilhada → atributo derivado;</li>
          <li>nome sublinhado → faz parte da chave primária.</li>
        </ul>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig2.png", caption: "Figura 2 – Conjunto de entidades Funcionário e seus atributos (matrícula é a chave primária)." }
      ]
    },
    {
      heading: "2.3 Relacionamento e conjunto de relacionamentos",
      html: `
        <p>Um <strong>relacionamento</strong> representa a associação entre duas ou mais entidades. Um <strong>conjunto de relacionamentos</strong> agrupa relacionamentos do mesmo tipo. Conforme o número de entidades envolvidas, o relacionamento é <strong>binário</strong> (2 entidades), <strong>ternário</strong> (3 entidades), e assim por diante.</p>
        <p>No DER, um conjunto de relacionamentos é um <strong>losango</strong> com o nome dentro (um substantivo ou verbo na 3ª pessoa do singular), ligado por linhas às entidades que ele associa. Exemplo: funcionários participam de projetos → relacionamento "trabalha_em" entre Funcionário e Projeto.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig3.png", caption: "Figura 3 – Relacionamento trabalha_em entre Funcionário e Projeto." }
      ]
    },
    {
      heading: "Atributos de relacionamento",
      html: `
        <p>Um conjunto de relacionamentos também pode ter atributos próprios, que descrevem a associação. No exemplo, o número de horas que cada funcionário trabalha em cada projeto é um atributo do relacionamento "trabalha_em", não de Funcionário nem de Projeto:</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig4.png", caption: "Figura 4 – Atributo num_horas no relacionamento trabalha_em." }
      ]
    },
    {
      heading: "2.4 Restrições de conjuntos de relacionamentos",
      html: `
        <p>Uma restrição sobre um relacionamento é uma regra sobre como as entidades podem (ou devem) se associar. Existem três tipos:</p>
        <h3>2.4.1 Restrição de cardinalidade</h3>
        <p>Expressa quantas instâncias de um conjunto A podem se associar a instâncias de um conjunto B. Para relacionamentos binários:</p>
        <ul>
          <li><strong>1:1 (um para um):</strong> uma entidade de A associa com no máximo uma de B.</li>
          <li><strong>1:N (um para muitos):</strong> uma entidade de A pode se associar a várias de B, mas cada entidade de B associa com no máximo uma de A.</li>
          <li><strong>N:N (muitos para muitos):</strong> entidades de A podem se associar a várias de B e vice-versa. Exemplo: "trabalha_em" é N:N, já que um funcionário pode estar em vários projetos e um projeto tem vários funcionários.</li>
        </ul>
        <p>No DER, a cardinalidade é escrita sobre as linhas que ligam o losango às entidades:</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig5.png", caption: "Figura 5 – Cardinalidade N:N no relacionamento trabalha_em." }
      ]
    },
    {
      heading: "2.4.2 Restrição de participação",
      html: `
        <p>Indica se toda entidade de um conjunto A precisa, obrigatoriamente, estar associada a uma entidade de B por meio do relacionamento R:</p>
        <ul>
          <li><strong>Total (obrigatória):</strong> toda entidade de A está associada a alguma entidade de B. Ex.: como todo funcionário trabalha em algum projeto e todo projeto tem algum funcionário, "trabalha_em" é total para os dois lados.</li>
          <li><strong>Parcial:</strong> pode haver entidades de A sem associação em B.</li>
        </ul>
        <p>No DER, participação <strong>total</strong> é uma <strong>linha dupla</strong>; participação <strong>parcial</strong> é uma <strong>linha simples</strong>.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig6.png", caption: "Figura 6 – Funcionário e Projeto com participação total em trabalha_em (linhas duplas)." }
      ]
    },
    {
      heading: "2.4.3 Restrição estrutural",
      html: `
        <p>Define o número mínimo e máximo de vezes que uma instância de um conjunto E pode participar de um relacionamento R, escrito como um par <strong>(min, max)</strong>.</p>
        <ul>
          <li>Se <strong>min = 0</strong> → participação parcial.</li>
          <li>Se <strong>min &gt; 0</strong> → participação total.</li>
        </ul>
        <p>No exemplo "trabalha para" entre Funcionário e Departamento: Funcionário tem restrição (1,1) — participa no mínimo e no máximo uma vez (cada funcionário pertence a exatamente um departamento). Departamento tem restrição (0,N) — participação parcial (pode não ter funcionário ainda) e no máximo N funcionários.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig7.png", caption: "Figura 7 – Restrição estrutural: Funcionário (1,1) e Departamento (0,N)." }
      ]
    },
    {
      heading: "2.5 Conjunto de entidades fracas",
      html: `
        <p>Quando um conjunto de entidades não tem atributos próprios suficientes para formar uma chave primária, ele é um <strong>conjunto de entidades fracas</strong>. Essa entidade só existe se estiver associada a uma <strong>entidade forte (proprietária)</strong>.</p>
        <p>No DER:</p>
        <ul>
          <li>a entidade fraca é um <strong>retângulo de contorno duplo</strong>;</li>
          <li>o relacionamento entre a entidade fraca e a forte é o <strong>relacionamento de identificação</strong>, desenhado como um <strong>losango de contorno duplo</strong>;</li>
          <li>a entidade fraca tem participação <strong>total</strong> nesse relacionamento (ela não existe sem a entidade proprietária) — já a entidade forte pode ter participação parcial.</li>
        </ul>
        <p>A entidade fraca tem uma <strong>chave parcial</strong>: identifica unicamente a entidade fraca <em>dentro</em> de cada entidade proprietária (ex.: dois dependentes do mesmo funcionário não podem ter o mesmo nome, mas dependentes de funcionários diferentes podem). No DER, a chave parcial é sublinhada com <strong>linha tracejada</strong>.</p>
        <p>Exemplo: "Dependente" só existe associado a um "Funcionário", por meio do relacionamento "possui".</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig8.png", caption: "Figura 8 – Entidade fraca Dependente e relacionamento de identificação possui." }
      ]
    },
    {
      heading: "2.6 Relacionamentos recursivos e papéis",
      html: `
        <p>Um relacionamento não precisa envolver dois conjuntos de entidades diferentes — às vezes a mesma entidade se relaciona consigo mesma. Isso é um <strong>relacionamento recursivo</strong>. Nesses casos, é útil nomear o <strong>papel</strong> de cada participação para diferenciar os dois lados.</p>
        <p>Exemplo clássico: entre funcionários, alguns são "gerente" e outros são "subordinado" no relacionamento "supervisiona":</p>
        <div class="callout">
          <strong>Para saber mais:</strong> o <em>BRModelo</em> é uma ferramenta gratuita de modelagem de banco de dados baseada nos conceitos de Peter Chen, útil para desenhar DERs na prática.
        </div>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig9.png", caption: "Figura 9 – Relacionamento recursivo supervisiona, com os papéis gerente e subordinado." }
      ]
    },
    {
      heading: "3. Modelo Entidade-Relacionamento Estendido (MERE)",
      html: `
        <p>O MERE amplia o MER tradicional para representar situações mais complexas, introduzindo <strong>generalização/especialização</strong> e <strong>agregação</strong>.</p>
        <h3>3.1 Especialização</h3>
        <p>É o processo de definir subtipos (subclasses) de um tipo de entidade mais geral (a <strong>superclasse</strong>). As subclasses herdam os atributos e relacionamentos da superclasse e podem ter atributos próprios.</p>
        <p>Exemplo: "Funcionário" pode ser especializado em "Secretário", "Técnico" e "Engenheiro", cada um com atributos adicionais (idioma, grau, tipo) além dos herdados de Funcionário:</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig10.png", caption: "Figura 10 – Especialização de Funcionário em Secretário, Técnico e Engenheiro." }
      ]
    },
    {
      heading: "Disjunção, sobreposição e generalização",
      html: `
        <p>A especialização pode ser restringida por:</p>
        <ul>
          <li><strong>Disjunção:</strong> um objeto só pode pertencer a um subtipo por vez (ex.: o funcionário é secretário OU técnico OU engenheiro, nunca mais de um).</li>
          <li><strong>Sobreposição:</strong> um objeto pode pertencer a mais de um subtipo ao mesmo tempo.</li>
        </ul>
        <h3>3.2 Generalização</h3>
        <p>É o processo inverso: em vez de dividir uma entidade, várias entidades distintas que compartilham atributos são unificadas em um <strong>supertipo</strong>. Exemplo: "Carro" e "Caminhão" compartilham atributos como licença, identificação e preço — podem ser generalizados num supertipo "Veículo", mantendo os atributos específicos em cada subtipo.</p>
        <h3>3.3 Agregação</h3>
        <p>Permite tratar um <strong>relacionamento como se fosse uma entidade</strong>, para que ele possa se relacionar com outras entidades. É útil quando é preciso guardar informações extras sobre o relacionamento em si, ou conectá-lo a algo novo.</p>
        <p>Exemplo: o relacionamento "entrevista" entre Empresa e Candidato pode virar uma entidade "Entrevista", que por sua vez se relaciona com "Oferta_Emprego" através de "resulta em":</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-2/fig11.png", caption: "Figura 11 – Agregação: entrevista tratada como entidade, relacionada a Oferta_Emprego." }
      ]
    }
  ],
  keyPoints: [
    "Modelagem de dados tem 3 níveis: conceitual (diagramas, sem pensar em armazenamento), lógico (tabelas, sem SGBD definido) e físico (estrutura real de armazenamento).",
    "MER = conjunto de conceitos para modelar; DER = o diagrama resultante.",
    "Entidade = retângulo · Atributo = elipse (dupla = multivalorado, pontilhada = derivado, sublinhado = chave) · Relacionamento = losango.",
    "Cardinalidade (1:1, 1:N, N:N) descreve quantas instâncias se associam; participação (total = linha dupla, parcial = linha simples) descreve se a associação é obrigatória.",
    "Restrição estrutural (min, max): min=0 é participação parcial, min>0 é participação total.",
    "Entidade fraca não tem chave primária própria, depende de uma entidade forte, e é representada com contorno duplo; sua chave parcial é sublinhada com linha tracejada.",
    "Relacionamento recursivo liga uma entidade a si mesma, usando papéis para diferenciar os lados.",
    "MERE acrescenta especialização (criar subclasses, podendo ser disjuntas ou sobrepostas), generalização (unificar entidades num supertipo) e agregação (tratar um relacionamento como entidade)."
  ]
};
