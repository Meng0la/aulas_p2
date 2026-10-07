window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-1"] = {
  id: "capitulo-1",
  title: "Conceitos iniciais de banco de dados",
  subtitle: "O que é um banco de dados e um SGBD, histórico, modelos de dados e as etapas de um projeto de banco de dados",
  estimatedMinutes: 22,
  sections: [
    {
      heading: "O que é um banco de dados",
      html: `
        <p>Bancos de dados estão por trás de praticamente tudo: vendas on-line, transferências bancárias, consulta de voos, apps de delivery, redes sociais, streaming. Segundo Elmasri (2018), um <strong>banco de dados</strong> é uma coleção de dados relacionados que se mantém por um longo período e tem estas propriedades:</p>
        <ul>
          <li>Reflete um recorte do mundo real, chamado <strong>"minimundo"</strong> (ex.: alunos de um sistema acadêmico, clientes de um banco).</li>
          <li>É um conjunto de dados organizado de forma lógica, com significado próprio.</li>
          <li>É estruturado e preenchido para atender a um propósito, servindo um grupo específico de usuários e aplicações.</li>
        </ul>
        <p>Em outras palavras: um banco de dados registra fatos do mundo real, interage com esse mundo e com um grupo de usuários interessados — cada mudança no banco reflete uma mudança na realidade.</p>
        <p>Para Ramakrishnan (2011), um banco de dados descreve as atividades de organizações relacionadas. Exemplo num cenário de vendas: <strong>entidades</strong> (cliente, produto, pedido) e <strong>relacionamentos</strong> entre elas (cliente realiza pedidos; um pedido pode conter vários produtos).</p>
      `
    },
    {
      heading: "SGBD e sistema de banco de dados",
      html: `
        <p>Um <strong>SGBD (sistema gerenciador de banco de dados)</strong> é um software para administrar e usar grandes volumes de dados. O par formado pelo banco de dados + o software que o manipula é chamado de <strong>sistema de banco de dados</strong> (Elmasri, 2018).</p>
        <div class="callout">
          <strong>Três definições para não confundir:</strong><br>
          • <strong>Banco de dados:</strong> a coleção de dados relacionados em si.<br>
          • <strong>SGBD:</strong> o software que gerencia, manipula e organiza os dados.<br>
          • <strong>Sistema de banco de dados:</strong> o par banco de dados + SGBD.
        </div>
      `
    },
    {
      heading: "1. Histórico e evolução dos bancos de dados",
      html: `
        <p>Os primeiros SGBDs comerciais surgiram nos anos 1960. Antes disso, aplicações usavam <strong>sistemas de arquivos</strong> com estruturas proprietárias — um problema, já que programas que não conhecessem essa estrutura não conseguiam acessar os dados, e não havia controle de concorrência entre usuários/processos. O SGBD surgiu como intermediário entre os programas e o arquivo: ele conhece a estrutura, armazena adequadamente e entrega a cada programa o que ele precisa.</p>
        <h3>1.1 Modelo de rede e modelo hierárquico (década de 1960)</h3>
        <ul>
          <li><strong>Modelo de rede:</strong> usado no "Depósito de dados integrado", padronizado pela CODASYL.</li>
          <li><strong>Modelo hierárquico:</strong> usado no IMS (Information Management System) da IBM.</li>
        </ul>
        <h3>1.2 Modelo de dados relacional (década de 1970)</h3>
        <p>Em 1970, Edgar Codd (pesquisador da IBM) apresentou o <strong>modelo relacional</strong> — um marco no desenvolvimento de bancos de dados, que lhe rendeu o prêmio Turing de 1981. Com a evolução de armazenamento, processamento e otimização de consultas, o relacional se tornou o modelo dominante.</p>
        <h3>1.3 Banco de dados orientado a objetos (décadas de 1980-1990)</h3>
        <p>Com as linguagens de programação orientadas a objetos, surgiram os BDOOs (bancos de dados orientados a objetos), para dados complexos. Não teve adoção tão ampla quanto o relacional, por ser mais complexo e não ter padrão inicial.</p>
        <h3>1.4 Banco NoSQL (década de 2000)</h3>
        <p>A internet trouxe uma explosão de dados estruturados e não estruturados. Surge o <strong>NoSQL (Not Only SQL)</strong>, projetado para gerenciar grandes volumes de dados não estruturados ou semiestruturados (posts de redes sociais, documentos, dados em cache etc.).</p>
        <h3>1.5 Banco de dados em nuvem (após 2010)</h3>
        <p>Um banco de dados em nuvem é criado e acessado por um serviço em nuvem. O modelo <strong>DBaaS (Database as a Service)</strong> é quando uma organização contrata um provedor por assinatura, que cuida da operação, manutenção e gerenciamento — exemplos: Amazon RDS, Cloud SQL, Azure SQL Database, Oracle Cloud Database Services.</p>
        <h3>1.6 Big data e ciência de dados</h3>
        <p>O crescimento do volume de dados exigiu ferramentas de Big Data como Hadoop e Spark. Essa explosão de dados também impulsionou a <strong>ciência de dados</strong> — área que combina matemática, estatística, programação, IA e aprendizado de máquina para extrair insights, conduzida pelo cientista de dados.</p>
      `
    },
    {
      heading: "2. Modelos de banco de dados",
      html: `
        <p>Um <strong>modelo de dados</strong> é um conjunto de ferramentas de alto nível para descrever dados, simplificando os detalhes de armazenamento. Descreve a estrutura, as operações de manipulação, os relacionamentos e as restrições do banco (Ramakrishnan, 2011; Elmasri, 2018).</p>
        <h3>Modelo relacional</h3>
        <p>Representa dados e relacionamentos por meio de <strong>tabelas</strong>, cada uma com colunas de nomes únicos. É o foco principal deste material, por ser o mais usado pelas aplicações.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig1.png", caption: "Figura 1 – Modelo relacional: tabela de Clientes (nome, logradouro, cidade, num_cc) e tabela de Conta (num_cc, saldo). Camila e André compartilham o mesmo endereço e a mesma conta (num_cc 1111) — uma conta conjunta." }
      ]
    },
    {
      heading: "Esquema × banco de dados propriamente dito",
      html: `
        <p>É importante distinguir a <strong>descrição</strong> do banco de dados (o esquema) do banco de dados em si (os dados armazenados). O <strong>esquema</strong> é especificado no projeto e raramente muda — pode ser ilustrado por um diagrama de esquema.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig2.png", caption: "Figura 2 – Esquema do banco de dados correspondente à Figura 1: estrutura das tabelas Cliente e Conta (sem os dados)." }
      ]
    },
    {
      heading: "Modelo hierárquico e modelo de rede",
      html: `
        <p><strong>Modelo hierárquico:</strong> organiza os dados em estrutura de árvore, numa relação pai-filho (um-para-muitos). A consulta percorre do topo da hierarquia para baixo, da esquerda para a direita. Foi importante principalmente pelo sistema IMS da IBM, um dos mais antigos SGBDs, pioneiro em lidar com concorrência, recuperação, integridade e processamento eficiente de consultas.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig3.png", caption: "Figura 3 – Modelo hierárquico: os mesmos dados de clientes e contas organizados em estrutura de árvore." }
      ]
    },
    {
      heading: "Modelo de rede",
      html: `
        <p>No <strong>modelo de rede</strong> existe uma coleção de registros e relacionamentos representados por links (como ponteiros) — os registros formam uma coleção de grafos (Silberschatz, 1991).</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig4.png", caption: "Figura 4 – Modelo de rede: registros de clientes conectados por links aos registros de conta correspondentes." }
      ]
    },
    {
      heading: "Modelo orientado a objetos",
      html: `
        <p>A partir dos anos 2000, a programação orientada a objetos (C++, C#, Java) predominou, levando ao modelo de dados orientado a objetos. O padrão foi definido pelo <strong>ODMG (Object Database Management Group)</strong>. O diagrama <strong>UML</strong> costuma servir de esquema para esse modelo.</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig5.png", caption: "Figura 5 – Modelo orientado a objeto: classes Cliente e Conta relacionadas (cardinalidade 1..* em ambos os lados), com seus atributos tipados (str, int, real)." }
      ]
    },
    {
      heading: "Modelo NoSQL e seus tipos",
      html: `
        <p>O NoSQL gerencia dados estruturados e não estruturados. Principais tipos (AWS, 2012):</p>
        <ul>
          <li><strong>Chave-valor:</strong> uma chave (numérica, alfanumérica ou composta) associada a um conjunto de dados. Ex.: Redis, Amazon DocumentDB.</li>
          <li><strong>Documentos:</strong> armazena documentos em JSON, BSON (versão binária do JSON) ou XML. Ex.: MongoDB, CouchDB.</li>
          <li><strong>Grafos:</strong> entidades como vértices, relacionamentos como arestas — usado em redes sociais (sugestão de amizades), recomendação de produtos e detecção de fraude. Ex.: Amazon Neptune, Neo4j.</li>
          <li><strong>Em memória:</strong> usa a memória RAM em vez de disco/SSD, para desempenho em tempo real. Ex.: Redis, ElastiCache, Memcached.</li>
        </ul>
        <div class="callout">O <strong>MongoDB</strong> é um banco NoSQL orientado a documentos, armazenando dados em BSON — projetado para grandes volumes e alto desempenho.</div>
      `
    },
    {
      heading: "3. Sistema gerenciador de banco de dados (SGBD)",
      html: `
        <p>Um SGBD é uma coleção de programas que facilita a <strong>definição</strong>, <strong>construção</strong> e <strong>manipulação</strong> do banco de dados (Elmasri, 2018):</p>
        <ul>
          <li><strong>Definição:</strong> especifica os tipos de dados e restrições a serem armazenados.</li>
          <li><strong>Construção:</strong> cria as estruturas do banco e armazena os dados nelas.</li>
          <li><strong>Manipulação:</strong> consultas, atualizações e geração de relatórios.</li>
        </ul>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig6.png", caption: "Figura 6 – Sistema de banco de dados: usuários/programadores → consultas/programas de aplicação → SGBD (processador de consultas, gerenciador de memória/transações/arquivos) → armazenamento em disco (arquivos de dados, índices, dados estatísticos, dicionário de dados)." }
      ]
    },
    {
      heading: "Vantagens de um SGBD",
      html: `
        <p>Usar um SGBD traz: independência de dados (programas não se preocupam com detalhes de armazenamento), acesso eficiente, integridade e segurança (via restrições e controle de acesso), administração centralizada (menos redundância), gestão de acessos simultâneos e proteção contra falhas (Ramakrishnan, 2011).</p>
      `
    },
    {
      heading: "4. Projeto de banco de dados",
      html: `
        <p>Um <strong>projeto de banco de dados</strong> é o processo de planejar e estruturar como os dados serão armazenados, organizados, acessados e manipulados, para atender aos requisitos de um minimundo. Garante estrutura, integridade, performance e manutenção viável a longo prazo. Segundo Elmasri (2018), as etapas são:</p>
        <ol>
          <li><strong>Levantamento dos requisitos:</strong> entender o minimundo — identificar e descrever os dados, relações, significados e restrições.</li>
          <li><strong>Projeto conceitual:</strong> criar um modelo de alto nível (modelo conceitual), sem se preocupar com implementação física. No modelo relacional, usa-se o MER, e o produto é o <strong>DER</strong> (diagrama entidade-relacionamento).</li>
          <li><strong>Projeto lógico:</strong> transforma o modelo conceitual em modelo lógico (nível visto pelo usuário do SGBD). No modelo relacional, o produto é o <strong>esquema relacional</strong>. Aqui também se aplica a <strong>normalização</strong>, para reduzir redundância e melhorar a integridade.</li>
          <li><strong>Projeto físico:</strong> define como o banco será implementado fisicamente — escolha do SGBD, tipos de dados, índices.</li>
        </ol>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-1/fig7.png", caption: "Figura 7 – Etapas do projeto de banco de dados: minimundo → Levantamento dos requisitos → Projeto Conceitual (DER, via MER) → mapeamento → Projeto Lógico (esquema relacional, com normalização) → padrões e tecnologias → Projeto Físico (scripts de BD) → implementação → banco de dados." }
      ]
    }
  ],
  keyPoints: [
    "Banco de dados = coleção de dados relacionados que reflete um 'minimundo'; SGBD = software que gerencia esses dados; Sistema de banco de dados = o par dos dois.",
    "Linha do tempo: modelo de rede/hierárquico (1960) → modelo relacional (1970, Edgar Codd) → orientado a objetos (1980-90) → NoSQL (2000) → nuvem/DBaaS (após 2010).",
    "Modelo relacional usa tabelas; hierárquico usa árvore (pai-filho); rede usa links/grafos; orientado a objetos usa classes (UML); NoSQL é chave-valor, documentos, grafos ou em memória.",
    "SGBD faz 3 coisas: Definição (tipos/restrições), Construção (criar estruturas) e Manipulação (consultas/atualizações/relatórios).",
    "As 4 etapas do projeto de banco de dados: Levantamento de requisitos → Projeto Conceitual (DER) → Projeto Lógico (esquema relacional + normalização) → Projeto Físico (scripts, índices)."
  ]
};
