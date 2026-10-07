window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.quizzes["sistema-operacional"] = (window.APP_DATA.quizzes["sistema-operacional"] || []).concat([
  {
    id: "so-aula1-q1", module: "aula-1",
    question: "Segundo Silberschatz, Galvin e Gagne, qual é o papel de um sistema operacional?",
    options: [
      "Substituir o hardware do computador",
      "Atuar como intermediário entre o usuário e o hardware, escondendo detalhes internos e gerenciando os recursos de forma justa",
      "Executar apenas um programa por vez",
      "Servir só para conectar à internet"
    ],
    correctIndex: 1,
    explanation: "O SO propicia um ambiente onde o usuário executa programas de forma conveniente, escondendo detalhes internos de funcionamento e gerenciando os recursos do sistema de forma justa."
  },
  {
    id: "so-aula1-q2", module: "aula-1",
    question: "Qual é a principal diferença entre um SO livre e um SO proprietário?",
    options: [
      "O SO livre é sempre mais rápido",
      "O SO proprietário nunca tem suporte",
      "O SO livre disponibiliza o código-fonte, que pode ser alterado; o proprietário exige licença e não abre o código",
      "Não há diferença relevante"
    ],
    correctIndex: 2,
    explanation: "SOs livres (como o Linux) permitem acesso e alteração do código-fonte; SOs proprietários exigem a compra de uma licença e não disponibilizam o código, mas costumam ser mais simples de instalar e configurar."
  },
  {
    id: "so-aula1-q3", module: "aula-1",
    question: "No contexto de virtualização, o que é o 'host'?",
    options: [
      "O sistema instalado dentro da máquina virtual",
      "O equipamento físico que roda a máquina virtual",
      "O software hipervisor",
      "O nome da rede virtual"
    ],
    correctIndex: 1,
    explanation: "Host é o equipamento físico (ex.: seu notebook) que roda a VM. O sistema criado dentro da VM é chamado de guest."
  },
  {
    id: "so-aula1-q4", module: "aula-1",
    question: "Qual tipo de hipervisor roda diretamente sobre o hardware, sem um sistema operacional intermediário?",
    options: ["Hospedado (tipo 2)", "Bare metal (tipo 1)", "Hipervisor híbrido", "SOR"],
    correctIndex: 1,
    explanation: "No bare metal (tipo 1), não há SO entre o software de virtualização e o hardware, o que otimiza o uso de memória, HD e processador. É o modelo mais usado em servidores e data centers."
  },
  {
    id: "so-aula1-q5", module: "aula-1",
    question: "Qual modo de rede da VM permite acesso à internet, mas mantém a VM isolada das outras VMs por padrão?",
    options: ["Rede em ponte", "Rede somente host", "NAT", "Rede pública"],
    correctIndex: 2,
    explanation: "O modo NAT usa os recursos de rede do host para acessar a internet, mas isola a VM das demais por padrão — diferente da rede em ponte, que conecta a VM à LAN como se fosse outro equipamento físico."
  },
  {
    id: "so-aula1-q6", module: "aula-1",
    question: "O que armazena um controlador de domínio (como o DC-01), além da pasta SYSVOL?",
    options: ["O arquivo NTDS.DIT, que é o próprio banco de dados de diretórios do AD", "Apenas os arquivos de usuários", "O sistema operacional cliente", "As chaves de licença do Windows"],
    correctIndex: 0,
    explanation: "Um controlador de domínio guarda uma cópia do NTDS.DIT (banco de dados do AD) e da pasta SYSVOL (configurações de modelo para GPOs)."
  },
  {
    id: "so-aula1-q7", module: "aula-1",
    question: "No laboratório do capítulo, qual é o endereço IP configurado para o DC-01?",
    options: ["10.0.0.100", "10.0.0.101", "10.0.0.102", "192.168.0.1"],
    correctIndex: 0,
    explanation: "O DC-01 (controlador de domínio) recebe o IP fixo 10.0.0.100, que também é usado como DNS principal do SVR-01 e do CL1-01."
  },
  {
    id: "so-aula1-q8", module: "aula-1",
    question: "Por que a VM cliente (CL1-01) precisa ser instalada com Windows 10 Professional, e não Home?",
    options: [
      "Porque o Home não tem interface gráfica",
      "Porque versões Home/Starter não conseguem ingressar em um domínio",
      "Porque o Home não suporta rede",
      "Não há diferença entre as versões para esse uso"
    ],
    correctIndex: 1,
    explanation: "A máquina cliente precisa entrar no domínio criado pelo DC-01, e versões Home/Starter do Windows não têm suporte para ingressar em domínios — por isso é preciso Professional (ou Enterprise)."
  },
  {
    id: "so-aula1-q9", module: "aula-1",
    question: "Qual comando, digitado na caixa Executar (Win+R), abre as propriedades do sistema para renomear o computador?",
    options: ["ncpa.cpl", "sysdm.cpl", "services.msc", "gpedit.msc"],
    correctIndex: 1,
    explanation: "sysdm.cpl abre as Propriedades do Sistema, onde é possível alterar o nome do computador. ncpa.cpl abre as conexões de rede."
  },
  {
    id: "so-aula1-q10", module: "aula-1",
    question: "O que são os sistemas operacionais de rede (SOR) oferecem a mais, em comparação a um SO doméstico?",
    options: [
      "Apenas uma interface mais bonita",
      "Melhor segurança, armazenamento centralizado, fila de impressão e recursos como RAID",
      "Menor custo de licença sempre",
      "Não é possível conectar impressoras"
    ],
    correctIndex: 1,
    explanation: "SOR oferece melhor segurança, aplicações de servidor, armazenamento centralizado, repositório de contas de usuário, fila de impressão e arranjos de disco como RAID."
  },
  {
    id: "so-aula2-q1", module: "aula-2",
    question: "O que é o ADDS (Active Directory Domain Services)?",
    options: [
      "Um antivírus para servidores",
      "Uma estrutura informativa sobre objetos da rede (usuários, computadores, recursos), que facilita sua localização e uso",
      "Um protocolo de rede sem fio",
      "Um tipo de RAID"
    ],
    correctIndex: 1,
    explanation: "O ADDS organiza objetos da rede em um diretório hierárquico pesquisável, facilitando a localização e utilização desses recursos pelos administradores e usuários."
  },
  {
    id: "so-aula2-q2", module: "aula-2",
    question: "Qual é a principal diferença entre workgroup e domínio?",
    options: [
      "Workgroup é mais seguro que domínio",
      "No workgroup a administração é descentralizada (cada PC com suas regras); no domínio a administração é centralizada via AD",
      "Domínio só funciona em redes sem fio",
      "Não há diferença prática"
    ],
    correctIndex: 1,
    explanation: "No workgroup, cada computador mantém sua própria lista de usuários e segurança. No domínio, a administração e a segurança são centralizadas através do AD, com políticas de grupo unificadas."
  },
  {
    id: "so-aula2-q3", module: "aula-2",
    question: "O que é uma OU (organization unit) no Active Directory?",
    options: [
      "Um tipo de servidor físico",
      "Um objeto contêiner dentro de um domínio, usado para representar estruturas lógicas da empresa e delegar administração",
      "O nome técnico do domínio",
      "Um protocolo de autenticação"
    ],
    correctIndex: 1,
    explanation: "A OU é um contêiner dentro de um domínio que organiza objetos (como professores e alunos em OUs separadas), permitindo delegar tarefas administrativas sem tornar alguém administrador completo do diretório."
  },
  {
    id: "so-aula2-q4", module: "aula-2",
    question: "Qual é a relação entre árvore de domínio e floresta?",
    options: [
      "São sinônimos",
      "Árvore é o conjunto de florestas",
      "Floresta é o conjunto de árvores de domínio da empresa",
      "Não existe relação entre os dois conceitos"
    ],
    correctIndex: 2,
    explanation: "A árvore de domínio mostra o relacionamento hierárquico entre um ou mais domínios; o conjunto dessas árvores forma a floresta."
  },
  {
    id: "so-aula2-q5", module: "aula-2",
    question: "Qual é a principal vantagem do Windows Server Core em relação à versão com Desktop Experience?",
    options: [
      "Tem mais aplicativos compatíveis",
      "É mais fácil de usar para iniciantes",
      "Menor uso de CPU/RAM/disco e menor superfície de ataque, por não ter interface gráfica",
      "Só funciona em nuvem"
    ],
    correctIndex: 2,
    explanation: "Por não instalar a interface gráfica, o Server Core consome menos recursos e tem menos código exposto a ataques, embora exija administração via linha de comando (como o sconfig)."
  },
  {
    id: "so-aula2-q6", module: "aula-2",
    question: "No menu sconfig do Windows Server Core, qual opção é usada para alterar o nome do computador?",
    options: ["Opção 1", "Opção 2", "Opção 8", "Opção 15"],
    correctIndex: 1,
    explanation: "A opção 2 do sconfig (\"Nome do Computador\") permite digitar o novo nome do servidor, como Core-01."
  },
  {
    id: "so-aula2-q7", module: "aula-2",
    question: "Para que serve um grupo de servidores no Gerenciador do Servidor?",
    options: [
      "Apenas para organizar ícones na área de trabalho",
      "Para permitir administrar e instalar recursos remotamente em vários servidores do domínio, sem abrir cada um individualmente",
      "Para criar novos domínios automaticamente",
      "Para bloquear o acesso de usuários"
    ],
    correctIndex: 1,
    explanation: "Um grupo de servidores (como o Grupo_Servidores_Senac) permite gerenciar e instalar serviços remotamente em todos os servidores do grupo, otimizando a administração."
  },
  {
    id: "so-aula2-q8", module: "aula-2",
    question: "Qual é o nome NetBIOS do domínio criado no capítulo (Senac.Local)?",
    options: ["SENAC", "LOCAL", "SENACLOCAL", "DC01"],
    correctIndex: 0,
    explanation: "Ao configurar as opções adicionais na promoção do controlador de domínio, o nome NetBIOS atribuído automaticamente ao domínio Senac.Local é SENAC."
  },
  {
    id: "so-aula3-q1", module: "aula-3",
    question: "Qual é a vantagem de usar o IFM (install from media) ao promover um novo controlador de domínio?",
    options: [
      "Ele cria usuários automaticamente",
      "Reduz o consumo de banda da rede, pois a mídia de instalação do AD é copiada off-line em vez de replicada pela rede",
      "Ele substitui a necessidade de senha de administrador",
      "Funciona apenas em redes sem fio"
    ],
    correctIndex: 1,
    explanation: "O IFM exporta o conteúdo do AD (banco de dados + SYSVOL) para uma mídia externa, reduzindo drasticamente o tráfego de replicação necessário para promover um controlador de domínio adicional."
  },
  {
    id: "so-aula3-q2", module: "aula-3",
    question: "No ntdsutil, qual sequência de comandos cria a mídia IFM completa na pasta C:\\IFM?",
    options: [
      "format c: / ifm",
      "activate instance ntds → ifm → create sysvol full C:\\IFM",
      "dsadd user → ifm → quit",
      "New-ADUser -ifm"
    ],
    correctIndex: 1,
    explanation: "A sequência correta é: abrir o ntdsutil, ativar a instância com 'activate instance ntds', entrar no modo 'ifm' e executar 'create sysvol full C:\\IFM'."
  },
  {
    id: "so-aula3-q3", module: "aula-3",
    question: "Por que as OUs (unidades organizacionais) não precisam seguir a hierarquia departamental da empresa?",
    options: [
      "Porque são criadas automaticamente pelo Windows",
      "Porque são criadas para finalidades específicas, como delegar administração ou aplicar políticas de grupo",
      "Porque só existe uma OU por domínio",
      "Porque OUs são iguais a grupos de segurança"
    ],
    correctIndex: 1,
    explanation: "As OUs representam limites administrativos e servem para delegar administração, aplicar diretivas de grupo ou limitar a visibilidade de objetos — sua estrutura depende da necessidade de cada organização, não da hierarquia departamental."
  },
  {
    id: "so-aula3-q4", module: "aula-3",
    question: "Qual destes NÃO é um requisito de complexidade de senha citado no capítulo?",
    options: [
      "Mínimo de 8 dígitos",
      "Letras maiúsculas e minúsculas",
      "Pelo menos um símbolo",
      "Deve conter o nome do usuário"
    ],
    correctIndex: 3,
    explanation: "Pelo contrário: a senha NÃO pode conter partes do nome do usuário. Os requisitos são: sem partes do nome, maiúsculas e minúsculas, mínimo 8 dígitos e ao menos um símbolo."
  },
  {
    id: "so-aula3-q5", module: "aula-3",
    question: "No comando 'dsadd user cn=\"Felipe Pimenta\",ou=SenacSP,dc=Senac,dc=local -samid FPimenta -upn \"fpimenta@senac.local\" ...', o que representa o parâmetro -samid?",
    options: [
      "A senha do usuário",
      "O nome de logon do usuário anterior ao Windows 2000",
      "O caminho da OU",
      "O sobrenome do usuário"
    ],
    correctIndex: 1,
    explanation: "-samid define o nome de logon do usuário no formato anterior ao Windows 2000 (ex.: FPimenta), diferente do -upn, que é o nome de logon completo (fpimenta@senac.local)."
  },
  {
    id: "so-aula3-q6", module: "aula-3",
    question: "Qual comando do PowerShell cria um novo usuário no Active Directory?",
    options: ["Add-ADUser", "New-ADUser", "Create-ADUser", "Set-ADUser"],
    correctIndex: 1,
    explanation: "New-ADUser é o cmdlet do PowerShell usado para criar um novo usuário no AD, como em: New-ADUser -Name \"Fernanda Pimenta\" -Path \"ou=SenacSp,dc=Senac,dc=local\"."
  },
  {
    id: "so-aula3-q7", module: "aula-3",
    question: "Para criar vários usuários de uma vez usando o prompt de comando (DOS), qual é a abordagem usada no capítulo?",
    options: [
      "Editar o registro do Windows",
      "Criar um arquivo de texto com um comando dsadd por linha e salvá-lo com extensão .BAT",
      "Usar o Excel diretamente",
      "Não é possível criar vários usuários via DOS"
    ],
    correctIndex: 1,
    explanation: "Um arquivo .BAT com um comando dsadd por linha (um para cada usuário) pode ser executado de uma vez, criando todos os usuários automaticamente."
  },
  {
    id: "so-aula3-q8", module: "aula-3",
    question: "Qual guia das propriedades de um usuário no AD permite restringir em quais máquinas e horários ele pode fazer logon?",
    options: ["Geral", "Conta", "Perfil", "Membro de"],
    correctIndex: 1,
    explanation: "A guia Conta traz os botões \"Fazer Logon...\" e \"Fazer Logon em\", que determinam em quais máquinas da rede e em quais horários o usuário pode acessar."
  },
  {
    id: "so-aula4-q1", module: "aula-4",
    question: "Qual é a ordem correta das 4 etapas de negociação do DHCP?",
    options: [
      "DHCPOFFER → DHCPACK → DHCPDISCOVER → DHCPREQUEST",
      "DHCPDISCOVER → DHCPOFFER → DHCPREQUEST → DHCPACK",
      "DHCPREQUEST → DHCPDISCOVER → DHCPACK → DHCPOFFER",
      "DHCPACK → DHCPREQUEST → DHCPOFFER → DHCPDISCOVER"
    ],
    correctIndex: 1,
    explanation: "A sequência é: o cliente transmite DHCPDISCOVER, o servidor responde com DHCPOFFER, o cliente aceita com DHCPREQUEST, e o servidor confirma com DHCPACK (mnemônico D.O.R.A.)."
  },
  {
    id: "so-aula4-q2", module: "aula-4",
    question: "Por padrão, quando o cliente DHCP solicita a primeira tentativa de renovação do IP?",
    options: ["Aos 10% da concessão", "Aos 50% da concessão", "Aos 90% da concessão", "Só quando o IP expira totalmente"],
    correctIndex: 1,
    explanation: "A primeira tentativa de renovação ocorre automaticamente quando a concessão atinge 50% do tempo de validade; se falhar, o cliente tenta de novo aos 87,5% e depois aos 100%."
  },
  {
    id: "so-aula4-q3", module: "aula-4",
    question: "No planejamento de um escopo de DHCP, para que serve a 'exclusão de IP'?",
    options: [
      "Para bloquear o acesso à internet",
      "Para reservar endereços que não serão distribuídos automaticamente, geralmente para impressoras, roteador ou serviços administrativos",
      "Para definir a duração da concessão",
      "Para desativar o DHCP"
    ],
    correctIndex: 1,
    explanation: "A lista de exclusão de IP tira certos endereços da distribuição automática, permitindo que o administrador os atribua manualmente a equipamentos específicos da rede."
  },
  {
    id: "so-aula4-q4", module: "aula-4",
    question: "Por que é recomendável usar uma reserva de DHCP para uma impressora de rede compartilhada, em vez de deixar o IP totalmente automático?",
    options: [
      "Porque impressoras não suportam DHCP",
      "Porque a cada renovação o IP poderia mudar, exigindo reconfigurar todos os hosts que acessam a impressora",
      "Porque reserva de IP é obrigatória por lei",
      "Não há vantagem nenhuma"
    ],
    correctIndex: 1,
    explanation: "A reserva de DHCP fixa um IP permanente (associado ao MAC Address) para o dispositivo, evitando que ele mude a cada renovação e exija reconfiguração manual em todos os hosts que o acessam."
  },
  {
    id: "so-aula4-q5", module: "aula-4",
    question: "Qual é a função principal do DNS numa rede?",
    options: [
      "Distribuir endereços IP automaticamente",
      "Traduzir nomes de host (FQDN) para endereços IP, e vice-versa",
      "Criptografar o tráfego de rede",
      "Gerenciar impressoras compartilhadas"
    ],
    correctIndex: 1,
    explanation: "O DNS é um sistema de resolução de nomes: traduz nomes que as pessoas entendem em endereços IP numéricos necessários à comunicação TCP/IP, e pode fazer o caminho inverso também."
  },
  {
    id: "so-aula4-q6", module: "aula-4",
    question: "Qual é a diferença entre zona de pesquisa direta e zona de pesquisa inversa no DNS?",
    options: [
      "Não há diferença",
      "A direta resolve nome→IP; a inversa resolve IP→nome",
      "A direta só funciona com IPv6",
      "A inversa é usada apenas para e-mails"
    ],
    correctIndex: 1,
    explanation: "A zona de pesquisa direta resolve nomes de host para endereços IP; a zona de pesquisa inversa faz o caminho contrário, resolvendo um IP para o nome de domínio correspondente."
  },
  {
    id: "so-aula4-q7", module: "aula-4",
    question: "Qual comando limpa o cache de resolução de nomes DNS no Windows, geralmente resolvendo travamentos de DNS?",
    options: ["ipconfig /all", "ipconfig /displaydns", "ipconfig /flushdns", "ipconfig /renew"],
    correctIndex: 2,
    explanation: "ipconfig /flushdns limpa o cache local de DNS. ipconfig /displaydns apenas mostra o conteúdo do cache, sem limpá-lo."
  },
  {
    id: "so-aula4-q8", module: "aula-4",
    question: "Para reservar um IP a um dispositivo específico no DHCP, qual informação é obrigatória?",
    options: ["O nome do usuário logado", "O MAC Address (endereço físico) do dispositivo", "A senha do administrador", "O fabricante do roteador"],
    correctIndex: 1,
    explanation: "A reserva de DHCP associa um IP fixo ao MAC Address do dispositivo — um endereço físico hexadecimal único no mundo, como 00-0C-29-82-45-61."
  },
  {
    id: "so-aula5-q1", module: "aula-5",
    question: "Qual é a função principal de um roteador numa rede?",
    options: [
      "Armazenar arquivos compartilhados",
      "Encaminhar pacotes e determinar o melhor caminho entre origem e destino",
      "Fornecer energia aos dispositivos de rede",
      "Criar contas de usuário"
    ],
    correctIndex: 1,
    explanation: "O roteador examina o endereço de destino de cada pacote e determina o melhor caminho para encaminhá-lo, conectando redes diferentes."
  },
  {
    id: "so-aula5-q2", module: "aula-5",
    question: "O que o IOPS mede num disco de armazenamento?",
    options: [
      "A capacidade total em gigabytes",
      "O número de operações de entrada/saída por segundo (desempenho)",
      "A temperatura de operação do disco",
      "O preço do disco"
    ],
    correctIndex: 1,
    explanation: "IOPS (input/output operations per second) é uma medida de desempenho: quanto maior o IOPS, mais eficiente é o dispositivo de armazenamento."
  },
  {
    id: "so-aula5-q3", module: "aula-5",
    question: "Qual é a diferença entre disco básico e disco dinâmico no Windows Server, no contexto de RAID?",
    options: [
      "Não há diferença",
      "Disco básico é limitado a 4 partições; o RAID só funciona em discos dinâmicos, que não têm esse limite",
      "Disco dinâmico é mais lento que o básico",
      "RAID só funciona em discos básicos"
    ],
    correctIndex: 1,
    explanation: "O disco básico é limitado a três partições primárias e uma estendida; o disco dinâmico não tem essa limitação, e é obrigatório para implantar qualquer nível de RAID."
  },
  {
    id: "so-aula5-q4", module: "aula-5",
    question: "Qual é a principal desvantagem do RAID 0?",
    options: [
      "É muito lento",
      "A perda de um único disco causa a perda de todos os dados, pois não há redundância",
      "Exige no mínimo 5 discos",
      "Não pode ser configurado via software"
    ],
    correctIndex: 1,
    explanation: "O RAID 0 (fracionamento/striping) distribui os dados entre os discos para ganhar desempenho, mas não tem redundância — se um disco falhar, todos os dados são perdidos."
  },
  {
    id: "so-aula5-q5", module: "aula-5",
    question: "No RAID 1 (espelhamento), se os dois discos têm 500 MB cada, qual é o espaço final disponível para o usuário?",
    options: ["1.000 MB", "750 MB", "500 MB", "250 MB"],
    correctIndex: 2,
    explanation: "No RAID 1, um disco é cópia exata do outro, então apenas metade do espaço total fica disponível: dois discos de 500 MB resultam em 500 MB utilizáveis."
  },
  {
    id: "so-aula5-q6", module: "aula-5",
    question: "Qual é a característica principal do RAID 5?",
    options: [
      "Espelhamento total entre dois discos",
      "Distribuição de paridade entre todos os discos do arranjo, exigindo no mínimo 3 discos",
      "Uso exclusivo de um único disco",
      "Não pode ser configurado em servidores Windows"
    ],
    correctIndex: 1,
    explanation: "O RAID 5 distribui tiras de paridade por todos os discos (em vez de concentrar em um só), evitando gargalo, e exige no mínimo 3 discos."
  },
  {
    id: "so-aula5-q7", module: "aula-5",
    question: "O RAID 10 é a combinação de quais dois níveis de RAID?",
    options: ["RAID 0 e RAID 5", "RAID 1 e RAID 5", "RAID 0 e RAID 1", "RAID 5 e RAID 50"],
    correctIndex: 2,
    explanation: "RAID 10 combina RAID 1 (espelhamento) com RAID 0 (soma/estende o volume), entregando bom desempenho e tolerância a falhas, à custa de metade da capacidade total."
  },
  {
    id: "so-aula5-q8", module: "aula-5",
    question: "Qual padrão de particionamento de disco é necessário para suportar partições maiores que 2 TB?",
    options: ["MBR", "GPT", "FAT32", "IDE"],
    correctIndex: 1,
    explanation: "O MBR (master boot record) é limitado a partições de até 2 TB; o GPT (GUID partition table), mais recente, suporta partições de até 9,4 ZB (zetabytes)."
  },
  {
    id: "so-aula6-q1", module: "aula-6",
    question: "Qual é a função do spooler de impressão?",
    options: [
      "Aumentar a resolução de impressão",
      "Permitir que a impressão seja montada em segundo plano, liberando o computador de origem para outras tarefas",
      "Trocar o cartucho automaticamente",
      "Converter arquivos PDF em Word"
    ],
    correctIndex: 1,
    explanation: "O spool (simultaneous peripheral operations online) permite transmissão multitarefa: o equipamento de origem fica livre enquanto a impressão é montada em segundo plano, usando espaço em disco para a fila."
  },
  {
    id: "so-aula6-q2", module: "aula-6",
    question: "Quando a impressora imprime caracteres estranhos (\"carinhas\") em vez do documento solicitado, qual é a causa mais provável?",
    options: [
      "Falta de papel",
      "Um erro no spooler, que corrompe o arquivo de impressão",
      "A impressora está desligada",
      "O driver V4 não existe"
    ],
    correctIndex: 1,
    explanation: "Esse sintoma é causado por um erro no spooler, que corrompe o arquivo — tornando a impressão indisponível até o cancelamento do documento ou reinício do serviço."
  },
  {
    id: "so-aula6-q3", module: "aula-6",
    question: "Qual comando abre a tela de serviços do Windows, usada para localizar e reiniciar o Spooler de Impressão?",
    options: ["ncpa.cpl", "services.msc", "sysdm.cpl", "dsa.msc"],
    correctIndex: 1,
    explanation: "services.msc (digitado em Executar, Win+R) abre o console de Serviços, onde se localiza e reinicia o Spooler de Impressão."
  },
  {
    id: "so-aula6-q4", module: "aula-6",
    question: "O que caracteriza o driver V4 (\"driver in box\") de impressora, introduzido a partir do Windows Server 2012?",
    options: [
      "É um driver genérico que funciona em qualquer impressora sem configuração",
      "É incorporado ao SO, desenvolvido pelo fabricante, compatível com a linguagem nativa da impressora (PostScript ou PCL)",
      "Só funciona com impressoras matriciais",
      "Substitui o spooler de impressão"
    ],
    correctIndex: 1,
    explanation: "O driver V4 é incorporado ao sistema operacional e desenvolvido pelo próprio fabricante da impressora, com suporte à linguagem nativa dela (como PostScript ou PCL), substituindo o antigo modelo universal."
  },
  {
    id: "so-aula6-q5", module: "aula-6",
    question: "Qual é o benefício principal de um pool de impressão?",
    options: [
      "Reduz a qualidade de impressão para economizar tinta",
      "Associa várias impressoras idênticas num único caminho lógico, direcionando cada trabalho ao dispositivo mais ocioso",
      "Permite imprimir sem instalar nenhum driver",
      "Elimina a necessidade de um servidor de impressão"
    ],
    correctIndex: 1,
    explanation: "O pool de impressão une várias impressoras do mesmo modelo, deixando o Windows Server encaminhar automaticamente cada impressão para o dispositivo disponível — do ponto de vista do usuário, parece uma única impressora."
  },
  {
    id: "so-aula6-q6", module: "aula-6",
    question: "Para ativar um pool de impressão nas Propriedades de uma impressora, em qual guia fica a opção \"Ativar pool de impressão\"?",
    options: ["Geral", "Compartilhamento", "Portas", "Segurança"],
    correctIndex: 2,
    explanation: "Na guia Portas, além de marcar as portas de todas as impressoras físicas do pool (ex.: LPT1, LPT2, LPT3), marca-se a opção \"Ativar pool de impressão\"."
  },
  {
    id: "so-aula7-q1", module: "aula-7",
    question: "O que é autenticação, no contexto de segurança de rede?",
    options: [
      "A instalação de um antivírus",
      "A ação de fornecer uma identificação e verificar se ela é genuína, por meio de uma operação criptografada",
      "O processo de formatar um disco",
      "A criação de uma OU"
    ],
    correctIndex: 1,
    explanation: "Autenticação comprova a identificação do usuário por meio de uma operação criptografada com uma chave que só ele conhece; o servidor compara os dados assinados para validar a tentativa."
  },
  {
    id: "so-aula7-q2", module: "aula-7",
    question: "No ciclo de implantação de uma política de segurança, o que vem logo depois de \"Proposta e implantação\"?",
    options: ["Aperfeiçoamento", "Testes", "Monitoramento", "Vulnerabilidade analisada"],
    correctIndex: 1,
    explanation: "A ordem do ciclo é: Proposta e implantação → Testes (em ambiente de teste/UOT) → Monitoramento (em produção) → Aperfeiçoamento."
  },
  {
    id: "so-aula7-q3", module: "aula-7",
    question: "Onde fica armazenado o modelo de uma GPO?",
    options: ["No registro do computador local apenas", "No diretório SYSVOL", "Em um arquivo .ini na área de trabalho", "No DNS"],
    correctIndex: 1,
    explanation: "O modelo criado por uma GPO é arquivado no diretório SYSVOL, e as GPOs são vinculadas a usuários/computadores através de OU, sites ou domínios."
  },
  {
    id: "so-aula7-q4", module: "aula-7",
    question: "Numa configuração de GPO, o que significa o estado 'Não configurado'?",
    options: [
      "A política é aplicada com força máxima",
      "O item marcado não terá nenhum efeito — é o padrão",
      "A política é aplicada de forma invertida",
      "O computador será removido do domínio"
    ],
    correctIndex: 1,
    explanation: "'Não configurado' é o estado padrão: o item não modifica nada. 'Habilitado' aplica a política, e 'Desabilitado' aplica o efeito inverso ou impede a aplicação."
  },
  {
    id: "so-aula7-q5", module: "aula-7",
    question: "Qual é a ordem correta (do mais abrangente para o mais específico) dos níveis em que uma GPO pode ser vinculada?",
    options: [
      "OU → Domínio → Site",
      "Site → Domínio → OU",
      "Domínio → Site → OU",
      "Todos têm a mesma abrangência"
    ],
    correctIndex: 1,
    explanation: "Site é o nível mais alto (afeta todos do site), seguido por Domínio (afeta todos do domínio) e depois OU (afeta só quem está dentro dela)."
  },
  {
    id: "so-aula7-q6", module: "aula-7",
    question: "Qual comando força a aplicação imediata de uma GPO, sem esperar o ciclo automático de 90 minutos?",
    options: ["GPUPDATE /FORCE", "ipconfig /flushdns", "sconfig", "ntdsutil"],
    correctIndex: 0,
    explanation: "GPUPDATE /FORCE no prompt de comando (ou o cmdlet Invoke-Gpupdate no PowerShell) força a reaplicação imediata das políticas de grupo."
  },
  {
    id: "so-aula7-q7", module: "aula-7",
    question: "Qual é a diferença entre 'Configuração do Computador' e 'Configuração do Usuário' numa GPO?",
    options: [
      "Não há diferença",
      "Configuração do Computador aplica a todos os usuários daquele PC (no boot); Configuração do Usuário aplica só a usuários individuais (no logon)",
      "Configuração do Usuário só funciona em servidores",
      "Configuração do Computador é aplicada apenas uma vez na vida do equipamento"
    ],
    correctIndex: 1,
    explanation: "Configuração do Computador é uma camada que se aplica a todos os usuários daquele computador (aplicada na inicialização); Configuração do Usuário se aplica apenas a usuários individuais (aplicada no logon, junto com scripts)."
  },
  {
    id: "so-aula7-q8", module: "aula-7",
    question: "Para que serve a Default Domain Policy?",
    options: [
      "Apenas para ocultar ícones da área de trabalho",
      "Afeta todos os princípios de segurança do domínio: política de senha, bloqueio de conta e protocolo de autenticação",
      "Serve só para configurar impressoras",
      "É usada para criar novos domínios"
    ],
    correctIndex: 1,
    explanation: "A Default Domain Policy é a política de domínio padrão, afetando toda a segurança do domínio (senha, bloqueio de conta, autenticação) — recomenda-se não adicionar outras configurações a ela."
  },
  {
    id: "so-aula8-q1", module: "aula-8",
    question: "Como o AppLocker funciona por padrão?",
    options: [
      "Permite a execução de todos os programas, exceto os bloqueados manualmente",
      "Bloqueia a execução de TODOS os aplicativos executáveis, exceto os especificamente permitidos em uma lista",
      "Só funciona em conjunto com um antivírus de terceiros",
      "Criptografa automaticamente todos os arquivos do usuário"
    ],
    correctIndex: 1,
    explanation: "O AppLocker inverte a lógica de uma lista de bloqueio simples: por padrão, nenhum executável roda, exceto os que estão explicitamente permitidos numa lista — o que complementa a GPO em áreas que ela não alcança."
  },
  {
    id: "so-aula8-q2", module: "aula-8",
    question: "Na criação de uma regra do AppLocker para bloquear o WordPad, qual opção de Condições foi usada para identificar o arquivo?",
    options: ["Caminho", "Hash de arquivo", "Fornecedor", "Grupo de segurança"],
    correctIndex: 2,
    explanation: "A condição 'Fornecedor' foi escolhida para negar a ação sobre o arquivo wordpad.exe, localizado por meio do botão Procurar."
  },
  {
    id: "so-aula8-q3", module: "aula-8",
    question: "Por que, por padrão, não é possível dar PING num servidor Windows Server 2019 recém-instalado?",
    options: [
      "Porque o servidor está desligado",
      "Porque o Firewall já vem configurado bloqueando o ICMP por padrão",
      "Porque o DNS não está instalado",
      "Porque falta instalar o AppLocker"
    ],
    correctIndex: 1,
    explanation: "O Firewall do Windows Server 2019 bloqueia o ICMP por padrão; é necessário criar uma regra de entrada personalizada permitindo ICMPv4 para que o PING funcione."
  },
  {
    id: "so-aula8-q4", module: "aula-8",
    question: "Qual porta o RDP (remote desktop protocol) utiliza, tornando necessário monitorá-la contra tentativas de invasão?",
    options: ["80", "443", "3389", "8080"],
    correctIndex: 2,
    explanation: "O RDP abre a porta 3389 para a área de trabalho remota, que fica pública — por isso é importante monitorar essa porta e usar o RDP com moderação."
  },
  {
    id: "so-aula8-q5", module: "aula-8",
    question: "Qual é a diferença entre VPN de acesso remoto e VPN site a site?",
    options: [
      "Não há diferença",
      "VPN de acesso remoto conecta um usuário externo à rede privada via internet; VPN site a site conecta duas redes privadas via roteadores",
      "VPN site a site só funciona em redes domésticas",
      "VPN de acesso remoto exige um roteador dedicado"
    ],
    correctIndex: 1,
    explanation: "A VPN de acesso remoto é usada por um funcionário fora da empresa para acessar a rede privada pela internet; a VPN site a site liga duas partes de uma rede privada através de roteadores, geralmente com link de WAN dedicado."
  },
  {
    id: "so-aula8-q6", module: "aula-8",
    question: "Qual protocolo de VPN usa HTTPS pela porta TCP 443 especificamente para atravessar firewalls e proxies que bloqueariam outros protocolos?",
    options: ["PPTP", "L2TP/IPsec", "SSTP", "ICMP"],
    correctIndex: 2,
    explanation: "O SSTP encapsula o tráfego usando HTTPS na porta 443, permitindo passar por firewalls e proxies Web que poderiam bloquear PPTP ou L2TP/IPsec."
  },
  {
    id: "so-aula8-q7", module: "aula-8",
    question: "Ao configurar o pool de endereços IP para clientes VPN no Windows Server, o que é verdade?",
    options: [
      "O IP precisa obrigatoriamente estar na mesma faixa do DHCP da rede local",
      "O IP não precisa estar na faixa do DHCP da rede — pode-se até usar IPs públicos de filiais",
      "Não é possível definir uma faixa fixa de IP para VPN",
      "A VPN não usa endereços IP"
    ],
    correctIndex: 1,
    explanation: "O capítulo destaca que o IP do pool da VPN não precisa estar na faixa do DHCP da rede — é possível, inclusive, usar IPs públicos das filiais da empresa."
  },
  {
    id: "so-aula8-q8", module: "aula-8",
    question: "Além de configurar o pool de IP, o que mais é necessário para um usuário do AD conseguir se conectar pela VPN?",
    options: [
      "Nada mais é necessário",
      "Na guia Discagem das propriedades do usuário, marcar 'Permitir acesso' em Permissão de Acesso à Rede",
      "Remover o usuário do domínio",
      "Desabilitar o firewall completamente"
    ],
    correctIndex: 1,
    explanation: "É preciso, nas propriedades do usuário no AD, acessar a guia Discagem e marcar 'Permitir acesso' em Permissão de Acesso à Rede, além de liberar o Roteamento e Acesso Remoto no firewall."
  }
]);
