const db = require('../database/database.js');

// Listar estudantes
// Obter todos os estudantes
async function getStudents(res) {
    db.all('SELECT * FROM students', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.send(rows);
    });
}

// Obter estudante por id
function getStudentById(id, res) {
    db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
        if (err) {
            throw (err);
        } else {
            res.send(row);
        }
    });
}

// Criar estudante
function createStudent(student, res) {
    db.run('INSERT INTO students (nome, matricula, sexo) VALUES (?, ?, ?)', [student.nome, student.matricula, student.sexo], function (err) {
        if (err) {
            throw (err);
        } else {
            res.send(student);
        }
    });
}

// Atualizar estudante
function updateStudent(id, student, res) {
    db.run('UPDATE students SET nome = ?, matricula = ?, sexo = ? WHERE id = ?', [student.nome, student.matricula, student.sexo, id], function (err) {
        if (err) {
            throw (err);
        } else {
            res.send(student);
        }
    });
}

// Deletar estudante
function deleteStudent(id, res) {
    db.run('DELETE FROM students WHERE id = ?', [id], function (err) {
        if (err) {
            throw(err);
        } else {
            res.send({ message: 'Student deleted successfully' });
        }
    });
}
// Exportar funções
module.exports = {
    getStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
};