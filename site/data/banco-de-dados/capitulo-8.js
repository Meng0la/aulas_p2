window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-8"] = {
  id: "capitulo-8",
  title: "Catálogo, segurança, transações e recuperação de dados",
  subtitle: "Organização lógica e física, métodos de acesso, catálogo (dicionário de dados), GRANT/REVOKE, transações e propriedades ACID",
  estimatedMinutes: 30,
  sections: [
    {
      heading: "1. Organização do SGBD",
      html: `
        <p>Num banco de dados relacional, a <strong>estrutura lógica</strong> envolve tabelas, índices e outros objetos; a <strong>estrutura física</strong> trata de como esses objetos ficam armazenados e são acessados no disco.</p>
        <h3>1.1 Estrutura lógica</h3>
        <p>A <strong>tabela</strong> é o principal objeto lógico: cada linha (registro/tupla) contém os atributos de uma entidade, e cada coluna (campo/atributo) descreve um dado específico. Os <strong>índices</strong> são estruturas adicionais (árvores B ou tabelas hash) com uma chave de pesquisa e um ponteiro para a localização física dos dados — aceleram o acesso. <strong>Visões</strong> e <strong>procedimentos armazenados</strong> são mecanismos lógicos que não armazenam dados fisicamente, mas oferecem formas eficientes de acessá-los/manipulá-los.</p>
        <h3>1.2 Estrutura física</h3>
        <p>A estrutura física começa no armazenamento em <strong>blocos</strong> (ou páginas) de disco — a unidade de transferência entre disco e memória, com tamanho fixo, guardando várias linhas. Duas formas de organizar os blocos de registros:</p>
        <ul>
          <li><strong>Organização espalhada:</strong> aproveita melhor o espaço em disco (sem espaços vazios), mas um registro pode começar num bloco e terminar em outro (com um ponteiro entre eles).</li>
          <li><strong>Organização não espalhada:</strong> cada bloco só contém registros completos — ler um registro exige ler apenas um bloco.</li>
        </ul>
        <p>Uma <strong>organização de arquivo</strong> é como os dados ficam distribuídos em registros/blocos/estruturas de acesso no meio físico. Um <strong>método de acesso</strong> é como o SGBD localiza, lê e escreve esses dados — influencia diretamente o desempenho.</p>
      `
    },
    {
      heading: "Métodos de acesso: sequencial × por índice",
      html: `
        <p><strong>Acesso sequencial</strong> (full table scan): varre todos os registros, bloco por bloco, do início ao fim — usado quando não há índice disponível. Operações como <code>COUNT(*)</code> ou agregações completas costumam usar esse método:</p>
        <pre><code>SELECT * FROM FUNCIONARIO WHERE cidade = 'São Paulo';</code></pre>
        <p>Se FUNCIONARIO não tiver índice em "cidade", essa consulta varre a tabela inteira.</p>
        <p><strong>Acesso por índice (Index Lookup):</strong> usa um índice (estrutura tipo árvore B) para localizar diretamente o bloco de dados, sem varrer tudo — usado quando a consulta busca pela coluna indexada (ex.: chave primária).</p>
      `,
      images: [
        { src: "assets/img/banco-de-dados/capitulo-8/fig1.png", caption: "Figura 1 – Acesso por índice: o arquivo de índice (chave primária + ponteiro de bloco) aponta diretamente para o registro correspondente na tabela de dados, sem precisar varrer tudo." }
      ]
    },
    {
      heading: "Tipos de índice (visão geral)",
      html: `
        <div class="callout">Segundo Elmasri e Navathe (2018), existem vários tipos de índice: de agrupamento, secundário, multinível, multinível dinâmico (B-trees e B+-trees), em múltiplas chaves, ordenado em múltiplos atributos, de hash e bitmap. Cada um tem vantagens conforme o padrão de consulta.</div>
      `
    },
    {
      heading: "2. Catálogo de banco de dados",
      html: `
        <p>O <strong>catálogo</strong> (ou <strong>dicionário de dados</strong>) é um conjunto de tabelas que armazena informações sobre o <strong>próprio</strong> banco de dados — "dados sobre dados", chamados <strong>metadados</strong>. Contém a descrição do esquema conceitual, do esquema interno, de todos os esquemas externos e dos mapeamentos entre eles, além de módulos de otimização de consultas, segurança e autorização.</p>
        <p>Em bancos relacionais, essas informações ficam armazenadas no formato relacional — como tabelas de catálogo, geradas na criação do banco. O catálogo guarda:</p>
        <ul>
          <li>Nomes das relações e de seus atributos;</li>
          <li>Domínio e tamanho de cada atributo;</li>
          <li>Relacionamentos, chaves estrangeiras e referências entre tabelas;</li>
          <li>Estatísticas para otimização (número de registros, tamanho das tabelas);</li>
          <li>Descrições de visões, estruturas de índices, procedimentos armazenados (nome, parâmetros, corpo) e informações de autorização/segurança.</li>
        </ul>
        <p>Como o catálogo é muito acessado, precisa ser implementado de forma eficiente.</p>
      `
    },
    {
      heading: "3. Segurança e proteção de dados",
      html: `
        <p>Segundo Ramakrishnan e Gehrke (2011), há três objetivos ao projetar uma aplicação de banco de dados segura:</p>
        <ol>
          <li><strong>Integridade:</strong> proteger as informações contra alterações impróprias (criação, exclusão ou modificação indevida) — a perda de integridade pode ser intencional (fraude) ou acidental, e gerar decisões erradas.</li>
          <li><strong>Disponibilidade:</strong> usuários autorizados não devem ser impedidos de acessar o sistema (ex.: o próprio funcionário deve conseguir atualizar seu telefone).</li>
          <li><strong>Sigilo:</strong> informações não devem ficar disponíveis para quem não tem autorização (ex.: um funcionário não deve ver dados pessoais de outro).</li>
        </ol>
        <p>Para alcançar esses objetivos, é preciso uma <strong>política de segurança</strong> clara, implementada em camadas: hardware, sistema operacional e SGBD. Técnicas comuns: contas e senhas para controle de acesso, e <strong>criptografia</strong> (especialmente na transmissão em rede ou em dados sensíveis).</p>
        <p>O <strong>DBA (administrador do banco de dados)</strong> é a autoridade central, com uma conta privilegiada (conta de sistema). Suas atribuições de segurança: criar contas/grupos de usuários (com senha), e conceder/revogar privilégios.</p>
        <p>Cada login gera um registro no <strong>log do sistema</strong> (incluindo o terminal de origem) — essa trilha de auditoria permite examinar acessos, operações executadas e identificar comportamento suspeito.</p>
      `
    },
    {
      heading: "Privilégios: GRANT e REVOKE",
      html: `
        <p>A administração de privilégios em SQL tem dois níveis: <strong>nível de conta</strong> (privilégios para criar, remover, alterar ou selecionar objetos como tabelas/visões) e <strong>nível de relação</strong> (privilégios de selecionar e modificar uma tabela específica). Toda relação (real ou virtual) tem um <strong>proprietário</strong>.</p>
        <p>Para conceder privilégios usa-se <code>GRANT</code>; para revogar, <code>REVOKE</code>. O poder de criar tabelas costuma ser dado ao proprietário do banco:</p>
        <pre><code>CREATE SCHEMA Empresa AUTHORIZATION JSilva;
-- ou
GRANT CREATETAB TO JSilva;</code></pre>
        <p>JSilva (dono do banco) pode agora conceder privilégios a outros usuários — inserir e remover linhas em FUNCIONARIO para CLopes:</p>
        <pre><code>GRANT INSERT, DELETE ON FUNCIONARIO TO CLopes;</code></pre>
        <p>Conceder SELECT a FAlmeida, com direito de <strong>propagar</strong> esse privilégio a outros (<code>WITH GRANT OPTION</code>):</p>
        <pre><code>GRANT SELECT ON FUNCIONARIO TO FAlmeida WITH GRANT OPTION;</code></pre>
        <p>Revogando esse privilégio depois (a revogação se propaga automaticamente a quem FAlmeida tiver repassado o acesso):</p>
        <pre><code>REVOKE SELECT ON FUNCIONARIO TO FAlmeida;</code></pre>
        <p>Para dar acesso <strong>restrito</strong> — só algumas colunas e só algumas linhas — combina-se uma visão com GRANT:</p>
        <pre><code>CREATE VIEW DADOS_FUNCIONARIO
SELECT nome, datanasc, endereco
FROM FUNCIONARIO
WHERE ndepto = 5
GRANT SELECT ON DADOS_FUNCIONARIO TO FAlmeida WITH GRANT OPTION;</code></pre>
        <p>Ou conceder atualização de <strong>um único atributo</strong>:</p>
        <pre><code>GRANT UPDATE ON FUNCIONARIO (salario) TO BSouza;</code></pre>
      `
    },
    {
      heading: "4. Transações e atomicidade",
      html: `
        <p>Uma <strong>transação</strong> é uma unidade atômica de trabalho: um programa em execução que forma a unidade lógica de processamento do banco (inserções, remoções, alterações ou consultas). Numa transação, <strong>todas</strong> as operações devem ter sucesso, ou <strong>nenhuma</strong> deve ter efeito — senão os dados ficam inconsistentes.</p>
        <p>Exemplo clássico: transferência bancária. Operação 1: retira valor da conta origem. Operação 2: deposita o mesmo valor na conta destino. Para o usuário, as duas precisam ocorrer juntas — se uma falhar, a transação inteira deve ser desfeita.</p>
      `
    },
    {
      heading: "Propriedades ACID",
      html: `
        <ul>
          <li><strong>Atomicidade (Atomicity):</strong> a transação é realizada por completo ou não é realizada de forma alguma.</li>
          <li><strong>Consistência (Consistency):</strong> a transação preserva a consistência do banco de dados.</li>
          <li><strong>Isolamento (Isolation):</strong> uma transação é executada sem interferência de outras.</li>
          <li><strong>Durabilidade (Durability):</strong> alterações de transações confirmadas permanecem no banco, mesmo após falhas.</li>
        </ul>
        <p>A <strong>serialização</strong> garante que, mesmo com várias transações rodando ao mesmo tempo (concorrentes), o resultado final seja equivalente a executá-las uma de cada vez, em sequência — preservando a consistência mesmo com múltiplos usuários simultâneos.</p>
      `
    },
    {
      heading: "COMMIT, ROLLBACK e SET TRANSACTION",
      html: `
        <p>Uma transação SQL começa automaticamente com o primeiro comando que consulta/manipula o banco — não existe um comando explícito de "início". Mas ela precisa ser <strong>finalizada</strong> explicitamente:</p>
        <ul>
          <li><code>COMMIT</code>: confirma que tudo deu certo e grava as alterações permanentemente.</li>
          <li><code>ROLLBACK</code>: desfaz todas as alterações feitas desde o início da transação (em caso de falha).</li>
        </ul>
        <p>Exemplo — tabela CONTA e uma transferência de R$ 200 entre contas:</p>
        <pre><code>CREATE TABLE CONTA(
id INT PRIMARY KEY,
     nome     VARCHAR(100),
     saldo DECIMAL
);

INSERT INTO CONTA (1, 'José da Silva', 1000.00);
INSERT INTO CONTA (2, 'Maria Souza', 1500.00);

UPDATE CONTA SET saldo = saldo - 200.0 WHERE id = 1;
UPDATE CONTA SET saldo = saldo + 200.0 WHERE id = 2;
COMMIT;</code></pre>
        <p>Se algo falhar no meio do caminho (ex.: a conta 2 não existir), executa-se <code>ROLLBACK</code>, desfazendo os dois UPDATEs.</p>
        <p>O comando <code>SET TRANSACTION</code> define o comportamento da transação em relação a outras transações simultâneas — o modo de acesso pode ser <code>READ ONLY</code> (só consultas) ou <code>READ WRITE</code> (consultas e alterações):</p>
        <pre><code>SET TRANSACTION READ ONLY;
-- ou
SET TRANSACTION READ WRITE;</code></pre>
        <p>Quando um registro/tabela que uma transação precisa está sendo usado por outra, ocorre um <strong>conflito de travamento</strong>. Por padrão, a transação <strong>espera</strong> a liberação; é possível mudar esse comportamento com <code>NO WAIT</code>:</p>
        <pre><code>SET TRANSACTION [READ ONLY|READ WRITE] NO WAIT;</code></pre>
      `
    }
  ],
  keyPoints: [
    "Estrutura lógica = tabelas, índices, visões; estrutura física = como os dados ficam armazenados em blocos/páginas no disco.",
    "Acesso sequencial varre a tabela inteira (sem índice); acesso por índice usa uma estrutura tipo árvore B para ir direto ao bloco certo.",
    "Catálogo (dicionário de dados) = metadados sobre o próprio banco: nomes de tabelas/atributos, domínios, relacionamentos, estatísticas, visões, procedures e informações de segurança.",
    "3 objetivos de segurança: Integridade (sem alterações indevidas), Disponibilidade (autorizados conseguem acessar) e Sigilo (não autorizados não veem).",
    "GRANT concede privilégios (ex.: GRANT SELECT ON tabela TO usuário); REVOKE os retira; WITH GRANT OPTION permite repassar o privilégio a outros.",
    "Transação = unidade atômica de trabalho: tudo ou nada. Propriedades ACID: Atomicidade, Consistência, Isolamento, Durabilidade.",
    "COMMIT confirma e grava as alterações; ROLLBACK desfaz tudo desde o início da transação em caso de falha.",
    "SET TRANSACTION define o modo (READ ONLY ou READ WRITE) e o comportamento diante de conflitos de travamento (padrão: esperar; NO WAIT: não esperar)."
  ]
};
