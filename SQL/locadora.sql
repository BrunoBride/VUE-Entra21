-- Criar a banco de dados "locadora"
CREATE DATABASE IF NOT EXISTS locadora;
USE locadora;

-- Criar a tabela "filmes" 

CREATE TABLE filmes (
    IdFilme INT PRIMARY KEY auto_increment,
    Titulo VARCHAR(30),
    Genero VARCHAR(50),
    Diretor VARCHAR(30),
    AnoLancamento YEAR
);

-- Inserir 10 filmes
INSERT INTO filmes (Titulo, Genero, Diretor, AnoLancamento)
VALUES
('O Império Contra-Ataca','Ação, Aventura, Fantasia','Irvin Kershner',1980),
('E.T. - O Extraterrestre','Ficção Científica, Aventura','Steven Spielberg',1982),
('De Volta para o Futuro','Ficção Científica, Aventura','Robert Zemeckis',1985),
('Os Caça-Fantasmas','Ação, Comédia, Fantasia','Ivan Reitman',1984),
('Indiana Jones e o Templo da Perdição','Ação, Aventura','Steven Spielberg',1984),
('Star Trek IV: A Volta para Casa','Ficção Científica, Aventura','Leonard Nimoy',1986),
('Top Gun - Ases Indomáveis','Ação, Drama','Tony Scott','1986'),
('Dirty Dancing - Ritmo Quente','Drama, Romance','Emile Ardolino',1987),
('Batman','Ação, Fantasia','Tim Burton','1989'),
('O Silêncio dos Inocentes','Crime, Drama, Thriller','Jonathan Demme',1991);

-- selecionando todos os filmes
select * from filmes;

-- aumentando tamanho das colunas
ALTER TABLE filmes
MODIFY COLUMN Titulo VARCHAR(50);

-- filtro filmes com ano menor que 90
SELECT Titulo, AnoLancamento
FROM filmes
WHERE AnoLancamento < 1990;

-- apagando o 3 filme
DELETE FROM filmes
WHERE IdFilme = 13;

-- filtro apenas filme com comedia no genero, usei aventura pois so tem uma comedia na lista
SELECT Titulo,genero 
FROM filmes 
WHERE Genero 
LIKE '%Aventura%';

-- mudei o titulo do filme os caça-fantasmas 
UPDATE filmes
SET Titulo = 'Os Caçadores de Fantasmas'
WHERE IdFilme = 14;

ALTER TABLE filmes
Add duracao INT;


UPDATE filmes SET duracao = 124  WHERE IdFilme = 11;
UPDATE filmes SET duracao = 115 WHERE IdFilme = 12;
UPDATE filmes SET duracao =  105 WHERE IdFilme = 14;
UPDATE filmes SET duracao = 118 WHERE IdFilme = 15;
UPDATE filmes SET duracao = 119  WHERE IdFilme = 16;
UPDATE filmes SET duracao = 110 WHERE IdFilme = 17;
UPDATE filmes SET duracao = 100 WHERE IdFilme = 18;
UPDATE filmes SET duracao = 126 WHERE IdFilme = 19;
UPDATE filmes SET duracao = 118 WHERE IdFilme = 20;


UPDATE filmes
SET duracao = 30
WHERE IdFilme IN (19,20);

SELECT AVG (duracao) AS media
FROM filmes;



