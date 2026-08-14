# Espaço+

Sistema web para gerenciamento de espaços escolares, desenvolvido para facilitar o controle de reservas, consulta de ambientes e organização da utilização dos espaços da escola.

## Sobre o projeto

O Espaço+ é um sistema desenvolvido para permitir que professores possam consultar os espaços disponíveis na escola e realizar reservas de forma simples e organizada.

A ideia principal do sistema é substituir um controle manual de reservas por uma plataforma onde seja possível visualizar os espaços, verificar suas situações, realizar novas reservas, consultar reservas existentes e acompanhar tudo através de um calendário.

O sistema possui uma interface simples, com foco em organização, facilidade de uso e visualização rápida das informações.

## Objetivo

O principal objetivo do Espaço+ é facilitar o gerenciamento dos espaços escolares.

Com o sistema, o usuário consegue:

- Fazer login no sistema;
- Visualizar seu perfil;
- Acessar o dashboard;
- Consultar os espaços disponíveis;
- Filtrar espaços por nome, tipo e status;
- Ver detalhes de cada espaço;
- Criar novas reservas;
- Escolher o espaço desejado;
- Escolher uma data;
- Escolher um horário;
- Informar a turma;
- Informar a finalidade da reserva;
- Consultar suas reservas;
- Filtrar reservas próximas ou passadas;
- Visualizar detalhes das reservas;
- Cancelar reservas;
- Visualizar as reservas através de um calendário;
- Alterar o mês do calendário;
- Filtrar as reservas por tipo de espaço.

---

# Funcionalidades

## Login

A primeira tela do sistema é a página de login.

O usuário deve informar:

- Username;
- Senha.

O sistema verifica os dados informados comparando com os usuários cadastrados no JavaScript.

Atualmente, existem alguns usuários cadastrados para testes:

- Gareis
- Luis
- Caio

Todos possuem a senha:

`123`

Depois que o login é realizado corretamente, o nome do usuário é salvo no `localStorage` e o sistema redireciona para o Dashboard.

O sistema também possui um botão de visualização da senha, representado pelo ícone de olho.

Quando o usuário clica no ícone, o campo alterna entre:

- Senha escondida;
- Senha visível.

Caso o usuário deixe algum campo vazio, o sistema apresenta uma mensagem informando o que precisa ser preenchido.

Caso os dados estejam incorretos, uma mensagem de erro é apresentada.

---

# Dashboard

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

---

# Espaços

A página de espaços apresenta os ambientes disponíveis na escola.

Cada espaço possui informações como:

- Nome;
- Tipo;
- Localização;
- Capacidade;
- Status.

Os espaços podem apresentar diferentes situações, como:

- Disponível;
- Em manutenção.

## Busca

O usuário pode pesquisar um espaço através do campo de busca.

A pesquisa acontece enquanto o usuário digita.

Por exemplo, ao pesquisar:

`Informática`

o sistema apresenta somente os espaços relacionados ao termo pesquisado.

## Filtro por tipo

Também é possível filtrar os espaços pelo tipo.

Entre os tipos disponíveis estão:

- Informática;
- Laboratório;
- Auditório.

Também existe a opção:

`Todos os tipos`

que mostra todos os espaços.

## Filtro por status

O sistema também permite filtrar os espaços de acordo com sua situação.

As opções são:

- Todos os status;
- Disponível;
- Manutenção.

Dessa forma, o usuário consegue encontrar rapidamente os espaços que podem ser utilizados.

## Detalhes do espaço

Cada espaço possui um botão de detalhes.

Ao clicar nesse botão, é aberto um pop-up com informações mais completas sobre o espaço selecionado.

São apresentados:

- Tipo;
- Nome;
- Localização;
- Capacidade;
- Status.

---

# Nova Reserva

A página de nova reserva permite que o usuário faça uma reserva de um espaço escolar.

O processo é dividido em algumas etapas.

## 1. Escolha do espaço

O usuário primeiro escolhe o espaço que deseja utilizar.

Os espaços disponíveis podem ser selecionados clicando no card correspondente.

Quando um espaço é selecionado, ele recebe um destaque visual.

Espaços que estão em manutenção não podem ser selecionados.

## 2. Escolha da data

Depois de selecionar o espaço, o usuário escolhe a data da reserva.

A data atual é preenchida automaticamente quando a página é aberta.

