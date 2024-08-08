CREATE TABLE Usuario (
    id SERIAL PRIMARY KEY,
    CPF VARCHAR(11) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    endereco TEXT NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    senha VARCHAR(255) NOT NULL, 
    tipo VARCHAR(1) NOT NULL
);


CREATE TABLE pecas_roupas (
    id SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    prazo INTEGER NOT NULL
);

CREATE TABLE pedidos (
    id SERIAL PRIMARY KEY,
    cliente_id INTEGER REFERENCES usuario(id),
    data_hora TIMESTAMP NOT NULL,
    estado VARCHAR(20) NOT NULL,
    total DECIMAL(10, 2) NOT NULL
);

CREATE TABLE itens_pedidos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    peca_roupa_id INTEGER REFERENCES pecas_roupas(id),
    quantidade INTEGER NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

CREATE TABLE recolhimentos (
    id SERIAL PRIMARY KEY,
    pedido_id INTEGER REFERENCES pedidos(id),
    funcionario_id INTEGER REFERENCES funcionarios(id),
    data_hora TIMESTAMP NOT NULL
);

CREATE TABLE enderecos (
    id SERIAL PRIMARY KEY,
    idCliente INTEGER REFERENCES usuario(id),
    logradouro VARCHAR(255) NOT NULL,
    numero VARCHAR(20) NOT NULL,
    complemento VARCHAR(255),
    bairro VARCHAR(255) NOT NULL,
    cidade VARCHAR(255) NOT NULL
    cep VARCHAR(20) NOT NULL,
);