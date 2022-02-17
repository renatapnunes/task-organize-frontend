# PROJETO: TASK ORGANIZER
👋 Bem-vinda(o) ao meu projeto! 

_Projeto proposto no curso de Desenvolvimento Web da_ [_Trybe_](https://www.betrybe.com/)

***Simulaçao de desafio técnico***

### Contexto
Este projeto foi desenvolvido para solucionar o problema que a empresa Ebyrt (~~fictícia~~) está tendo com a organização das tarefas individuais de seus colaboradores.

Como solicitado, a aplicação utiliza a Stack **MERN** (*MongoDB, Express, React e Node.js*) e por opção, a Arquitetura em camadas **MSC** (*Model, Service e Controller*).

O back-end da aplicação consiste em uma API que permite a criação, listagem, atualização e exclusão de tarefas em um banco de dados.
O front-end por sua vez consome essa API, permitindo ao usuário filtrar as tarefas exibidas por ordem alfabética, data de criação ou por seu status.

##### Este repositório contém apenas o front-end da aplicação.
##### O back-end encontra-se neste repositório: [Task Organizer Backend](https://github.com/renatapnunes/task-organize-backend)


### Instalação
Pré-requisitos:

 - Ter instalado em sua máquina o NPM
 
 No terminal da sua máquina digite a seguinte sequência de comandos:

     git clone git@github.com:renatapnunes/task-organize-frontend.git
     cd task-organize-frontend
     npm install
     npm start
Estes comandos são o suficiente para integrar a aplicação ao back-end.
Caso não abra sozinho, você pode acessar no seu browser `http://localhost:3000/`

### Aplicação

![Aplicação rodando integrada ao backend](https://github.com/renatapnunes/task-organize-frontend/blob/main/task-organizer.png)

Assim que iniciar a aplicação, as tarefas cadastradas serão exibidas caso existam.
No topo da página existe um formulário onde é possível inserir uma nova tarefa.
Na lateral, é possível filtrar pelo status as tarefas exibidas e também ordenar-las por ordem alfabética e pela data em que foi criada.
Em cada tarefa listada, há um botão para edição da mesma e um botão para excluí-la da lista.
A aplicação conta também com um botão para limpar toda a lista de tarefas.

### Dependências
Juntamente com o **React.js**, foram usados neste projeto **ContextApi** e **Hooks**, além das seguintes dependências:
**Axios**, **React Router Dom** e **ESLint**

### Próximos passos

 - Implementar testes unitários e de integração
 - Fazer o deploy da aplicação, provavelmente no Heroku

### Meus contatos
Estou aberta a feedbacks sobre este projeto.
Caso queria colaborar, fique a vontade para entrar em contato pelo meu:

👉 [Linkedin](https://www.linkedin.com/in/renata-p-nunes/)

Vou ficar muito feliz em aprender algo novo! 😄
