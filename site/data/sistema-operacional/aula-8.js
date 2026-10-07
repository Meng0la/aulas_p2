window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-8"] = {
  id: "aula-8",
  title: "AppLocker e VPN no Windows Server",
  subtitle: "AppLocker, Firewall (regra de ICMP), RDP (área de trabalho remota) e VPN de acesso remoto",
  estimatedMinutes: 32,
  sections: [
    {
      heading: "Visão geral: camadas de segurança",
      html: `
        <p>Segurança de rede é a combinação de várias camadas de proteção. Depois de ADDS e GPO, este capítulo completa o quadro com: <strong>AppLocker</strong> (controla quais programas rodam), <strong>Firewall</strong> (controla o tráfego de rede), <strong>RDP</strong> (acesso remoto administrativo) e <strong>VPN</strong> (conexão segura para home office).</p>
      `
    },
    {
      heading: "1. Conceitos de AppLocker",
      html: `
        <p>O <strong>AppLocker</strong> evoluiu das políticas de restrição de software do Windows Server 2003, aprimorado a partir do Server 2008 R2. Ele impede a execução de <strong>todos</strong> os aplicativos executáveis, exceto os que estiverem especificamente permitidos numa lista — o inverso de uma lista de bloqueio simples. Controla executáveis, scripts e DLLs. Usado junto com a GPO, o AppLocker cobre áreas que as políticas de grupo tradicionais não alcançam.</p>
        <p>Funcionalidades do AppLocker: definir regras por tipo de arquivo, por caminho, usar cmdlets do PowerShell, criar e testar regras num servidor intermediário antes de ir para produção, atribuir regras a um grupo de segurança ou usuário individual, usar modo somente auditoria para entender o impacto antes de aplicar, e criar exceções às regras.</p>
      `
    },
    {
      heading: "1.1 Aplicando o AppLocker — criando a GPO",
      html: `
        <p>Prática: criar uma regra de negação para impedir a execução do <strong>WordPad</strong>. No DC-01:</p>
        <ol>
          <li>Win + R → <code>gpmc.msc</code>.</li>
          <li>No domínio Senac.Local → Objetos de Política de Grupo → botão direito → Novo → nome <strong>Regras_do_AppLocker</strong>.</li>
          <li>Editar a GPO: Configurações do Computador → Políticas → Configurações do Windows → Configurações de Segurança → <strong>Políticas de Controle de Aplicativo</strong> → AppLocker.</li>
        </ol>
      `
    },
    {
      heading: "1.2 Criando o bloqueio do WordPad",
      html: `
        <p>Dentro do AppLocker, clique direito em <strong>Regras Executáveis</strong> → Criar Nova Regra:</p>
        <ol>
          <li><strong>Permissões:</strong> escolha <strong>Negar</strong> (a outra opção é Permitir).</li>
          <li><strong>Condições:</strong> escolha <strong>Fornecedor</strong> (identifica o arquivo pelas propriedades digitais dele).</li>
          <li><strong>Fornecedor:</strong> use Procurar para localizar o executável — no exemplo, <code>C:\\Program Files\\windows nt\\accessories\\wordpad.exe</code>.</li>
          <li><strong>Exceções:</strong> deixe em branco (ou adicione usuários que devem ficar de fora da regra).</li>
          <li><strong>Nome e Descrição:</strong> dê o nome <strong>WORDPAD</strong> → Criar → confirme com Sim.</li>
        </ol>
        <p>A regra aparece marcada como <strong>Negar</strong>. Para ela valer, a GPO precisa estar vinculada a uma OU (como vimos no capítulo anterior).</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/01-applocker-criar-nova-regra.png", caption: "Políticas de Controle de Aplicativo → AppLocker → Regras Executáveis → Criar Nova Regra." },
        { src: "assets/img/sistema-operacional/aula-8/02-applocker-permissoes-negar.png", caption: "Tela Permissões: opção Negar selecionada." },
        { src: "assets/img/sistema-operacional/aula-8/03-applocker-condicoes-fornecedor.png", caption: "Tela Condições: opção Fornecedor selecionada." },
        { src: "assets/img/sistema-operacional/aula-8/04-applocker-caminho-arquivo.png", caption: "Tela Fornecedor: caminho até o wordpad.exe, localizado via Procurar." },
        { src: "assets/img/sistema-operacional/aula-8/05-applocker-nome-wordpad.png", caption: "Tela final: nome da regra WORDPAD." }
      ]
    },
    {
      heading: "2. Conceitos de Firewall",
      html: `
        <p>O <strong>Firewall</strong> ("parede de fogo") é o principal ponto de defesa entre a rede privada e a rede pública, controlando mensagens e barrando tudo que não está previsto em suas regras — além de guardar logs detalhados de usuários e tráfego (Thompson, 2017).</p>
        <p>Para acessar: tecla Win → digite "Firewall" → <strong>Windows Defender Firewall com Segurança Avançada</strong>. Existem três perfis de configuração:</p>
        <ul>
          <li><strong>Perfil domínio:</strong> para ligações entre hosts do domínio.</li>
          <li><strong>Perfil particular:</strong> para hosts internos que não fazem parte do domínio.</li>
          <li><strong>Perfil público:</strong> para ligações externas.</li>
        </ul>
      `
    },
    {
      heading: "2.1 Criando uma regra de exceção para ICMP (permitir PING)",
      html: `
        <p>Por padrão, o Firewall do Windows Server 2019 já vem configurado bloqueando o <strong>ICMP</strong> — ou seja, nenhuma estação consegue dar PING no servidor. Para liberar:</p>
        <ol>
          <li>Botão direito em <strong>Regras de Entrada</strong> → Nova Regra.</li>
          <li><strong>Tipo de regra:</strong> Personalizado.</li>
          <li><strong>Programa:</strong> Todos os programas.</li>
          <li><strong>Protocolo e Portas:</strong> Tipo de protocolo <strong>ICMPv4</strong> → botão Personalizar.</li>
          <li>Em Personalizar Configurações ICMP: escolha <strong>Todos os tipos de ICMP</strong> → OK.</li>
          <li><strong>Escopo:</strong> Qualquer endereço IP (local e remoto).</li>
          <li><strong>Ação:</strong> Permitir a conexão.</li>
          <li><strong>Perfil:</strong> deixe Domínio, Particular e Público marcados.</li>
          <li><strong>Nome:</strong> <code>Regra PING</code> → Concluir.</li>
        </ol>
        <p>Para testar: no CLI-01, prompt de comando → <code>PING 10.0.0.100</code> (IP do DC-01).</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/06-firewall-nova-regra-entrada.png", caption: "Regras de Entrada → Nova Regra." },
        { src: "assets/img/sistema-operacional/aula-8/07-firewall-tipo-personalizada.png", caption: "Tipo de regra: Personalizada." },
        { src: "assets/img/sistema-operacional/aula-8/08-firewall-protocolo-icmpv4.png", caption: "Protocolo e Portas: ICMPv4 selecionado, botão Personalizar." },
        { src: "assets/img/sistema-operacional/aula-8/09-firewall-icmp-todos-tipos.png", caption: "Personalizar Configurações ICMP: Todos os tipos de ICMP." },
        { src: "assets/img/sistema-operacional/aula-8/10-firewall-acao-permitir.png", caption: "Ação: Permitir a conexão." },
        { src: "assets/img/sistema-operacional/aula-8/11-firewall-nome-regra-ping.png", caption: "Nome final da regra: Regra PING." }
      ]
    },
    {
      heading: "3. Serviço de RDP (remote desktop protocol)",
      html: `
        <p>O <strong>RDP</strong> é um protocolo proprietário da Microsoft para conectar-se a outro computador usando interface gráfica através da rede. Oferece canais virtuais separados para dados de apresentação, dispositivos em série e dados altamente criptografados (mouse e teclado) (Thompson, 2017).</p>
        <div class="callout warn">O RDP abre a porta <strong>3389</strong>, tornando-a pública para a "área de trabalho remota". Use com moderação e monitore essa porta para evitar tentativas de invasão.</div>
        <h3>3.1 Implantando o RDP</h3>
        <p>No DC-01: Gerenciador do Servidor → Servidor Local → clique no status "Desconhecido" de <strong>Área de trabalho remota</strong> → nas Propriedades do Sistema, guia Remoto, marque <strong>"Permitir conexões remotas com este computador"</strong> → use "Selecionar usuário" para adicionar o Administrador (se necessário).</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/12-rdp-propriedades-remoto.png", caption: "Propriedades do Sistema, guia Remoto: \"Permitir conexões remotas com este computador\" marcado." }
      ]
    },
    {
      heading: "4. Serviço de VPN (virtual private network)",
      html: `
        <p>Para home office, o administrador costuma montar uma <strong>VPN</strong>. O serviço emula um canal ponto a ponto: os dados são encapsulados, prefixados com um cabeçalho de roteamento e <strong>criptografados</strong>, garantindo que pacotes interceptados na rede fiquem ilegíveis sem a chave correta.</p>
        <p>Dois tipos de VPN:</p>
        <ul>
          <li><strong>VPN de acesso remoto:</strong> a mais comum — um funcionário fora da empresa acessa a rede privada usando uma rede pública (como a internet). É o tipo demonstrado neste capítulo.</li>
          <li><strong>VPN site a site:</strong> conexão roteador-a-roteador, ligando duas partes de uma rede privada (normalmente com link de WAN dedicado).</li>
        </ul>
        <h3>4.1 Protocolos de comunicação da VPN</h3>
        <ul>
          <li><strong>PPTP:</strong> desde o Windows 95, compatível com praticamente qualquer SO, criptografa e encapsula tráfego multiprotocolo.</li>
          <li><strong>L2TP/IPsec:</strong> sucessor do PPTP, uma das conexões VPN mais seguras que existem.</li>
          <li><strong>SSTP:</strong> encapsula via HTTPS na porta TCP 443, passando por firewalls/proxies que bloqueariam PPTP e L2TP/IPsec.</li>
        </ul>
      `
    },
    {
      heading: "4.2 Instalando a função de VPN no DC-01",
      html: `
        <p>Gerenciador do Servidor → Adicionar funções e recursos → Instalação baseada em função ou recurso → confirmar servidor de destino DC-01 → marcar a função <strong>Acesso Remoto</strong> → não selecionar recursos extras → Próximo na tela informativa sobre Acesso Remoto → em Serviços de Função, marcar <strong>DirectAccess e VPN (RAS)</strong> → Próximo na Função Servidor Web (IIS) e nos serviços de função dela → Confirmar seleções → Instalar.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/13-vpn-selecionar-acesso-remoto.png", caption: "Selecionar funções de servidor: Acesso Remoto marcado." },
        { src: "assets/img/sistema-operacional/aula-8/14-vpn-acesso-remoto-info.png", caption: "Tela informativa sobre a função Acesso Remoto (DirectAccess, VPN e Proxy de Aplicativo Web)." },
        { src: "assets/img/sistema-operacional/aula-8/15-vpn-directaccess-vpn-ras.png", caption: "Serviços de função: DirectAccess e VPN (RAS) marcado." }
      ]
    },
    {
      heading: "Configurando e habilitando o acesso remoto",
      html: `
        <p>Após instalar, configure o serviço: Gerenciador do Servidor → Notificações → "Abrir o Assistente de Guia de Introdução" → em Configurar Assistente Remoto, escolha <strong>Implantar somente VPN</strong>.</p>
        <p>Isso abre o console de <strong>Roteamento e Acesso Remoto</strong> — o DC-01 aparece com o serviço parado. Botão direito no DC-01 → <strong>Configurar e Habilitar Roteamento e Acesso Remoto</strong> → no assistente, escolha <strong>Configuração personalizada</strong> → marque <strong>Acesso VPN</strong> → Concluir.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/16-vpn-implantar-somente-vpn.png", caption: "Configurar Acesso Remoto: opção \"Implantar somente VPN\"." },
        { src: "assets/img/sistema-operacional/aula-8/17-vpn-configuracao-opcoes.png", caption: "Assistente de Configuração: opções de serviço (acesso remoto dial-up, NAT, VPN+NAT, conexão entre redes privadas, configuração personalizada)." },
        { src: "assets/img/sistema-operacional/aula-8/18-vpn-config-personalizada-acesso-vpn.png", caption: "Configuração personalizada: Acesso VPN marcado." }
      ]
    },
    {
      heading: "Definindo a faixa de IP e liberando um usuário",
      html: `
        <p>Com o serviço ativo (seta verde no console), falta configurar a faixa de IP que será atribuída aos clientes VPN — não precisa estar na mesma faixa do DHCP da rede interna; pode-se usar inclusive IPs públicos das filiais. Exemplo do capítulo: <strong>10.0.1.1 até 10.0.1.5</strong>.</p>
        <ol>
          <li>Botão direito no DC-01 → Propriedades → guia <strong>IPv4</strong> → "Pool de endereços estáticos" → adicionar o intervalo 10.0.1.1–10.0.1.5.</li>
          <li>No console de Usuários e Computadores do AD, nas Propriedades do usuário que vai acessar (ex.: Caio Pimenta) → guia <strong>Discagem</strong> → Permissão de Acesso à Rede → <strong>Permitir acesso</strong>.</li>
        </ol>
        <h3>4.3 Habilitando o firewall para a VPN</h3>
        <p>Tecla Win → "Firewall" → "Permitir um aplicativo pelo firewall do Windows" → localizar <strong>Roteamento e Acesso Remoto</strong> → marcar Domínio, Privada e Público → OK.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/19-vpn-pool-enderecos-estaticos.png", caption: "Propriedades de DC-01, guia IPv4: Pool de endereços estáticos de 10.0.1.1 a 10.0.1.5." },
        { src: "assets/img/sistema-operacional/aula-8/20-vpn-usuario-discagem-permitir.png", caption: "Propriedades do usuário Caio Pimenta, guia Discagem: Permitir acesso." },
        { src: "assets/img/sistema-operacional/aula-8/21-vpn-firewall-aplicativos-permitidos.png", caption: "Aplicativos permitidos pelo firewall: Roteamento e Acesso Remoto liberado nos 3 perfis." }
      ]
    },
    {
      heading: "4.4 Testando a VPN no cliente",
      html: `
        <p>No CLI-01 (simulando uma máquina fora da rede, com IP 172.16.0.120 nesse teste):</p>
        <ol>
          <li>Ícone de rede na barra de tarefas → Abrir Central de Redes e Compartilhamento → "Configurar uma nova conexão ou rede".</li>
          <li>Escolha <strong>Conectar a um local de trabalho</strong> → Avançar.</li>
          <li>Escolha <strong>Usar minha conexão com a internet (VPN)</strong>.</li>
          <li>Digite o endereço do DC-01 (<code>10.0.0.100</code>) e nomeie a conexão como <strong>VPN_DC-01</strong> → Criar.</li>
          <li>Conecte-se — o cliente passa a fazer um túnel seguro (tunelamento) com o DC-01.</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-8/22-vpn-cliente-conectar-local-trabalho.png", caption: "Configurar uma Conexão ou Rede: \"Conectar a um local de trabalho\" selecionado." },
        { src: "assets/img/sistema-operacional/aula-8/23-vpn-cliente-endereco-internet.png", caption: "Endereço da internet: 10.0.0.100, nome da conexão VPN_DC-01." },
        { src: "assets/img/sistema-operacional/aula-8/24-vpn-cliente-conectando.png", caption: "Conexão VPN_DC-01 estabelecendo o túnel: \"Conectando a 10.0.0.100\"." }
      ]
    }
  ],
  keyPoints: [
    "AppLocker bloqueia TUDO por padrão, liberando só o que está explicitamente permitido — complementa a GPO em áreas que ela não alcança.",
    "Regra do AppLocker: Permissões (Permitir/Negar) → Condições (ex.: Fornecedor) → caminho do arquivo → Exceções → Nome.",
    "Firewall bloqueia ICMP por padrão no Windows Server — é preciso criar uma regra de entrada personalizada, protocolo ICMPv4, ação Permitir, para liberar o PING.",
    "RDP usa a porta 3389 para área de trabalho remota — útil para administração, mas exige monitoramento por abrir uma porta pública.",
    "VPN de acesso remoto conecta um usuário externo à rede privada via internet; VPN site a site conecta duas redes privadas via roteadores.",
    "Protocolos de VPN: PPTP (mais antigo e compatível), L2TP/IPsec (mais seguro), SSTP (usa HTTPS/443 para atravessar firewalls).",
    "Para VPN funcionar no Windows Server: instalar função Acesso Remoto (DirectAccess e VPN/RAS) → Configurar e Habilitar Roteamento e Acesso Remoto → definir pool de IPs estáticos → permitir acesso de discagem do usuário → liberar no firewall.",
    "O pool de IP da VPN não precisa estar na mesma faixa do DHCP da rede local — pode até usar IPs públicos de filiais."
  ]
};
