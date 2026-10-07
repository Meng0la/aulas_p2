window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-4"] = {
  id: "aula-4",
  title: "Serviços de rede: DHCP e DNS",
  subtitle: "Como funciona a concessão automática de IP (DHCP) e a resolução de nomes (DNS)",
  estimatedMinutes: 22,
  sections: [
    {
      heading: "Por que automatizar o IP e os nomes de rede",
      html: `
        <p>Administrar um computador é fácil — mas e cem computadores? Cada equipamento numa rede precisa de uma identificação, o <strong>IP (internet protocol)</strong>, parecido com um CPF. Decorar e configurar manualmente o IP de cada máquina é inviável em escala. Para isso existe o <strong>DHCP</strong>; e para não precisar decorar números de IP, existe o <strong>DNS</strong>, que dá nomes amigáveis aos endereços.</p>
      `
    },
    {
      heading: "1. O que é DHCP",
      html: `
        <p>Em ambientes pequenos é comum fixar o IP manualmente (ex.: 192.168.0.100) — mas isso é repetitivo e inviável em ambiente corporativo com muitos equipamentos. O <strong>DHCP (dynamic host configuration protocol)</strong> é o principal meio de distribuição automática de configurações de rede para os clientes (Thompson, 2017), sendo essencial também para dispositivos móveis que mudam de rede o tempo todo.</p>
        <h3>1.2 Como funciona: as 4 etapas da concessão (DORA)</h3>
        <p>O DHCP funciona por <strong>concessão</strong> (lease), com duração padrão de <strong>8 dias</strong> para conexões por cabo e <strong>3 dias</strong> para Wi-Fi. O computador precisa ter "obter IP automaticamente" habilitado. O processo tem 4 etapas:</p>
        <ol>
          <li><strong>DHCPDISCOVER:</strong> o cliente transmite esse pacote para a rede, procurando um servidor DHCP.</li>
          <li><strong>DHCPOFFER:</strong> o servidor DHCP responde oferecendo um endereço.</li>
          <li><strong>DHCPREQUEST:</strong> o cliente aceita a oferta mais rápida (do servidor mais próximo) e transmite esse pacote, informando qual oferta aceitou — importante quando há mais de um servidor DHCP na rede.</li>
          <li><strong>DHCPACK:</strong> o servidor escolhido grava o IP no seu banco de dados e confirma com esse pacote.</li>
        </ol>
        <div class="callout">Mnemônico comum para decorar a ordem: <strong>D.O.R.A.</strong> — Discover, Offer, Request, Acknowledge.</div>
      `
    },
    {
      heading: "1.3 Renovação do IP",
      html: `
        <p>Quando a concessão atinge <strong>50%</strong> do tempo de validade, o cliente solicita renovação automaticamente, em segundo plano (manda DHCPREQUEST, recebe DHCPACK). Se não conseguir renovar aos 50%, tenta de novo aos <strong>87,5%</strong>; se ainda não conseguir, tenta aos <strong>100%</strong>; se mesmo assim falhar, solicita uma concessão em outra sub-rede através do Gateway.</p>
      `
    },
    {
      heading: "1.4 Instalando o serviço de DHCP no DC-01",
      html: `
        <p>No Gerenciador do Servidor: Adicionar funções ou recursos → Instalação baseada em função ou recurso → selecionar o servidor DC-01.Senac.local → marcar a função <strong>Servidor DHCP</strong> → Próximo nas telas seguintes → Instalar.</p>
        <div class="callout">Importante: instalar o serviço de DHCP não é o mesmo que configurar a concessão — depois de instalado, ainda é preciso configurar o escopo.</div>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-4/01-tipo-instalacao.png", caption: "Assistente de Adição de Funções: Instalação baseada em função ou recurso." },
        { src: "assets/img/sistema-operacional/aula-4/02-servidor-destino.png", caption: "Seleção de Servidor de destino: DC-01.SENAC.LOCAL." },
        { src: "assets/img/sistema-operacional/aula-4/03-funcoes-dhcp-dns.png", caption: "Seleção de funções do servidor: Servidor DHCP e Servidor DNS marcados." },
        { src: "assets/img/sistema-operacional/aula-4/04-servidor-dhcp-info.png", caption: "Tela informativa sobre o Servidor DHCP antes de instalar." }
      ]
    },
    {
      heading: "1.5 Escopo de DHCP",
      html: `
        <p>Instalar o serviço não é suficiente: é preciso configurar o <strong>escopo</strong>, o método principal para configurar as opções de um grupo de endereços IP (baseado numa sub-rede). Planejamento de um escopo:</p>
        <ul>
          <li><strong>Nome do escopo:</strong> identifica o escopo — evite nomes genéricos. Ex.: LabSenac.</li>
          <li><strong>Intervalo do escopo:</strong> a faixa de IP oferecida aos usuários (ex.: 10.0.0.100–10.0.0.200) — a propriedade mais sensível, já que um erro aqui compromete a segurança da rede.</li>
          <li><strong>Máscara de sub-rede:</strong> subdivide a rede, reduzindo o tráfego (neste curso, 255.0.0.0).</li>
          <li><strong>Exclusões de IP:</strong> endereços reservados que o DHCP não distribui (ex.: 10.0.0.101) — usados para impressoras, roteador e serviços administrativos.</li>
          <li><strong>Duração da concessão:</strong> tempo de validade do IP — mais curta para dispositivos que ficam pouco tempo conectados, mais longa para desktops e impressoras fixos.</li>
        </ul>
      `
    },
    {
      heading: "1.6 DHCP IPv6",
      html: `
        <p>O IPv6 usa um protocolo próprio, o <strong>DHCPv6</strong>, e é formado por 128 bits agrupados em 8 campos hexadecimais separados por dois-pontos (diferente do IPv4). O planejamento segue as mesmas propriedades do IPv4: nome do escopo, intervalo, máscara, exclusões e duração.</p>
        <p>Para ver a configuração de IP (incluindo IPv6) de um servidor, use <code>ipconfig /all</code> no PowerShell; para ver as interfaces de rede disponíveis e seu índice, use <code>Get-NetIPInterface</code>.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-4/05-ipconfig-all.png", caption: "Comando ipconfig /all no PowerShell, mostrando IPv4, IPv6 e o endereço físico (MAC Address) do DC-01." },
        { src: "assets/img/sistema-operacional/aula-4/06-get-netipinterface.png", caption: "Comando Get-NetIPInterface, listando as interfaces de rede disponíveis e seus índices." },
        { src: "assets/img/sistema-operacional/aula-4/07-dhcp-opcoes-servidor-ipv6.png", caption: "Console do DHCP mostrando a opção IPv6 disponível para configuração, ao lado do IPv4." }
      ]
    },
    {
      heading: "1.7 Reserva de DHCP",
      html: `
        <p>Depois de excluir alguns IPs do escopo (para impressoras, roteador etc.), ainda é preciso atribuí-los de forma fixa a esses equipamentos-chave. Deixar o DHCP automático para uma impressora compartilhada é arriscado: a cada renovação ela pode receber outro IP, obrigando a reconfigurar todos os hosts que a acessam.</p>
        <p>A <strong>reserva de DHCP</strong> resolve isso: é um IP válido e específico, dentro do escopo, reservado para um dispositivo determinado. Mesmo que o escopo fique sem endereços livres, o IP reservado continua garantido para aquele dispositivo.</p>
        <p>Para reservar um IP, é preciso ter o <strong>MAC Address</strong> (media access control — endereço físico, hexadecimal e único no mundo) do equipamento. Exemplo do capítulo: o DC-01 tem MAC <code>00-0C-29-82-45-61</code>.</p>
      `
    },
    {
      heading: "2. Serviços de DNS",
      html: `
        <p>Com cem computadores, cada um com IP e MAC Address, seria impossível decorar tudo. O <strong>DNS (domain name system)</strong> resolve esse problema, traduzindo nomes legíveis para endereços IP numéricos necessários à comunicação TCP/IP. O ADDS depende muito do DNS para resolver endereços e localizar hosts na rede.</p>
        <p>O DNS resolve <strong>FQDN</strong> (fully qualified domain name) e outros nomes de host para IP. Todo Windows Server já inclui um DNS, com base de dados normalmente criada junto com o ADDS.</p>
        <p>Exemplo: o comando <code>ping -a 10.0.0.100</code> retorna o nome do host (FQDN) correspondente àquele IP — bem mais amigável que decorar números. Com o DNS reverso configurado, <code>ping -a DC-01</code> faz o caminho inverso, mostrando o IP daquele nome.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-4/08-ping-a.png", caption: "Comando ping -a 10.0.0.100, retornando o nome DC-01.SENAC.LOCAL." }
      ]
    },
    {
      heading: "2.1 Zona DNS e tipos de pesquisa",
      html: `
        <p>A base do DNS organiza as informações da rede numa estrutura hierárquica de domínios (como uma árvore invertida, do domínio raiz até os domínios filhos) — essa estrutura é o <strong>namespace DNS</strong>. A <strong>zona DNS</strong> é a parte do namespace que contém os registros para responder às consultas de um domínio. Existem dois tipos principais:</p>
        <ul>
          <li><strong>Pesquisa direta:</strong> resolve nomes de host para endereços IP.</li>
          <li><strong>Pesquisa inversa:</strong> resolve endereços IP para nomes de domínio.</li>
        </ul>
      `
    },
    {
      heading: "2.2 Comandos úteis de DNS",
      html: `
        <p>Quando a resolução de nomes para de funcionar, o problema costuma estar no DNS. Dois comandos úteis:</p>
        <ul>
          <li><code>ipconfig /displaydns</code>: mostra o cache local de resolução de nomes DNS do computador.</li>
          <li><code>ipconfig /flushdns</code>: limpa esse cache — geralmente resolve travamentos de resolução de DNS.</li>
        </ul>
        <div class="callout">Curiosidade do capítulo: o IP <code>8.8.8.8</code> pertence ao google.com — é bem mais fácil lembrar "google.com" do que esse número, e é exatamente esse o papel do DNS.</div>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-4/09-ipconfig-displaydns.png", caption: "Saída do comando ipconfig /displaydns, mostrando registros em cache do DNS." }
      ]
    }
  ],
  keyPoints: [
    "DHCP distribui IP automaticamente por concessão (lease): 8 dias em cabo, 3 dias em Wi-Fi, por padrão.",
    "As 4 etapas da negociação DHCP: DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK.",
    "Renovação automática do IP ocorre aos 50% da concessão; se falhar, tenta aos 87,5%, depois 100%, depois solicita nova concessão em outra sub-rede via Gateway.",
    "Escopo de DHCP = nome, intervalo de IP, máscara de sub-rede, exclusões de IP e duração da concessão.",
    "Reserva de DHCP fixa um IP a um dispositivo específico via MAC Address — essencial para impressoras e equipamentos compartilhados.",
    "DNS traduz nomes (FQDN) em IPs e vice-versa; zona de pesquisa direta resolve nome→IP, zona de pesquisa inversa resolve IP→nome.",
    "ipconfig /all mostra a configuração de IP; ipconfig /displaydns mostra o cache DNS; ipconfig /flushdns limpa esse cache."
  ]
};
