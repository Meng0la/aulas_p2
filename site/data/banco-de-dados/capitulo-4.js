window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-4"] = {
  id: "capitulo-4",
  title: "Normalização",
  subtitle: "Critérios informais de qualidade, dependências funcionais e as 3 primeiras formas normais (1FN, 2FN, 3FN)",
  estimatedMinutes: 28,
  sections: [
    {
      heading: "Avaliando a qualidade de um projeto de banco de dados",
      html: `
        <p>Um projetista experiente consegue organizar os atributos de forma lógica, mas é preciso um modo <strong>formal</strong> de análise — a <strong>normalização</strong> — para justificar por que um agrupamento de atributos é melhor que outro (Elmasri; Navathe, 2018).</p>
        <h3>1. Critérios informais para avaliação de qualidade</h3>
        <p>O projeto relacional deve gerar um esquema que armazene informações sem redundâncias desnecessárias e permita recuperá-las facilmente. Quatro diretrizes informais ajudam nisso (Takai; Italiano; Ferreira, 2005):</p>
        <ul>
          <li>Assegurar que a semântica dos atributos esteja clara.</li>
          <li>Minimizar a redundância de informação.</li>
          <li>Reduzir a ocorrência de valores nulos.</li>
          <li>Evitar a geração de tuplas espúrias.</li>
        </ul>
      `
    },
    {
      heading: "1.1 Semântica dos atributos",
      html: `
        <p>Cada atributo deve pertencer exclusivamente à entidade ou relacionamento ao qual está associado — cada relação precisa de um significado bem definido. Exemplo de esquema <strong>ruim</strong>, que mistura funcionário e departamento:</p>
        <p><code>FUNCIONÁRIO(numat, nome, dtnasc, endereço, numdep, nomedep, nchefe)</code></p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 1 – Tabela FUNCIONÁRIO (esquema ruim, mistura conceitos)</caption>
          <thead><tr><th>numat</th><th>nome</th><th>dtnasc</th><th>endereço</th><th>numdep</th><th>nomedep</th><th>nchefe</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>João da Silva</td><td>14/04/1980</td><td>Rua Margarida, 202</td><td>10</td><td>RH</td><td>Caio</td></tr>
            <tr><td>121</td><td>Edna Martins</td><td>21/06/1977</td><td>Rua Magnólia, 103</td><td>20</td><td>Admin</td><td>João</td></tr>
            <tr><td>345</td><td>Pedro Coutinho</td><td>29/03/1989</td><td>Rua Orquídea, 323</td><td>30</td><td>TI</td><td>Edna</td></tr>
          </tbody>
        </table></div>
        <div class="callout"><strong>Diretriz:</strong> cada esquema de relação deve conter apenas atributos que representam a entidade ou relacionamento que ela modela, evitando misturar conceitos distintos.</div>
      `
    },
    {
      heading: "1.2 Minimizar a redundância — as 3 anomalias de atualização",
      html: `
        <p>Misturar atributos de várias entidades numa única tabela gera <strong>anomalias de atualização</strong>, de três tipos:</p>
        <p><strong>Anomalia de inserção:</strong> a inserção de novos dados causa inconsistência. Exemplo (Tabela 2, FUNC_PROJ): como inserir um projeto que ainda não tem funcionário associado, se a chave primária é numat (do funcionário)?</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 2 – Tabela FUNC_PROJ</caption>
          <thead><tr><th>numat</th><th>nomeFunc</th><th>horas</th><th>numProj</th><th>nomeProj</th><th>localProj</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>João da Silva</td><td>10</td><td>10</td><td>Projeto X</td><td>São Paulo</td></tr>
            <tr><td>121</td><td>Edna Martins</td><td>35</td><td>20</td><td>Projeto Y</td><td>Itu</td></tr>
            <tr><td>345</td><td>Pedro Coutinho</td><td>20</td><td>30</td><td>Projeto Z</td><td>Limeira</td></tr>
            <tr><td>238</td><td>Ana Rosa Paes</td><td>15</td><td>10</td><td>Projeto X</td><td>São Paulo</td></tr>
            <tr><td>242</td><td>Mário Andrade</td><td>19</td><td>20</td><td>Projeto Y</td><td>Itu</td></tr>
            <tr><td>235</td><td>João da Silva</td><td>10</td><td>20</td><td>Projeto Y</td><td>Itu</td></tr>
          </tbody>
        </table></div>
        <p>Nessa tabela, associar um novo projeto a um funcionário força repetir os dados do funcionário; associar mais de um funcionário ao mesmo projeto força repetir os dados do projeto.</p>
        <p><strong>Anomalia de remoção:</strong> excluir a tupla do Pedro Coutinho apaga também todas as informações do Projeto Z — que deixam de existir no banco.</p>
        <p><strong>Anomalia de modificação:</strong> alterar o nome do Projeto Y exige atualizar <strong>todas</strong> as tuplas relacionadas a esse projeto — esquecer uma gera inconsistência.</p>
        <div class="callout"><strong>Diretriz:</strong> estruturar cada esquema de relação de modo que não haja anomalia de inserção, remoção ou modificação.</div>
      `
    },
    {
      heading: "1.3 Reduzir valores nulos",
      html: `
        <p>Muitos valores nulos indicam projeto inadequado e afetam o desempenho de consultas. Razões válidas para um valor nulo (Takai; Italiano; Ferreira, 2005): valor não aplicável/inválido; valor desconhecido mas existente; valor ainda indisponível no momento da inserção. Valores nulos desperdiçam espaço e atrapalham operações como contagem, média e soma.</p>
        <div class="callout"><strong>Diretriz:</strong> minimizar valores nulos, separando em tabelas específicas os atributos que costumam ficar vazios.</div>
      `
    },
    {
      heading: "1.4 Evitar tuplas espúrias",
      html: `
        <p><strong>Tuplas espúrias</strong> são registros inconsistentes criados quando esquemas mal projetados são unidos (join). Exemplo: a Tabela 3 (FUNC_PROJ1) é quebrada incorretamente em FUNC_PROJ2 e LOCAL_PROJ, ligadas apenas por <code>numat</code> (sem incluir numProj na segunda tabela):</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 4 – FUNC_PROJ2 (numat, nome, numProj, nomeProj)</caption>
          <thead><tr><th>numat</th><th>nome</th><th>numProj</th><th>nomeProj</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>João da Silva</td><td>10</td><td>Projeto X</td></tr>
            <tr><td>235</td><td>João da Silva</td><td>20</td><td>Projeto Y</td></tr>
            <tr><td>121</td><td>Edna Martins</td><td>20</td><td>Projeto Y</td></tr>
            <tr><td>345</td><td>Pedro Coutinho</td><td>30</td><td>Projeto Z</td></tr>
          </tbody>
        </table></div>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 5 – LOCAL_PROJ (numat, localProj)</caption>
          <thead><tr><th>numat</th><th>localProj</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>SP</td></tr>
            <tr><td>235</td><td>Campinas</td></tr>
            <tr><td>121</td><td>Campinas</td></tr>
            <tr><td>345</td><td>Osasco</td></tr>
          </tbody>
        </table></div>
        <p>Ao juntar (join) essas duas tabelas por <code>numat</code> para gerar um relatório, surgem combinações que não existiam de verdade:</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 6 – Junção de FUNC_PROJ2 com LOCAL_PROJ (com tuplas espúrias marcadas *)</caption>
          <thead><tr><th>numat</th><th>nome</th><th>numProj</th><th>nomeProj</th><th>localProj</th></tr></thead>
          <tbody>
            <tr><td>235</td><td>João da Silva</td><td>10</td><td>Projeto X</td><td>SP</td></tr>
            <tr><td>235 (*)</td><td>João da Silva</td><td>20</td><td>Projeto Y</td><td>SP</td></tr>
            <tr><td>235 (*)</td><td>João da Silva</td><td>10</td><td>Projeto X</td><td>Campinas</td></tr>
            <tr><td>235</td><td>João da Silva</td><td>10</td><td>Projeto Y</td><td>Campinas</td></tr>
            <tr><td>121</td><td>Edna Martins</td><td>20</td><td>Projeto Y</td><td>Campinas</td></tr>
            <tr><td>345</td><td>Pedro Coutinho</td><td>30</td><td>Projeto Z</td><td>Osasco</td></tr>
          </tbody>
        </table></div>
        <p>As linhas marcadas (*) são <strong>tuplas espúrias</strong>: combinações que a junção criou, mas que não refletem a realidade — essa foi uma <strong>decomposição com perdas</strong> (a divisão em duas tabelas perdeu informação).</p>
        <div class="callout"><strong>Diretriz:</strong> projetar as tabelas de forma que operações de junção não gerem informações incoerentes.</div>
      `
    },
    {
      heading: "2. Dependências funcionais",
      html: `
        <p>Uma <strong>dependência funcional (DF)</strong>, escrita <strong>X → Y</strong>, é uma restrição definida pelo projetista: sempre que duas tuplas têm o mesmo valor em X, elas devem ter o mesmo valor em Y. Formalmente: para quaisquer tuplas t1, t2, se t1[X] = t2[X], então t1[Y] = t2[Y] (Elmasri; Navathe, 2018).</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 7 – Tabela FUNCIONÁRIO</caption>
          <thead><tr><th>CPF</th><th>nome</th><th>cargo</th><th>depto</th></tr></thead>
          <tbody>
            <tr><td>123</td><td>João da Silva</td><td>Analista</td><td>TI</td></tr>
            <tr><td>456</td><td>Bruno Andrade</td><td>Gerente</td><td>Admin</td></tr>
            <tr><td>123</td><td>João da Silva</td><td>Analista</td><td>TI</td></tr>
          </tbody>
        </table></div>
        <p>Aqui existe a DF <code>CPF → nome, cargo, depto</code>: cada CPF tem sempre o mesmo nome/cargo/depto. Se um mesmo CPF aparecesse com nomes diferentes, haveria uma <strong>violação</strong> dessa dependência funcional.</p>
        <p>Uma <strong>chave candidata</strong> é um conjunto mínimo de atributos que determina (via DF) todos os demais atributos da relação. Exemplo: em Clientes(ID, CPF, Nome, Sobrenome), temos ID → CPF,nome,sobrenome e CPF → Nome,sobrenome — tanto ID quanto CPF são chaves candidatas.</p>
      `
    },
    {
      heading: "3. Normalização",
      html: `
        <p><strong>Normalização</strong> é o processo (proposto por Codd em 1972) que organiza esquemas relacionais para reduzir redundâncias, eliminar anomalias (inserção, atualização, exclusão) e garantir a integridade dos dados. É feito em etapas chamadas <strong>formas normais</strong>, cada uma com seus "testes" baseados em chaves e dependências funcionais. Se o esquema não passa no teste, ele é decomposto em esquemas menores que passam.</p>
      `
    },
    {
      heading: "3.1 Primeira Forma Normal (1FN)",
      html: `
        <p>Um esquema R está na <strong>1FN</strong> se os domínios de todos os atributos são <strong>atômicos</strong> (indivisíveis). A tabela abaixo NÃO está na 1FN, pois "telefones" é multivalorado:</p>
        <div class="table-wrap"><table>
          <caption style="caption-side:top; text-align:left; font-weight:700; margin-bottom:6px">Tabela 8 – FUNCIONÁRIO fora da 1FN</caption>
          <thead><tr><th>CPF</th><th>nome</th><th>cargo</th><th>telefones</th></tr></thead>
          <tbody>
            <tr><td>123</td><td>João da Silva</td><td>Analista</td><td>1234-5678, 2345-6789</td></tr>
            <tr><td>456</td><td>Bruno Andrade</td><td>Gerente</td><td>3456-7890</td></tr>
            <tr><td>789</td><td>Lúcio Costa</td><td>Analista</td><td>4567-8901, 5678-9012</td></tr>
          </tbody>
        </table></div>
        <p>Três técnicas para resolver (Elmasri; Navathe, 2018):</p>
        <ol>
          <li><strong>Criar uma tabela separada:</strong> TELEFONE(CPF, telefone), com chave primária {CPF, telefone} — uma linha por telefone. É a solução mais correta.</li>
          <li><strong>Expandir a chave primária</strong> da própria tabela FUNCIONÁRIO para {CPF, telefone} — funciona, mas introduz redundância (repete nome e cargo a cada telefone).</li>
          <li><strong>Criar colunas fixas</strong> (telefone1, telefone2, telefone3) se o máximo for conhecido — evita nova tabela, mas gera valores nulos desnecessários para quem tem menos telefones.</li>
        </ol>
      `
    },
    {
      heading: "3.2 Segunda Forma Normal (2FN)",
      html: `
        <p>Uma relação está na <strong>2FN</strong> se está na 1FN <strong>e</strong> todo atributo não-primo depende <strong>totalmente</strong> da chave primária (atributo não-primo = não faz parte de nenhuma chave candidata).</p>
        <p>Exemplo: FUNCIONARIO_PROJETO(CPF, numProj, horasProj, nomeFunc, nomeProj, localProj), com chave primária {CPF, numProj}:</p>
        <ul>
          <li><code>{CPF, numProj} → horasProj</code>: dependência <strong>total</strong> — horasProj não pode depender só de CPF nem só de numProj (remover qualquer um invalida a DF).</li>
          <li><code>{CPF, numProj} → nomeFunc</code>: dependência <strong>parcial</strong> — na verdade basta <code>CPF → nomeFunc</code>; dá pra remover numProj e a DF continua valendo. Isso <strong>viola</strong> a 2FN.</li>
        </ul>
        <p>Decompondo pelas dependências funcionais (DF1 total, DF2 e DF3 parciais), a tabela vira 3 relações em 2FN:</p>
        <pre><code>FUNC_PROJ1 {CPF, numProj, horas}
FUNC_PROJ2 {CPF, nomeFunc}
FUNC_PROJ3 {numProj, nomeProj, localProj}</code></pre>
      `
    },
    {
      heading: "3.3 Terceira Forma Normal (3FN)",
      html: `
        <p>Uma relação está na <strong>3FN</strong> se está na 2FN <strong>e</strong> nenhum atributo não-primo depende <strong>transitivamente</strong> da chave primária. Uma DF X → Z é transitiva se existe Y (que não é chave candidata nem parte de uma) tal que X → Y e Y → Z.</p>
        <p>Exemplo: FUNCIONARIO_PROJETO(CPF, nomeFunc, dtnasc, numProj, nomeProj, localProj), com dependências:</p>
        <pre><code>CPF → nomeFunc
CPF → dtnasc
CPF → numProj
numProj → nomeProj
numProj → localProj</code></pre>
        <p>Como <code>numProj → nomeProj, localProj</code> (e numProj não é chave candidata), isso é uma dependência transitiva — viola a 3FN. Decompondo:</p>
        <pre><code>FUNCIONÁRIO (CPF, nomeFunc, dtnasc, numProj)
PROJETO (numProj, nomeProj, localProj)</code></pre>
        <div class="callout">Para a maioria dos projetos de banco de dados, a 3FN já é suficiente. Formas normais mais avançadas (Boyce-Codd, 4FN, 5FN) existem, mas ficam fora do escopo deste material.</div>
      `
    }
  ],
  keyPoints: [
    "4 critérios informais de qualidade: semântica clara dos atributos, minimizar redundância, reduzir nulos, evitar tuplas espúrias.",
    "3 anomalias de atualização: inserção (não dá pra inserir X sem Y), remoção (apagar uma tupla perde informação de outra entidade) e modificação (precisa atualizar várias tuplas repetidas).",
    "Dependência funcional X → Y: tuplas com mesmo valor em X sempre têm o mesmo valor em Y. Chave candidata = conjunto mínimo de atributos que determina todos os outros.",
    "1FN: todos os atributos são atômicos (sem valores multivalorados) — resolve-se criando uma tabela separada, expandindo a chave, ou criando colunas fixas.",
    "2FN: 1FN + todo atributo não-primo depende TOTALMENTE da chave primária (sem dependência parcial de só uma parte de uma chave composta).",
    "3FN: 2FN + nenhum atributo não-primo depende TRANSITIVAMENTE da chave (sem X → Y → Z onde Y não é chave).",
    "Na prática, a 3FN já é suficiente para a maioria dos projetos de banco de dados."
  ]
};
