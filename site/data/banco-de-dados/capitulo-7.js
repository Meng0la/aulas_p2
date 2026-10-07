window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["banco-de-dados"] = window.APP_DATA.content["banco-de-dados"] || {};
window.APP_DATA.content["banco-de-dados"]["capitulo-7"] = {
  id: "capitulo-7",
  title: "SQL: stored procedures e triggers",
  subtitle: "Procedimentos armazenados, funções, estruturas condicionais e de repetição (SQL/PSM) e gatilhos (triggers)",
  estimatedMinutes: 28,
  sections: [
    {
      heading: "1. Procedimentos armazenados (stored procedures)",
      html: `
        <p><strong>Procedimentos armazenados</strong> combinam lógica de programação com comandos SQL. Também chamados historicamente de <strong>módulos armazenados persistentes (SQL/PSM)</strong>, porque o código fica armazenado e é executado pelo próprio SGBD no servidor. O SQL/PSM estende o SQL com operadores de atribuição, estruturas condicionais e de repetição.</p>
        <h3>Características</h3>
        <ul>
          <li>Ficam armazenados no banco; podem ser chamados por aplicações clientes ou por outros procedimentos/funções.</li>
          <li><strong>Modularidade:</strong> módulos pequenos e reutilizáveis.</li>
          <li>Podem ter parâmetros de entrada e saída.</li>
          <li>Executam operações sobre tabelas: inserções, atualizações, consultas.</li>
          <li>Suportam atribuições aritméticas, condicionais e laços.</li>
        </ul>
        <h3>Por que usar procedimentos armazenados</h3>
        <ul>
          <li>Se várias aplicações usam a mesma lógica, cada uma só precisa <strong>chamar</strong> o procedimento, passando os argumentos.</li>
          <li>Manutenção centralizada: corrigir o procedimento no servidor atualiza automaticamente todas as aplicações que o usam.</li>
          <li>Menos tráfego de rede, já que o processamento ocorre no servidor.</li>
          <li>Permitem validar restrições complexas, além do alcance de asserções e triggers.</li>
        </ul>
      `
    },
    {
      heading: "Sintaxe de criação e execução",
      html: `
        <pre><code>CREATE PROCEDURE &lt;nome do procedimento&gt;(&lt;parâmetros&gt;)
&lt;corpo do procedimento&gt;;</code></pre>
        <p>Parâmetros e variáveis locais são opcionais, mas quando existem, cada parâmetro tem um tipo de dado SQL e pode ser <code>IN</code> (entrada), <code>OUT</code> (saída) ou <code>INOUT</code> (entrada e saída). Para executar um procedimento, usa-se <code>CALL</code>:</p>
        <pre><code>CALL &lt;nome do procedimento&gt; (&lt;lista de argumentos&gt;);</code></pre>
        <p>Exemplo — tabela e procedimento para inserir funcionário:</p>
        <pre><code>CREATE TABLE FUNCIONARIO (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100),
    Cargo VARCHAR(50),
    Salario DECIMAL(10,2),
    Departamento VARCHAR(50)
);

CREATE PROCEDURE InserirFuncionario (
IN p_Nome VARCHAR(100),
IN p_Cargo VARCHAR(50),
IN p_Salario DECIMAL(10,2),
IN p_Departamento VARCHAR(50))
BEGIN
INSERT INTO FUNCIONARIO (Nome, Cargo, Salario, Departamento)
VALUES (p_Nome, p_Cargo, p_Salario, p_Departamento);
END;</code></pre>
        <p>Chamando o procedimento duas vezes:</p>
        <pre><code>CALL InserirFuncionario('João Silva', 'Programador', 4500.00, 'TI');
CALL InserirFuncionario('Maria Souza', 'Vendedor', 7500.00, 'Venda');</code></pre>
      `
    },
    {
      heading: "Variáveis, atribuição e estrutura condicional",
      html: `
        <p>Variáveis locais se declaram com <code>DECLARE</code> e recebem valor com <code>SET</code>:</p>
        <pre><code>DECLARE nome VARCHAR(50)
DECLARE endereco VARCHAR(50)

SET nome = 'José da Silva';
SET endereco = 'Rua das rosas, 524. Jardim das Flores';</code></pre>
        <p>Estrutura condicional (<code>IF / ELSEIF / ELSE / END IF</code>):</p>
        <pre><code>IF &lt;condição&gt; THEN &lt;instruções&gt;
      ELSEIF &lt;condição&gt; THEN &lt;instruções&gt;
      ELSEIF &lt;condição&gt; THEN &lt;instruções&gt;
      ...
      ELSE &lt;instruções&gt;
END IF;</code></pre>
        <p>Se a condição do IF for verdadeira, executa seu bloco; senão, testa cada ELSEIF em sequência; se nenhuma bater, executa o ELSE (sem condição). Exemplo completo — aplicar bônus salarial conforme o departamento:</p>
        <pre><code>CREATE PROCEDURE AplicarBonus (
      IN p_ID INT
)
BEGIN
DECLARE v_Departamento VARCHAR(50);
DECLARE v_Salario DECIMAL(10,2);

-- Obtém o departamento e salário atual do funcionário
    SELECT Departamento, Salario INTO v_Departamento, v_Salario
    FROM FUNCIONARIO
    WHERE ID = p_ID;

    -- Estruturas condicionais para aplicar bônus
    IF v_Departamento = 'TI' THEN
         SET v_Salario = v_Salario * 1.10; -- 10% de bônus
    ELSEIF v_Departamento = 'Vendas' THEN
         SET v_Salario = v_Salario * 1.15; -- 15% de bônus
    ELSE
         SET v_Salario = v_Salario * 1.05; -- 5% de bônus para outros departamentos
END IF;

       -- Atualiza o salário no banco de dados
       UPDATE FUNCIONARIO
       SET Salario = v_Salario
       WHERE ID = p_ID;
END;</code></pre>
        <p>Essa procedure busca o departamento e salário do funcionário pelo ID, aplica 10% de bônus se for TI, 15% se for Vendas, ou 5% para qualquer outro departamento, e grava o novo salário.</p>
      `
    },
    {
      heading: "Estruturas de repetição: WHILE e REPEAT",
      html: `
        <p><strong>WHILE</strong> testa a condição <strong>antes</strong> de cada execução do bloco:</p>
        <pre><code>WHILE &lt;condição&gt; DO
&lt;instruções&gt;
END WHILE;</code></pre>
        <p><strong>REPEAT</strong> executa o bloco primeiro e só <strong>depois</strong> testa a condição (então roda pelo menos uma vez):</p>
        <pre><code>REPEAT
      &lt;instruções&gt;
UNTIL &lt;condição&gt;
END REPEAT;</code></pre>
      `
    },
    {
      heading: "Funções (FUNCTION)",
      html: `
        <p>Uma <strong>função</strong> é parecida com um procedimento, mas <strong>precisa devolver um valor</strong>:</p>
        <pre><code>CREATE FUNCTION &lt;nome da função&gt; (&lt;parâmetros&gt;)
     RETURNS &lt;tipo de retorno&gt;
&lt;corpo da função&gt;;</code></pre>
        <p>Exemplo — função que recebe o nome de um departamento e devolve o maior salário dele:</p>
        <pre><code>CREATE FUNCTION MaiorSalarioPorDepartamento (p_depto VARCHAR(50))
      RETURNS DECIMAL(10,2)
BEGIN
DECLARE v_MaiorSalario DECIMAL(10,2);

         SELECT MAX(Salario)
         INTO v_MaiorSalario
         FROM FUNCIONARIO
         WHERE Departamento = p_depto;

         RETURN v_MaiorSalario;
END;</code></pre>
      `
    },
    {
      heading: "2. Gatilhos (triggers)",
      html: `
        <p>Um <strong>gatilho (trigger)</strong> é um bloco de instruções SQL pré-compiladas e armazenadas, executado <strong>automaticamente</strong> pelo SGBD em resposta a um evento que modifica o banco (INSERT, UPDATE ou DELETE) — diferente de uma procedure, que só roda quando alguém a chama explicitamente.</p>
        <h3>Quando usar triggers</h3>
        <ul>
          <li><strong>Monitorar regras de negócio:</strong> ex.: avisar o supervisor quando uma despesa de funcionário ultrapassar um limite.</li>
          <li><strong>Implementar restrições</strong> que as restrições de integridade padrão do SQL não alcançam: ex.: impedir a exclusão de um funcionário com cargo de diretor sem autorização especial.</li>
          <li><strong>Auditoria e log de mudanças:</strong> registrar operações críticas (exclusões, inserções, alterações).</li>
        </ul>
        <h3>Como definir um gatilho</h3>
        <ol>
          <li><strong>Quando executar:</strong> em resposta a INSERT, UPDATE ou DELETE — podendo ter também uma condição extra para decidir se dispara ou não.</li>
          <li><strong>Qual ação executar:</strong> o código SQL, rodando antes (<code>BEFORE</code>) ou depois (<code>AFTER</code>) da operação. É possível comparar valores antigos e novos usando as palavras <code>OLD</code> e <code>NEW</code>.</li>
        </ol>
      `
    },
    {
      heading: "Exemplo: trigger de auditoria de contratação",
      html: `
        <pre><code>CREATE TRIGGER auditar_contratacao
AFTER INSERT ON FUNCIONARIO
FOR EACH ROW
BEGIN
      -- Inserir no log de auditoria o evento de contratação do funcionário
      INSERT INTO LOG_AUDITORIA (descricao, data_evento)
      VALUES (CONCAT('Contratação do funcionário ', NEW.nome),
      NOW());

         -- Adiciona a data de contratação na tabela de funcionários
         UPDATE FUNCIONARIO
         SET data_contratacao = NOW()
         WHERE NUMAT = NEW.NUMAT;
END</code></pre>
        <p>Esse gatilho dispara <strong>depois</strong> (AFTER) de cada INSERT em FUNCIONARIO (FOR EACH ROW = uma vez por linha inserida): grava uma entrada no log de auditoria usando <code>NEW.nome</code> (o nome do funcionário recém-inserido) e atualiza o campo data_contratacao daquele mesmo funcionário.</p>
        <div class="callout warn"><strong>Cuidado com o cascateamento de triggers:</strong> um gatilho pode atualizar uma tabela que tem outro gatilho associado, que atualiza outra tabela com outro gatilho, e assim por diante — podendo até formar um <strong>loop recursivo</strong> se a cadeia voltar ao gatilho original. Esse efeito colateral deve ser observado e evitado.</div>
      `
    }
  ],
  keyPoints: [
    "Stored procedure = bloco de código SQL + lógica de programação, armazenado e executado no servidor; chamado com CALL. Parâmetros podem ser IN, OUT ou INOUT.",
    "Vantagens das procedures: reutilização entre aplicações, manutenção centralizada, menos tráfego de rede, validação de regras complexas.",
    "SQL/PSM oferece DECLARE (variáveis), SET (atribuição), IF/ELSEIF/ELSE/END IF (condicional), WHILE (testa antes) e REPEAT...UNTIL (testa depois).",
    "FUNCTION é como uma procedure, mas obrigatoriamente retorna um valor (RETURNS + RETURN).",
    "Trigger (gatilho) executa automaticamente em resposta a INSERT/UPDATE/DELETE — útil para regras de negócio, restrições avançadas e auditoria/log.",
    "Um trigger pode rodar BEFORE ou AFTER a operação, FOR EACH ROW, e acessar os valores antigo (OLD) e novo (NEW) da linha afetada.",
    "Cuidado com cascateamento de triggers: um gatilho disparando outro pode gerar um loop recursivo indesejado."
  ]
};
