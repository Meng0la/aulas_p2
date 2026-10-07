window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-2"] = {
  id: "aula-2",
  title: "Active Directory: domínios, grupos de trabalho e administração remota",
  subtitle: "Instalação do ADDS, domínio × workgroup, árvore/floresta/OU, Windows Server Core e gerenciamento remoto",
  estimatedMinutes: 28,
  sections: [
    {
      heading: "Decisões centralizadas × descentralizadas",
      html: `
        <p>Segurança não se resolve só com firewall: a infraestrutura de redes, o DNS, os computadores e os roteadores também não podem falhar. Este capítulo monta uma <strong>rede baseada em diretório</strong>, onde só quem foi convidado tem acesso aos recursos.</p>
        <p>Pense numa situação em que três chefes diferentes pedem, cada um à sua maneira, que uma parede seja pintada — sem conversarem entre si. É isso que acontece numa rede <strong>doméstica (home)</strong>: cada decisão fica em cada computador, então adicionar uma impressora exige ir máquina por máquina. Numa rede corporativa grande, isso é inviável e inseguro. Já numa rede <strong>profissional centralizada</strong>, o administrador configura uma vez e tudo se propaga automaticamente ao fazer login.</p>
      `
    },
    {
      heading: "1. Configuração do Active Directory Domain Services (ADDS)",
      html: `
        <p>O <strong>ADDS</strong> é uma estrutura informativa sobre objetos da rede (usuários, computadores, recursos), facilitando a localização e o uso desses recursos. O <strong>Active Directory (AD)</strong> usa um repositório central, na forma de um diretório hierárquico pesquisável armazenado em banco de dados, além de um método de aplicar configurações e segurança aos objetos da empresa (Thompson, 2017).</p>
        <p>Para acessar os recursos, o usuário precisa se <strong>autenticar</strong> (logon de rede) — o AD verifica essa autenticação. Já o <strong>domain service (domínio)</strong> é o limite administrativo e de segurança dado ao usuário quando ele faz logon na rede.</p>
        <h3>1.1 Instalando o ADDS no servidor (DC-01)</h3>
        <p>Com a VM DC-01 ligada, siga os passos do assistente para instalar os Serviços de Domínio do Active Directory:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/01-gerenciador-servidor.png", caption: "a. No Gerenciador do Servidor, clique em Adicionar funções e recursos." },
        { src: "assets/img/sistema-operacional/aula-2/02-antes-comecar.png", caption: "Tela \"Antes de começar\" do assistente — clique em Próximo." },
        { src: "assets/img/sistema-operacional/aula-2/03-tipo-instalacao.png", caption: "d. Escolha \"Instalação baseada em função ou recurso\" e clique em Próximo." },
        { src: "assets/img/sistema-operacional/aula-2/04-servidor-destino.png", caption: "e. Em \"Selecione um servidor no pool de servidores\", escolha DC-01 e clique em Próximo." },
        { src: "assets/img/sistema-operacional/aula-2/05-funcoes-adds.png", caption: "f. Marque Active Directory Domain Services." },
        { src: "assets/img/sistema-operacional/aula-2/06-adicionar-recursos.png", caption: "Ao marcar ADDS, aparece um aviso pedindo para Adicionar Recursos (ferramentas de administração necessárias)." },
        { src: "assets/img/sistema-operacional/aula-2/07-funcoes-dns.png", caption: "g. Marque também a opção DNS Server e clique em Próximo." },
        { src: "assets/img/sistema-operacional/aula-2/08-selecionar-recursos.png", caption: "h. Na tela de Selecionar recursos, deixe as opções padrão e clique em Próximo." },
        { src: "assets/img/sistema-operacional/aula-2/09-confirmar-instalacao.png", caption: "k. Em \"Confirmar seleções de instalação\", marque reiniciar automaticamente se necessário e finalize com Instalar." },
        { src: "assets/img/sistema-operacional/aula-2/10-bandeira-pendente.png", caption: "l. Após a instalação, uma bandeira com exclamação aparece no Gerenciador do Servidor — é o serviço pendente de promoção a controlador de domínio." },
        { src: "assets/img/sistema-operacional/aula-2/11-config-implantacao.png", caption: "m. Escolha \"Adicionar uma nova floresta\" e digite o nome do domínio: Senac.Local." },
        { src: "assets/img/sistema-operacional/aula-2/12-opcoes-controlador-dominio.png", caption: "n. Nível de funcionalidade da floresta/domínio e senha de Restauração dos Serviços de Diretório (DSRM)." }
      ]
    },
    {
      heading: "Finalizando a promoção a controlador de domínio",
      html: `
        <p>Nas telas seguintes: Opções de DNS (um aviso de erro aparece porque ainda não existe delegação de DNS — normal, clique em Próximo), Opções Adicionais (o NetBIOS do domínio fica como <strong>SENAC</strong>), Caminhos (local físico do NTDS e do SYSVOL) e, por fim, um resumo da configuração. Depois que "todas as verificações de pré-requisitos passarem com êxito", clique em Instalar. Ao final, o servidor está promovido e o domínio aparece já no login:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/13-opcoes-adicionais-netbios.png", caption: "Opções adicionais: o nome NetBIOS do domínio fica SENAC." },
        { src: "assets/img/sistema-operacional/aula-2/14-login-senac-administrator.png", caption: "Após a promoção, o login do servidor já mostra o domínio: SENAC\\Administrator." }
      ]
    },
    {
      heading: "2. Domínios × grupos de trabalho (workgroup)",
      html: `
        <p>Por padrão, ao instalar o Windows 10, o computador entra no <strong>workgroup</strong> — um modo pensado para compartilhar recursos num ambiente doméstico, onde cada computador tem sua própria lista de usuários, regras e segurança (Gouveia, 2015).</p>
        <p>Numa <strong>rede baseada em diretório</strong>, o gerenciamento é centralizado em servidores que compartilham a mesma base de dados, criando uma relação de confiança com o domínio. O administrador precisa autorizar a entrada de cada computador no domínio.</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Workgroup</th><th>Domínio</th></tr></thead>
          <tbody>
            <tr><td>Nenhuma administração centralizada</td><td>Administração centralizada</td></tr>
            <tr><td>Pouca segurança de dados/recursos</td><td>Segurança via AD</td></tr>
            <tr><td>Todo computador precisa estar na mesma rede</td><td>Computador pode se conectar remotamente</td></tr>
            <tr><td>Número de computadores limitado e pequeno</td><td>Servidor gerencia muitos computadores ao mesmo tempo</td></tr>
            <tr><td>Política de grupo complicada: configuração manual em cada estação</td><td>Políticas de grupo centralizadas para todo computador no domínio</td></tr>
          </tbody>
        </table></div>
        <h3>2.1 Colocando o cliente no domínio</h3>
        <p>Com o domínio Senac.Local criado, falta ingressar o cliente (CL1-01) nessa rede:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/15-propriedades-sistema.png", caption: "a. No CL1-01, abra sysdm.cpl, guia Nome do computador, e clique em Alterar." },
        { src: "assets/img/sistema-operacional/aula-2/16-alterar-nome-dominio.png", caption: "b. Selecione Domínio e digite Senac.local. Será pedido usuário (Administrador) e senha (Senac@123)." },
        { src: "assets/img/sistema-operacional/aula-2/17-bemvindo-dominio.png", caption: "Mensagem de confirmação: \"Bem-vindo ao domínio SENAC.LOCAL\". A máquina reinicia e já entra no domínio." }
      ]
    },
    {
      heading: "3. Árvore de domínio e unidades organizacionais (OU)",
      html: `
        <p>Ao instalar o AD, fica disponível uma estrutura de gerenciamento de usuários de rede:</p>
        <ul>
          <li><strong>Árvore de domínio:</strong> relacionamento hierárquico entre um ou mais domínios da empresa, compartilhando recursos num domínio de confiança.</li>
          <li><strong>Floresta:</strong> o conjunto de árvores de domínio.</li>
          <li><strong>OU (organization unit):</strong> um objeto contêiner dentro de um domínio, usado para representar estruturas lógicas da empresa — sua organização depende das necessidades de cada administrador de rede.</li>
        </ul>
        <p>Exemplo do capítulo: o Senac tem 60 unidades em São Paulo. Todas juntas formam uma floresta com namespace Senac.SP. Cada unidade (ex.: Osasco) pode ter vários domínios (acadêmico, administrativo) formando uma árvore; dentro do domínio acadêmico, professores e alunos podem ficar em OUs separadas, facilitando a administração e a aplicação de políticas de grupo (GPO).</p>
        <p>As OUs também permitem <strong>delegar tarefas administrativas</strong> a usuários ou grupos sem torná-los administradores completos do diretório.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/18-usuarios-computadores-ad.png", caption: "Console \"Usuários e Computadores do Active Directory\", onde se administram OUs, usuários e computadores do domínio SENAC.LOCAL." }
      ]
    },
    {
      heading: "4. Instalação e configuração do Windows Server Core",
      html: `
        <p>A interface gráfica (GUI) deixa o servidor mais lento. A versão <strong>Server Core</strong>, sem GUI, otimiza o equipamento e reduz o risco de ataques. Vantagens:</p>
        <ul>
          <li>menor uso de CPU, RAM e disco;</li>
          <li>menos vulnerabilidades e superfície de ataque menor (menos código instalado);</li>
          <li>menos patches de atualização, logo menos reinicializações.</li>
        </ul>
        <p>Algumas funções não são suportadas de forma independente no Core — vale consultar a documentação da Microsoft antes de planejar um servidor assim.</p>
        <h3>4.1 Instalando o Server sem a versão desktop</h3>
        <p>Configuração da VM: nome <strong>CORE1</strong>, Windows Server 2019 Datacenter, 1024 MB de memória, disco de 50 GB, adaptador somente host, senha Senac@123. TCP/IP: IP 10.0.0.103, máscara 255.0.0.0, gateway 10.0.0.1, DNS preferencial 10.0.0.100.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/19-escolha-so-core.png", caption: "c. Na instalação, escolha a versão Datacenter sem \"(Experiência Desktop)\" — essa é a versão Core." },
        { src: "assets/img/sistema-operacional/aula-2/20-definir-senha-core.png", caption: "h. Defina a senha Senac@123 (Nova senha e Confirmar senha)." },
        { src: "assets/img/sistema-operacional/aula-2/21-prompt-sconfig.png", caption: "i. Instalação concluída: você chega direto a um prompt de comando, sem interface gráfica." }
      ]
    },
    {
      heading: "5. Gerenciando o Server Core com sconfig",
      html: `
        <p>No prompt do Core-01, o comando <code>sconfig</code> abre um menu (tela azul) para configurar o servidor sem precisar de GUI — digite o número da opção desejada e pressione Enter:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/22-sconfig-menu.png", caption: "Menu principal do sconfig: domínio/grupo de trabalho, nome do computador, administrador local, config. de rede, data/hora, entre outros." }
      ]
    },
    {
      heading: "Renomeando, trocando IP, definindo DNS e ingressando no domínio via sconfig",
      html: `
        <ul>
          <li><strong>5.2 Renomear:</strong> no menu sconfig, digite <code>2</code>, depois o novo nome (<code>Core-01</code>). A VM pede reinicialização.</li>
          <li><strong>5.3 Trocar IP:</strong> digite <code>8</code> (Config. de Rede) → escolha o índice da placa de rede → digite <code>1</code> para definir o endereço → digite <code>E</code> para estático → informe IP <code>10.0.0.103</code>, máscara <code>255.0.0.0</code>, gateway <code>10.0.0.1</code>.</li>
          <li><strong>5.4 Definir DNS:</strong> dentro do mesmo menu de rede, digite <code>2</code> → IP do DNS preferencial <code>10.0.0.100</code>, alternativo <code>8.8.8.8</code>.</li>
          <li><strong>5.5 Ingressar no domínio:</strong> no menu principal, digite <code>1</code> (Domínio/Grupo de Trabalho) → digite <code>D</code> (ingressar no Domínio) → digite <code>Senac.Local</code> → usuário <code>Administrador</code>, senha <code>Senac@123</code>. Reinicie, e o Core-01 passa a fazer parte do domínio Senac.Local.</li>
        </ul>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/22b-sconfig-ingressar-dominio.png", caption: "Tela do sconfig mostrando a opção 'Ingressar no Domínio', com Senac.Local digitado." }
      ]
    },
    {
      heading: "6. Gerenciamento remoto de servidor",
      html: `
        <p>Um <strong>grupo de servidores</strong> é criado para otimizar o processamento ou direcionar estações para um servidor de aplicação — útil para monitorar processos em ambientes balanceados. Com o gerenciamento de serviços, é possível instalar serviços remotamente em outros servidores do domínio, e gerenciar esse grupo também remotamente. Vamos criar um grupo com o DC-01 e o Core-01:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-2/23-criar-grupo-servidores.png", caption: "No Gerenciador do Servidor do DC-01, escolha \"Criar um grupo de servidores\", nomeie Grupo_Servidores_Senac, selecione Active Directory e adicione o Core-01." },
        { src: "assets/img/sistema-operacional/aula-2/24-grupo-servidores-expandido.png", caption: "O grupo Grupo_Servidores_Senac aparece na lateral do Gerenciador do Servidor — a partir daqui dá para instalar recursos remotamente, sem abrir cada servidor individualmente." }
      ]
    }
  ],
  keyPoints: [
    "ADDS organiza objetos da rede (usuários, computadores, recursos) num diretório hierárquico central; o AD autentica o logon, e o domínio é o limite administrativo/de segurança associado a esse logon.",
    "Workgroup = administração descentralizada, cada PC com suas regras; Domínio = administração centralizada via AD, com políticas de grupo e segurança unificadas.",
    "Árvore de domínio = hierarquia de domínios; Floresta = conjunto de árvores; OU = contêiner lógico dentro de um domínio, usado para organizar e delegar administração.",
    "Windows Server Core roda sem interface gráfica: menos recursos consumidos, menor superfície de ataque, menos patches — mas administração via prompt/sconfig.",
    "sconfig é o menu de configuração do Server Core: nome do servidor (opção 2), rede/IP (opção 8), e ingressar em domínio (opção 1, depois D).",
    "Grupos de servidores no Gerenciador do Servidor permitem administrar vários servidores do domínio remotamente, sem precisar abrir cada um individualmente.",
    "Laboratório deste capítulo: domínio Senac.Local criado no DC-01 (10.0.0.100), CL1-01 e Core-01 (10.0.0.103) ingressados no domínio."
  ]
};
