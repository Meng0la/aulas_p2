window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-1"] = {
  id: "aula-1",
  title: "Fundamentos de sistemas operacionais e máquinas virtuais",
  subtitle: "Funções e componentes do SO, classificação, conceitos de virtualização e instalação prática do laboratório (VMware + Windows Server 2019)",
  estimatedMinutes: 25,
  sections: [
    {
      heading: "O que é um sistema operacional",
      html: `
        <p>Em qualquer empresa existem computadores, impressoras, rede e internet — e é preciso entender como a tecnologia por trás disso funciona: <strong>hardware</strong> (computadores e periféricos) combinado com <strong>software</strong> (sistemas operacionais e outros programas). Essa combinação define a arquitetura de rede, os recursos de compartilhamento (disco, impressora, internet) e, principalmente, a segurança (quem acessa, quando acessa, o que pode fazer).</p>
        <p>Segundo Silberschatz, Galvin e Gagne (2000):</p>
        <blockquote class="callout">"Um sistema operacional é um programa que atua como intermediário entre o usuário e o hardware de um computador. O propósito de um sistema operacional é propiciar um ambiente no qual o usuário possa executar outros programas de forma conveniente, por esconder detalhes internos de funcionamento e eficiência, por procurar gerenciar de forma justa os recursos do sistema."</blockquote>
        <p>O tipo de SO escolhido determina tanto a segurança aplicada quanto os serviços disponíveis. Um Windows Home, por exemplo, não entrega o desempenho nem os recursos de segurança de um Windows Professional/Server — por isso entender bem o SO é o primeiro passo.</p>
      `
    },
    {
      heading: "Componentes de um SO e Sistemas Operacionais de Rede (SOR)",
      html: `
        <p>O SO gerencia um sistema complexo e tem várias funções. Uma delas é atuar como <strong>interface</strong> entre usuário e hardware, seja via <strong>SHELL</strong> (interpretador de comandos) ou <strong>GUI</strong> (graphical user interface — interface gráfica).</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-1/08-tela-principal.png", caption: "Exemplo de interface gráfica (GUI) — tela principal do VMware Workstation Player, usada ao longo do curso." }
      ]
    },
    {
      heading: "Sistemas Operacionais de Rede (SOR)",
      html: `
        <p>Um <strong>SOR</strong> serve múltiplos usuários ao mesmo tempo por meio de uma rede que compartilha recursos de hardware e software. Numa empresa, o SOR fica instalado em um servidor e conecta as estações via rede de computadores. Comparado a um SO doméstico, o SOR oferece:</p>
        <ul>
          <li>melhor segurança;</li>
          <li>aplicações de servidor (banco de dados, web etc.);</li>
          <li>armazenamento de dados centralizado;</li>
          <li>repositório local de contas de usuário;</li>
          <li>fila de impressão;</li>
          <li><strong>RAID</strong> (redundant array of inexpensive disks) — arranjo de gerenciamento de disco.</li>
        </ul>
      `
    },
    {
      heading: "Classificação dos SO: livres × proprietários",
      html: `
        <ul>
          <li><strong>SO livres:</strong> distribuição geralmente gratuita. Principal representante: Linux (Ubuntu, FreeBSD etc.). Por serem livres, o usuário tem acesso ao código-fonte e pode customizar sua própria versão.</li>
          <li><strong>SO proprietário:</strong> não disponibiliza o código-fonte e exige licença de uso. Em compensação, costuma ter manuseio mais fácil, instalação/configuração mais simples, mais compatibilidade de aplicativos e suporte do desenvolvedor.</li>
        </ul>
        <h3>Versões do Windows Server 2019</h3>
        <p>A Microsoft lançou versões para micro/pequenas empresas e para médio/grande porte:</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Versão</th><th>Perfil</th><th>Observações</th></tr></thead>
          <tbody>
            <tr><td>Essentials</td><td>Microempresa / pequeno porte</td><td>Interface simplificada, serviços em nuvem, sem direito a virtualização, limite de 25 contas de usuário.</td></tr>
            <tr><td>Standard</td><td>Médio porte</td><td>Todas as funções da versão incluídas; ambiente médio ou pouco virtualizado; limite de processador e CAL.</td></tr>
            <tr><td>Datacenter</td><td>Grande porte</td><td>Todas as funções, sem limite de virtualizações; limite de processador e CAL.</td></tr>
            <tr><td>Hyper-V Server</td><td>Médio/grande porte</td><td>Servidor dedicado de hipervisão de VMs — instalado por padrão como Núcleo do Servidor.</td></tr>
          </tbody>
        </table></div>
        <p>Neste curso usaremos a versão <strong>Datacenter (Desktop Experience)</strong>, para poder explorar todos os recursos.</p>
        <div class="callout"><strong>Para saber mais:</strong> dá para baixar o Windows Server 2019 gratuitamente por 180 dias no site da Microsoft; depois desse prazo é preciso licença.</div>
      `
    },
    {
      heading: "Máquina Virtual (VM)",
      html: `
        <p>A <strong>VM</strong> (Virtual Machine) é um software que administra entrada, saída, processamento, armazenamento e memória — se adaptando à necessidade do projeto, limitado pelos recursos do computador físico.</p>
        <ul>
          <li><strong>Host:</strong> o equipamento físico que roda a VM.</li>
          <li><strong>Guest:</strong> o sistema criado dentro da VM.</li>
          <li><strong>Hipervisor (ou hypervisor / VMM — virtual machine monitor):</strong> o software que gerencia a VM no host, alocando os recursos necessários.</li>
        </ul>
        <div class="callout">Principais plataformas de virtualização no mercado: <strong>Hyper-V</strong> (Microsoft), <strong>XenServer</strong> (Citrix), <strong>VMware</strong> (EMC) e <strong>VirtualBox</strong> (Oracle).</div>
      `
    },
    {
      heading: "Tipos de hipervisor: bare metal × hospedado",
      html: `
        <ul>
          <li><strong>Bare metal (tipo 1):</strong> não existe um SO entre o software de virtualização e o hardware — a VM roda direto, com recursos de hardware mais otimizados. Mais usado em servidores e data centers.</li>
          <li><strong>Hospedado (tipo 2):</strong> o hipervisor é instalado dentro de um SO host, que gerencia o hardware e aloca recursos tanto para a VM quanto para os demais serviços do host. Quanto mais VMs/aplicações rodando, mais lento cada aplicativo fica, já que os recursos são compartilhados.</li>
        </ul>
        <p>Neste curso usamos o modelo <strong>hospedado</strong>, já que a maioria dos alunos tem um notebook/desktop com SO já instalado (o bare metal é mais comum em servidores dedicados).</p>
      `
    },
    {
      heading: "Placa de rede na VM",
      html: `
        <p>O tipo de adaptador de rede escolhido configura e limita os serviços oferecidos pela VM:</p>
        <div class="table-wrap"><table>
          <thead><tr><th>Modo de rede</th><th>Acessa internet?</th><th>Comunica com o host?</th><th>Comunica com outras VMs?</th><th>Visível na rede do host?</th></tr></thead>
          <tbody>
            <tr><td>NAT</td><td>Sim</td><td>Sim</td><td>Não</td><td>Não</td></tr>
            <tr><td>Rede somente host</td><td>Não</td><td>Sim</td><td>Sim</td><td>Não</td></tr>
            <tr><td>Rede em ponte</td><td>Sim</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>
          </tbody>
        </table></div>
        <ul>
          <li><strong>NAT:</strong> usa os recursos de rede do host para acessar a rede externa; a VM fica isolada das demais por padrão.</li>
          <li><strong>Rede somente host:</strong> usada em ambientes de teste isolados — outras máquinas da LAN não se comunicam com as VMs.</li>
          <li><strong>Rede em ponte:</strong> conecta a VM à LAN do host (com ou sem fio) como se fosse outro equipamento físico da rede, permitindo conexão com qualquer host/VM da rede.</li>
        </ul>
      `
    },
    {
      heading: "Atividade 1 — Instalando o VMware Workstation Player no host",
      html: `
        <p>Baixe o VMware Workstation 15 Player no site oficial da VMware. No Windows, clique em "Avaliar o Workstation 15.5 Player para Windows" (arquivo de ~138 MB) e execute o instalador. As telas do assistente de instalação:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-1/01-vmware-welcome.png", caption: "a. Tela de boas-vindas do instalador — clique em Next." },
        { src: "assets/img/sistema-operacional/aula-1/02-license-agreement.png", caption: "b. Marque \"I accept the terms in the License Agreement\" e clique em Next." },
        { src: "assets/img/sistema-operacional/aula-1/03-custom-setup.png", caption: "c. Marque \"Enhanced keyboard driver\" (requer reinício) e clique em Next." },
        { src: "assets/img/sistema-operacional/aula-1/04-user-experience.png", caption: "d. Marque \"Check for product updates on startup\"; deixe desmarcado \"Join the VMware Customer Experience Improvement Program\"." },
        { src: "assets/img/sistema-operacional/aula-1/05-shortcuts.png", caption: "e. Marque as duas opções de atalho apresentadas (Desktop e Start Menu Folder)." },
        { src: "assets/img/sistema-operacional/aula-1/06-ready-install.png", caption: "f. Clique em Install para iniciar a instalação (pode demorar um pouco; ao final, reinicie o computador)." }
      ]
    },
    {
      heading: "Trabalhando com a VMware pela primeira vez",
      html: `
        <p>Após a instalação, abra o ícone da VMware no desktop. Escolha a primeira opção ("Use VMware Workstation Player for free for non-commercial use") para garantir o uso gratuito, depois clique em Continue e Finish.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-1/07-free-use.png", caption: "Escolha \"Use VMware Workstation 15 Player for free for non-commercial use\"." },
        { src: "assets/img/sistema-operacional/aula-1/08-tela-principal.png", caption: "Tela principal da VMware: menu principal, área com as VMs criadas e atalhos para iniciar/configurar uma VM." }
      ]
    },
    {
      heading: "Atividade 2 — Instalando e configurando o DC-01 (controlador de domínio)",
      html: `
        <p>Para as práticas do curso, instalamos um Windows Server 2019 chamado <strong>DC-01</strong> (domain control 01). Um <strong>controlador de domínio</strong> é um servidor que guarda uma cópia do banco de dados de diretórios do AD (o arquivo <strong>NTDS.DIT</strong>) e da pasta <strong>SYSVOL</strong> (que contém os modelos de GPOs — group policy objects). Essa VM será o nosso servidor central numa rede cliente-servidor.</p>
        <p>É necessário baixar a ISO do Windows Server no site da Microsoft (válida por 180 dias) e, na VMware, criar a VM:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-1/09-new-vm-wizard.png", caption: "a. Create a New Virtual Machine, escolhendo \"Installer disc image file (ISO)\" e localizando a ISO baixada." },
        { src: "assets/img/sistema-operacional/aula-1/10-select-guest-os.png", caption: "c. Selecione Microsoft Windows e a versão (Windows Server 2019, ou 2016 se não disponível)." },
        { src: "assets/img/sistema-operacional/aula-1/11-name-vm.png", caption: "d. Troque o nome da VM para DC-01 e escolha o local de instalação." },
        { src: "assets/img/sistema-operacional/aula-1/12-disk-capacity.png", caption: "e. Deixe o espaço em disco no padrão de 60 GB (pode ser alterado depois, se necessário)." },
        { src: "assets/img/sistema-operacional/aula-1/13-ready-create-vm.png", caption: "f. Na tela final, note que a VM aparece com só 512 MB de memória — insuficiente. Clique em Customize Hardware." },
        { src: "assets/img/sistema-operacional/aula-1/14-customize-memory.png", caption: "g. Em Memory, altere o valor para 2 GB (2.048 MB)." }
      ]
    },
    {
      heading: "Configurando o DC-01: nome e IP fixo",
      html: `
        <p>Com a VM configurada, ligue-a e instale o Server 2019 Datacenter (Desktop Experience), aceitando os termos.</p>
        <h3>Nomeando o servidor</h3>
        <ol>
          <li>Pressione <strong>Win + R</strong> para abrir o Executar.</li>
          <li>Digite <code>sysdm.cpl</code> e pressione Enter.</li>
          <li>Na guia "Nome do Computador", clique em Alterar e digite <strong>DC-01</strong> (o nome padrão vem algo como WIN-04AS3DN1U6Q).</li>
          <li>Confirme e reinicie quando solicitado.</li>
        </ol>
        <h3>Definindo o IP fixo</h3>
        <p>O servidor precisa de um IP fixo para se comunicar com os outros equipamentos:</p>
        <ol>
          <li>Win + R → digite <code>ncpa.cpl</code>.</li>
          <li>Duplo clique na placa de rede → Propriedades.</li>
          <li>Selecione "Protocolo TCP/IP Versão 4" → Propriedades e preencha:</li>
        </ol>
        <ul>
          <li>Endereço IP: <code>10.0.0.100</code></li>
          <li>Máscara de rede: <code>255.0.0.0</code></li>
          <li>Gateway padrão: <code>10.0.0.1</code></li>
          <li>DNS principal: <code>10.0.0.100</code></li>
          <li>DNS secundário: <code>8.8.8.8</code></li>
        </ul>
        <p>Por fim, troque a senha do administrador para <code>Senac@123</code>.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-1/15-executar.png", caption: "Caixa Executar — usada para abrir sysdm.cpl (propriedades do sistema) e ncpa.cpl (conexões de rede)." },
        { src: "assets/img/sistema-operacional/aula-1/16-status-ethernet.png", caption: "Status de Ethernet0 — tela de onde se acessa Propriedades para configurar o TCP/IP." }
      ]
    },
    {
      heading: "Atividade 3 — Instalando e configurando o SVR-01",
      html: `
        <p>Repita o processo da atividade 2 para criar um segundo servidor, com estas configurações:</p>
        <ul>
          <li>Nome da VM: <strong>SVR-01</strong></li>
          <li>SO: Windows Server 2019 Datacenter (Desktop Experience)</li>
          <li>Memória: 2.048 MB</li>
          <li>Disco: 50 GB</li>
          <li>Adaptador de rede: <strong>somente host</strong></li>
          <li>Senha: <code>Senac@123</code></li>
        </ul>
        <p>Configuração de TCP/IP do SVR-01:</p>
        <ul>
          <li>Endereço IP: <code>10.0.0.101</code></li>
          <li>Máscara de sub-rede: <code>255.0.0.0</code></li>
          <li>Gateway padrão: <code>10.0.0.1</code></li>
          <li>Servidor DNS preferencial: <code>10.0.0.100</code> (aponta para o DC-01)</li>
        </ul>
      `
    },
    {
      heading: "Atividade 4 — Instalando e configurando o CL1-01 (estação cliente)",
      html: `
        <p>Essa estação simula um <strong>cliente</strong> para testar as configurações feitas no servidor. Usamos <strong>Windows 10 Professional</strong>.</p>
        <div class="callout warn"><strong>Importante:</strong> precisa ser a versão Professional, pois essa máquina vai entrar no domínio — versões Starter/Home não conseguem ingressar em um domínio. Também é possível usar Windows 7 ou 8.1, mas alguns passos e políticas de grupo podem não funcionar igual.</div>
        <p>Configuração da VM:</p>
        <ul>
          <li>Nome da VM: <strong>CL1-01</strong></li>
          <li>SO: Windows 10 Professional</li>
          <li>Memória: 1.024 MB</li>
          <li>Disco: 50 GB</li>
          <li>Adaptador de rede: <strong>somente host</strong></li>
          <li>Senha: <code>Senac@123</code></li>
        </ul>
        <p>Configuração de TCP/IP do CL1-01:</p>
        <ul>
          <li>Endereço IP: <code>10.0.0.102</code></li>
          <li>Máscara de sub-rede: <code>255.0.0.0</code></li>
          <li>Gateway padrão: <code>10.0.0.1</code></li>
          <li>Servidor DNS preferencial: <code>10.0.0.100</code></li>
        </ul>
        <p>Ao final deste capítulo, o laboratório fica pronto com 3 máquinas: <strong>DC-01</strong> (controlador de domínio, 10.0.0.100), <strong>SVR-01</strong> (servidor auxiliar, 10.0.0.101) e <strong>CL1-01</strong> (cliente Windows 10, 10.0.0.102) — essas VMs serão reaproveitadas nas próximas aulas.</p>
      `
    }
  ],
  keyPoints: [
    "Um SO é o intermediário entre usuário e hardware; o tipo de SO escolhido define segurança e recursos disponíveis.",
    "SOR (Sistema Operacional de Rede) atende vários usuários via rede, com mais segurança, armazenamento centralizado e RAID.",
    "SO livre (ex.: Linux) dá acesso ao código-fonte; SO proprietário exige licença, mas é mais simples de usar.",
    "VM = software que gerencia os recursos; Host = máquina física; Guest = sistema dentro da VM; Hipervisor = software que gerencia a VM.",
    "Hipervisor bare metal (tipo 1) roda direto no hardware, sem SO intermediário; hospedado (tipo 2) roda dentro de um SO host.",
    "Modos de rede da VM: NAT (acessa internet, isolada de outras VMs), somente host (sem internet, comunica com outras VMs) e ponte (como se fosse outro equipamento físico da LAN).",
    "Laboratório do curso: DC-01 (controlador de domínio, 10.0.0.100), SVR-01 (servidor, 10.0.0.101) e CL1-01 (cliente Windows 10 Professional, 10.0.0.102), todos com senha Senac@123."
  ]
};
