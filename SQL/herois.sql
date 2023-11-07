-- Criar a banco de dados "heroi"
CREATE DATABASE IF NOT EXISTS heroi;
USE heroi;

-- Criar a tabela "super heroi" 

CREATE TABLE super_heroi (
    IdHeroi INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255) NOT NULL,
    IdentidadeSecreta VARCHAR(255),
    PoderesHabilidades TEXT,
    Origem TEXT,
    EquipeAliados TEXT,
    Inimigos TEXT,
    PrimeiraAparicao VARCHAR(255),
    Editora VARCHAR(255),
    AnoCriacao INT,
    Descricao TEXT
);

-- Inserir os herois
INSERT INTO super_heroi (Nome, IdentidadeSecreta, PoderesHabilidades, Origem, EquipeAliados, Inimigos, PrimeiraAparicao, Editora, AnoCriacao, Descricao)
VALUES
    ('Superman', 'Clark Kent', 'Superforça, voo, visão de calor', 'Krypton', 'Liga da Justiça', 'Lex Luthor', 'Action Comics #1', 'DC Comics', 1938, 'O Último Filho de Krypton'),
    ('Mulher Maravilha', 'Diana Prince', 'Superforça, agilidade, laço da verdade', 'Ilha de Themyscira', 'Liga da Justiça', 'Mulher-Leopardo', 'All Star Comics #8', 'DC Comics', 1941, 'A Princesa das Amazonas'),
    ('Homem de Ferro', 'Tony Stark', 'Armadura com tecnologia avançada', 'Terra', 'Os Vingadores', 'Mandarim', 'Tales of Suspense #39', 'Marvel', 1963, 'O Gênio Bilionário'),
    ('Batman', 'Bruce Wayne', 'Inteligência, artes marciais, tecnologia', 'Gotham City', 'Liga da Justiça', 'Coringa', 'Detective Comics #27', 'DC Comics', 1939, 'O Cavaleiro das Trevas'),
    ('Thor', 'Thor Odinson', 'Superforça, martelo mágico', 'Asgard', 'Os Vingadores', 'Loki', 'Journey into Mystery #83', 'Marvel', 1962, 'O Deus do Trovão'),
    ('Flash', 'Barry Allen', 'Super velocidade', 'Central City', 'Liga da Justiça', 'Reverso', 'Showcase #4', 'DC Comics', 1956, 'O Homem Mais Rápido do Mundo'),
    ('Hulk', 'Bruce Banner', 'Superforça, resistência', 'Experimento de radiação', 'Os Vingadores', 'Abominável', 'The Incredible Hulk #1', 'Marvel', 1962, 'A Máquina de Destruição'),
    ('Aquaman', 'Arthur Curry', 'Habilidades aquáticas, comunicação com peixes', 'Atlantis', 'Liga da Justiça', 'Mestre do Oceano', 'More Fun Comics #73', 'DC Comics', 1941, 'O Rei dos Mares'),
    ('Capitã Marvel', 'Carol Danvers', 'Voo, superforça', 'Terra', 'Vingadores', 'Ronan, o Acusador', 'Marvel Super-Heroes #13', 'Marvel', 1967, 'A Heroína Cósmica'),
    ('Viuva Negra', 'Natasha Romanoff', 'Habilidades de espionagem, combate', 'Rússia', 'Os Vingadores', 'Barão Zemo', 'Tales of Suspense #52', 'Marvel', 1964, 'A Espiã Mortal'),
    ('Lanterna Verde', 'Hal Jordan', 'Anel de poder, criação de objetos', 'Setor 2814', 'Liga da Justiça', 'Sinestro', 'Showcase #22', 'DC Comics', 1959, 'O Guardião do Espaço'),
    ('Pantera Negra', 'TChalla', 'Força sobrenatural, tecnologia avançada', 'Wakanda', 'Vingadores', 'Erik Killmonger', 'Fantastic Four #52', 'Marvel', 1966, 'Rei de Wakanda'),
    ('Arqueiro Verde', 'Oliver Queen', 'Habilidade em arco e flecha', 'Star City', 'Liga da Justiça', 'Pistoleiro', 'More Fun Comics #73', 'DC Comics', 1941, 'O Justiceiro com Arco'),
    ('Mulher Invisível', 'Sue Storm', 'Invisibilidade, campos de força', 'Nova Iorque', 'Quarteto Fantástico', 'Doutor Destino', 'Fantastic Four #1', 'Marvel', 1961, 'A Mulher Invisível'),
    ('Feiticeira Escarlate', 'Wanda Maximoff', 'Manipulação da realidade, feitiçaria', 'Wundagore Mountain', 'Vingadores', 'Ultron', 'X-Men #4', 'Marvel', 1964, 'A Mestra da Magia'),
    ('Doutor Estranho', 'Stephen Strange', 'Magia, habilidades místicas', 'Nova Iorque', 'Os Vingadores', 'Dormammu', 'Strange Tales #110', 'Marvel', 1963, 'Mestre das Artes Místicas'),
    ('Gavião Arqueiro', 'Clint Barton', 'Arco e flechas, mira excepcional', 'Waverly', 'Os Vingadores', 'Mercenário', 'Tales of Suspense #57', 'Marvel', 1964, 'O Mestre do Arco'),
    ('Jean Grey', 'Jean Grey', 'Telepatia, telecinese', 'Nova Iorque', 'X-Men', 'Fênix Negra', 'X-Men #1', 'Marvel', 1963, 'A Telepata Poderosa');

select * 
from super_heroi;
