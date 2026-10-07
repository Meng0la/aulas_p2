window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-5"] = {
  id: "capitulo-5",
  title: "SQL: criação de tabelas, consultas, atualizações e visões",
  subtitle: "DDL (CREATE/ALTER/DROP), consultas com SELECT (junção, aninhadas, EXISTS, agregação), DML (INSERT/DELETE/UPDATE) e visões",
  estimatedMinutes: 32,
  sections: [
    {
      heading: "O que é SQL",
      html: `
        <p><strong>SQL (Structured Query Language)</strong> é uma linguagem de definição, consulta, modificação de esquemas e atualização de bancos de dados relacionais (Elmasri; Navathe, 2018). Nasceu nos laboratórios da IBM nos anos 1970 e hoje é padronizada pelos comitês ANSI/ISO.</p>
        <p>SQL usa termos diferentes para os mesmos conceitos do modelo relacional: <strong>tabela</strong> = relação, <strong>linha</strong> = tupla, <strong>coluna</strong> = atributo.</p>
      `
    },
    {
      heading: "1. Definição de dados em SQL (DDL)",
      html: `
        <p>Os comandos de <strong>DDL (Data Definition Language)</strong> estruturam o banco de dados, suas tabelas e <strong>visões</strong> (tabelas virtuais que exibem dados de uma ou mais tabelas reais, sem armazená-los fisicamente). São três: <code>CREATE</code>, <code>ALTER</code> e <code>DROP</code>.</p>
        <h3>1.1 CREATE TABLE</h3>
        <p>Cria tabelas, especificando atributos (nome + tipo de dado) e restrições (chave primária, chave estrangeira, valores nulos etc.):</p>
        <pre><code>CREATE TABLE DEPARTAMENTO (
NUMDEP       INT NOT NULL,
NOME         VARCHAR(100) NOT NULL,
PRIMARY KEY (NUMDEP));

CREATE TABLE FUNCIONARIO (
NUMAT        INT,
NOME         VARCHAR(100) NOT NULL,
SOBRENOME    VARCHAR(100) NOT NULL,
DTNASC       DATE,
ENDER        VARCHAR(50),
SALARIO      DECIMAL(10,2),
NSUPER       INT,
NDEPTO       INT NOT NULL,
PRIMARY KEY (NUMAT),
FOREIGN KEY (NSUPER) REFERENCES FUNCIONARIO(NUMAT),
FOREIGN KEY (NDEPTO) REFERENCES DEPARTAMENTO(NUMDEP));

CREATE TABLE PROJETO (
NUMPROJ      INT NOT NULL,
NOME         VARCHAR(100) NOT NULL,
NDEPTO       INT NOT NULL,
PRIMARY KEY (NPROJ)
FOREIGN KEY (NDEPTO) REFERENCES DEPARTAMENTO(NUMDEP));

CREATE TABLE TRABALHA_EM (
NUMEMP       INT NOT NULL,
NPROJ        INT NOT NULL,
PRIMARY KEY (NUMEMP, NPROJ),
FOREIGN KEY (NUMEMP) REFERENCES FUNCIONARIO(NUMAT),
FOREIGN KEY (NPROJ) REFERENCES PROJETO(NUMPROJ)
);

CREATE TABLE DEPENDENTE (
NUMEMP       INT NOT NULL,
NOME         VARCHAR(100) NOT NULL,
PARENTESCO   VARCHAR(10),
PRIMARY KEY(NUMEMP, NOME),
FOREIGN KEY (NUMEMP) REFERENCES FUNCIONARIO(NUMAT)
);</code></pre>
        <p>Repare: NUMAT é a PK de FUNCIONARIO; NSUPER referencia o próprio FUNCIONARIO (relacionamento recursivo); NDEPTO referencia DEPARTAMENTO. TRABALHA_EM tem chave primária composta (NUMEMP, NPROJ) — representando o relacionamento M:N.</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Quadro 1 – Exemplo de dados nas tabelas DEPARTAMENTO e FUNCIONARIO</caption>
          <thead><tr><th colspan="2">DEPARTAMENTO</th></tr><tr><th>NUMDEP</th><th>NOME</th></tr></thead>
          <tbody>
            <tr><td>1</td><td>Administração</td></tr>
            <tr><td>2</td><td>Pesquisa</td></tr>
            <tr><td>3</td><td>Projetos</td></tr>
          </tbody>
        </table></div>
        <div class="table-wrap"><table>
          <thead><tr><th colspan="8">FUNCIONARIO</th></tr><tr><th>NUMAT</th><th>NOME</th><th>SOBRENOME</th><th>DTNASC</th><th>ENDER</th><th>SALARIO</th><th>NSUPER</th><th>NDEPTO</th></tr></thead>
          <tbody>
            <tr><td>1111</td><td>Andre</td><td>Pereira</td><td>12/10/1980</td><td>Rua A</td><td>R$ 5000,0</td><td>1113</td><td>1</td></tr>
            <tr><td>1112</td><td>Antônio</td><td>Camargo</td><td>14/11/1987</td><td>Rua B</td><td>R$ 2500,0</td><td>1113</td><td>1</td></tr>
            <tr><td>1113</td><td>Maria</td><td>Souza</td><td>15/09/1977</td><td>Rua C</td><td>R$ 6000,0</td><td>NULL</td><td>1</td></tr>
          </tbody>
        </table></div>
      `
    },
    {
      heading: "Tipos de dados em SQL",
      html: `
        <ul>
          <li><strong>CHAR(n):</strong> cadeia de caracteres de comprimento FIXO (sempre n caracteres). <strong>VARCHAR(n):</strong> cadeia de até n caracteres (0 a n).</li>
          <li><strong>BIT(n)</strong> e <strong>BIT VARYING(n):</strong> cadeias de bits, fixas ou variáveis, análogas a CHAR/VARCHAR.</li>
          <li><strong>INT / INTEGER:</strong> valores inteiros (sinônimos).</li>
          <li><strong>FLOAT / REAL:</strong> ponto flutuante (sinônimos); <strong>DOUBLE PRECISION</strong> para mais precisão. <strong>DECIMAL(n, d):</strong> n dígitos decimais, com d deles após a vírgula — ex.: DECIMAL(6,2) aceita 1234.56.</li>
          <li><strong>DATE</strong> e <strong>TIME:</strong> datas e horas.</li>
        </ul>
        <p>SQL permite valores <strong>NULL</strong> (indefinido ou opcional). A restrição <code>NOT NULL</code> impede isso — obrigatória para atributos de chave primária.</p>
        <p>Restrições na criação da tabela: <code>PRIMARY KEY</code> (chave primária), <code>UNIQUE</code> (valores não podem se repetir na coluna) e <code>FOREIGN KEY</code> (integridade referencial).</p>
      `
    },
    {
      heading: "1.2 ALTER TABLE e 1.3 DROP TABLE",
      html: `
        <p><strong>ALTER TABLE</strong> modifica uma tabela existente — adiciona, remove ou altera colunas e restrições:</p>
        <pre><code>-- Adicionar nova coluna
ALTER TABLE FUNCIONARIO ADD COLUMN SEXO CHAR;

-- Modificar uma coluna existente
ALTER TABLE FUNCIONARIO ALTER COLUMN SALARIO SET DEFAULT 1000.00;

-- Remover uma coluna
ALTER TABLE FUNCIONARIO DROP COLUMN ENDER;</code></pre>
        <p><strong>DROP TABLE</strong> exclui completamente uma tabela — ação <strong>irreversível</strong>, que apaga estrutura e dados:</p>
        <pre><code>DROP TABLE FUNCIONARIO;</code></pre>
        <div class="callout">Para testar SQL sem instalar nada, o <strong>LiveSQL da Oracle</strong> é uma plataforma on-line gratuita que roda consultas direto no navegador.</div>
      `
    },
    {
      heading: "2. Consultas em SQL: o comando SELECT",
      html: `
        <p>Estrutura básica:</p>
        <pre><code>SELECT &lt;lista de colunas&gt;
FROM &lt;lista de tabelas&gt;
WHERE &lt;condição&gt;;</code></pre>
        <p><code>SELECT</code> define as colunas do resultado; <code>FROM</code> lista as tabelas envolvidas; <code>WHERE</code> é a condição lógica que filtra as tuplas.</p>
        <h3>2.1 Consultas simples</h3>
        <p>Nome e salário dos funcionários com salário maior que 3000:</p>
        <pre><code>SELECT NOME, SALARIO
FROM FUNCIONARIO
WHERE SALARIO > 3000;</code></pre>
        <p>Trazer todas as tuplas e todos os atributos, usando o asterisco (sem precisar de WHERE):</p>
        <pre><code>SELECT *
FROM FUNCIONARIO;</code></pre>
      `
    },
    {
      heading: "2.2 Consultas com junção de tabelas",
      html: `
        <p>Listar o nome dos funcionários e seus departamentos (junção simples):</p>
        <pre><code>SELECT FUNCIONARIO.NOME, DEPARTAMENTO.NOME
FROM FUNCIONARIO, DEPARTAMENTO
WHERE FUNCIONARIO.NDEPTO = DEPARTAMENTO.NUMDEP;</code></pre>
        <p>A condição <code>FUNCIONARIO.NDEPTO = DEPARTAMENTO.NUMDEP</code> é a <strong>condição de junção</strong>. Como o atributo <code>NOME</code> existe nas duas tabelas, é preciso <strong>qualificar</strong> (prefixar com o nome da tabela e um ponto) para evitar ambiguidade.</p>
        <p>Junção de três tabelas — projetos em São Paulo e seus supervisores:</p>
        <pre><code>SELECT PROJETO.NPROJ, DEPARTAMENTO.NOME, FUNCIONARIO.NOME,
FUNCIONARIO.ENDER
FROM PROJETO, FUNCIONARIO, DEPARTAMENTO
WHERE PROJETO.NDEPTO = DEPARTAMENTO.NUMDEP
AND DEPARTAMENTO.NSUPER = FUNCIONARIO.NUMAT
AND PROJETO.LOCAL = "São Paulo";</code></pre>
        <p>Isso tem duas condições de junção + uma condição de seleção (filtro) — é o que se chama consulta <strong>seleção-projeção-junção</strong>.</p>
        <p>Relacionamento recursivo (funcionário e seu supervisor, que também é um funcionário) usando <strong>aliases</strong> (apelidos) para a mesma tabela:</p>
        <pre><code>SELECT F.NOME AS NOME_FUNC, S.NOME AS NOME_SUP
FROM FUNCIONARIO F, FUNCIONARIO S
WHERE F.NSUPER = S.NUMAT</code></pre>
        <p>O alias pode vir logo após o nome da tabela ou após a palavra-chave <code>AS</code>; também serve para renomear atributos no resultado, como em <code>F.NOME AS NOME_FUNC</code>.</p>
      `
    },
    {
      heading: "2.3 Tabelas como conjuntos, DISTINCT e operadores de conjunto",
      html: `
        <p>SQL <strong>não</strong> trata uma relação como um conjunto matemático puro — tuplas duplicadas podem aparecer no resultado. Para eliminar duplicatas, usa-se <code>DISTINCT</code>:</p>
        <pre><code>SELECT DISTINCT SALARIO
FROM FUNCIONARIO</code></pre>
        <p>SQL também tem operadores de conjunto: <code>UNION</code> (união), <code>INTERSECTION</code> (interseção) e <code>EXCEPT</code> (diferença). Exemplo: listar projetos com algum funcionário de sobrenome "Silva" (seja como gerente ou como membro da equipe):</p>
        <pre><code>SELECT NUMPROJ
FROM PROJETO P, DEPARTAMENTO D, FUNCIONARIO F
WHERE   P.NDEPTO = D.NUMDEP AND
        D.NSUPER = F.NUMAT AND
        F.SOBRENOME = 'Silva'
UNION
SELECT NPROJ AS NUMPROJ
FROM TRABALHA_EM TE, FUNCIONARIO F
WHERE   TE.NUMEMP = F.NUMAT AND
        F.SOBRENOME = 'Silva'</code></pre>
      `
    },
    {
      heading: "2.4 Consultas aninhadas e 2.5 EXISTS",
      html: `
        <p>Uma <strong>consulta aninhada</strong> contém outra consulta (<strong>subconsulta</strong>/subquery) dentro dela. O operador <code>IN</code> verifica se um valor está dentro de um conjunto de resultados:</p>
        <pre><code>SELECT DISTINCT NUMPROJ
FROM PROJETO P
WHERE   NUMPROJ IN (SELECT NUMPROJ
                    FROM PROJETO P, DEPARTAMENTO D, FUNCIONARIO F
                    WHERE P.NDEPTO = D.NUMDEP AND
                           D.NSUPER = F.NUMAT AND
                           F.SOBRENOME = 'Silva')
OR
NUMPROJ IN (SELECT NPROJ
                   FROM TRABALHA_EM TE, FUNCIONARIO F
                   WHERE TE.NUMEMP = F.NUMAT AND
                           F.SOBRENOME = 'Silva')</code></pre>
        <p>O operador <code>EXISTS</code> verifica se o resultado de uma subconsulta <strong>não é vazio</strong> (se tem pelo menos uma tupla). Exemplo: listar funcionários que têm dependentes:</p>
        <pre><code>SELECT F.NOME, F.SOBRENOME
FROM FUNCIONARIO F
WHERE EXISTS (SELECT *
      FROM DEPENDENTE
      WHERE NUMEMP = F.NUMAT)</code></pre>
      `
    },
    {
      heading: "2.6 Funções agregadas e agrupamento",
      html: `
        <p><strong>Agregação</strong> transforma uma coleção de valores num único valor (ex.: soma, média). SQL tem 5 funções agregadas:</p>
        <ul>
          <li><code>SUM</code> — soma dos valores</li>
          <li><code>AVG</code> — média dos valores</li>
          <li><code>MIN</code> — menor valor</li>
          <li><code>MAX</code> — maior valor</li>
          <li><code>COUNT</code> — quantidade de valores (inclui duplicatas, a menos que use DISTINCT)</li>
        </ul>
        <pre><code>SELECT SUM(SALARIO), MAX(SALARIO),
     MIN(SALARIO), AVG(SALARIO)
FROM FUNCIONARIO</code></pre>
        <p>Para agregar <strong>por grupo</strong> (ex.: média salarial por departamento), usa-se <code>GROUP BY</code>:</p>
        <pre><code>SELECT NDEPTO, COUNT(*), AVG(SALARIO)
FROM FUNCIONARIO
GROUP BY NDEPTO</code></pre>
        <p>Para filtrar quais <strong>grupos</strong> aparecem no resultado (não tuplas individuais), usa-se <code>HAVING</code> — diferente do WHERE, que filtra antes do agrupamento:</p>
        <pre><code>SELECT NUMPROJ, NOMEPROJ, COUNT(*)
FROM PROJETO P, TRABALHA_EM TE
WHERE P.NUMPROJ = TE.NPROJ
GROUP BY NUMPROJ, NOMEPROJ
HAVING COUNT(*) > 2</code></pre>
        <p>Essa consulta retorna só os projetos com <strong>mais de 2</strong> funcionários trabalhando neles.</p>
      `
    },
    {
      heading: "3. Atualizações em SQL (DML)",
      html: `
        <p>Os comandos de <strong>DML (Data Manipulation Language)</strong> adicionam, excluem e alteram tuplas: <code>INSERT</code>, <code>DELETE</code> e <code>UPDATE</code>.</p>
        <p><strong>INSERT</strong> — adiciona uma tupla. Atributos não informados recebem NULL ou DEFAULT; os valores seguem a mesma ordem dos atributos listados:</p>
        <pre><code>INSERT INTO FUNCIONARIO (NOME, SOBRENOME, NUMAT)
VALUES ('JOSE', 'SILVA', 6543)</code></pre>
        <p><strong>DELETE</strong> — remove tuplas, com uma cláusula WHERE definindo quais:</p>
        <pre><code>DELETE FROM FUNCIONARIO
WHERE NUMDEP IN (SELECT NUMDEP
                 FROM DEPARTAMENTO
                 WHERE NOMEDEP = 'Pesquisa');</code></pre>
        <p><strong>UPDATE</strong> — modifica valores de atributos. A cláusula <code>SET</code> define os novos valores, e WHERE seleciona as tuplas a mudar:</p>
        <pre><code>UPDATE PROJETO
SET LOCAL = 'São Paulo'
WHERE NUMPROJ = 2134;</code></pre>
      `
    },
    {
      heading: "4. Visões (VIEWS) em SQL",
      html: `
        <p>Uma <strong>visão</strong> é uma tabela virtual derivada de outras tabelas — exibe dados reais, mas não os armazena fisicamente. Criada com <code>CREATE VIEW</code>, recebendo um nome e a consulta que define seu conteúdo:</p>
        <pre><code>CREATE VIEW VW_FUNCIONARIO AS
SELECT NOME, SOBRENOME, ENDER
FROM FUNCIONARIO</code></pre>
        <p>Para descartar uma visão, usa-se <code>DROP VIEW</code>:</p>
        <pre><code>DROP VIEW VW_FUNCIONARIO</code></pre>
      `
    }
  ],
  keyPoints: [
    "SQL: tabela=relação, linha=tupla, coluna=atributo. DDL (CREATE/ALTER/DROP) estrutura o banco; DML (INSERT/DELETE/UPDATE) manipula os dados.",
    "CREATE TABLE define atributos, tipos (INT, VARCHAR(n), CHAR(n), DECIMAL(n,d), DATE, etc.) e restrições (PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL).",
    "SELECT ... FROM ... WHERE é a base de toda consulta; junção de tabelas se faz comparando chaves na cláusula WHERE (ex.: FUNCIONARIO.NDEPTO = DEPARTAMENTO.NUMDEP).",
    "Alias (apelido) com AS permite usar a mesma tabela duas vezes numa consulta (útil para relacionamentos recursivos) e renomear colunas no resultado.",
    "DISTINCT remove duplicatas; UNION/INTERSECTION/EXCEPT combinam resultados de consultas como conjuntos.",
    "Consulta aninhada = subquery dentro de outra consulta; IN verifica pertencimento a um conjunto; EXISTS verifica se a subconsulta retornou alguma linha.",
    "Funções agregadas: SUM, AVG, MIN, MAX, COUNT. GROUP BY agrupa tuplas para agregação; HAVING filtra GRUPOS (depois de agregar), enquanto WHERE filtra tuplas (antes de agregar).",
    "INSERT adiciona tupla; DELETE remove (com WHERE); UPDATE...SET...WHERE altera valores. CREATE VIEW cria uma tabela virtual (consulta salva); DROP VIEW a remove."
  ]
};
