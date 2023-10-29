CREATE DATABASE escola;

USE escola;

CREATE TABLE aluno (
	idAluno INTEGER PRIMARY KEY,
	nomeAluno VARCHAR(100) NOT NULL,
    cpfAluno VARCHAR(15) NOT NULL,
    telefoneAluno VARCHAR(15) NOT NULL,
    turmaAluno VARCHAR(50)    
);

INSERT INTO aluno (idAluno, nomeAluno, cpfAluno, telefoneAluno, turmaAluno)
VALUES
    (1, 'João da Silva', '123.456.789-01', '(11) 1234-5678', 'Turma A'),
    (2, 'Maria Santos', '987.654.321-09', '(22) 9876-5432', 'Turma B'),
    (3, 'Pedro Souza', '456.789.123-45', '(33) 4567-8901', 'Turma C'),
    (4, 'Ana Pereira', '789.123.456-78', '(44) 7890-1234', 'Turma A'),
    (5, 'Lucas Oliveira', '234.567.890-12', '(55) 2345-6789', 'Turma D');

select * from aluno;

INSERT INTO aluno (idAluno, nomeAluno, cpfAluno, telefoneAluno, turmaAluno)
VALUES
    (6, 'Ulir Orleans', '124.458.780-01', '(45) 1234-5678', 'Turma D'),
    (7, 'Maria Santos', '587.354.451-07', '(46) 9876-5432', 'Turma B'),
    (8, 'Pedro Souza', '366.239.763-55', '(47) 4567-8901', 'Turma C');
    
select * from aluno where turmaAluno = 'TURMA B';
    
