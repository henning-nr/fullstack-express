var express = require('express');
var router = express.Router();


// BANCO DE DADOS
teachers = [
    {
        nome: "Maria prof",
        matricula: 123456,
        sexo: "m",
        id: 1
    },
    {
        nome: "Josefa prof",
        matricula: 789456,
        sexo: "m",
        id: 2
    },
    {
        nome: "Amara prof",
        matricula: 545656,
        sexo: "m",
        id: 3
    }
]

/* GET all teachers listing. */
router.get('/', function (req, res, next) {
    res.send(teachers);
});

/* GET by id teachers listing. */
router.get('/:id', function (req, res, next) {
    // pegar dados na requisição
    // params -> parâmentros Ex: /1
    // body ->  corpo { objetos }
    
    id =  req.params.id
    result = teachers.filter(s => s.id == id)
    res.send(result[0]);
});

// Salvar professores
router.post('/', function (req, res, next) {
    student = req.body
    student.id = teachers.length + 1
    teachers.push(student)
    res.send(student)
})

// Atualizar professores
router.patch('/:id',function(req, res, next){
    id = req.params.id
    student = req.body

    teachers[id].nome = student.nome
    teachers[id].matricula = student.matricula
    teachers[id].sexo = student.sexo

    res.send(teachers[id])
})

// Deletar professores
router.delete('/:id', function(req, res, next){
    id = req.params.id

    teachers.splice(id, 1)

    res.send('professores deletado')
})

module.exports = router;
