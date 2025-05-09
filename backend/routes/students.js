var express = require('express');
var router = express.Router();
var studentsModel = require('../models/students-models.js');

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Retorna todos os estudantes
 *     tags:
 *       - Estudantes
 *     responses:
 *       200:
 *         description: Lista de estudantes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do estudante
 *                   nome:
 *                     type: string
 *                     description: Nome do estudante
 *                   matricula:
 *                     type: string
 *                     description: Matrícula do estudante
 *                   sexo:
 *                     type: string
 *                     description: Sexo do estudante
 */

/* GET all students listing. */
<<<<<<< HEAD
router.get('/', function (req, res, next) {
    listStudents = students.map(s => {
        return {
            id: s.id,
            nome: s.nome,
            matricula: s.matricula,
            sexo: s.sexo
        }
    })
    res.send(listStudents);
=======
router.get('/', async function (req, res, next) {
    studentsModel.getStudents(res)
>>>>>>> 288f868 (adicionando swagger e db)
});


router.get('/:id', function (req, res, next) {
    id = req.params.id
    studentsModel.getStudentById(id, res)
});

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Cria um novo estudante
 *     tags:
 *       - Estudantes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do estudante
 *               matricula:
 *                 type: string
 *                 description: Matrícula do estudante
 *               sexo:
 *                 type: string
 *                 description: Sexo do estudante
 *     responses:
 *       201:
 *         description: Estudante criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do estudante
 *                 nome:
 *                   type: string
 *                   description: Nome do estudante
 *                 matricula:
 *                   type: string
 *                   description: Matrícula do estudante
 *                 sexo:
 *                   type: string
 *                   description: Sexo do estudante
 */

// Salvar estudante
router.post('/', function (req, res, next) {
    student = req.body
    console.log('student', student)
    studentsModel.createStudent(student,res)
})

// Atualizar estudante
router.patch('/:id', function (req, res, next) {
    id = req.params.id
    student = req.body
    studentsModel.updateStudent(id, student, res)
})

// Deletar Estudante
router.delete('/:id', function (req, res, next) {
    id = req.params.id
    studentsModel.deleteStudent(id)
})

module.exports = router;
