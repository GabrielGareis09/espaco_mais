# Espaço+

Sistema web para gerenciamento de espaços escolares, desenvolvido para facilitar o controle de reservas, consulta de ambientes e organização da utilização dos espaços da escola.

## Sobre o projeto

O Espaço+ é um sistema desenvolvido para permitir que professores possam consultar os espaços disponíveis na escola e realizar reservas de forma simples e organizada.

A ideia principal do sistema é substituir um controle manual de reservas por uma plataforma onde seja possível visualizar os espaços, verificar suas situações, realizar novas reservas, consultar reservas existentes e acompanhar tudo através de um calendário.

O sistema possui uma interface simples, com foco em organização, facilidade de uso e visualização rápida das informações.

## Objetivo

O principal objetivo do Espaço+ é facilitar o gerenciamento dos espaços escolares.

Com o sistema, o usuário consegue:

* Fazer login no sistema;
* Visualizar seu perfil;
* Acessar o dashboard;
* Consultar os espaços disponíveis;
* Filtrar espaços por nome, tipo e status;
* Ver detalhes de cada espaço;
* Criar novas reservas;
* Escolher o espaço desejado;
* Escolher uma data;
* Escolher um horário;
* Informar a turma;
* Informar a finalidade da reserva;
* Consultar suas reservas;
* Filtrar reservas próximas ou passadas;
* Visualizar detalhes das reservas;
* Cancelar reservas;
* Visualizar as reservas através de um calendário;
* Alterar o mês do calendário;
* Filtrar as reservas por tipo de espaço.

## Funcionalidades

### Login

A primeira tela do sistema é a página de login.

O usuário deve informar:

* Username;
* Senha.

O sistema verifica os dados informados comparando com os usuários cadastrados no JavaScript.

Atualmente, existem alguns usuários cadastrados para testes:

* Gareis
* Luis
* Caio

Todos possuem a senha:

`123`

Depois que o login é realizado corretamente, o nome do usuário é salvo no `localStorage` e o sistema redireciona para o Dashboard.

O sistema também possui um botão de visualização da senha, representado pelo ícone de olho.

Quando o usuário clica no ícone, o campo alterna entre:

* Senha escondida;
* Senha visível.

Caso o usuário deixe algum campo vazio, o sistema apresenta uma mensagem informando o que precisa ser preenchido.

Caso os dados estejam incorretos, uma mensagem de erro é apresentada.

### Dashboard

Depois de realizar o login, o usuário é direcionado para o Dashboard.

O Dashboard funciona como a página inicial do sistema.

Nele são apresentadas informações resumidas e atalhos para outras partes do sistema.

O nome do usuário logado é utilizado automaticamente na tela.

O sistema também cria as iniciais do nome do usuário para serem exibidas na foto de perfil.

Por exemplo:

`Gabriel Gareis`

seria representado pelas iniciais:

`GG`

O Dashboard também possui acesso aos detalhes e às funcionalidades principais do sistema.

### Espaços

A página de espaços apresenta os ambientes disponíveis na escola.

Cada espaço possui informações como:

* Nome;
* Tipo;
* Localização;
* Capacidade;
* Status.

Os espaços podem apresentar diferentes situações, como:

* Disponível;
* Em manutenção.

#### Busca

O usuário pode pesquisar um espaço através do campo de busca.

A pesquisa acontece enquanto o usuário digita.

Por exemplo, ao pesquisar:

`Informática`

o sistema apresenta somente os espaços relacionados ao termo pesquisado.

#### Filtro por tipo

Também é possível filtrar os espaços pelo tipo.

Entre os tipos disponíveis estão:

* Informática;
* Laboratório;
* Auditório.

Também existe a opção:

`Todos os tipos`

que mostra todos os espaços.

#### Filtro por status

O sistema também permite filtrar os espaços de acordo com sua situação.

As opções são:

* Todos os status;
* Disponível;
* Manutenção.

Dessa forma, o usuário consegue encontrar rapidamente os espaços que podem ser utilizados.

#### Detalhes do espaço

Cada espaço possui um botão de detalhes.

Ao clicar nesse botão, é aberto um pop-up com informações mais completas sobre o espaço selecionado.

São apresentados:

* Tipo;
* Nome;
* Localização;
* Capacidade;
* Status.

### Nova Reserva

A página de nova reserva permite que o usuário faça uma reserva de um espaço escolar.

O processo é dividido em algumas etapas.

#### 1. Escolha do espaço

O usuário primeiro escolhe o espaço que deseja utilizar.

Os espaços disponíveis podem ser selecionados clicando no card correspondente.

Quando um espaço é selecionado, ele recebe um destaque visual.

Espaços que estão em manutenção não podem ser selecionados.

#### 2. Escolha da data

Depois de selecionar o espaço, o usuário escolhe a data da reserva.

