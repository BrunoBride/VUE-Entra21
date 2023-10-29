CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE livro (
	idLivro INTEGER PRIMARY KEY,
	isbnLivro VARCHAR(13) NOT NULL,
    tituloLivro VARCHAR(100) NOT NULL,
    autorLivro VARCHAR(100) NOT NULL,
    editoraLivro VARCHAR(100) NOT NULL,
    generoLivro VARCHAR(50),
    anoLivro INT,
    situacaoLivro VARCHAR(50) DEFAULT 'Disponível',
    qtdEstoqueLivro INT,
    prateleiraLivro VARCHAR(10)
);

INSERT INTO livro (idLivro, isbnLivro, tituloLivro, autorLivro, editoraLivro, generoLivro, anoLivro, situacaoLivro, qtdEstoqueLivro, prateleiraLivro)
VALUES
    (1, '978-0061120084', 'A Guerra dos Tronos', 'George R. R. Martin', 'Bantam Books', 'Fantasia', 1996, 'Disponível', 20, 'A1'),
    (2, '978-0451524935', '1984', 'George Orwell', 'Signet Classic', 'Ficção Distópica', 1949, 'Reservado', 8, 'B3'),
    (3, '978-0735219090', 'A Garota no Trem', 'Paula Hawkins', 'Riverhead Books', 'Suspense', 2015, 'Locado', 15, 'C2'),
    (4, '978-0livro062315007', 'O Grande Gatsby', 'F. Scott Fitzgerald', 'Scribner', 'Ficção', 1925, 'Locado', 5, 'A4'),
    (5, '978-0345350497', 'O Hobbit', 'J.R.R. Tolkien', 'Houghton Mifflin Harcourt', 'Fantasia', 1937, 'Disponível', 10, 'B1');


ALTER TABLE livro
MODIFY isbnLivro VARCHAR(20);

select * from livro;