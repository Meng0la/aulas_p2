window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-3"] = {
  id: "capitulo-3",
  title: "Modelo relacional",
  subtitle: "Tabelas, tuplas, domínios, chaves (superchave, candidata, primária, estrangeira), restrições e o mapeamento passo a passo do DER para tabelas",
  estimatedMinutes: 26,
  sections: [
    {
      heading: "Do modelo conceitual ao projeto lógico",
      html: `
        <p>Depois de definir o modelo conceitual (o DER), o próximo passo é o <strong>projeto lógico</strong>: as entidades do DER viram tabelas, e os relacionamentos são estruturados para funcionar num banco de dados relacional. Este capítulo mostra como entidades e relacionamentos do DER viram tabelas, quais restrições garantem a consistência dos dados, e o passo a passo completo do mapeamento.</p>
      `
    },
    {
      heading: "1. O modelo relacional",
      html: `
        <p>Criado por Edgar Codd (IBM Research, 1970), o modelo relacional representa um banco de dados como uma coleção de <strong>relações matemáticas</strong>, mostradas de forma uniforme como tabelas de valores. Cada valor pode ser interpretado como um fato que descreve uma entidade ou uma instância de relacionamento.</p>
        <p>Uma <strong>tabela</strong> (ou relação) tem colunas e linhas: as colunas são os <strong>atributos</strong>, e as linhas são as <strong>tuplas</strong>. Cada coluna tem um <strong>domínio</strong> que restringe os valores aceitos.</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 1 – Tabela Funcionário</caption>
          <thead><tr><th>numat</th><th>nome</th><th>sexo</th><th>dtnasc</th><th>salário</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>João da Silva</td><td>M</td><td>14/04/1980</td><td>R$ 2.823,92</td></tr>
            <tr><td>121</td><td>Edna Martins</td><td>F</td><td>21/06/1977</td><td>R$ 2.841,71</td></tr>
            <tr><td>345</td><td>Pedro Coutinho</td><td>M</td><td>29/03/1989</td><td>R$ 1.460,66</td></tr>
          </tbody>
        </table></div>
        <p>Cada linha dessa tabela Funcionário é uma tupla.</p>
      `
    },
    {
      heading: "1.1 Atributos, domínios e formato de dado",
      html: `
        <p>Os atributos representam as colunas e armazenam características das entidades. Cada atributo tem um tipo (inteiro, string, data) e um domínio. Formalmente, um <strong>domínio D</strong> é um conjunto de valores <strong>atômicos</strong> (indivisíveis). Exemplos de domínio:</p>
        <ul>
          <li><strong>Idade:</strong> inteiro de 0 a 120.</li>
          <li><strong>Idade_funcionario:</strong> inteiro entre 18 e 70.</li>
          <li><strong>Notas_bimestrais:</strong> de 0 a 10.</li>
          <li><strong>CEP:</strong> 8 dígitos, formato <code>ddddd-ddd</code> (o <em>formato de dado</em> de um domínio).</li>
        </ul>
      `
    },
    {
      heading: "1.2 Relações e tuplas (notação formal)",
      html: `
        <p>Um <strong>esquema de relação</strong> R, escrito R(A1, A2, …, An), é formado pelo nome R e a lista de atributos. Cada atributo Ai representa o papel de um domínio D, chamado dom(Ai). O <strong>grau</strong> da relação é o número n de atributos.</p>
        <p>Exemplo de esquema de grau 4: <code>DEPARTAMENTO(nomeDep, numDep, nchefe, dtIniChef)</code>.</p>
        <p>Uma <strong>instância da relação</strong> r do esquema R(A1,...,An), escrita r(R), é um conjunto de tuplas r = {t1, t2, …, tm}.</p>
        <div class="callout">Cada tupla t é uma lista ordenada de n valores t = &lt;v1, v2, …, vn&gt;, onde cada vi pertence a dom(Ai) ou é um valor nulo.</div>
        <p>Para obter um valor específico, usa-se <code>t[Ai]</code> ou <code>t.Ai</code>; <code>t[Au, Aw, ..., Az]</code> retorna vários valores ao mesmo tempo.</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 2 – Tabela DEPARTAMENTO</caption>
          <thead><tr><th>nomeDep</th><th>numDep</th><th>nchefe</th><th>dtinic</th></tr></thead>
          <tbody>
            <tr><td>Pesquisa</td><td>5</td><td>2345</td><td>22/05/2010</td></tr>
            <tr><td>Desenvolvimento</td><td>4</td><td>9776</td><td>02/01/2016</td></tr>
            <tr><td>Administração</td><td>1</td><td>9896</td><td>16/06/2018</td></tr>
            <tr><td>Contas a Pagar</td><td>3</td><td>1123</td><td>15/02/2019</td></tr>
          </tbody>
        </table></div>
        <p>Exemplo: para a tupla t1 = &lt;'Pesquisa', 5, 2345, 22/05/2010&gt;, temos t1[nomeDep] = 'Pesquisa', e t1[nomeDep, numDep] = &lt;'Pesquisa', 5&gt;.</p>
        <p>Dois atributos podem compartilhar o mesmo domínio, mas com papéis diferentes: em FUNCIONÁRIO, <code>numat</code> (matrícula do próprio funcionário) e <code>nsuper</code> (matrícula do supervisor) têm o mesmo domínio, mas papéis distintos — é um relacionamento recursivo, já que o supervisor também é um funcionário.</p>
      `
    },
    {
      heading: "1.3 Características de uma relação",
      html: `
        <ul>
          <li><strong>Tuplas não são ordenadas:</strong> não há garantia de ordem de armazenamento (reflexo da teoria de conjuntos).</li>
          <li><strong>Não há tuplas duplicadas:</strong> cada tupla deve ser única dentro da relação.</li>
          <li><strong>Atributos são ordenados</strong> dentro de cada tupla (a posição é fixa e importa para manipulação dos dados).</li>
          <li><strong>Valores são atômicos e monovalorados:</strong> um campo não pode conter uma lista — só um valor por vez.</li>
        </ul>
      `
    },
    {
      heading: "1.4 Atributos-chave da relação",
      html: `
        <p>Como a relação é um conjunto de tuplas distintas, nenhuma combinação de valores de atributos pode se repetir entre duas tuplas — os valores precisam identificar a tupla de forma única.</p>
        <ul>
          <li><strong>Superchave (SK):</strong> um conjunto de um ou mais atributos que identifica cada tupla de forma única (para t1 ≠ t2, t1[SK] ≠ t2[SK]). Toda relação tem pelo menos uma superchave: o conjunto de todos os seus atributos.</li>
          <li><strong>Chave:</strong> uma superchave <strong>mínima</strong> — se remover qualquer atributo dela, perde a unicidade. Cada chave possível é uma <strong>chave candidata</strong>.</li>
          <li><strong>Chave primária (PK):</strong> a chave candidata escolhida para identificar cada tupla. Por convenção, seus atributos ficam <strong>sublinhados</strong> no esquema. Exemplo: FUNCIONÁRIO (<u>numat</u>, nome, sexo, dtnasc, salário).</li>
          <li><strong>Chave única (UK):</strong> as demais chaves candidatas que não viraram PK (não são sublinhadas).</li>
          <li><strong>Chave estrangeira (FK):</strong> um atributo (ou conjunto) de uma relação que referencia a chave primária de outra relação, criando o relacionamento entre tabelas.</li>
        </ul>
        <p>Formalmente, um conjunto de atributos FK em R1 é chave estrangeira se: (1) FK tem o mesmo domínio da PK de outra relação R2; (2) em cada tupla t1 de R1, o valor de FK ou é nulo, ou é igual ao valor de PK de alguma tupla t2 de R2 (ou seja, t1[FK] = t2[PK] significa que t1 "se refere" a t2).</p>
      `
    },
    {
      heading: "2. Restrições do modelo relacional",
      html: `
        <p>As restrições garantem consistência e validade, evitando dados incorretos (Elmasri, 2018):</p>
        <ul>
          <li><strong>Restrição de domínio:</strong> o valor de cada atributo deve ser um valor atômico pertencente ao seu domínio.</li>
          <li><strong>Restrição de valores nulos:</strong> define se um atributo pode ou não ser nulo (ex.: o nome do funcionário não pode ser nulo).</li>
          <li><strong>Restrição de integridade de entidade:</strong> nenhum valor de <strong>chave primária</strong> pode ser nulo — senão seria impossível diferenciar tuplas.</li>
          <li><strong>Restrição de chave:</strong> toda relação precisa ter uma chave primária com valores únicos e não nulos.</li>
          <li><strong>Restrição de integridade referencial:</strong> mantém a consistência entre duas relações — um valor que referencia outra tupla precisa apontar para uma tupla que realmente existe. Exemplo: o atributo <code>ndepto</code> de FUNCIONÁRIO precisa corresponder a um <code>numdep</code> que exista de fato em DEPARTAMENTO.</li>
        </ul>
      `
    },
    {
      heading: "3. Mapeamento do DER para o modelo relacional",
      html: `
        <p>Segundo Elmasri (2018), projetar o esquema relacional (projeto lógico) a partir do DER (modelo conceitual) segue estes passos:</p>
        <ol>
          <li><strong>Entidades fortes:</strong> para cada conjunto de entidades E, crie uma relação com o mesmo nome, incluindo os atributos simples (de um atributo composto, inclua só os componentes simples). A chave primária é um dos atributos-chave de E (ou a combinação, se a chave for composta).</li>
          <li><strong>Entidades fracas:</strong> para cada entidade fraca F (dona E), crie uma relação com os atributos simples de F + chave estrangeira apontando para a PK de E. A chave primária de F é a combinação dessa chave estrangeira com a chave parcial de F.</li>
          <li><strong>Relacionamento 1:1:</strong> escolha uma das duas relações (de preferência a que tem participação total) e inclua nela, como chave estrangeira, a PK da outra. Inclua também os atributos simples do relacionamento.</li>
          <li><strong>Relacionamento 1:N:</strong> inclua, no lado N, uma chave estrangeira apontando para a PK do lado 1.</li>
          <li><strong>Relacionamento M:N:</strong> crie uma <strong>nova relação</strong> para o relacionamento, com chaves estrangeiras para as PKs das duas entidades envolvidas, mais os atributos simples do relacionamento.</li>
          <li><strong>Atributos multivalorados:</strong> crie uma nova relação para cada atributo multivalorado A, com o próprio atributo A e uma chave estrangeira para a PK da entidade dona de A.</li>
        </ol>
      `
    },
    {
      heading: "Exemplo completo: mapeando o DER de uma empresa",
      html: `
        <p>Aplicando os 6 passos ao DER de uma empresa (Funcionário, Departamento, Projeto, Dependente):</p>
        <pre><code>Passo 1 (entidades fortes):
FUNCIONARIO (matrícula, pnome, mnome, snome, CPF, dtNasc, endereco, salario, sexo)
DEPARTAMENTO (numdep, nome)
PROJETO (nproj, nome, local)

Passo 2 (entidade fraca):
DEPENDENTE (matrícula*, nome, dtnasc, sexo, tipo)   [* chave estrangeira]

Passo 3 (relacionamento 1:1 — chefia):
DEPARTAMENTO (numdep, nome, nchefe*, dtinichefia)

Passo 4 (relacionamento 1:N):
FUNCIONARIO (matrícula, pnome, mnome, snome, CPF, dtNasc, endereco,
             salario, sexo, numdep*, nsuper*)
PROJETO (nproj, nome, local, numdep*)

Passo 5 (relacionamento M:N — trabalha_em):
TRABALHA_EM (matrícula*, nproj*, horas)

Passo 6 (atributos multivalorados):
LOCAL_DEPTO (numdep, local)
CELULAR_FUNCIONARIO (matrícula, celular)</code></pre>
        <p>Isso corresponde ao DER completo a seguir (com os relacionamentos possui, trabalha para, chefia, trabalha em, controla e supervisiona):</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-3/fig1.png", caption: "Figura 1 – DER completo da empresa: Funcionário, Departamento, Projeto e Dependente, com todos os relacionamentos usados no exemplo de mapeamento." }
      ]
    },
    {
      heading: "Passo 7: relacionamentos n-ários (mais de 2 entidades)",
      html: `
        <p>Para um relacionamento n-ário (n &gt; 2), crie uma nova relação R com chave estrangeira para a PK de <strong>cada</strong> relação participante, mais os atributos simples do relacionamento. A PK de R normalmente é a combinação de todas essas chaves estrangeiras.</p>
        <p>Exemplo — relacionamento ternário Fornece (Fornecedor, Peça, Projeto):</p>
        <pre><code>FORNECEDOR (fnome)
PEÇA (num)
PROJETO (pnome)
FORNECE (fnome*, num*, pnome*, quantidade)</code></pre>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-3/fig2.png", caption: "Figura 2 – Relacionamento ternário Fornece, entre Fornecedor, Peça e Projeto, com o atributo quantidade." }
      ]
    },
    {
      heading: "Passo 8: mapeando especialização e generalização (MERE)",
      html: `
        <p>Para mapear uma especialização (superclasse C com atributos {k, a1,...,an} e subclasses S1,...,Sm), há 4 opções:</p>
        <ul>
          <li><strong>8A — múltiplas relações (super + sub):</strong> uma relação L para C com todos os atributos de C (PK = k), e uma relação Li para cada subclasse Si, repetindo k como chave estrangeira/primária + os atributos próprios de Si.</li>
          <li><strong>8B — só relações de subclasse:</strong> cada Li recebe os atributos de Si <em>mais</em> os atributos de C. Ideal quando as subclasses são disjuntas e totais (toda entidade da superclasse está em alguma subclasse).</li>
          <li><strong>8C — relação única com atributo de tipo:</strong> uma única relação L com todos os atributos de C e de todas as subclasses, mais um atributo <code>t</code> indicando a qual subclasse a tupla pertence. Bom para subclasses disjuntas.</li>
          <li><strong>8D — relação isolada com atributos de múltiplos tipos:</strong> uma única relação L com todos os atributos, mais um atributo booleano t1, t2,... por subclasse, indicando se a tupla pertence a cada uma. Usado quando as subclasses se <strong>sobrepõem</strong> (não são disjuntas).</li>
        </ul>
        <p>Exemplo (opção 8A) para a especialização de Funcionário em Secretário, Técnico e Engenheiro:</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-3/fig3.png", caption: "Figura 3 – Generalização/especialização: Funcionário especializado em Secretário, Técnico e Engenheiro." }
      ]
    },
    {
      heading: "Resultado do mapeamento (opção 8A)",
      html: `
        <pre><code>FUNCIONÁRIO (matrícula, nome, CPF)
SECRETÁRIO (matrícula, idioma)
TÉCNICO (matrícula, grau)
ENGENHEIRO (matrícula, tipo)</code></pre>
        <p>Repare que <code>matrícula</code> (a chave de Funcionário) se repete em cada tabela de subclasse, servindo ao mesmo tempo de chave primária e de chave estrangeira para Funcionário.</p>
      `
    }
  ],
  keyPoints: [
    "Tabela = relação; coluna = atributo; linha = tupla. Cada atributo tem um domínio (conjunto de valores atômicos possíveis).",
    "Superchave identifica tuplas unicamente (pode ter atributos redundantes); chave candidata é uma superchave mínima; chave primária (PK) é a chave candidata escolhida (fica sublinhada); as demais são chaves únicas (UK).",
    "Chave estrangeira (FK) referencia a PK de outra relação, criando o vínculo entre tabelas; seu valor deve ser nulo ou igual a um valor de PK existente.",
    "5 restrições do modelo relacional: domínio, valores nulos, integridade de entidade (PK nunca nula), restrição de chave (PK única e não nula) e integridade referencial (FK aponta para tupla existente).",
    "Mapeamento DER→relacional: entidades fortes (passo 1), entidades fracas (2), relacionamento 1:1 (3), 1:N (4), M:N (5, nova tabela), atributos multivalorados (6, nova tabela), relacionamentos n-ários (7, nova tabela), especialização/generalização (8, quatro opções conforme disjunção/sobreposição)."
  ]
};