A data atual é preenchida automaticamente quando a página é aberta.

O sistema também impede que sejam selecionadas datas anteriores ao dia atual.

A data escolhida é apresentada no resumo da reserva no formato:

`DD/MM/AAAA`

#### 3. Escolha do horário

O usuário pode selecionar um dos horários disponíveis.

Ao selecionar um horário, ele recebe um destaque visual.

O horário escolhido também aparece no resumo da reserva.

O sistema não permite confirmar uma reserva sem que um horário tenha sido selecionado.

#### 4. Escolha da turma

O usuário seleciona a turma que utilizará o espaço.

Essa informação também aparece no resumo da reserva.

#### 5. Finalidade

O usuário pode informar a finalidade da reserva.

Por exemplo:

`Modelagem Banco de Dados`

ou:

`Debate sobre IA`

Essa informação é armazenada junto com a reserva.

#### 6. Confirmação

Depois de preencher as informações, o usuário pode confirmar a reserva.

O sistema cria um objeto contendo as informações da reserva.

Uma reserva possui informações como:

* Espaço;
* Bloco;
* Data;
* Horário;
* Turma;
* Finalidade;
* Usuário;
* Status.

Depois disso, a reserva é adicionada à lista de reservas e armazenada no navegador.

Após a confirmação, é exibido um pop-up informando que a reserva foi realizada.

### Minhas Reservas

A página de Minhas Reservas apresenta as reservas cadastradas no sistema.

As reservas são exibidas em uma tabela contendo informações como:

* Espaço;
* Bloco;
* Data;
* Horário;
* Turma;
* Finalidade;
* Status;
* Ações.

#### Busca

É possível pesquisar uma reserva pelo nome do espaço.

A pesquisa acontece automaticamente enquanto o usuário digita.

#### Filtro de reservas

As reservas podem ser filtradas em:

* Todas;
* Próximas;
* Passadas.

Para identificar se uma reserva é próxima ou passada, o sistema compara a data da reserva com a data atual.

#### Ordenação

As reservas são organizadas de acordo com suas datas.

Isso facilita a visualização das reservas mais próximas e das reservas anteriores.

#### Detalhes da reserva

Cada reserva possui um botão chamado:

`Detalhes`

Ao clicar, o sistema abre um pop-up com informações completas da reserva.

São apresentados:

* Data;
* Horário;
* Espaço;
* Bloco;
* Turma;
* Finalidade.

#### Cancelamento

Também existe a opção de cancelar uma reserva.

Ao clicar em:

`Cancelar`

o sistema abre uma janela de confirmação.

O usuário pode:

* Voltar;
* Confirmar o cancelamento.

Quando o cancelamento é confirmado, a reserva é removida da lista e o `localStorage` é atualizado.

### Calendário

A página de calendário apresenta as reservas de maneira visual.

O calendário mostra:

* Dias da semana;
* Dias do mês;
* Reservas realizadas;
* Horário das reservas;
* Espaço reservado.

As reservas aparecem diretamente dentro do dia correspondente.

Por exemplo:

`14:00`

`Laboratório Informática 01`

Isso permite visualizar rapidamente quando um espaço está reservado.

#### Alteração de mês

O calendário possui duas setas:

`<`

e

`>`

A seta da esquerda retorna para o mês anterior.

A seta da direita avança para o próximo mês.

O mês e o ano exibidos no topo são atualizados automaticamente.

#### Dia atual

O dia atual recebe um destaque visual diferente dos outros dias.

Isso facilita a localização da data atual no calendário.

#### Filtro de espaços

O calendário também possui um filtro para visualizar reservas de determinados tipos de espaço.

As opções incluem:

* Todos os Espaços;
* Informática;
* Laboratório;
* Auditório.

Quando um filtro é selecionado, somente as reservas correspondentes aparecem no calendário.

## Armazenamento de dados

O sistema utiliza o `localStorage` do navegador para armazenar algumas informações.

Isso permite que os dados continuem disponíveis mesmo depois que a página seja recarregada.

As principais informações armazenadas são:

### Usuário logado

A chave:

`usuarioNome`

armazena o nome do usuário que realizou o login.

Isso permite que outras páginas saibam qual usuário está logado.

O nome é utilizado para:

* Nome do perfil;
* Mensagem de boas-vindas;
* Iniciais da foto de perfil;
* Identificação do usuário na criação da reserva.

### Reservas

As reservas são armazenadas através da chave:

`reservas`

Os dados são convertidos para JSON antes de serem armazenados.

Quando o sistema precisa utilizar as reservas novamente, o JSON é convertido de volta para objetos JavaScript.

Exemplo de estrutura:

