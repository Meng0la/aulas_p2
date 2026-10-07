window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.quizzes["banco-de-dados"] = (window.APP_DATA.quizzes["banco-de-dados"] || []).concat([
  {
    id: "bd-cap1-q1", module: "capitulo-1",
    question: "Segundo Elmasri (2018), qual é o par formado por um banco de dados e o software que o manipula?",
    options: ["Modelo de dados", "Sistema de banco de dados", "Esquema relacional", "SGBD"],
    correctIndex: 1,
    explanation: "O sistema de banco de dados é o par formado pelo banco de dados e o SGBD (ou outro software que o manipule), segundo Elmasri (2018)."
  },
  {
    id: "bd-cap1-q2", module: "capitulo-1",
    question: "Quem apresentou o modelo de dados relacional em 1970, recebendo o prêmio Turing de 1981 por esse trabalho?",
    options: ["Peter Chen", "Edgar Codd", "Ramakrishnan", "Elmasri"],
    correctIndex: 1,
    explanation: "Edgar Codd, pesquisador da IBM, apresentou o modelo relacional em 1970, um marco no desenvolvimento dos sistemas de banco de dados."
  },
  {
    id: "bd-cap1-q3", module: "capitulo-1",
    question: "O que caracteriza o modelo hierárquico de banco de dados?",
    options: [
      "Organiza os dados em tabelas com colunas nomeadas",
      "Organiza os dados em estrutura de árvore, numa relação pai-filho (um-para-muitos)",
      "Representa entidades como vértices e relacionamentos como arestas",
      "Usa apenas memória RAM para armazenamento"
    ],
    correctIndex: 1,
    explanation: "O modelo hierárquico organiza os dados em árvore, com relação pai-filho (um-para-muitos); a consulta percorre do topo para a base, da esquerda para a direita. Foi usado no sistema IMS da IBM."
  },
  {
    id: "bd-cap1-q4", module: "capitulo-1",
    question: "Qual tipo de banco de dados NoSQL é mais indicado para sugestão de amizades em redes sociais e detecção de fraude?",
    options: ["Chave-valor", "Documentos", "Grafos", "Em memória"],
    correctIndex: 2,
    explanation: "Bancos de dados de grafos representam entidades como vértices e relacionamentos como arestas, sendo usados em redes sociais, sistemas de recomendação e detecção de fraude (ex.: Amazon Neptune, Neo4j)."
  },
  {
    id: "bd-cap1-q5", module: "capitulo-1",
    question: "O que é DBaaS (Database as a Service)?",
    options: [
      "Um modelo de dados orientado a objetos",
      "Um modelo em que uma organização contrata um provedor de nuvem por assinatura, que cuida da operação e manutenção do banco de dados",
      "Um tipo de banco de dados hierárquico",
      "Uma linguagem de consulta"
    ],
    correctIndex: 1,
    explanation: "DBaaS é o modelo em que uma organização contrata um provedor de serviço em nuvem por assinatura; o provedor cuida das tarefas operacionais, manutenção e gerenciamento do banco de dados (ex.: Amazon RDS, Azure SQL Database)."
  },
  {
    id: "bd-cap1-q6", module: "capitulo-1",
    question: "Quais são as três funções principais de um SGBD, segundo Elmasri (2018)?",
    options: [
      "Backup, restauração e migração",
      "Definição, construção e manipulação",
      "Normalização, indexação e criptografia",
      "Instalação, configuração e monitoramento"
    ],
    correctIndex: 1,
    explanation: "Um SGBD facilita a Definição (tipos e restrições de dados), a Construção (criação das estruturas e armazenamento) e a Manipulação (consultas, atualizações, relatórios) do banco de dados."
  },
  {
    id: "bd-cap1-q7", module: "capitulo-1",
    question: "No projeto de banco de dados, qual etapa produz o DER (diagrama entidade-relacionamento)?",
    options: ["Levantamento dos requisitos", "Projeto conceitual", "Projeto lógico", "Projeto físico"],
    correctIndex: 1,
    explanation: "O projeto conceitual cria um modelo de alto nível (usando o MER no caso do modelo relacional), sem se preocupar com implementação física — o produto gerado é o esquema conceitual, o DER."
  },
  {
    id: "bd-cap1-q8", module: "capitulo-1",
    question: "Em qual etapa do projeto de banco de dados se aplica a normalização?",
    options: ["Levantamento dos requisitos", "Projeto conceitual", "Projeto lógico", "Projeto físico"],
    correctIndex: 2,
    explanation: "No projeto lógico, depois de gerado o esquema relacional, aplica-se a normalização para reduzir redundância e melhorar a integridade do banco de dados."
  },
  {
    id: "bd-cap3-q1", module: "capitulo-3",
    question: "No modelo relacional, como são chamadas as colunas e as linhas de uma tabela, respectivamente?",
    options: ["Domínios e chaves", "Atributos e tuplas", "Esquemas e instâncias", "Relações e domínios"],
    correctIndex: 1,
    explanation: "As colunas de uma tabela (relação) são chamadas atributos, e as linhas são chamadas tuplas."
  },
  {
    id: "bd-cap3-q2", module: "capitulo-3",
    question: "O que é uma chave candidata?",
    options: [
      "Qualquer atributo de uma tabela",
      "Uma superchave mínima — removendo qualquer atributo dela, perde-se a unicidade",
      "A chave estrangeira de outra tabela",
      "Um atributo que aceita valores nulos"
    ],
    correctIndex: 1,
    explanation: "Uma chave é uma superchave mínima: se remover um atributo, a unicidade se perde. Cada uma dessas chaves possíveis é chamada chave candidata; a escolhida para identificar as tuplas vira a chave primária (PK)."
  },
  {
    id: "bd-cap3-q3", module: "capitulo-3",
    question: "Segundo a restrição de integridade de entidade, o que não pode acontecer?",
    options: [
      "Um atributo comum ser nulo",
      "Um valor de chave primária ser nulo",
      "Uma tabela ter mais de uma chave candidata",
      "Duas tabelas terem o mesmo nome"
    ],
    correctIndex: 1,
    explanation: "A restrição de integridade de entidade estabelece que nenhum valor de chave primária pode ser nulo, pois a PK serve justamente para identificar cada tupla de forma única."
  },
  {
    id: "bd-cap3-q4", module: "capitulo-3",
    question: "O que garante a restrição de integridade referencial?",
    options: [
      "Que todo atributo tenha um valor numérico",
      "Que um valor que referencia outra tupla (via chave estrangeira) aponte para uma tupla que realmente existe",
      "Que não existam tabelas vazias",
      "Que toda tabela tenha exatamente uma coluna"
    ],
    correctIndex: 1,
    explanation: "A integridade referencial garante que um valor de chave estrangeira sempre corresponda a um valor de chave primária existente na tabela referenciada (ou seja nulo)."
  },
  {
    id: "bd-cap3-q5", module: "capitulo-3",
    question: "No mapeamento do DER para o modelo relacional, como um relacionamento M:N é representado?",
    options: [
      "Como um atributo simples em uma das tabelas existentes",
      "Criando uma nova relação, com chaves estrangeiras para as PKs das duas entidades envolvidas",
      "Não é possível representar relacionamentos M:N no modelo relacional",
      "Apagando uma das duas entidades"
    ],
    correctIndex: 1,
    explanation: "Relacionamentos M:N viram uma nova tabela, contendo como chave estrangeira a PK de cada uma das entidades participantes, mais os atributos simples do relacionamento (ex.: TRABALHA_EM com matrícula*, nproj* e horas)."
  },
  {
    id: "bd-cap3-q6", module: "capitulo-3",
    question: "Como um atributo multivalorado é tratado no mapeamento para o modelo relacional?",
    options: [
      "É ignorado",
      "Vira uma nova relação, com o atributo e uma chave estrangeira para a PK da entidade dona do atributo",
      "Vira uma restrição de domínio",
      "É armazenado como uma lista dentro de uma única célula"
    ],
    correctIndex: 1,
    explanation: "Para cada atributo multivalorado, cria-se uma nova relação contendo o atributo e, como chave estrangeira, a chave primária da entidade/relacionamento ao qual ele pertence — como LOCAL_DEPTO(numdep, local)."
  },
  {
    id: "bd-cap3-q7", module: "capitulo-3",
    question: "Na opção 8C de mapeamento de especialização (relação única com atributo de tipo), para que tipo de subclasses essa opção é mais adequada?",
    options: ["Subclasses sobrepostas", "Subclasses disjuntas", "Qualquer entidade fraca", "Relacionamentos M:N"],
    correctIndex: 1,
    explanation: "A opção 8C cria uma única relação com um atributo 't' indicando a subclasse — adequada quando as subclasses são disjuntas (cada entidade pertence a no máximo uma subclasse)."
  },
  {
    id: "bd-cap3-q8", module: "capitulo-3",
    question: "Para um relacionamento n-ário (envolvendo mais de duas entidades), qual é a estratégia de mapeamento?",
    options: [
      "Ignorar a terceira entidade em diante",
      "Criar uma nova relação com chave estrangeira para a PK de cada relação participante",
      "Transformar automaticamente em três relacionamentos binários separados",
      "Usar apenas chaves primárias compostas sem chaves estrangeiras"
    ],
    correctIndex: 1,
    explanation: "Para um relacionamento n-ário (n > 2), cria-se uma nova relação com chave estrangeira para a PK de cada entidade participante, como no exemplo FORNECE(fnome*, num*, pnome*, quantidade)."
  },
  {
    id: "bd-cap4-q1", module: "capitulo-4",
    question: "O esquema FUNCIONÁRIO(numat, nome, dtnasc, endereço, numdep, nomedep, nchefe) viola qual critério informal de qualidade?",
    options: [
      "Redução de valores nulos",
      "Semântica clara dos atributos — mistura atributos de funcionário com atributos de departamento",
      "Primeira forma normal",
      "Não viola critério nenhum"
    ],
    correctIndex: 1,
    explanation: "Esse esquema mistura atributos de duas entidades diferentes (funcionário e departamento) numa única relação, tornando a semântica da relação pouco clara — viola a diretriz de manter cada esquema fiel a uma única entidade/relacionamento."
  },
  {
    id: "bd-cap4-q2", module: "capitulo-4",
    question: "O que é uma anomalia de remoção?",
    options: [
      "Quando não é possível inserir um novo registro",
      "Quando excluir uma tupla acaba apagando, sem querer, informações de outra entidade que só existiam ali",
      "Quando um atributo aceita valores nulos",
      "Quando duas tabelas têm o mesmo nome"
    ],
    correctIndex: 1,
    explanation: "No exemplo do capítulo, excluir a tupla do Pedro Coutinho (único funcionário do Projeto Z) apaga também todas as informações sobre esse projeto, que deixam de existir no banco."
  },
  {
    id: "bd-cap4-q3", module: "capitulo-4",
    question: "O que são tuplas espúrias?",
    options: [
      "Tuplas duplicadas por engano",
      "Registros inconsistentes que surgem de uma junção (join) entre tabelas mal decompostas, sem refletir a realidade",
      "Tuplas com valores nulos",
      "Tuplas que violam a chave primária"
    ],
    correctIndex: 1,
    explanation: "Tuplas espúrias aparecem quando um esquema é decomposto incorretamente (decomposição com perdas); ao refazer a junção, surgem combinações de dados que nunca existiram de verdade."
  },
  {
    id: "bd-cap4-q4", module: "capitulo-4",
    question: "Na dependência funcional CPF → nome, cargo, depto, o que isso significa?",
    options: [
      "Que nome, cargo e depto determinam o CPF",
      "Que, para um mesmo valor de CPF, os valores de nome, cargo e depto são sempre os mesmos",
      "Que CPF pode se repetir com valores diferentes de nome",
      "Que essa relação está automaticamente na 3FN"
    ],
    correctIndex: 1,
    explanation: "A dependência funcional X → Y significa que, sempre que duas tuplas têm o mesmo valor de X (CPF), elas também devem ter o mesmo valor de Y (nome, cargo, depto)."
  },
  {
    id: "bd-cap4-q5", module: "capitulo-4",
    question: "Para que uma relação esteja na Primeira Forma Normal (1FN), o que é exigido?",
    options: [
      "Que não existam chaves estrangeiras",
      "Que todos os domínios dos atributos sejam atômicos (indivisíveis)",
      "Que todos os atributos dependam totalmente da chave primária",
      "Que não haja dependências transitivas"
    ],
    correctIndex: 1,
    explanation: "A 1FN exige que todos os atributos tenham valores atômicos — um atributo multivalorado, como 'telefones' contendo vários números numa só célula, viola a 1FN."
  },
  {
    id: "bd-cap4-q6", module: "capitulo-4",
    question: "Numa relação FUNCIONARIO_PROJETO(CPF, numProj, horasProj, nomeFunc, ...) com chave primária {CPF, numProj}, a dependência {CPF, numProj} → nomeFunc é considerada parcial porque:",
    options: [
      "nomeFunc depende de outro atributo que não existe na tabela",
      "basta o CPF sozinho para determinar nomeFunc — não é preciso o numProj",
      "nomeFunc nunca pode ser determinado",
      "É uma dependência transitiva, não parcial"
    ],
    correctIndex: 1,
    explanation: "Uma dependência parcial ocorre quando um atributo não-primo depende de apenas PARTE de uma chave composta — aqui, CPF sozinho já determina nomeFunc, então numProj é desnecessário para essa dependência específica."
  },
  {
    id: "bd-cap4-q7", module: "capitulo-4",
    question: "O que caracteriza uma dependência transitiva, que viola a 3FN?",
    options: [
      "X → Y, onde Y é uma chave candidata",
      "X → Y e Y → Z, onde Y não é chave candidata nem parte de uma chave de R",
      "Qualquer dependência funcional entre dois atributos quaisquer",
      "A ausência de qualquer chave primária"
    ],
    correctIndex: 1,
    explanation: "Uma dependência transitiva X → Z existe quando há um atributo intermediário Y (que não é chave candidata) tal que X → Y e Y → Z — isso viola a 3FN, pois Z depende indiretamente de X através de Y."
  },
  {
    id: "bd-cap4-q8", module: "capitulo-4",
    question: "Para a maioria dos projetos de banco de dados, até qual forma normal costuma ser suficiente, segundo o capítulo?",
    options: ["1FN", "2FN", "3FN", "5FN"],
    correctIndex: 2,
    explanation: "O capítulo afirma que, para a maioria dos projetos, a aplicação da terceira forma normal (3FN) já é suficiente — formas mais avançadas (Boyce-Codd, 4FN, 5FN) ficam fora do escopo básico."
  },
  {
    id: "bd-cap5-q1", module: "capitulo-5",
    question: "Quais são os três comandos de DDL (Data Definition Language) em SQL?",
    options: ["SELECT, INSERT, UPDATE", "CREATE, ALTER, DROP", "GROUP BY, HAVING, WHERE", "UNION, INTERSECT, EXCEPT"],
    correctIndex: 1,
    explanation: "DDL usa CREATE (criar objetos), ALTER (modificar) e DROP (excluir) para estruturar o banco de dados, tabelas e visões."
  },
  {
    id: "bd-cap5-q2", module: "capitulo-5",
    question: "Qual é a diferença entre CHAR(n) e VARCHAR(n) em SQL?",
    options: [
      "Não há diferença",
      "CHAR(n) é de comprimento fixo (sempre n caracteres); VARCHAR(n) aceita de 0 a n caracteres",
      "CHAR(n) é só para números; VARCHAR(n) é só para texto",
      "VARCHAR(n) é mais rápido em qualquer situação"
    ],
    correctIndex: 1,
    explanation: "CHAR(n) representa uma cadeia de comprimento FIXO de n caracteres; VARCHAR(n) representa cadeias de comprimento VARIÁVEL, de 0 até n caracteres."
  },
  {
    id: "bd-cap5-q3", module: "capitulo-5",
    question: "Na consulta 'SELECT FUNCIONARIO.NOME, DEPARTAMENTO.NOME FROM FUNCIONARIO, DEPARTAMENTO WHERE FUNCIONARIO.NDEPTO = DEPARTAMENTO.NUMDEP;', por que é preciso qualificar o atributo NOME com o nome da tabela?",
    options: [
      "Porque NOME é uma palavra reservada do SQL",
      "Porque o atributo NOME existe em ambas as tabelas (FUNCIONARIO e DEPARTAMENTO), e seria ambíguo sem o prefixo",
      "Porque SQL exige qualificação em toda consulta",
      "Não é necessário, foi um erro no exemplo"
    ],
    correctIndex: 1,
    explanation: "Quando o mesmo nome de atributo existe em mais de uma tabela envolvida na consulta, é preciso qualificá-lo com o nome da tabela (ex.: FUNCIONARIO.NOME) para evitar ambiguidade."
  },
  {
    id: "bd-cap5-q4", module: "capitulo-5",
    question: "O que faz a palavra-chave DISTINCT numa consulta SELECT?",
    options: [
      "Ordena os resultados",
      "Remove tuplas duplicadas do resultado da consulta",
      "Conta o número de linhas",
      "Cria uma nova tabela"
    ],
    correctIndex: 1,
    explanation: "SQL não elimina duplicatas automaticamente; DISTINCT força o resultado a conter apenas tuplas únicas (sem repetição)."
  },
  {
    id: "bd-cap5-q5", module: "capitulo-5",
    question: "Qual é a diferença entre as funções IN e EXISTS em consultas aninhadas?",
    options: [
      "São exatamente a mesma coisa",
      "IN verifica se um valor pertence a um conjunto de resultados; EXISTS verifica se a subconsulta retornou alguma tupla (não está vazia)",
      "EXISTS só funciona com números",
      "IN não pode ser usado com subconsultas"
    ],
    correctIndex: 1,
    explanation: "IN compara um valor contra um conjunto de valores retornado pela subconsulta; EXISTS apenas verifica se a subconsulta retornou algum resultado, sem comparar valores específicos."
  },
  {
    id: "bd-cap5-q6", module: "capitulo-5",
    question: "Na consulta 'SELECT NDEPTO, COUNT(*), AVG(SALARIO) FROM FUNCIONARIO GROUP BY NDEPTO', o que o resultado representa?",
    options: [
      "O salário de cada funcionário individualmente",
      "Para cada departamento: o número de funcionários e a média salarial deles",
      "Apenas o departamento com maior salário médio",
      "Uma lista de todos os funcionários sem agrupamento"
    ],
    correctIndex: 1,
    explanation: "GROUP BY NDEPTO agrupa as tuplas por departamento; COUNT(*) conta quantos funcionários há em cada grupo, e AVG(SALARIO) calcula a média salarial de cada grupo."
  },
  {
    id: "bd-cap5-q7", module: "capitulo-5",
    question: "Qual é a diferença entre as cláusulas WHERE e HAVING?",
    options: [
      "Não há diferença, são sinônimos",
      "WHERE filtra tuplas antes do agrupamento; HAVING filtra grupos depois da agregação (GROUP BY)",
      "HAVING só funciona em comandos INSERT",
      "WHERE só pode ser usado com funções agregadas"
    ],
    correctIndex: 1,
    explanation: "WHERE filtra as tuplas individuais antes de qualquer agrupamento; HAVING impõe uma condição sobre os GRUPOS formados pelo GROUP BY, como HAVING COUNT(*) > 2."
  },
  {
    id: "bd-cap5-q8", module: "capitulo-5",
    question: "O que é uma visão (VIEW) em SQL?",
    options: [
      "Uma cópia física permanente de uma tabela",
      "Uma tabela virtual derivada de outras tabelas, que não armazena os dados fisicamente",
      "Um tipo de índice",
      "Um comando para apagar tabelas"
    ],
    correctIndex: 1,
    explanation: "Uma visão (criada com CREATE VIEW) é uma tabela virtual: exibe dados de uma ou mais tabelas reais através de uma consulta salva, mas não duplica fisicamente os dados."
  },
  {
    id: "bd-cap6-q1", module: "capitulo-6",
    question: "Qual é a diferença entre índice primário e índice de clusterização?",
    options: [
      "Não há diferença",
      "O índice primário é construído sobre o campo-chave que ordena o arquivo; o de clusterização é sobre um campo NÃO-chave que ordena o arquivo",
      "O índice de clusterização só funciona em tabelas vazias",
      "O índice primário nunca pode ser removido"
    ],
    correctIndex: 1,
    explanation: "O índice primário é construído sobre o campo-chave que também ordena o arquivo; já o índice de clusterização (agrupamento) é construído sobre um campo de ordenação que NÃO é chave (não tem valor único por registro)."
  },
  {
    id: "bd-cap6-q2", module: "capitulo-6",
    question: "Qual comando SQL cria um índice que garante que os valores da coluna sejam únicos?",
    options: ["CREATE INDEX", "CREATE UNIQUE INDEX", "CREATE DOMAIN", "CREATE ASSERTION"],
    correctIndex: 1,
    explanation: "CREATE UNIQUE INDEX (ex.: CREATE UNIQUE INDEX IDX_NUMAT ON FUNCIONARIO(NUMAT);) cria um índice que também impõe unicidade de valores na coluna."
  },
  {
    id: "bd-cap6-q3", module: "capitulo-6",
    question: "Na restrição 'SEXO CHAR(1) CHECK(SEXO IN (\\'M\\',\\'F\\'))', qual é o papel da cláusula CHECK?",
    options: [
      "Verifica se a tabela existe",
      "Limita os valores aceitos no atributo — aqui, só 'M' ou 'F'",
      "Cria um índice sobre o atributo",
      "Define a chave estrangeira"
    ],
    correctIndex: 1,
    explanation: "A cláusula CHECK restringe os valores possíveis de um atributo — nesse caso, o atributo SEXO só pode receber 'M' ou 'F'."
  },
  {
    id: "bd-cap6-q4", module: "capitulo-6",
    question: "Para que serve o comando CREATE DOMAIN?",
    options: [
      "Para criar um novo banco de dados",
      "Para criar um domínio reutilizável (com suas próprias restrições) que pode ser usado como tipo de dado em várias tabelas",
      "Para apagar um índice",
      "Para criar uma visão"
    ],
    correctIndex: 1,
    explanation: "CREATE DOMAIN cria um tipo de dado customizado e reutilizável, como TIPOSEXO AS CHAR(1) CHECK (VALUE IN ('M','F')), que depois pode ser usado diretamente como tipo de uma coluna em qualquer tabela."
  },
  {
    id: "bd-cap6-q5", module: "capitulo-6",
    question: "O que uma ASSERTION (CREATE ASSERTION) garante, diferente de uma restrição CHECK numa coluna?",
    options: [
      "É exatamente a mesma coisa que CHECK",
      "Garante que uma condição geral seja sempre verdadeira no banco, não limitada a uma única coluna/tabela",
      "Só funciona em bancos Oracle",
      "Substitui a necessidade de chave primária"
    ],
    correctIndex: 1,
    explanation: "A asserção verifica continuamente uma condição mais geral sobre o banco de dados (como 'nenhum funcionário pode ganhar menos de R$1000'), bloqueando operações que violem essa regra — diferente do CHECK, que é ligado a um atributo específico."
  },
  {
    id: "bd-cap6-q6", module: "capitulo-6",
    question: "Na cláusula 'FOREIGN KEY(NDEPTO) REFERENCES DEPARTAMENTO(NUMDEP) ON DELETE CASCADE', o que acontece se um departamento for excluído?",
    options: [
      "Nada acontece com os funcionários",
      "Todos os funcionários daquele departamento são excluídos automaticamente também",
      "A chave estrangeira dos funcionários vira NULL",
      "A exclusão do departamento é bloqueada"
    ],
    correctIndex: 1,
    explanation: "ON DELETE CASCADE propaga a exclusão: ao apagar o departamento, todas as tuplas relacionadas (funcionários daquele departamento) também são excluídas automaticamente."
  },
  {
    id: "bd-cap6-q7", module: "capitulo-6",
    question: "Qual ação de violação referencial define a chave estrangeira das tuplas relacionadas como NULL, em vez de excluí-las?",
    options: ["CASCADE", "SET NULL", "RESTRICT", "SET DEFAULT"],
    correctIndex: 1,
    explanation: "SET NULL faz com que, ao excluir/atualizar a tupla referenciada, a chave estrangeira das tuplas relacionadas seja definida como NULL — como no caso de NSUPER quando um supervisor é removido."
  },
  {
    id: "bd-cap6-q8", module: "capitulo-6",
    question: "Qual é a ação padrão (default) do SQL diante de uma possível violação de integridade referencial?",
    options: ["CASCADE", "SET NULL", "RESTRICT", "SET DEFAULT"],
    correctIndex: 2,
    explanation: "RESTRICT é a ação padrão: o SQL rejeita qualquer operação de atualização ou exclusão que possa causar uma violação de integridade referencial."
  },
  {
    id: "bd-cap7-q1", module: "capitulo-7",
    question: "Qual comando é usado para executar um procedimento armazenado já criado?",
    options: ["RUN", "EXECUTE PROCEDURE", "CALL", "START"],
    correctIndex: 2,
    explanation: "A instrução CALL executa um procedimento armazenado, seguida do nome do procedimento e da lista de argumentos: CALL NomeDoProcedimento(args)."
  },
  {
    id: "bd-cap7-q2", module: "capitulo-7",
    question: "Qual é a diferença entre um parâmetro IN e um parâmetro OUT numa stored procedure?",
    options: [
      "Não há diferença",
      "IN é fornecido pelo usuário na chamada; OUT é um valor que o procedimento devolve para quem chamou",
      "OUT só pode ser usado em funções, nunca em procedures",
      "IN só aceita números"
    ],
    correctIndex: 1,
    explanation: "Parâmetros IN são fornecidos pelo usuário no momento da chamada (entrada); parâmetros OUT retornam um valor calculado pelo procedimento (saída); INOUT faz as duas coisas."
  },
  {
    id: "bd-cap7-q3", module: "capitulo-7",
    question: "Qual é a principal diferença entre uma FUNCTION e uma PROCEDURE em SQL/PSM?",
    options: [
      "FUNCTION não pode receber parâmetros",
      "FUNCTION obrigatoriamente devolve um valor (RETURNS/RETURN); PROCEDURE não precisa devolver nada",
      "PROCEDURE só pode ser usada para SELECT",
      "São exatamente a mesma coisa"
    ],
    correctIndex: 1,
    explanation: "Uma função é semelhante a um procedimento, mas deve devolver um valor, usando a cláusula RETURNS no cabeçalho e o comando RETURN no corpo."
  },
  {
    id: "bd-cap7-q4", module: "capitulo-7",
    question: "Qual é a diferença entre as estruturas de repetição WHILE e REPEAT?",
    options: [
      "São idênticas",
      "WHILE testa a condição antes de executar o bloco; REPEAT executa o bloco primeiro e testa a condição depois",
      "REPEAT nunca para de executar",
      "WHILE só funciona dentro de triggers"
    ],
    correctIndex: 1,
    explanation: "WHILE testa a condição no início (pode nunca executar o bloco); REPEAT...UNTIL executa o bloco pelo menos uma vez, testando a condição só ao final de cada repetição."
  },
  {
    id: "bd-cap7-q5", module: "capitulo-7",
    question: "O que diferencia um trigger de uma stored procedure comum?",
    options: [
      "Trigger nunca contém comandos SQL",
      "Trigger é executado automaticamente pelo SGBD em resposta a um evento (INSERT/UPDATE/DELETE), sem precisar ser chamado explicitamente",
      "Stored procedure só pode ser chamada por outro trigger",
      "Não há diferença"
    ],
    correctIndex: 1,
    explanation: "Diferente de uma procedure (que precisa ser chamada explicitamente com CALL), um trigger dispara automaticamente quando ocorre o evento ao qual está associado (inserção, atualização ou remoção numa tabela)."
  },
  {
    id: "bd-cap7-q6", module: "capitulo-7",
    question: "No trigger 'CREATE TRIGGER auditar_contratacao AFTER INSERT ON FUNCIONARIO FOR EACH ROW ...', o que significa AFTER INSERT?",
    options: [
      "O gatilho executa antes de qualquer inserção",
      "O gatilho executa depois que uma inserção ocorre na tabela FUNCIONARIO",
      "O gatilho impede inserções",
      "O gatilho só funciona em exclusões"
    ],
    correctIndex: 1,
    explanation: "AFTER INSERT define que o código do gatilho roda DEPOIS que a operação de inserção na tabela FUNCIONARIO é concluída, uma vez para cada linha inserida (FOR EACH ROW)."
  },
  {
    id: "bd-cap7-q7", module: "capitulo-7",
    question: "Dentro de um trigger, para que servem as palavras reservadas OLD e NEW?",
    options: [
      "Para nomear o próprio trigger",
      "Para acessar, respectivamente, o valor antigo e o novo valor de um atributo afetado pelo evento que disparou o gatilho",
      "Para criar novas tabelas",
      "Não têm uso dentro de triggers"
    ],
    correctIndex: 1,
    explanation: "OLD referencia os valores da linha antes da operação, e NEW referencia os valores novos — por exemplo, NEW.nome acessa o nome do funcionário recém-inserido."
  },
  {
    id: "bd-cap7-q8", module: "capitulo-7",
    question: "Qual é o risco do cascateamento de triggers mencionado no capítulo?",
    options: [
      "Aumento do custo de armazenamento apenas",
      "Um gatilho disparar outro, que dispara outro, podendo formar um loop recursivo indesejado",
      "A perda da chave primária da tabela",
      "Não existe nenhum risco"
    ],
    correctIndex: 1,
    explanation: "Um trigger pode atualizar uma tabela que tem outro trigger associado, que atualiza outra tabela com outro trigger, e assim sucessivamente — se essa cadeia voltar a disparar o gatilho original, cria-se um loop recursivo."
  },
  {
    id: "bd-cap8-q1", module: "capitulo-8",
    question: "Qual é a diferença entre acesso sequencial e acesso por índice numa consulta?",
    options: [
      "Não há diferença de desempenho",
      "O acesso sequencial varre todos os blocos da tabela; o acesso por índice usa uma estrutura (árvore B) para ir direto ao bloco certo",
      "O acesso por índice só funciona em tabelas vazias",
      "O acesso sequencial é sempre mais rápido"
    ],
    correctIndex: 1,
    explanation: "O acesso sequencial (full table scan) percorre todos os registros bloco por bloco, usado quando não há índice disponível; o acesso por índice usa o ponteiro do índice para acessar diretamente o bloco de dados correspondente."
  },
  {
    id: "bd-cap8-q2", module: "capitulo-8",
    question: "O que é o catálogo de banco de dados (dicionário de dados)?",
    options: [
      "Uma cópia de segurança do banco de dados",
      "Um conjunto de tabelas que armazena metadados — informações sobre o próprio banco de dados, como nomes de tabelas, atributos e relacionamentos",
      "Um tipo de índice especial",
      "Uma linguagem de consulta alternativa ao SQL"
    ],
    correctIndex: 1,
    explanation: "O catálogo (dicionário de dados) armazena metadados ('dados sobre dados'): esquemas, nomes de relações e atributos, domínios, relacionamentos, estatísticas de otimização, visões, procedures e informações de segurança."
  },
  {
    id: "bd-cap8-q3", module: "capitulo-8",
    question: "Quais são os três objetivos principais ao projetar a segurança de um banco de dados, segundo Ramakrishnan e Gehrke (2011)?",
    options: [
      "Velocidade, custo e escalabilidade",
      "Integridade, disponibilidade e sigilo",
      "Normalização, indexação e replicação",
      "Backup, restauração e migração"
    ],
    correctIndex: 1,
    explanation: "Os três objetivos são: integridade (proteger contra alterações impróprias), disponibilidade (usuários autorizados conseguem acessar) e sigilo (dados não ficam visíveis a quem não tem autorização)."
  },
  {
    id: "bd-cap8-q4", module: "capitulo-8",
    question: "O que faz o comando 'GRANT SELECT ON FUNCIONARIO TO FAlmeida WITH GRANT OPTION;'?",
    options: [
      "Remove o acesso de FAlmeida à tabela",
      "Dá a FAlmeida o direito de consultar FUNCIONARIO e também de repassar esse mesmo privilégio a outros usuários",
      "Permite que FAlmeida apague a tabela FUNCIONARIO",
      "Cria uma nova tabela chamada FAlmeida"
    ],
    correctIndex: 1,
    explanation: "WITH GRANT OPTION dá a FAlmeida, além do privilégio de SELECT, o poder de conceder (propagar) esse mesmo privilégio a outros usuários."
  },
  {
    id: "bd-cap8-q5", module: "capitulo-8",
    question: "O que acontece quando se revoga (REVOKE) um privilégio que havia sido concedido com WITH GRANT OPTION e já repassado a outros usuários?",
    options: [
      "Nada acontece com os outros usuários",
      "A revogação se propaga automaticamente a todos os usuários que receberam o privilégio por propagação",
      "É necessário revogar manualmente de cada usuário",
      "O comando REVOKE não existe em SQL"
    ],
    correctIndex: 1,
    explanation: "Quando se revoga um privilégio concedido com WITH GRANT OPTION, a revogação se propaga automaticamente a todos os usuários que o receberam por propagação daquele usuário."
  },
  {
    id: "bd-cap8-q6", module: "capitulo-8",
    question: "O que significa a propriedade de Atomicidade (o 'A' de ACID) numa transação?",
    options: [
      "A transação deve ser executada em paralelo com outras",
      "A transação deve ser realizada completamente, ou não ser realizada de forma alguma",
      "A transação nunca pode ser desfeita",
      "A transação deve demorar o mínimo possível"
    ],
    correctIndex: 1,
    explanation: "Atomicidade significa que a transação é indivisível: todas as suas operações são concluídas com sucesso, ou nenhuma delas tem efeito no banco de dados."
  },
  {
    id: "bd-cap8-q7", module: "capitulo-8",
    question: "Qual comando desfaz todas as alterações feitas desde o início de uma transação, em caso de falha?",
    options: ["COMMIT", "ROLLBACK", "GRANT", "CREATE"],
    correctIndex: 1,
    explanation: "ROLLBACK reverte todas as operações realizadas desde o início da transação; COMMIT, ao contrário, confirma e grava permanentemente as alterações bem-sucedidas."
  },
  {
    id: "bd-cap8-q8", module: "capitulo-8",
    question: "O que o comando SET TRANSACTION READ ONLY indica?",
    options: [
      "Que a transação só pode fazer INSERT",
      "Que a transação só realizará consultas, sem alterar dados",
      "Que a transação será executada em outro servidor",
      "Que a transação não pode ser revertida"
    ],
    correctIndex: 1,
    explanation: "SET TRANSACTION READ ONLY define que a transação fará apenas operações de leitura/consulta; para alterar dados, seria necessário READ WRITE."
  },
  {
    id: "bd-cap2-q1", module: "capitulo-2",
    question: "No Diagrama Entidade-Relacionamento (DER), como é representado um conjunto de entidades?",
    options: ["Por um losango", "Por um retângulo com o nome no singular", "Por uma elipse", "Por uma linha dupla"],
    correctIndex: 1,
    explanation: "Um conjunto de entidades é representado por um retângulo com o nome da entidade (substantivo singular) dentro, seguindo o modelo proposto por Peter Chen em 1976."
  },
  {
    id: "bd-cap2-q2", module: "capitulo-2",
    question: "Qual é a diferença entre MER e DER?",
    options: [
      "Não há diferença, são sinônimos",
      "MER é o conjunto de conceitos de modelagem; DER é o diagrama (esquema conceitual) resultante desse processo",
      "MER é usado só no modelo físico; DER, no modelo lógico",
      "DER é mais antigo que o MER"
    ],
    correctIndex: 1,
    explanation: "O MER é o conjunto de conceitos e elementos usados para modelar os dados. O DER é o resultado gráfico desse processo, construído pelo projetista a partir dos conceitos do MER."
  },
  {
    id: "bd-cap2-q3", module: "capitulo-2",
    question: "Um atributo que pode ser dividido em subatributos com significado próprio, como 'endereço' dividido em rua, número e CEP, é classificado como:",
    options: ["Simples", "Derivado", "Composto", "Multivalorado"],
    correctIndex: 2,
    explanation: "Atributos compostos podem ser divididos em subatributos com significados independentes, como endereço → rua, número, bairro, CEP e complemento."
  },
  {
    id: "bd-cap2-q4", module: "capitulo-2",
    question: "O atributo 'idade', calculado a partir da data de nascimento, é um exemplo de atributo:",
    options: ["Multivalorado", "Derivado", "Composto", "Chave"],
    correctIndex: 1,
    explanation: "Atributos derivados podem ser obtidos a partir de outros atributos já existentes — aqui, idade é derivada de data de nascimento."
  },
  {
    id: "bd-cap2-q5", module: "capitulo-2",
    question: "No DER, um relacionamento N:N entre Funcionário e Projeto (um funcionário pode estar em vários projetos, e um projeto pode ter vários funcionários) indica:",
    options: [
      "Restrição de participação total",
      "Restrição de cardinalidade muitos para muitos",
      "Entidade fraca",
      "Agregação"
    ],
    correctIndex: 1,
    explanation: "A razão de cardinalidade N:N expressa que entidades de ambos os conjuntos podem se associar a várias entidades do outro conjunto, como no caso de trabalha_em entre Funcionário e Projeto."
  },
  {
    id: "bd-cap2-q6", module: "capitulo-2",
    question: "Na restrição estrutural (min, max), o que significa min = 0?",
    options: ["Participação total", "Participação parcial", "Entidade fraca", "Chave primária obrigatória"],
    correctIndex: 1,
    explanation: "Se o valor mínimo (min) da restrição estrutural é zero, a restrição de participação é parcial — a entidade pode não participar de nenhuma instância do relacionamento."
  },
  {
    id: "bd-cap2-q7", module: "capitulo-2",
    question: "Um conjunto de entidades que não possui atributos próprios suficientes para formar uma chave primária, dependendo de outra entidade para existir, é chamado de:",
    options: ["Entidade forte", "Entidade fraca", "Entidade derivada", "Entidade recursiva"],
    correctIndex: 1,
    explanation: "A entidade fraca não tem atributos que satisfaçam sozinhos a condição de chave primária; ela só existe associada a uma entidade forte (proprietária), por meio do relacionamento de identificação."
  },
  {
    id: "bd-cap2-q8", module: "capitulo-2",
    question: "No exemplo do capítulo, por que 'Dependente' é considerado uma entidade fraca em relação a 'Funcionário'?",
    options: [
      "Porque tem muitos atributos",
      "Porque só existe no banco de dados se houver um funcionário associado a ela",
      "Porque participa de um relacionamento recursivo",
      "Porque é uma subclasse de Funcionário"
    ],
    correctIndex: 1,
    explanation: "Os dependentes só podem existir no banco de dados se houver um funcionário associado a eles — por isso Dependente é uma entidade fraca, identificada por uma chave parcial dentro de cada Funcionário."
  },
  {
    id: "bd-cap2-q9", module: "capitulo-2",
    question: "Quando uma mesma entidade se relaciona consigo mesma, como no caso de 'Funcionário supervisiona Funcionário' (gerente/subordinado), chamamos esse relacionamento de:",
    options: ["Relacionamento ternário", "Relacionamento recursivo", "Relacionamento de identificação", "Agregação"],
    correctIndex: 1,
    explanation: "Relacionamentos recursivos ocorrem quando o mesmo conjunto de entidades participa duas vezes do relacionamento; usa-se papéis (como 'gerente' e 'subordinado') para diferenciar cada participação."
  },
  {
    id: "bd-cap2-q10", module: "capitulo-2",
    question: "No MERE, dividir a entidade 'Funcionário' em subclasses 'Secretário', 'Técnico' e 'Engenheiro', cada uma com atributos próprios além dos herdados, é um exemplo de:",
    options: ["Agregação", "Generalização", "Especialização", "Restrição de participação"],
    correctIndex: 2,
    explanation: "Especialização é o processo de definir subtipos (subclasses) de uma entidade mais geral (superclasse), que herdam atributos e relacionamentos e podem ter atributos adicionais próprios."
  },
  {
    id: "bd-cap2-q11", module: "capitulo-2",
    question: "Unificar os tipos de entidade 'Carro' e 'Caminhão' (que compartilham atributos como licença e preço) em um supertipo único 'Veículo' é um exemplo de:",
    options: ["Especialização", "Generalização", "Agregação", "Entidade fraca"],
    correctIndex: 1,
    explanation: "Generalização é o processo inverso da especialização: várias entidades distintas que compartilham atributos são unificadas em um supertipo comum."
  },
  {
    id: "bd-cap2-q12", module: "capitulo-2",
    question: "Tratar o relacionamento 'entrevista' (entre Empresa e Candidato) como se fosse uma entidade, para que ele possa se relacionar com 'Oferta_Emprego', é um exemplo de:",
    options: ["Agregação", "Especialização", "Entidade fraca", "Cardinalidade N:N"],
    correctIndex: 0,
    explanation: "A agregação permite tratar um relacionamento como uma entidade, possibilitando que ele se associe a outras entidades — é exatamente o caso de 'entrevista' se relacionando com 'Oferta_Emprego'."
  }
]);
