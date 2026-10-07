window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };
window.APP_DATA.content["sistema-operacional"] = window.APP_DATA.content["sistema-operacional"] || {};
window.APP_DATA.content["sistema-operacional"]["aula-3"] = {
  id: "aula-3",
  title: "Instalação do AD (IFM), usuários, grupos e PowerShell",
  subtitle: "Controlador de domínio via IFM, administração de usuários e OUs, e criação de usuários em massa via prompt (DSADD) e PowerShell",
  estimatedMinutes: 24,
  sections: [
    {
      heading: "Por que instalar um controlador de domínio via IFM",
      html: `
        <p>Imagine uma matriz e uma filial a 250 km de distância: ir até lá fisicamente para manter o AD levaria horas. Por isso, o controlador de domínio costuma ser <strong>replicado off-line</strong> em outros pontos — se fosse tudo replicado on-line, haveria uma dependência enorme da matriz e seria necessária uma banda larga robusta.</p>
        <h3>1. Instalação IFM (install from media) do AD</h3>
        <p>O <strong>IFM</strong> é um recurso que permite configurar um servidor como controlador de domínio reduzindo o consumo de banda da rede. Ele exporta o arquivo de banco de dados do AD (<strong>NTDS</strong>) para uma mídia externa (ex.: pendrive), que depois é usada para configurar um controlador de domínio adicional — sem precisar replicar tudo pela rede.</p>
        <div class="callout">O IFM "despeja" o conteúdo do AD (banco de dados + SYSVOL) para uma mídia de instalação off-line, minimizando o tráfego de replicação ao promover novos controladores de domínio — essencial quando o link de rede é lento demais para uma promoção normal.</div>
      `
    },
    {
      heading: "Criando a mídia IFM no DC-01",
      html: `
        <p>No DC-01, logado como Administrador, abra o prompt (Executar → CMD) e siga:</p>
        <ol>
          <li>Digite <code>NTDSUTIL</code> e Enter.</li>
          <li>Digite <code>Activate instance ntds</code> para ativar a instância.</li>
          <li>Digite <code>IFM</code> e Enter.</li>
          <li>Digite <code>Create sysvol full C:\\IFM</code>.</li>
          <li>Ao final aparece a mensagem "Mídia IFM criada com êxito em C:\\IFM".</li>
          <li>Digite <code>Quit</code> para sair. A pasta <strong>IFM</strong> é criada no drive C: — copie-a para um pendrive e leve ao computador de destino.</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/02-cmd-ntdsutil.png", caption: "Prompt de comando: ntdsutil, activate instance ntds, ifm, create sysvol full C:\\IFM." },
        { src: "assets/img/sistema-operacional/aula-3/01-ntdsutil-ifm.png", caption: "Saída do processo: criação da mídia IFM com barra de progresso até 100% e confirmação de sucesso." }
      ]
    },
    {
      heading: "2. Administrando usuários",
      html: `
        <p>Em uma rede, o <strong>usuário</strong> é o elo entre a pessoa física e a rede de computadores. Ao criar um usuário, o administrador entrega a essa pessoa permissão para usar os recursos da rede, configurando um ambiente de acordo com suas necessidades. O objeto de usuário no AD DS é a base da identidade e do acesso (Thompson, 2017).</p>
        <h3>2.2 Atributos de uma conta de usuário</h3>
        <ul>
          <li><strong>Nome completo / CN (nome comum):</strong> aparece no painel de detalhes do snap-in e deve ser exclusivo dentro do contêiner/OU.</li>
          <li><strong>UPN (user principal name):</strong> prefixo de logon + sufixo após o @ — permite login como <code>usuario@dominio.com</code> em vez do tradicional <code>dominio\\usuario</code>.</li>
        </ul>
        <p>Para acessar o console de administração do AD: Executar (Win+R) → <code>dsa.msc</code>. Clicando no domínio (Senac.local), ele expande mostrando todos os objetos administráveis.</p>
      `
    },
    {
      heading: "2.3 Criando uma OU",
      html: `
        <p>A hierarquia de OUs não precisa seguir a hierarquia departamental da empresa — ela é criada para finalidades específicas: delegar administração, aplicar política de grupo ou limitar a visibilidade de objetos. As OUs representam limites administrativos, controlando o escopo de autoridade de cada administrador de dados.</p>
        <p>Para criar a OU <strong>SenacSP</strong>: clique com o botão direito no domínio → Novo → Unidade Organizacional → digite o nome.</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/03-novo-ou-menu.png", caption: "Menu de contexto do domínio: Novo → Unidade Organizacional." },
        { src: "assets/img/sistema-operacional/aula-3/04-novo-objeto-ou.png", caption: "Diálogo \"Novo Objeto – Unidade Organizacional\", criada dentro de SENAC.LOCAL, nome SenacSP." },
        { src: "assets/img/sistema-operacional/aula-3/05-ou-senacsp-criada.png", caption: "A OU SenacSP aparece na árvore do console Usuários e Computadores do Active Directory." }
      ]
    },
    {
      heading: "2.4 Criando o usuário (interface gráfica)",
      html: `
        <p>Com a OU SenacSP criada, clique com o botão direito nela → Novo → Usuário, para cadastrar o usuário <strong>Caio Pimenta</strong>:</p>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/06-novo-usuario-dados.png", caption: "Tela de cadastro: Nome, Sobrenome, Nome completo e Nome de logon do usuário." },
        { src: "assets/img/sistema-operacional/aula-3/07-novo-usuario-senha.png", caption: "Definição de senha — precisa seguir os requisitos de complexidade." }
      ]
    },
    {
      heading: "Requisitos de complexidade de senha",
      html: `
        <ul>
          <li>não pode conter partes do nome do usuário;</li>
          <li>deve ter letras maiúsculas e minúsculas;</li>
          <li>no mínimo 8 dígitos;</li>
          <li>pelo menos um símbolo (@, #, etc.).</li>
        </ul>
        <div class="callout">Com esses requisitos, uma senha tem <strong>218.340.105.584.896</strong> combinações possíveis — o que torna um ataque de força bruta (tentar todas as combinações) extremamente difícil.</div>
      `
    },
    {
      heading: "2.5 Administrando o usuário (propriedades)",
      html: `
        <p>Dando duplo clique no usuário Caio Pimenta, acessamos suas propriedades em várias guias:</p>
        <ul>
          <li><strong>Geral:</strong> informações pessoais (usadas, por exemplo, por aplicativos de e-mail).</li>
          <li><strong>Conta:</strong> dados de login — os botões "Fazer Logon..." e "Fazer Logon em" definem em quais máquinas e horários o usuário pode acessar a rede.</li>
          <li><strong>Perfil:</strong> caminho local ou um caminho UNC (uniform naming convention), definindo onde ficam os recursos do usuário na rede.</li>
          <li><strong>Membro de:</strong> define a participação em grupos, facilitando a administração de pastas e segurança.</li>
        </ul>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/08-propriedades-geral.png", caption: "Guia Geral das propriedades do usuário." },
        { src: "assets/img/sistema-operacional/aula-3/09-propriedades-conta.png", caption: "Guia Conta: opções de logon e restrições de conta." },
        { src: "assets/img/sistema-operacional/aula-3/10-propriedades-perfil.png", caption: "Guia Perfil: caminho do perfil e script de logon." },
        { src: "assets/img/sistema-operacional/aula-3/11-propriedades-membro.png", caption: "Guia Membro de: grupos aos quais o usuário pertence." }
      ]
    },
    {
      heading: "3. Criando usuários em massa via prompt: DSADD",
      html: `
        <p>Cadastrar um usuário de cada vez não resolve se for preciso subir, por exemplo, 300 usuários em poucos minutos. Para isso existem scripts: no prompt de comando (DOS), o comando é o <strong>DSADD</strong>.</p>
        <p>O DSADD cria uma instância de uma classe de objeto do AD (usuários, computadores, contatos, grupos, OUs, cotas) numa partição do diretório. Sintaxe genérica: <code>DSADD &lt;Object&gt;, &lt;caminho&gt; -&lt;Atributo&gt;</code> — o objeto pode ser User, OU, Computer etc.; o caminho usa vírgulas para separar os níveis; cada atributo começa com um sinal de menos seguido do valor.</p>
        <p>Exemplo — criando o usuário Felipe Pimenta na OU SenacSP:</p>
        <pre><code>dsadd user cn="Felipe Pimenta",ou=SenacSP,dc=Senac,dc=local
-samid FPimenta -upn "fpimenta@senac.local" -fn Felipe -ls
Pimenta -pwd "Senac@123" -disabled no</code></pre>
        <p>Decompondo o comando: <code>cn</code> é o nome que aparece na lista do AD (entre aspas por causa do espaço); o caminho (<code>ou=...,dc=...,dc=...</code>) indica onde o usuário será criado; <code>-samid</code> é o nome de logon anterior ao Windows 2000; <code>-upn</code> é o nome de logon completo; <code>-fn</code> é o primeiro nome; <code>-ls</code> é o sobrenome; <code>-pwd</code> é a senha; <code>-disabled no</code> indica que o usuário já nasce habilitado.</p>
        <div class="callout warn">Nunca coloque um usuário novo direto na área de produção — sempre teste antes de liberar.</div>
      `
    },
    {
      heading: "Criando vários usuários de uma vez com um arquivo .BAT",
      html: `
        <p>Para cadastrar vários usuários (ex.: Eloiza, Izabelli e Eliza Pimenta) de uma só vez:</p>
        <ol>
          <li>Executar → <code>NOTEPAD</code>.</li>
          <li>Digite uma linha DSADD para cada usuário (Enter só ao final de cada linha, ao trocar de usuário).</li>
          <li>Salvar Como → Área de trabalho, Tipo "Todos os arquivos", nome <code>SCRIPT.BAT</code>.</li>
          <li>Dê duplo clique no SCRIPT.BAT no desktop do DC-01 para executar.</li>
          <li>Confira no AD (tecla F5 para atualizar se os usuários não aparecerem de imediato).</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/12-script-dsadd-bat.png", caption: "Arquivo SCRIPT.BAT no Bloco de Notas, com um comando dsadd por linha (Eloiza, Izabelli e Eliza Pimenta)." }
      ]
    },
    {
      heading: "3.2 Adicionando usuários em lote usando o PowerShell",
      html: `
        <p>No PowerShell a sintaxe é diferente. Para criar um único usuário (Fernanda Pimenta) na OU SenacSP:</p>
        <pre><code>New-ADUser -Name "Fernanda Pimenta" -DisplayName "Fernanda
Pimenta" -Path "ou=SenacSp,dc=Senac,dc=local"</code></pre>
        <p>Para importar vários usuários de uma vez (Miguel, Aldi, Antonio e Oscar Pimenta):</p>
        <ol>
          <li>Executar → <code>NOTEPAD</code> e digite os dados separados por vírgula, com cabeçalho <code>DN,Name,UPN</code> (um formato tipo CSV).</li>
          <li>Crie a pasta <code>C:\\TEMP</code> e salve o arquivo como <code>SCRIPT.CSV</code> dentro dela.</li>
          <li>No PowerShell, use um comando que lê o CSV linha a linha e executa <code>New-ADUser</code> para cada registro.</li>
          <li>Abra o AD e confira os usuários importados.</li>
        </ol>
      `,
      images: [
        { src: "assets/img/sistema-operacional/aula-3/13-script-csv-powershell.png", caption: "Arquivo SCRIPT.CSV no Bloco de Notas: cabeçalho DN,Name,UPN e uma linha por usuário (Miguel, Aldi, Antonio, Oscar Pimenta)." },
        { src: "assets/img/sistema-operacional/aula-3/14-powershell-import.png", caption: "PowerShell executando o comando que importa os usuários a partir do CSV." },
        { src: "assets/img/sistema-operacional/aula-3/15-ad-usuarios-finais.png", caption: "Console do AD mostrando todos os usuários criados na OU SenacSP: via GUI, DSADD e PowerShell." }
      ]
    }
  ],
  keyPoints: [
    "IFM (install from media) exporta o banco de dados do AD (NTDS) e o SYSVOL para uma mídia off-line, reduzindo o tráfego de rede ao promover um novo controlador de domínio.",
    "Sequência do IFM no DC-01: ntdsutil → activate instance ntds → ifm → create sysvol full C:\\IFM → quit.",
    "OUs são contêineres lógicos dentro de um domínio, usados para delegar administração e aplicar políticas de grupo — não precisam seguir a hierarquia departamental da empresa.",
    "Senha segura no AD: sem partes do nome do usuário, maiúsculas e minúsculas, mínimo 8 dígitos, pelo menos um símbolo.",
    "DSADD (prompt/DOS) cria objetos do AD com a sintaxe DSADD <objeto>,<caminho> -<atributos>; pode ser usado em lote via arquivo .BAT.",
    "New-ADUser (PowerShell) cria usuários com sintaxe diferente do DSADD; importação em massa pode ser feita lendo um arquivo .CSV.",
    "As guias de propriedades de um usuário no AD são: Geral, Conta, Perfil e Membro de (grupos)."
  ]
};