```js
{
    espaco: "Informática 01",
    bloco: "Bloco Cinza",
    data: "2026-08-06",
    horario: "08:10 — 09:00",
    turma: "3º A",
    finalidade: "Modelagem Banco de Dados",
    usuario: "Gareis",
    status: "Confirmada"
}
```

## Comunicação entre as páginas

As páginas do sistema utilizam o `localStorage` para compartilhar informações.

Por exemplo:

1. O usuário realiza o login.
2. O nome é salvo no `localStorage`.
3. O usuário acessa o Dashboard.
4. O Dashboard recupera o nome salvo.
5. O mesmo nome pode ser utilizado nas páginas de Espaços, Calendário e Minhas Reservas.

O mesmo acontece com as reservas.

Quando uma nova reserva é criada:

1. Os dados são coletados;
2. Um objeto de reserva é criado;
3. A reserva é adicionada à lista;
4. A lista é salva no `localStorage`;
5. Outras páginas conseguem acessar essa mesma lista.

Assim, uma reserva criada na página de Nova Reserva pode aparecer posteriormente em:

* Minhas Reservas;
* Calendário;
* Cards de informações do sistema.

## Tecnologias utilizadas

### HTML5

Utilizado para criar a estrutura das páginas do sistema.

As principais páginas são:

* Login;
* Dashboard;
* Espaços;
* Nova Reserva;
* Minhas Reservas;
* Calendário.

### CSS3

Utilizado para estilizar toda a interface.

O CSS é responsável por:

* Cores;
* Tipografia;
* Espaçamentos;
* Cards;
* Botões;
* Tabelas;
* Calendário;
* Pop-ups;
* Campos de formulário;
* Responsividade visual.

### JavaScript

O JavaScript é responsável pela parte interativa do sistema.

Entre suas funções estão:

* Login;
* Validação dos campos;
* Visualização da senha;
* Filtros;
* Busca;
* Seleção de espaços;
* Seleção de horários;
* Criação de reservas;
* Cancelamento de reservas;
* Calendário;
* Navegação entre meses;
* Pop-ups;
* Atualização das informações do usuário;
* Armazenamento no `localStorage`.

### Google Fonts

O sistema utiliza a fonte:

`Inter`

A fonte é utilizada para manter uma aparência moderna, simples e consistente em todas as páginas.

## Estrutura do projeto

A organização do projeto é dividida entre HTML, CSS e JavaScript.

```text
Espaço+/
│
├── html/
│   ├── login.html
│   ├── dashboard.html
│   ├── espacos.html
│   ├── novaReserva.html
│   ├── minhasReservas.html
│   └── calendario.html
│
├── css/
│   ├── login.css
│   ├── dashboard.css
│   ├── espacos.css
│   ├── novaReserva.css
│   ├── minhasReservas.css
│   └── calendario.css
│
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── espacos.js
│   ├── novaReserva.js
│   ├── minhasReservas.js
│   └── calendario.js
│
└── README.md
```

## Fluxo do sistema

O funcionamento principal do sistema pode ser resumido da seguinte maneira:

```text
LOGIN
  ↓
DASHBOARD
  ↓
┌───────────────────────────────┐
│                               │
↓                               ↓
ESPAÇOS                    NOVA RESERVA
│                               │
│                               ↓
│                         ESCOLHER ESPAÇO
│                               ↓
│                         ESCOLHER DATA
│                               ↓
│                       ESCOLHER HORÁRIO
│                               ↓
│                        ESCOLHER TURMA
│                               ↓
│                          FINALIDADE
│                               ↓
│                        CONFIRMAR RESERVA
│                               │
│                               ↓
│                         LOCALSTORAGE
│                               │
└───────────────┬───────────────┘
                ↓
        MINHAS RESERVAS
                │
                ├── Detalhes
                ├── Cancelamento
                ├── Busca
                └── Filtros
                │
                ↓
           CALENDÁRIO
                │
                ├── Visualizar reservas
                ├── Mudar mês
                └── Filtrar espaços
```

## Validações

O sistema possui algumas validações para evitar erros durante a utilização.

No login:

* Username obrigatório;
* Senha obrigatória;
* Verificação de usuário e senha.

Na criação de reservas:

* Espaços em manutenção não podem ser selecionados;
* A data não pode ser anterior ao dia atual;
* É obrigatório selecionar um horário;
* Os dados da reserva são armazenados após a confirmação.

No calendário:

* As reservas são mostradas somente no dia correspondente;
* Os filtros alteram as reservas exibidas;
* O mês pode ser alterado através das setas.

## Interface

O sistema utiliza uma interface baseada em um estilo simples e moderno.

As principais características visuais são:

* Fundo claro;
* Cards brancos;
* Bordas suaves;
* Cantos arredondados;
* Azul como cor principal;
* Fonte Inter;
* Botões com efeitos de interação;
* Destaques para informações importantes;
* Organização em cards, tabelas e calendários.

