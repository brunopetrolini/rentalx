# Requisitos feature cars

## Cadastro de Carros

### Requisitos Funcionais
- Deve ser possível cadastrar um novo carro;
- Deve ser possível listar todas as caregorias;

### Use Cases
- Não deve ser possível cadastrar um carro com uma placa já existente;
- Não deve ser possível alterar a placa de um carro já cadastrado;
- O carro deve ser cadastrado, por padrão, como dísponivel;
- Não deve ser possível o cadastro de um novo carro por um usuário não admin;

## Listagem de carros

### Requisitos Funcionais
- Deve ser possível listar todos os carros disponíveis;
- Deve ser possível listar todos os carros disponíveis pelo nome da categoria;
- Deve ser possível listar todos os carros disponíveis pelo nome da marca;
- Deve ser possível listar todos os carros disponíveis pelo nome do carro;

### Requisitos não Funcionais

### Use Cases
- O usuário não precisa estar logado no sistema;

## Cadastro de Especificação do carro

### Requisitos Funcionais
- Deve ser possível cadastrar uma especifícação para um carro;
- Deve ser possível listar todas as especifícações;
- Deve ser possível listar todos os carros;

### Use Cases
- Não deve ser possível cadastrar uma especificação para um carro não registrado;
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;
- Não deve ser possível de uma nova especifição por um usuário não admin;

## Cadastro de imagens do carro

### Requisitos Funcionais
- Deve ser possível adicionar a imagem do carro;
- Deve ser possível listar todos os carros;

### Requisitos não funcionais
- Utilizar o multer para upload dos arquivos;

### Use Cases
- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;
- Não deve ser possível a adição de uma imagem por um usuário não admin;
