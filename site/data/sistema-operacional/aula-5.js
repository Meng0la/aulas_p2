window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-5"] = {
  id: "aula-5",
  title: "Roteamento em LAN, discos e RAID",
  subtitle: "Como funciona um roteador, tipos de disco e interfaces, gerenciamento de volumes e arranjos RAID (0, 1, 5, 10, 50)",
  estimatedMinutes: 30,
  sections: [
    {
      heading: "1. Conceitos de roteamento em uma LAN",
      html: `
        <p>Sem comunicação entre equipamentos, não adianta ter o melhor computador do mundo. O <strong>roteamento</strong> é a ponte que leva a comunicação rapidamente até o destino. O principal equipamento para conectar uma rede a outra é o <strong>roteador</strong>: ele encaminha pacotes e determina o melhor caminho da origem até o destino, examinando o endereço de destino de cada pacote.</p>
        <p>Um roteador é, na prática, um computador especializado em roteamento e switching — sem placa de vídeo ou som para usuário final, mas com portas e placas de rede específicas para interconectar redes diferentes.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig1-roteadores-rede.png", caption: "Figura 1 – Matriz em São Paulo conectada à Filial em Osasco através de roteadores, passando pela internet (nuvem)." }
      ]
    },
    {
      heading: "2. Discos: interfaces e desempenho",
      html: `
        <p>Antes de comprar um disco, é preciso entender sua <strong>interface</strong> (o padrão/protocolo físico de comunicação) e seu desempenho, medido em <strong>IOPS</strong> (input/output operations per second — operações de entrada/saída por segundo). Quanto maior o IOPS, mais eficiente o dispositivo.</p>
        <p>IOPS = 1.000 / (latência rotacional + latência de busca), onde a latência rotacional é o tempo para o disco girar até o ponto de leitura, e a latência de busca é o tempo para a cabeça de leitura se deslocar até o local da informação.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig2-tipos-hd-iops.png", caption: "Figura 2 – Tipos de HD/interface e seus valores típicos de IOPS: IDE 5.400RPM (50-80), SCSI 7.200RPM (75-100), SATA 7.200RPM (130-150), SAS 15.000RPM (175-210), SSD (1.500 IOPS)." }
      ]
    },
    {
      heading: "Tipos de interface de disco",
      html: `
        <ul>
          <li><strong>IDE (integrated drive electronics):</strong> surgiu em 1986 (padrão PATA); cada porta IDE conectava até 4 dispositivos (HD ou CD-ROM), configurados via jumper como master, slave ou cable select.</li>
          <li><strong>SCSI (small computer system interface):</strong> parecido com IDE, mas exclusivo para servidores; a última versão (Ultra 5, 2003) chegava a 640 MB/s.</li>
          <li><strong>SAS (serial attached SCSI):</strong> sucessor serial do SCSI, full-duplex, 15.000 RPM, ~3 GB/s, interface ponto a ponto, suporta hot-plug; usa expansores (Edge Expanders ligam até 128 discos; Fanout Expanders conectam até 128 Edge Expanders, totalizando 16.384 discos por porta).</li>
          <li><strong>SATA (serial advanced technology attachment):</strong> para computadores pessoais; a versão SATA 3 (2020) trabalha a 6,0 Gbps.</li>
          <li><strong>SSD (solid-state drive):</strong> sem partes móveis, grava em memória flash — mais rápido, silencioso, resistente a quedas e imune a interferência eletromagnética; preço caindo com a popularização.</li>
        </ul>
      `
    },
    {
      heading: "2.1.3 Sistema de arquivos",
      html: `
        <p>O sistema de arquivo é a estrutura lógica que permite ao SO gravar, recuperar e controlar os dados de um HD. A analogia do capítulo: um desenho sem nenhum padrão torna impossível encontrar algo específico; já um desenho organizado (com uma "casinha" fácil de localizar) mostra como o sistema de arquivo organiza os dados para que sejam recuperáveis.</p>
        <p>No Windows, os principais sistemas de arquivo são <strong>FAT32</strong>, <strong>NTFS</strong> e <strong>ReFS</strong> (resilient file system) — o ReFS é capaz de identificar e corrigir erros de hardware automaticamente.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig3-analogia-sistema-arquivo.png", caption: "Figura 3 – Analogia: um desenho sem padrão (esquerda) x um desenho organizado onde é fácil localizar algo específico, como a casinha (direita)." }
      ]
    },
    {
      heading: "ReFS × NTFS",
      html: `
        <div class="table-wrap"><table>
          <thead><tr><th>Recurso</th><th>ReFS</th><th>NTFS</th></tr></thead>
          <tbody>
            <tr><td>Tamanho máx. do nome do arquivo</td><td>255 caracteres Unicode</td><td>255 caracteres Unicode</td></tr>
            <tr><td>Tamanho máx. do nome do caminho</td><td>32 mil caracteres Unicode</td><td>32 mil caracteres Unicode</td></tr>
            <tr><td>Tamanho máx. do arquivo</td><td>35 PB (petabytes)</td><td>256 TB (terabytes)</td></tr>
            <tr><td>Tamanho máx. do volume</td><td>35 PB</td><td>256 TB</td></tr>
          </tbody>
        </table></div>
        <p>Para gerenciar discos no Windows Server 2019: Menu Iniciar → Ferramentas Administrativas → Gerenciamento do Computador → Repositório → Gerenciamento de Discos.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/scr-gerenciamento-discos.png", caption: "Tela de Gerenciamento de Discos: mostra os dispositivos disponíveis (Disco 0, CD-ROM 0) e seus sistemas de arquivo (C: em NTFS, D: em UDF)." },
        { src: "assets/img/sistema-operacional/aula-5/scr-discos-adicionados-offline.png", caption: "Quatro novos discos de 1 GB adicionados ao DC-01, ainda off-line (barra superior preta) até serem inicializados." }
      ]
    },
    {
      heading: "Criando, diminuindo e estendendo partições",
      html: `
        <p>Para criar uma partição: botão direito no disco → <strong>On-line</strong> → <strong>Iniciar o disco</strong> → escolher <strong>GPT</strong> (GUID partition table, suporta até 9,4 ZB) ou <strong>MBR</strong> (master boot record, limitado a 2 TB por partição — mais antigo) → botão direito na área não alocada → <strong>Novo Volume Simples</strong> → definir tamanho, letra da unidade e sistema de arquivos (NTFS).</p>
        <p>Depois de criada, uma partição pode ser <strong>diminuída</strong> (botão direito → Diminuir Volume) ou <strong>estendida</strong> (botão direito → Estender Volume), usando espaço livre de outros discos.</p>
        <div class="callout warn">Antes de diminuir um volume, é recomendado desfragmentar o disco primeiro (libera o máximo de espaço possível e reorganiza arquivos no início do disco). Em discos ReFS é possível estender o volume, mas <strong>não</strong> diminuir.</div>
        <div class="callout">Também é possível redimensionar volumes via linha de comando: <code>DISKPART.EXE</code> no prompt, ou o cmdlet <code>Resize-Partition</code> no PowerShell.</div>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/scr-formatar-volume-raid0.png", caption: "Tela \"Formatar volume\": escolha do sistema de arquivos (NTFS) e rótulo do volume ao criar uma nova partição." }
      ]
    },
    {
      heading: "3. Arranjos de disco (RAID)",
      html: `
        <p>Às vezes adicionar, aumentar ou diminuir discos não é suficiente — é preciso <strong>redundância</strong>, alto desempenho e escalabilidade. Daí a tecnologia <strong>RAID (redundant array of inexpensive disks)</strong>: faz vários discos físicos trabalharem como se fossem um só, podendo suportar falhas de disco ou entregar desempenho superior, dependendo do arranjo escolhido (Thompson, 2017).</p>
        <p>Dois tipos de implementação:</p>
        <ul>
          <li><strong>RAID de hardware:</strong> exige controladoras de disco compatíveis, configurado geralmente na inicialização do servidor.</li>
          <li><strong>RAID de software:</strong> configurado pelo próprio sistema operacional (no Windows Server 2019, pelo Gerenciador de Disco).</li>
        </ul>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig6-tipos-raid-niveis.png", caption: "Figura 6 – RAID de hardware × RAID de software, e os principais níveis: RAID 0, 1, 5, 10 e 50." }
      ]
    },
    {
      heading: "3.1 Nível do RAID: disco básico × dinâmico",
      html: `
        <p>RAID = "matriz redundante de discos independentes". Para implantar um RAID, o disco precisa ser convertido de <strong>básico</strong> (limitado a 3 partições primárias + 1 estendida) para <strong>dinâmico</strong> (sem esse limite de 4 partições) — o RAID só funciona em discos dinâmicos.</p>
      `
    },
    {
      heading: "RAID 0 — fracionamento (striping)",
      html: `
        <p>Distribui os dados entre vários discos para melhorar o desempenho de leitura e gravação — o sistema decide onde cada parte do arquivo fica fisicamente. Juntando dois discos de 500 MB, o RAID 0 entrega uma única unidade de 1.000 MB.</p>
        <p><strong>Vantagem:</strong> alto desempenho. <strong>Desvantagem:</strong> a perda de um único disco derruba todos os dados — não há redundância. Mínimo de 2 discos.</p>
        <p>No Windows Server, o RAID 0 é criado como <strong>Volume Estendido</strong>: botão direito no disco → Novo volume estendido → selecionar os discos → atribuir letra → formatar em NTFS. Antes de aplicar, o sistema avisa que vai converter o disco de básico para dinâmico.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig7-raid0.png", caption: "Figura 7 – RAID 0: os blocos A1-A8 são distribuídos entre Disk 0 e Disk 1, formando uma única unidade lógica maior." }
      ]
    },
    {
      heading: "RAID 1 — espelhamento (mirror)",
      html: `
        <p>Um disco serve de espelho exato do outro: tudo que é gravado em um é automaticamente gravado no outro, na mesma posição. A gravação fica um pouco mais lenta, mas a leitura é mais rápida (dois discos leem o mesmo arquivo). É seguro, porém caro: só metade do espaço total fica disponível (dois discos de 500 MB → 500 MB utilizáveis).</p>
        <p>Se um HD falhar, a controladora identifica o defeito e direciona tudo para o disco saudável até a substituição — a implementação é bem simples.</p>
        <p>No Windows Server: botão direito no disco → <strong>Novo Volume Espelhado</strong> → selecionar o segundo disco → atribuir letra → formatar.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig8-raid1.png", caption: "Figura 8 – RAID 1: cada bloco (A1-A4) é gravado igualmente em Disk 0 e Disk 1 (espelhamento)." },
        { src: "assets/img/sistema-operacional/aula-5/scr-novo-volume-espelhado-menu.png", caption: "Menu de contexto do disco: opção \"Novo Volume Espelhado...\" para criar um RAID 1." }
      ]
    },
    {
      heading: "RAID 5 — paridade distribuída",
      html: `
        <p>Usado quando o desempenho não é crítico, mas é importante maximizar o uso do espaço. Distribui tiras de <strong>paridade</strong> por todos os discos (em vez de concentrar num só), evitando gargalo. Vantagem: quanto mais discos no arranjo, mais rápido. Exige no mínimo 3 discos.</p>
        <p>No Windows Server: botão direito no disco → <strong>Novo Volume RAID-5</strong> → selecionar pelo menos 2 discos adicionais (3 no total) → atribuir letra → formatar NTFS.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig9-raid5.png", caption: "Figura 9 – RAID 5: dados (A1, A2, A3...) e paridade (AP, BP, CP, DP) distribuídos entre 4 discos." },
        { src: "assets/img/sistema-operacional/aula-5/scr-novo-volume-raid5-menu.png", caption: "Menu de contexto: opção \"Novo Volume RAID-5...\"." },
        { src: "assets/img/sistema-operacional/aula-5/scr-raid5-resultado-final.png", caption: "Resultado: volume Dados5 (L:) em RAID-5, Dinâmico, NTFS, exibido no Gerenciamento de Disco." }
      ]
    },
    {
      heading: "3.1.4 RAID híbridos: RAID 10 e RAID 50",
      html: `
        <h3>RAID 10 (RAID 1+0)</h3>
        <p>Combina dois grupos de discos em RAID 1 (espelhamento) e depois une esses grupos em RAID 0 (soma o espaço). Exemplo: 4 discos de 1 TB → dois pares em RAID 1 (1 TB cada par) → RAID 0 juntando os pares → resultado final de 2 TB. Oferece ótimo desempenho de leitura/gravação e tolera falha de dois ou mais discos (dependendo da quantidade), mas só metade da capacidade total fica disponível.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig10-raid10.png", caption: "Figura 10 – RAID 10: dois grupos RAID 1 (1 TB cada) combinados em RAID 0, resultando em 2 TB." }
      ]
    },
    {
      heading: "RAID 50 (RAID 5+0)",
      html: `
        <p>Combina paridade (RAID 5) com volume estendido (RAID 0). Exige dois grupos de 3 discos. Exemplo: dois grupos de três discos de 2 TB cada (6 TB por grupo) — com a paridade do RAID 5, cada grupo entrega 4 TB utilizáveis; somando os dois grupos em RAID 0: 4 TB + 4 TB = <strong>8 TB</strong> finais.</p>
        <p>Vantagens: maior proteção de dados, melhor controle sobre falhas, melhor desempenho de gravação que o RAID 5 puro. Indicado para ambientes de alta performance — servidores de arquivo, bancos de dados etc.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-5/fig11-raid50.png", caption: "Figura 11 – RAID 50: dois grupos RAID 5 de 2 TB×3 discos (4 TB úteis cada) combinados em RAID 0, totalizando 8 TB." }
      ]
    }
  ],
  keyPoints: [
    "Um roteador encaminha pacotes entre redes, sempre buscando o melhor caminho até o destino.",
    "IOPS mede o desempenho de um disco (operações de E/S por segundo): SSD > SAS > SATA > SCSI > IDE, nessa ordem típica de desempenho.",
    "Disco básico é limitado a 3 partições primárias + 1 estendida; disco dinâmico não tem esse limite — RAID só funciona em discos dinâmicos.",
    "GPT suporta partições de até 9,4 ZB; MBR é limitado a 2 TB por partição.",
    "RAID 0 (striping): alto desempenho, zero redundância, mínimo 2 discos — perder um disco perde tudo.",
    "RAID 1 (mirror): espelha os dados em outro disco, só metade do espaço fica disponível, mas é seguro e simples de recuperar.",
    "RAID 5: paridade distribuída entre todos os discos, mínimo 3 discos, bom para maximizar espaço sem perder tanto desempenho.",
    "RAID 10 = RAID 1 + RAID 0 (espelha depois soma); RAID 50 = RAID 5 + RAID 0 (paridade depois soma) — ambos exigem grupos de discos."
  ]
};
