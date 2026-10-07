window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-6"] = {
  id: "aula-6",
  title: "Servidores de impressão e pool de impressão",
  subtitle: "Spooler de impressão, instalação do serviço, drivers V4 e pool de impressão para balancear várias impressoras",
  estimatedMinutes: 20,
  sections: [
    {
      heading: "1. Conceitos de servidor de impressão",
      html: `
        <p>Imprimir em uma empresa tem custo — e desperdício com impressões erradas aumenta ainda mais esse custo. Usar impressoras caseiras em ambiente de produção também sobrecarrega a equipe de TI (ligar na rede, repor cartuchos, calcular manutenção). Um <strong>servidor de impressão</strong> resolve isso centralizando tudo.</p>
        <h3>1.1 O que faz um servidor de impressão</h3>
        <p>Recebe requisições de impressão de outros computadores do domínio, gerencia, monitora, relata erros e encaminha a solicitação até a impressora de destino. Também compartilha drivers atualizados. Vantagens:</p>
        <ul>
          <li><strong>Centralização:</strong> todos os processos e drivers de impressão passam por um único servidor.</li>
          <li><strong>Monitoramento:</strong> logs das impressões para consultas futuras.</li>
          <li><strong>Gerenciamento:</strong> visibilidade de erros, permissões e da fila de impressão.</li>
        </ul>
      `
    },
    {
      heading: "1.2 Spooler de impressão",
      html: `
        <p>Todo arquivo impresso passa pelo <strong>spooler</strong> (do inglês "simultaneous peripheral operations online"). Ele existe para permitir transmissão de dados de forma multitarefa, sem travar o computador de origem: o spool libera o equipamento para outras tarefas enquanto monta a impressão em segundo plano, usando espaço em disco para guardar a fila (que roda sob demanda, uma impressão de cada vez).</p>
        <p>Exemplo do capítulo: uma impressora a laser monocromática com 16 ppm (páginas A4 por minuto) e primeira página em 8 segundos — sem o spool, o computador ficaria travado esses 8 segundos a cada impressão.</p>
        <div class="callout warn">Um erro comum: a impressora imprime "carinhas"/caracteres estranhos em vez do documento — geralmente é um erro no spooler, que corrompe o arquivo e trava a fila até o cancelamento do documento.</div>
      `
    },
    {
      heading: "1.3 Reiniciando o spooler",
      html: `
        <p>Quando o cancelamento normal pela fila de impressão não resolve, reiniciar o serviço é a medida mais drástica (e eficaz):</p>
        <ol>
          <li>Win + R → <code>services.msc</code>.</li>
          <li>Localize o <strong>Spooler de Impressão</strong> (status deve mostrar "Em Execução").</li>
          <li>Botão direito → <strong>Reiniciar</strong>.</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-6/01-executar-servicesmsc.png", caption: "Caixa Executar: comando services.msc abre a tela de serviços do Windows." },
        { src: "assets/img/sistema-operacional/aula-6/02-servicos-spooler-execucao.png", caption: "Console de Serviços: Spooler de Impressão com status \"Em Execução\"." }
      ]
    },
    {
      heading: "1.4 Automatizando a recuperação de erros",
      html: `
        <p>É possível configurar o Windows para tentar se recuperar sozinho: Propriedades do serviço Spooler → guia <strong>Recuperação</strong> → definir ação para "Primeira falha" (ex.: Reiniciar o serviço) e "Segunda falha" (ex.: Executar um programa — um script .BAT personalizado).</p>
        <p>Script de exemplo usado no capítulo para limpar a fila de impressão travada:</p>
        <pre><code>@echo off
title Limpa Spooler de Impressão
net stop spooler
cd %systemroot%\\system32\\spool\\PRINTERS
del %systemroot%\\system32\\spool\\PRINTERS\\*.* /Q
del /f /s *.shd
del /f /s *.spl
net start spooler
pause</code></pre>
        <p>Esse script para o serviço, apaga os arquivos travados da fila de impressão (.shd e .spl) e reinicia o spooler — resolvendo a maioria dos travamentos.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-6/03-propriedades-spooler-recuperacao.png", caption: "Guia Recuperação das Propriedades do Spooler: ações configuráveis para Primeira e Segunda falha." },
        { src: "assets/img/sistema-operacional/aula-6/04-script-bat-limpar-spooler.png", caption: "Script .BAT para limpar a fila de impressão travada e reiniciar o serviço." }
      ]
    },
    {
      heading: "1.5 Instalando o serviço de impressão no Server 2019",
      html: `
        <p>No Gerenciador do Servidor (DC-01): Adicionar Funções e Recursos → Instalação baseada em função ou recurso → selecionar o servidor → marcar <strong>Serviço de Impressão e Documentos</strong> → não selecionar recursos extras → na tela de Serviços de Função, marcar <strong>Servidor de Impressão</strong> → Instalar.</p>
        <p>Durante a instalação aparece a mensagem "O Windows Server 2019 dá suporte à fila de impressão do Tipo 3 ou Tipo 4". O <strong>drive V4</strong> (criado a partir do Windows Server 2012) substitui o modelo universal antigo: é um "driver in box", incorporado ao SO e desenvolvido pelo próprio fabricante, compatível com a linguagem da impressora (PostScript ou PCL).</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-6/05-funcoes-servico-impressao.png", caption: "Seleção de funções do servidor: Serviço de Impressão e Documentos marcado." },
        { src: "assets/img/sistema-operacional/aula-6/06-servicos-funcao-servidor-impressao.png", caption: "Serviços de função: opção Servidor de Impressão selecionada." },
        { src: "assets/img/sistema-operacional/aula-6/fig2-driver-v4-xerox.png", caption: "Figura 2 – Exemplo de interface de um driver V4 de impressora laser (Xerox WorkCentre)." }
      ]
    },
    {
      heading: "1.6 Instalando uma impressora no servidor",
      html: `
        <p>Pelo Gerenciamento de Impressão (Iniciar → Ferramentas Administrativas → Gerenciamento de Impressão): clique direito em Impressoras → Adicionar Impressora → "Adicionar uma nova impressora usando uma porta existente" (ex.: LPT1) → Instalar um novo driver → escolher fabricante/modelo → dar um nome (ex.: IMP1) e marcar <strong>Compartilhamento</strong> → Concluir.</p>
        <p>Depois de instalada, clicar com o botão direito na impressora dá acesso a uma lista de comandos de gerenciamento.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-6/07-driver-novo.png", caption: "Assistente de Instalação de Impressora de Rede: escolha de driver — instalar um novo." },
        { src: "assets/img/sistema-operacional/aula-6/08-fabricante-modelo.png", caption: "Seleção de fabricante e modelo da impressora." },
        { src: "assets/img/sistema-operacional/aula-6/09-nome-compartilhamento.png", caption: "Configuração de nome e compartilhamento da impressora (ex.: IMP1)." },
        { src: "assets/img/sistema-operacional/aula-6/fig3-gerenciamento-impressao-menu.png", caption: "Figura 3 – Console de Gerenciamento de Impressão, com o menu de comandos disponíveis para a impressora instalada." }
      ]
    },
    {
      heading: "2. Pool de impressão",
      html: `
        <h3>2.1 O que é um pool de impressão</h3>
        <p>Imagine ter três impressoras idênticas — como otimizar o uso delas? O <strong>pool de impressão</strong> permite ao administrador associar várias impressoras do mesmo modelo, transformando-as em um único caminho de impressão. O Windows Server encaminha automaticamente cada trabalho para a impressora que estiver disponível no momento.</p>
        <p>Benefícios: maior velocidade, melhor uso do tempo, distribuição de carga, escalabilidade e menos espera. Para o usuário, o pool parece uma única impressora.</p>
        <h3>2.2 Como montar um pool de impressão</h3>
        <p>Exemplo do capítulo: três impressoras idênticas (P1, P2, P3) nas portas LPT1, LPT2 e LPT3:</p>
        <ol>
          <li>Instale as três impressoras normalmente, cada uma na sua porta.</li>
          <li>Nas Propriedades de P1 → guia Compartilhamento: renomeie o compartilhamento para algo único (ex.: <strong>P_Universal</strong>) e marque "Listar no diretório".</li>
          <li>Na guia <strong>Portas</strong>: marque LPT1, LPT2 e LPT3, e marque <strong>Ativar pool de impressão</strong>.</li>
        </ol>
        <p>A partir daí, toda impressão enviada para P_Universal é automaticamente direcionada para o dispositivo mais ocioso, sem intervenção do administrador.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-6/10-propriedades-p1-compartilhamento.png", caption: "Propriedades de P1 — guia Compartilhamento: nome de compartilhamento P_Universal, \"Listar no diretório\" marcado." },
        { src: "assets/img/sistema-operacional/aula-6/11-propriedades-p1-portas-pool.png", caption: "Propriedades de P1 — guia Portas: LPT1, LPT2 e LPT3 marcadas, com \"Ativar pool de impressão\" ligado." }
      ]
    }
  ],
  keyPoints: [
    "Servidor de impressão centraliza drivers, monitoramento e gerenciamento das impressões da rede.",
    "O spooler processa impressões em segundo plano (fila em disco), liberando o computador de origem — erros no spooler costumam causar impressões corrompidas (\"carinhas\").",
    "Reiniciar o spooler: services.msc → localizar Spooler de Impressão → Reiniciar; pode ser automatizado via guia Recuperação + script .BAT.",
    "Driver V4 (\"driver in box\") substitui o modelo universal antigo, incorporado ao SO e compatível com a linguagem nativa da impressora (PostScript/PCL).",
    "Pool de impressão une várias impressoras idênticas num único caminho lógico — o Windows Server direciona cada trabalho ao dispositivo mais ocioso.",
    "Para ativar um pool: compartilhar a impressora principal com um nome único, marcar todas as portas das impressoras físicas e ativar \"Ativar pool de impressão\" na guia Portas."
  ]
};
