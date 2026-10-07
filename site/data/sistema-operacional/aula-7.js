window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-7"] = {
  id: "aula-7",
  title: "Política de segurança e GPO (Group Policy Objects)",
  subtitle: "Autenticação, política de segurança de rede, hierarquia e criação prática de uma GPO",
  estimatedMinutes: 26,
  sections: [
    {
      heading: "1. Conceito de segurança e autenticação",
      html: `
        <p>Administrar um ambiente cliente-servidor vai muito além de compartilhar pastas ou trocar senhas: é preciso gerenciar <strong>políticas de segurança</strong> por regras, garantindo confidencialidade, integridade, disponibilidade e autenticidade das informações. É aí que entra a <strong>GPO</strong> — a "cereja do bolo" — criando os limites da rede, permitindo ou negando serviços.</p>
        <p>Ao iniciar um Windows cliente numa rede com domínio, depois do boot aparece a tela de <strong>logon</strong>, pedindo login e senha. Depois de autenticado, começa a segunda fase: a GPO determina o ambiente que o usuário vai usar (aplicativos, impressoras, recursos autorizados) — por trás das telas de "Bem-vindo", o SO está montando esse ambiente completo.</p>
        <p><strong>Autenticação</strong> é a ação de fornecer uma identificação e verificar se é genuína, por meio de uma operação criptografada com uma chave que só o usuário conhece. O servidor de autenticação compara os dados assinados com uma chave de criptografia conhecida para validar a tentativa.</p>
      `
    },
    {
      heading: "1.1 Segurança em uma rede",
      html: `
        <p>Segurança de rede é qualquer atividade projetada para proteger o bom funcionamento e a integridade da rede e dos dados. Combina várias camadas de defesa, da borda até o núcleo da rede — cada camada aplica suas próprias políticas e controles, deixando usuários autorizados acessarem recursos enquanto bloqueia agentes mal-intencionados.</p>
        <h3>1.1.1 Política de segurança em uma rede</h3>
        <p>Segundo a RFC2196, "a política de segurança é um documento que resume como a empresa utilizará e protegerá seus recursos computacionais e de rede" (Fraser, 1997). As decisões do administrador de rede determinam o quão segura é a empresa — é preciso definir metas de segurança, implementar a política e revisá-la constantemente.</p>
        <p>Processo de implantação de uma política de segurança (ciclo contínuo):</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/fig1-processo-implantacao-politica.png", caption: "Figura 1 – Processo de implantação de uma política de segurança: Proposta e implantação → Testes → Monitoramento → Aperfeiçoamento, alternando entre ambiente de teste e de produção." }
      ]
    },
    {
      heading: "As 4 etapas do ciclo de política de segurança",
      html: `
        <ol>
          <li><strong>Proposta e implantação:</strong> identificar a vulnerabilidade (um período em que as defesas estão reduzidas, comprometidas ou ausentes) e propor uma ação prática para saná-la.</li>
          <li><strong>Testes:</strong> simular a proposta num ambiente de teste (normalmente uma OU de teste — UOT) para verificar se resolve o problema. Se não satisfizer, volta ao passo 1.</li>
          <li><strong>Monitoramento:</strong> depois de aprovada, a política vai para o ambiente de produção — é preciso acompanhar e comparar os resultados com os objetivos.</li>
          <li><strong>Aperfeiçoamento:</strong> compara o resultado final com a vulnerabilidade inicial e faz os ajustes finais, se necessário.</li>
        </ol>
      `
    },
    {
      heading: "1.2 O que é GPO",
      html: `
        <p>Uma <strong>GPO (group policy object)</strong> é um objeto que contém uma ou mais políticas de segurança, aplicadas a usuários ou computadores. O modelo criado fica guardado no diretório <strong>SYSVOL</strong>. As GPOs se vinculam a usuários/computadores através de OUs, sites ou domínios.</p>
        <p>GPO = diretiva de grupo: um conjunto de regras para facilitar o gerenciamento, a configuração e a segurança. É administrada pelo <strong>GPMC</strong> (group policy management console): Menu Iniciar → Ferramentas Administrativas → Gerenciamento de Políticas de Grupo.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/fig2-gpmc-console.png", caption: "Figura 2 – Console de Gerenciamento de Política de Grupo (GPMC), mostrando a árvore da Floresta SENAC.LOCAL." }
      ]
    },
    {
      heading: "Os três estados de uma configuração de GPO",
      html: `
        <p>Uma configuração dentro de uma GPO sempre tem três estados possíveis:</p>
        <ul>
          <li><strong>Não configurado</strong> (padrão): o item marcado não tem efeito nenhum — a GPO não altera nada.</li>
          <li><strong>Habilitado:</strong> o item é executado e a política é aplicada.</li>
          <li><strong>Desabilitado:</strong> usado quando a política não deve ser aplicada, ou para aplicar o efeito inverso.</li>
        </ul>
        <p>Exemplo do capítulo: a regra "Ocultar o ícone do Internet Explorer na área de trabalho" — se <strong>Habilitada</strong>, o ícone some; se <strong>Desabilitada</strong>, o ícone NÃO é ocultado; se <strong>Não configurada</strong>, a regra simplesmente não se aplica.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/fig3-gpo-exemplo-ocultar-ie.png", caption: "Figura 3 – Exemplo de item de uma GPO: \"Ocultar o ícone do Internet Explorer na área de trabalho\", com as opções Não Configurado / Habilitado / Desabilitado." }
      ]
    },
    {
      heading: "2. Estratégia em ambientes com GPO",
      html: `
        <p>As regras de uma GPO são <strong>hierárquicas e cumulativas</strong> — dependendo da posição da regra na hierarquia, o resultado final pode até se inverter (Microsoft, 2020). Depois de criar e configurar uma GPO, o próximo passo é <strong>vinculá-la</strong> a um contêiner do ADDS (um vínculo é como um atalho, podendo ser aplicado em mais de um contêiner). Existem três níveis de vínculo, do mais abrangente ao mais específico:</p>
        <ul>
          <li><strong>Sites</strong> (nível mais alto): afeta todos os usuários/computadores daquele site.</li>
          <li><strong>Domínios</strong>: afeta todos os usuários/computadores do domínio.</li>
          <li><strong>OUs</strong>: afeta apenas os usuários/computadores daquela unidade organizacional.</li>
        </ul>
        <p>Um computador/usuário recebe as GPOs na ordem da hierarquia: primeiro a do Site, depois a do Domínio, depois a de cada OU no caminho até ele.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/fig4-hierarquia-gpo.png", caption: "Figura 4 – Hierarquia de aplicação: Site (GPO 01) → Domínio (GPO 02) → OU (GPO 03) → sub-OU (GPO 04)." }
      ]
    },
    {
      heading: "GPOs padrão e GPOs de início",
      html: `
        <p>No domínio Senac.Local, duas GPOs já vêm criadas por padrão:</p>
        <ul>
          <li><strong>Default Domain Policy</strong> (política de domínio padrão): afeta todos os princípios de segurança do domínio — política de senha, bloqueio de conta, protocolo de autenticação. Recomenda-se não adicionar outras configurações nela.</li>
          <li><strong>Default Domain Controllers Policy</strong> (diretiva padrão de controladores de domínio): configurações de auditoria e direitos de usuário — não deve ser usada para outras finalidades.</li>
        </ul>
        <p>As <strong>GPOs de início</strong> são templates para agilizar a criação de novas GPOs com a mesma base de configuração.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/fig5-gpmc-hierarquia-anotada.png", caption: "Figura 5 – Snap-in do GPMC com a hierarquia real do domínio Senac.Local: política padrão do domínio/controlador, unidades organizacionais, armazenamento de filtros WMI e de GPOs de início." }
      ]
    },
    {
      heading: "Herança, aplicação e comandos úteis",
      html: `
        <p>Quando uma GPO não deve herdar os vínculos do contêiner pai, clique com o botão direito no contêiner e escolha <strong>Bloquear Herança</strong>.</p>
        <p>A GPO é reaplicada automaticamente a cada <strong>90 minutos</strong> (configurável). Configurações de <strong>computador</strong> são aplicadas na inicialização; configurações de <strong>usuário</strong> são aplicadas no logon (junto com seus scripts).</p>
        <p>Para forçar a aplicação imediata de uma GPO (sem esperar os 90 minutos):</p>
        <ul>
          <li>Prompt de comando: <code>GPUPDATE /FORCE</code></li>
          <li>PowerShell: <code>Invoke-Gpupdate</code></li>
        </ul>
      `
    },
    {
      heading: "3. Criando e publicando uma política de segurança (prática)",
      html: `
        <p>Criar uma GPO não a ativa sozinha — ela precisa estar vinculada a um contêiner. Prática do capítulo: ocultar o Painel de Controle para os usuários da OU <strong>RH_Senac</strong>.</p>
        <ol>
          <li>Win + R → <code>GPMC.MSC</code>.</li>
          <li>Em "GPOs de início", botão direito → Novo → nome <strong>Bloquear_PainelControle</strong> → OK.</li>
          <li>Botão direito na GPO criada → Editar. Existem dois segmentos: <strong>Configuração do computador</strong> (se aplica a todos os usuários daquele PC) e <strong>Configuração do usuário</strong> (se aplica só a usuários individuais, não a grupos).</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/01-novo-gpo-inicio.png", caption: "Criação da GPO de início Bloquear_PainelControle." },
        { src: "assets/img/sistema-operacional/aula-7/02-editor-gpo-arvore.png", caption: "Editor do GPO de Início: árvore com Configuração do Computador e Configuração do Usuário." }
      ]
    },
    {
      heading: "Configurando e vinculando a regra",
      html: `
        <ol start="4">
          <li>Configurações do Usuário → Modelos Administrativos → Painel de Controle → selecione <strong>"Proibir acesso ao Painel de Controle e às configurações do PC"</strong> → botão direito → Editar.</li>
          <li>Marque <strong>Habilitado</strong>.</li>
        </ol>
        <p>Com a GPO configurada, falta vincular à OU RH_Senac:</p>
        <ol>
          <li>Selecione o contêiner RH_Senac → botão direito → "Criar um GPO neste domínio e fornecer um link para ele aqui...".</li>
          <li>Nome: <strong>RH_Bloquear_Painel_Controle</strong>; GPO de Início de Origem: <strong>Bloquear_PainelControle</strong> → OK.</li>
          <li>Para aplicar imediatamente: botão direito na GPO → marcar <strong>IMPOSTO</strong>, e no prompt rodar <code>GPUPDATE /FORCE</code>.</li>
        </ol>
        <p>Pronto: a GPO está publicada e aplicada a todos os usuários dentro da OU RH_Senac.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-7/03-editor-gpo-painel-controle.png", caption: "Editor do GPO: pasta Painel de Controle selecionada em Modelos Administrativos." },
        { src: "assets/img/sistema-operacional/aula-7/04-habilitar-proibir-painel.png", caption: "Configurando \"Proibir acesso ao Painel de Controle e às configurações do PC\" como Habilitado." },
        { src: "assets/img/sistema-operacional/aula-7/05-rh-senac-criar-gpo-link.png", caption: "Menu de contexto da OU RH_Senac: \"Criar um GPO neste domínio e fornecer um link para ele aqui...\"." },
        { src: "assets/img/sistema-operacional/aula-7/06-novo-gpo-nome-origem.png", caption: "Diálogo Novo GPO: nome RH_Bloquear_Painel_Controle, GPO de Início de Origem Bloquear_PainelControle." }
      ]
    }
  ],
  keyPoints: [
    "Autenticação verifica a identidade do usuário via operação criptografada antes de liberar acesso aos recursos da rede.",
    "Política de segurança é um ciclo contínuo: Proposta e implantação → Testes (ambiente de teste/UOT) → Monitoramento (produção) → Aperfeiçoamento.",
    "GPO é um objeto com uma ou mais políticas, armazenado no SYSVOL, vinculado a usuários/computadores via OU, site ou domínio.",
    "Toda configuração de GPO tem 3 estados: Não configurado (sem efeito), Habilitado (aplica) e Desabilitado (aplica o inverso).",
    "Hierarquia de aplicação da GPO: Site → Domínio → OU → sub-OU, de forma cumulativa (a ordem pode inverter o resultado final).",
    "Default Domain Policy cuida de senha/bloqueio/autenticação do domínio inteiro; Default Domain Controllers Policy cuida de auditoria e direitos de usuário — nenhuma das duas deve ser usada para outras finalidades.",
    "GPUPDATE /FORCE (prompt) ou Invoke-Gpupdate (PowerShell) força a aplicação imediata de uma GPO, sem esperar o ciclo de 90 minutos.",
    "Configuração do Computador aplica no boot; Configuração do Usuário aplica no logon."
  ]
};
