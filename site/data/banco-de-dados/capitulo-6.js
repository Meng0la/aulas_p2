window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-6"] = {
  id: "capitulo-6",
  title: "Índices e restrições de integridade",
  subtitle: "Tipos de índice (primário, secundário, clusterização), restrições de tabela, domínios, asserções e integridade referencial",
  estimatedMinutes: 26,
  sections: [
    {
      heading: "1. Índices e SQL",
      html: `
        <p>Um <strong>índice</strong> é uma estrutura de dados que agiliza a recuperação de registros em consultas (Elmasri; Navathe, 2018) — como o índice de um livro, que mostra em qual página está cada assunto, sem precisar ler o livro inteiro. O índice fica num arquivo no disco, com os valores de uma ou mais colunas e o endereço físico de cada registro. Os tipos mais comuns usam arquivos ordenados (índices de único nível) ou estruturas como <strong>Árvores B+</strong> (índices multinível).</p>
        <h3>Tipos de índice</h3>
        <ul>
          <li><strong>Índice primário:</strong> construído sobre o campo-chave quando esse campo também é o campo de ordenação do arquivo.</li>
          <li><strong>Índice de clusterização (agrupamento):</strong> construído sobre um campo de ordenação que <strong>não</strong> é chave (não tem valor distinto por registro).</li>
          <li><strong>Índice secundário:</strong> pode ser especificado sobre qualquer campo do arquivo.</li>
        </ul>
        <p>Tecnicamente, índices são considerados parte do DDL. Desde o SQL-92, com as restrições de integridade disponíveis, teoricamente não seria mais obrigatório criar índices manualmente — mas, na prática, todo SGBD comercial ainda oferece suporte a eles para desempenho.</p>
      `
    },
    {
      heading: "Criando e removendo índices",
      html: `
        <p>Use <code>CREATE INDEX</code> para criar e <code>DROP INDEX</code> para remover. Exemplo: criar um índice sobre SOBRENOME, já que haverá muitas consultas por esse campo:</p>
        <pre><code>CREATE TABLE FUNCIONARIO (
NUMAT       INT,
NOME        VARCHAR(100) NOT NULL,
SOBRENOME   VARCHAR(100) NOT NULL,
DTNASC      DATE,
ENDERERECO VARCHAR(50),
SALARIO     DECIMAL(10,2),
NDEPTO      INT NOT NULL,
PRIMARY KEY(NUMAT));

CREATE INDEX IDX_SOBRENOME ON FUNCIONARIO(SOBRENOME);</code></pre>
        <p>Índice composto, com ordenação ascendente (ASC, padrão) ou descendente (DESC):</p>
        <pre><code>CREATE INDEX IDX_NOME ON FUNCIONARIO(SOBRENOME ASC, NOME DESC);</code></pre>
        <p>Índice único (garante unicidade), com a palavra-chave <code>UNIQUE</code>:</p>
        <pre><code>CREATE UNIQUE INDEX IDX_NUMAT ON FUNCIONARIO(NUMAT);</code></pre>
        <p>Índice de clusterização, com <code>CLUSTER</code> — a ordem física dos registros segue um campo não-chave (ex.: NDEPTO, onde vários funcionários compartilham o mesmo valor):</p>
        <pre><code>CREATE INDEX IDX_NDEPTO ON FUNCIONARIO(NDEPTO) CLUSTER;</code></pre>
        <div class="callout warn">Toda atualização na tabela atualiza também todos os índices associados a ela, e índices sempre ocupam espaço extra de armazenamento. Por isso, remova índices que não são mais úteis: <code>DROP INDEX IDX_NDEPTO;</code></div>
      `
    },
    {
      heading: "2. Restrições padrão",
      html: `
        <p>Restrições são regras impostas ao banco para garantir consistência e validade. As principais categorias: restrições de chave, de domínio/valores nulos, sobre tuplas individuais e de integridade referencial (Elmasri; Navathe, 2018).</p>
        <h3>2.1 Restrições sobre uma relação</h3>
        <p>Dentro do <code>CREATE TABLE</code>, além da chave primária, podem-se incluir:</p>
        <ul>
          <li><strong>NOT NULL:</strong> impede valor nulo no atributo.</li>
          <li><strong>Valor DEFAULT:</strong> define um valor padrão para o atributo.</li>
          <li><strong>UNIQUE:</strong> garante que o valor do atributo não se repita entre tuplas.</li>
          <li><strong>CHECK:</strong> limita os valores aceitos. Exemplo: números de departamento só entre 1 e 20: <code>NUMDEP INT NOT NULL CHECK (NUMDEP &gt; 0 AND NUMDEP &lt; 21)</code>.</li>
        </ul>
      `
    },
    {
      heading: "Exemplo completo com restrições nomeadas",
      html: `
        <pre><code>CREATE TABLE DEPARTAMENTO (
   NUMDEP NUMBER NOT NULL,
   NOMEDEP VARCHAR(50) NOT NULL,
   DTINI_CHEFE DATE,
   CONSTRAINT PK_DEPTO PRIMARY KEY(NUMDEP),
   CONSTRAINT UK_NOMEDEP UNIQUE(NOMEDEP)
);

CREATE TABLE FUNCIONARIO (
NUMAT NUMBER NOT NULL,
NOME VARCHAR(100) NOT NULL,
SOBRENOME VARCHAR(100) NOT NULL,
DTNASC DATE,
ENDERERECO VARCHAR(50),
SEXO CHAR(1) CHECK(SEXO IN ('M','F')),
SALARIO DECIMAL(10,2),
NSUPER NUMBER,
NDEPTO NUMBER DEFAULT 1 NOT NULL,
CONSTRAINT PK_FUNC PRIMARY KEY(NUMAT),
CONSTRAINT FK_FUNC_SUPERVISOR
     FOREIGN KEY(NSUPER) REFERENCES FUNCIONARIO(NUMAT)
     ON DELETE SET NULL,
CONSTRAINT FK_FUNC_DEPTO
     FOREIGN KEY(NDEPTO) REFERENCES DEPARTAMENTO(NUMDEP)
     ON DELETE CASCADE
);</code></pre>
        <p>Aqui: DEPARTAMENTO tem PK em NUMDEP e NOMEDEP único. FUNCIONARIO tem PK em NUMAT; SEXO só aceita 'M' ou 'F' (CHECK); NDEPTO tem valor padrão 1 (se não informado na inserção, assume 1 automaticamente); e duas chaves estrangeiras com ações de violação diferentes (explicadas na seção 5).</p>
      `
    },
    {
      heading: "2.2 Restrições de domínio",
      html: `
        <p>É possível criar um <strong>domínio</strong> reutilizável com <code>CREATE DOMAIN</code>, combinado com <code>CHECK</code>:</p>
        <pre><code>CREATE DOMAIN TIPOSEXO AS CHAR(1)
      CHECK (VALUE IN ('M', 'F');</code></pre>
        <p>Depois, esse domínio pode ser reaproveitado em qualquer tabela:</p>
        <pre><code>CREATE TABLE FUNCIONARIO (
NUMAT NUMBER NOT NULL,
NOME VARCHAR(100) NOT NULL,
SOBRENOME VARCHAR(100) NOT NULL,
DTNASC DATE,
ENDERECO VARCHAR(50),
SEXO		TIPOSEXO,
SALARIO DECIMAL(10,2),
NSUPER NUMBER,
NDEPTO NUMBER DEFAULT 1 NOT NULL,
CONSTRAINT PK_FUNC PRIMARY KEY(NUMAT),
CONSTRAINT FK_FUNC_SUPERVISOR
     FOREIGN KEY(NSUPER) REFERENCES FUNCIONARIO(NUMAT)
     ON DELETE SET NULL,
CONSTRAINT FK_FUNC_DEPTO
     FOREIGN KEY(NDEPTO) REFERENCES DEPARTAMENTO(NUMDEP)
     ON DELETE CASCADE
);</code></pre>
      `
    },
    {
      heading: "3. Asserções",
      html: `
        <p>Uma <strong>asserção</strong> (CREATE ASSERTION) garante que uma condição geral seja <strong>sempre verdadeira</strong> no banco — não ligada a uma tabela específica como o CHECK. Exemplo: nenhum funcionário pode ganhar menos que R$ 1.000,00:</p>
        <pre><code>CREATE ASSERTION SALARIO_FUNCIONARIO
CHECK(
NOT EXISTS (
SELECT *
FROM FUNCIONARIO
WHERE SALARIO < 1000
     )
)</code></pre>
        <p>Toda vez que uma tupla é inserida ou modificada em FUNCIONARIO, essa asserção verifica se a condição continua verdadeira (nenhum salário abaixo de 1000). Se a inserção/alteração violar essa regra, o banco bloqueia a operação.</p>
        <div class="callout warn">O Oracle não suporta o comando CREATE ASSERTION.</div>
      `
    },
    {
      heading: "4. Restrição de integridade referencial",
      html: `
        <p>Especificada pela cláusula <code>FOREIGN KEY</code>, garante que uma chave estrangeira sempre aponte para uma chave primária que realmente existe na tabela referenciada. Se uma tupla for inserida/atualizada com um valor de FK que não existe na PK correspondente, o banco <strong>impede</strong> a operação.</p>
        <p>No exemplo anterior: <code>NDEPTO</code> de FUNCIONARIO referencia <code>NUMDEP</code> de DEPARTAMENTO — garantindo que todo funcionário esteja num departamento válido. Já <code>NSUPER</code> referencia <code>NUMAT</code> da <strong>própria</strong> tabela FUNCIONARIO — um relacionamento recursivo (autorrelacionamento), já que o supervisor também é um funcionário.</p>
      `
    },
    {
      heading: "5. Tratamento de violação de integridade referencial",
      html: `
        <p>O SQL define ações para quando uma tupla referenciada é excluída (<code>ON DELETE</code>) ou atualizada (<code>ON UPDATE</code>):</p>
        <ul>
          <li><strong>SET NULL:</strong> a chave estrangeira das tuplas relacionadas vira NULL.</li>
          <li><strong>CASCADE:</strong> as tuplas relacionadas também são excluídas/atualizadas junto.</li>
          <li><strong>SET DEFAULT:</strong> a chave estrangeira volta para um valor padrão definido.</li>
          <li><strong>RESTRICT:</strong> ação padrão do SQL — rejeita qualquer operação que causaria violação.</li>
        </ul>
        <p>Aplicando ao exemplo da tabela FUNCIONARIO:</p>
        <ul>
          <li><code>FK_FUNC_SUPERVISOR ... ON DELETE SET NULL</code>: se um supervisor for excluído, todos os seus subordinados ficam com NSUPER = NULL (em vez de serem excluídos também).</li>
          <li><code>FK_FUNC_DEPTO ... ON DELETE CASCADE</code>: se um departamento for excluído, <strong>todos</strong> os funcionários daquele departamento são excluídos automaticamente junto.</li>
        </ul>
      `
    }
  ],
  keyPoints: [
    "Índice = estrutura auxiliar (geralmente Árvore B+) que agiliza consultas, igual ao índice de um livro. Tipos: primário (sobre campo-chave que ordena o arquivo), clusterização (sobre campo não-chave que ordena o arquivo) e secundário (sobre qualquer campo).",
    "CREATE INDEX cria; DROP INDEX remove. CREATE UNIQUE INDEX garante unicidade; CLUSTER cria índice de clusterização.",
    "Restrições de tabela: NOT NULL, DEFAULT, UNIQUE e CHECK (limita valores aceitos) — podem ser nomeadas com CONSTRAINT nome_da_restrição.",
    "CREATE DOMAIN cria um domínio reutilizável (com CHECK embutido) que pode ser usado como tipo de várias colunas em várias tabelas.",
    "CREATE ASSERTION garante uma condição geral sempre verdadeira no banco (não ligada só a uma tabela) — mas o Oracle não suporta esse comando.",
    "FOREIGN KEY garante integridade referencial: toda FK precisa apontar para uma PK que existe (ou ser nula).",
    "Ações de violação referencial: SET NULL (zera a FK), CASCADE (propaga a exclusão/atualização), SET DEFAULT (volta ao valor padrão), RESTRICT (bloqueia a operação, é o padrão)."
  ]
};
