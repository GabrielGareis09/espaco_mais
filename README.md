# Espaço+

Sistema web para gerenciamento e reserva de espaços escolares.

O Espaço+ foi desenvolvido com o objetivo de facilitar o gerenciamento dos espaços disponíveis em uma instituição de ensino, permitindo que professores consultem os ambientes, realizem reservas, acompanhem suas reservas e visualizem todas as reservas através de um calendário.

O sistema possui uma interface simples, organizada e responsiva, buscando facilitar a utilização por professores e funcionários da instituição.

---

## 📌 Sobre o projeto

O Espaço+ é um sistema de gerenciamento de espaços escolares desenvolvido como projeto acadêmico.

A ideia principal é substituir ou complementar o controle manual de reservas de salas e outros ambientes da escola, centralizando as informações em um único sistema.

Por meio do sistema, o usuário consegue:

- Realizar login;
- Visualizar o dashboard;
- Consultar os espaços disponíveis;
- Ver informações detalhadas dos espaços;
- Criar novas reservas;
- Escolher espaço, data e horário;
- Informar turma e finalidade da reserva;
- Visualizar suas reservas;
- Consultar o histórico de reservas;
- Cancelar reservas;
- Visualizar as reservas em um calendário;
- Filtrar espaços e reservas;
- Navegar entre os meses do calendário.

---

# 🖥️ Tecnologias utilizadas

O projeto foi desenvolvido utilizando tecnologias básicas de desenvolvimento web.

### HTML5

Utilizado para criar a estrutura das páginas do sistema.

O HTML é responsável pela organização dos elementos, como:

- Menus;
- Botões;
- Formulários;
- Tabelas;
- Cards;
- Calendário;
- Campos de entrada;
- Janelas de detalhes e confirmação.

### CSS3

Utilizado para estilizar e organizar visualmente o sistema.

O CSS é responsável por:

- Cores;
- Tipografia;
- Espaçamentos;
- Bordas;
- Sombras;
- Botões;
- Cards;
- Tabelas;
- Calendário;
- Layout das páginas;
- Estados de interação;
- Organização visual dos componentes.

### JavaScript

Utilizado para adicionar interatividade e lógica ao sistema.

O JavaScript controla funcionalidades como:

- Login;
- Validação de campos;
- Exibição da senha;
- Seleção de espaços;
- Seleção de horários;
- Criação de reservas;
- Cancelamento de reservas;
- Filtros;
- Busca;
- Calendário;
- Pop-ups;
- Atualização das informações do usuário;
- Armazenamento das reservas.

### LocalStorage

O `localStorage` do navegador é utilizado para armazenar temporariamente os dados do sistema.

Ele é utilizado principalmente para:

- Armazenar o usuário logado;
- Armazenar as reservas realizadas;
- Recuperar as reservas entre as páginas.

O projeto não utiliza banco de dados externo. Os dados são armazenados diretamente no navegador através do `localStorage`.

### Google Fonts

A fonte `Inter` é utilizada no projeto para manter uma aparência moderna e padronizada em todas as páginas.

---

# 📂 Estrutura do repositório

O projeto está organizado em pastas para facilitar a manutenção e separação dos arquivos.

```text
Espaco+
│
├── html/
│   ├── login.html
│   ├── dashboard.html
│   ├── espacos.html
│   ├── calendario.html
│   ├── novaReserva.html
│   └── minhasReservas.html
│
├── css/
│   ├── login.css
│   ├── dashboard.css
│   ├── espacos.css
│   ├── calendario.css
│   ├── novaReserva.css
│   └── minhasReservas.css
│
├── js/
│   ├── login.js
│   ├── dashboard.js
│   ├── espacos.js
│   ├── calendario.js
│   ├── novaReserva.js
│   └── minhasReservas.js
│
└── README.md
