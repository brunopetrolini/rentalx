# Requisitos feature rent

## Aluguel do carro

### Requisitos Funcionais
- 🗹 Deve ser possível cadastrar um aluguel;

### Use Case
- 🗹 O aluguel deve ter duração mínima de 24 horas;
- 🗹 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário;
- 🗹 Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro;
- 🗹 Não deve ser possível cadastrar um novo aluguel caso o usuário não esteja logado;
- 🗹 Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível;

## Devolução de carro

### Requisitos Funcionais
- 🗹 Deve ser possível realizar a devolução de um carro;

### Use Case
- 🗹 Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa;
- 🗹 Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
- 🗹 Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel;
- 🗹 Ao realizar a devolução, deverá ser calculado o total do aluguel;
- 🗹 Caso o horário de devolução seja superior ao horário provisto de entrega, deverá ser cobrado multa proporcional aos dias de atraso;
- 🗹 Caso haja multa, deverá ser somado ao total do aluguel;
- 🗹 O usuário deve estar logado na aplicação;

## listagem de Alugueis por Usuário

### Requisitos Funcionais
- Deve ser possível realizar a busca de todos os alugueis para o usuário;

### Use Case
- O usuário deve estar logado na aplicação;