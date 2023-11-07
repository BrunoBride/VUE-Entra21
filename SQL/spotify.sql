-- Criar a banco de dados "spotify"
CREATE DATABASE IF NOT EXISTS spotify;
USE spotify;

-- Criar a tabela "musica" 

CREATE TABLE musica (
    Id_Musica INT PRIMARY KEY auto_increment,
    Titulo VARCHAR(30),
    Genero VARCHAR(20),
    Artista VARCHAR(30),
    AnoLancamento YEAR
);

-- Inserir 10 músicas fictícias
INSERT INTO musica (Titulo, Genero, Artista, AnoLancamento)
VALUES
    ('Bohemian Rhapsody', 'Rock', 'Queen', 1975),
    ('Imagine', 'Pop', 'John Lennon', 1971),
    ('Hotel California', 'Rock', 'Eagles', 1976),
    ('Rolling in the Deep', 'Pop', 'Adele', 2010),
    ('Sweet Child O Mine', 'Rock', 'Guns N Roses', 1987),
    ('Billie Jean', 'Pop', 'Michael Jackson', 1983),
    ('Smells Like Teen Spirit', 'Rock', 'Nirvana', 1991),
    ('Yesterday', 'Pop', 'The Beatles', 1965),
    ('Stairway to Heaven', 'Rock', 'Led Zeppelin', 1971),
    ('Thriller', 'Pop', 'Michael Jackson', 1982);

select * from musica;

SELECT Titulo FROM musica WHERE Artista = 'Queen';

SELECT DISTINCT Artista FROM musica WHERE Genero = 'Rock';

SELECT DISTINCT Genero FROM musica WHERE Artista = 'Michael Jackson';

SELECT Titulo, Artista FROM musica WHERE AnoLancamento = 1987;

-- Criar a tabela "artista"
CREATE TABLE artista (
    Id_Artista INT PRIMARY KEY auto_increment,
    NomeArtista VARCHAR(30),
    GeneroMusical VARCHAR(20),
    AnoDeEstreia INT,
    PaisOrigem VARCHAR(30)
);

-- Inserir 10 artistas fictícios
INSERT INTO artista (NomeArtista, GeneroMusical, AnoDeEstreia, PaisOrigem)
VALUES
    ('Queen', 'Rock', 1971, 'Reino Unido'),
    ('Michael Jackson', 'Pop', 1964, 'Estados Unidos'),
    ('Adele', 'Pop', 2006, 'Reino Unido'),
    ('The Beatles', 'Rock', 1960, 'Reino Unido'),
    ('Nirvana', 'Rock', 1987, 'Estados Unidos'),
    ('Led Zeppelin', 'Rock', 1968, 'Reino Unido'),
    ('Bob Marley', 'Reggae', 1962, 'Jamaica'),
    ('Elvis Presley', 'Rock', 1953, 'Estados Unidos'),
    ('Madonna', 'Pop', 1979, 'Estados Unidos'),
    ('U2', 'Rock', 1976, 'Irlanda');
 
UPDATE artista
SET generoartista = 'Feminino'
WHERE Id_Artista IN (3,9);
 
    
select * from artista;  

select NomeArtista from artista;

ALTER TABLE artista
ADD AreaDeAtuacao VARCHAR(50);

ALTER TABLE artista
ADD GeneroArtista VARCHAR(10);

ALTER TABLE artista
ADD AlturaArtista float;

UPDATE artista
SET AreaDeAtuacao = 'Artista Solo'
WHERE Id_Artista in (2,3,9,7, 8);

UPDATE artista
SET AreaDeAtuacao = 'Banda de Rock'
WHERE Id_Artista IN (1,4, 5, 6, 10);

UPDATE artista
SET Altura = 1.75 WHERE NomeArtista = 'Queen';

UPDATE artista
SET Altura = 1.78 WHERE NomeArtista = 'Michael Jackson';

UPDATE artista
SET Altura = 1.75 WHERE NomeArtista = 'Adele';

update artista set AlturaArtista = 1.75 where Id_Artista = 1;
update artista set AlturaArtista = 1.78 where Id_Artista = 2;
update artista set AlturaArtista = 1.73 where Id_Artista = 3;
update artista set AlturaArtista = 1.72 where Id_Artista = 7;
update artista set AlturaArtista = 1.85 where Id_Artista = 8;
update artista set AlturaArtista = 1.64 where Id_Artista = 9;
update artista set AlturaArtista = 1.78 where Id_Artista = 10;

select alturaArtista from artista;
select AreaDeAtuacao from artista;
    
SELECT NomeArtista FROM artista WHERE GeneroArtista = 'feminino';

UPDATE artista
SET NomeArtista = 'Frederico Mercurio' WHERE Id_Artista = 1;
update artista set AlturaArtista = 0.50 where Id_Artista = 3;
UPDATE artista SET AreaDeAtuacao = 'Guitarrista' WHERE Id_Artista = 5;


select * from artista;