O sistema também impede que sejam selecionadas datas anteriores ao dia atual.

A data escolhida é apresentada no resumo da reserva no formato:

`DD/MM/AAAA`

## 3. Escolha do horário

O usuário pode selecionar um dos horários disponíveis.

Ao selecionar um horário, ele recebe um destaque visual.

O horário escolhido também aparece no resumo da reserva.

O sistema não permite confirmar uma reserva sem que um horário tenha sido selecionado.

## 4. Escolha da turma

O usuário seleciona a turma que utilizará o espaço.

Essa informação também aparece no resumo da reserva.

## 5. Finalidade

O usuário pode informar a finalidade da reserva.

Por exemplo:

`Modelagem Banco de Dados`

ou:

`Debate sobre IA`

Essa informação é armazenada junto com a reserva.

## 6. Confirmação

Depois de preencher as informações, o usuário pode confirmar a reserva.

O sistema cria um objeto contendo as informações da reserva.

Uma reserva possui informações como:

- Espaço;
- Bloco;
- Data;
- Horário;
- Turma;
- Finalidade;
- Usuário;
- Status.

Depois disso, a reserva é adicionada à lista de reservas e armazenada no navegador.

Após a confirmação, é exibido um pop-up informando que a reserva foi realizada.

---

# Minhas Reservas

A página de Minhas Reservas apresenta as reservas cadastradas no sistema.

As reservas são exibidas em uma tabela contendo informações como:

- Espaço;
- Bloco;
- Data;
- Horário;
- Turma;
- Finalidade;
- Status;
- Ações.

## Busca

É possível pesquisar uma reserva pelo nome do espaço.

A pesquisa acontece automaticamente enquanto o usuário digita.

## Filtro de reservas

As reservas podem ser filtradas em:

- Todas;
- Próximas;
- Passadas.

Para identificar se uma reserva é próxima ou passada, o sistema compara a data da reserva com a data atual.

## Ordenação

As reservas são organizadas de acordo com suas datas.

Isso facilita a visualização das reservas mais próximas e das reservas anteriores.

## Detalhes da reserva

Cada reserva possui um botão chamado:

`Detalhes`

Ao clicar, o sistema abre um pop-up com informações completas da reserva.

São apresentados:

- Data;
- Horário;
- Espaço;
- Bloco;
- Turma;
- Finalidade.

## Cancelamento

Também existe a opção de cancelar uma reserva.

Ao clicar em:

`Cancelar`

o sistema abre uma janela de confirmação.

O usuário pode:

- Voltar;
- Confirmar o cancelamento.

Quando o cancelamento é confirmado, a reserva é removida da lista e o `localStorage` é atualizado.

---

# Calendário

A página de calendário apresenta as reservas de maneira visual.

O calendário mostra:

- Dias da semana;
- Dias do mês;
- Reservas realizadas;
- Horário das reservas;
- Espaço reservado.

As reservas aparecem diretamente dentro do dia correspondente.

Por exemplo:

`14:00`

`Laboratório Informática 01`

Isso permite visualizar rapidamente quando um espaço está reservado.

## Alteração de mês

O calendário possui duas setas:

`<`

e

`>`

A seta da esquerda retorna para o mês anterior.

A seta da direita avança para o próximo mês.

O mês e o ano exibidos no topo são atualizados automaticamente.

## Dia atual

O dia atual recebe um destaque visual diferente dos outros dias.

Isso facilita a localização da data atual no calendário.

## Filtro de espaços

O calendário também possui um filtro para visualizar reservas de determinados tipos de espaço.

As opções incluem:

- Todos os Espaços;
- Informática;
- Laboratório;
- Auditório.

Quando um filtro é selecionado, somente as reservas correspondentes aparecem no calendário.

---

# Armazenamento de dados

O sistema utiliza o `localStorage` do navegador para armazenar algumas informações.

Isso permite que os dados continuem disponíveis mesmo depois que a página seja recarregada.

As principais informações armazenadas são:

## Usuário logado

A chave:

`usuarioNome`

armazena o nome do usuário que realizou o login.

Isso permite que outras páginas saibam qual usuário está logado.

O nome é utilizado para:

- Nome do perfil;
- Mensagem de boas-vindas;
- Iniciais da foto de perfil;
- Identificação do usuário na criação da reserva.

## Reservas

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