A interface foi desenvolvida buscando facilitar a leitura e deixar as informações importantes facilmente acessíveis.

## Funcionamento do calendário

O calendário é gerado dinamicamente através do JavaScript.

Ao carregar a página, o sistema:

1. Identifica o mês atual;
2. Identifica o primeiro dia do mês;
3. Calcula quantos dias o mês possui;
4. Cria os espaços vazios antes do primeiro dia;
5. Cria cada dia do mês;
6. Identifica o dia atual;
7. Procura reservas para cada dia;
8. Mostra as reservas encontradas dentro do dia;
9. Completa a última semana com espaços vazios.

Quando o usuário muda de mês, o calendário é renderizado novamente.

Isso significa que não é necessário criar manualmente os dias de cada mês no HTML.

## Funcionamento dos filtros

Os filtros funcionam diretamente no JavaScript.

O sistema pega os valores selecionados pelo usuário e compara com os dados existentes.

Por exemplo, na página de espaços:

```text
Busca
   ↓
Tipo
   ↓
Status
   ↓
Resultado filtrado
```

Na página de reservas:

```text
Busca pelo espaço
        ↓
Filtro de status
        ↓
Reservas filtradas
```

No calendário:

```text
Todos os espaços
        ↓
Informática
        ↓
Laboratório
        ↓
Auditório
```

A página é atualizada automaticamente sempre que o usuário altera um filtro.

## Responsabilidade de cada arquivo JavaScript

### login.js

Responsável pelo:

* Login;
* Validação dos campos;
* Verificação dos usuários;
* Mostrar e ocultar senha;
* Mensagens de erro;
* Mensagem de sucesso;
* Salvamento do usuário no `localStorage`;
* Redirecionamento para o Dashboard.

### dashboard.js

Responsável por:

* Mostrar o nome do usuário;
* Criar as iniciais do perfil;
* Abrir e fechar o pop-up de detalhes.

### espacos.js

Responsável por:

* Busca de espaços;
* Filtro por tipo;
* Filtro por status;
* Contagem de espaços encontrados;
* Exibição dos detalhes;
* Pop-up de informações.

### novaReserva.js

Responsável por:

* Seleção do espaço;
* Seleção da data;
* Seleção do horário;
* Seleção da turma;
* Finalidade da reserva;
* Criação da reserva;
* Salvamento da reserva;
* Confirmação da reserva.

### minhasReservas.js

Responsável por:

* Listar reservas;
* Pesquisar reservas;
* Filtrar reservas;
* Ordenar reservas;
* Mostrar detalhes;
* Cancelar reservas;
* Atualizar os cards;
* Atualizar o `localStorage`.

### calendario.js

Responsável por:

* Criar o calendário;
* Mostrar mês e ano;
* Criar os dias;
* Destacar o dia atual;
* Mostrar reservas;
* Alterar o mês;
* Filtrar reservas por espaço.

## Limitações atuais

Como o projeto utiliza `localStorage`, os dados ficam armazenados somente no navegador em que o sistema está sendo utilizado.

Isso significa que:

* Os dados não são compartilhados entre computadores;
* Outro usuário não consegue visualizar os dados de outro navegador;
* Limpar os dados do navegador pode apagar as reservas;
* O sistema ainda não possui um banco de dados real;
* O login atual utiliza usuários cadastrados diretamente no JavaScript.

Essas limitações fazem parte da versão atual do projeto.

## Possíveis melhorias futuras

O sistema pode ser expandido futuramente com:

* Banco de dados;
* Sistema de autenticação real;
* Cadastro de usuários;
* Diferentes níveis de acesso;
* Área administrativa;
* Controle de professores;
* Controle de alunos;
* Controle de espaços;
* Bloqueio automático de horários já reservados;
* Notificações;
* E-mail de confirmação;
* Histórico completo de alterações;
* Integração com calendário externo;
* Sistema de aprovação de reservas;
* Relatórios;
* Dashboard com gráficos;
* API para comunicação com o banco de dados;
* Backend para gerenciamento das informações.

## Conclusão

O Espaço+ foi desenvolvido com o objetivo de criar uma solução simples e organizada para o gerenciamento de espaços escolares.

O sistema reúne em uma única plataforma as principais funções necessárias para controlar reservas, permitindo que o usuário consulte os espaços, realize reservas, acompanhe seus agendamentos e visualize tudo através de um calendário.

O projeto também demonstra a utilização prática de HTML, CSS e JavaScript em uma aplicação web, incluindo manipulação do DOM, eventos, filtros, formulários, armazenamento de dados com `localStorage`, criação dinâmica de elementos e interação entre diferentes páginas.

A estrutura atual permite que o projeto seja futuramente evoluído para uma aplicação completa utilizando um backend e banco de dados, mantendo a mesma lógica geral apresentada nesta versão.
