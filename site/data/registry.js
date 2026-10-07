/*
 * Registro central das matérias e módulos.
 * Para adicionar uma matéria nova no futuro: crie uma pasta em data/<id>/,
 * um arquivo .js por módulo (seguindo o padrão dos existentes), um quiz.js
 * e adicione a matéria aqui. Nenhum outro arquivo HTML precisa ser tocado.
 */
window.APP_DATA = window.APP_DATA || { content: {}, quizzes: {}, simulados: {} };

window.APP_DATA.registry = {
  subjects: [
    {
      id: "sistema-operacional",
      name: "Sistema Operacional I",
      short: "Sistema Operacional I",
      color: "#2563eb",
      icon: "🖥️",
      modules: [
        { id: "aula-1", order: 1, title: "Fundamentos de sistemas operacionais e máquinas virtuais" },
        { id: "aula-2", order: 2, title: "Active Directory: domínios, grupos de trabalho e administração remota" },
        { id: "aula-3", order: 3, title: "Instalação do AD (IFM), usuários, grupos e PowerShell" },
        { id: "aula-4", order: 4, title: "Serviços de rede: DHCP e DNS" },
        { id: "aula-5", order: 5, title: "Roteamento em LAN, discos e RAID" },
        { id: "aula-6", order: 6, title: "Servidores de impressão e pool de impressão" },
        { id: "aula-7", order: 7, title: "Política de segurança e GPO (Group Policy Objects)" },
        { id: "aula-8", order: 8, title: "AppLocker e VPN no Windows Server" }
      ]
    },
    {
      id: "banco-de-dados",
      name: "Banco de Dados",
      short: "Banco de Dados",
      color: "#059669",
      icon: "🗄️",
      modules: [
        { id: "capitulo-1", order: 1, title: "Conceitos iniciais de banco de dados" },
        { id: "capitulo-2", order: 2, title: "Modelagem conceitual: Diagrama Entidade-Relacionamento (DER)" },
        { id: "capitulo-3", order: 3, title: "Modelo relacional" },
        { id: "capitulo-4", order: 4, title: "Normalização" },
        { id: "capitulo-5", order: 5, title: "SQL: criação de tabelas, consultas, atualizações e visões" },
        { id: "capitulo-6", order: 6, title: "Índices e restrições de integridade" },
        { id: "capitulo-7", order: 7, title: "SQL: stored procedures e triggers" },
        { id: "capitulo-8", order: 8, title: "Catálogo, segurança, transações e recuperação de dados" }
      ]
    },
    {
      id: "etica-cidadania",
      name: "Ética, Cidadania e Sustentabilidade",
      short: "Ética e Cidadania",
      color: "#d97706",
      icon: "⚖️",
      modules: [
        { id: "capitulo-1", order: 1, title: "Ética no Ocidente" },
        { id: "capitulo-2", order: 2, title: "Direitos humanos" },
        { id: "capitulo-3", order: 3, title: "Democracia no Brasil e grupos minorizados" },
        { id: "capitulo-4", order: 4, title: "Cidadania: bases históricas e princípios" },
        { id: "capitulo-5", order: 5, title: "Relações étnico-raciais no Brasil" },
        { id: "capitulo-6", order: 6, title: "Relações de gênero" },
        { id: "capitulo-7", order: 7, title: "Sustentabilidade: fundamentos e definições" },
        { id: "capitulo-8", order: 8, title: "Desenvolvimento sustentável" }
      ]
    }
  ]
};
