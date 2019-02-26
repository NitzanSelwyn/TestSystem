const repo = require('../../Dal/studentRepository')
const jwt = require('jsonwebtoken')
const mailer = require('../../Helper/mailer')
const config = require('../../Config/config')

exports.signup = (req, res) => {
    const student = req.body.student;
    const testId = req.body.testId;

    repo.signup(student, testId, (data) => {
        res.send(data);
    })
}

exports.getStudentTest = (req, res) => {
    const testId = req.body.testId;

    repo.getStudentTest(testId, (data) => {
        const test = createTestToSend(data);
        res.send(test);
    })
}

function createTestToSend(exam) {

    const questions = exam[1];
    const answers = exam[2];

    let examDTO = {
        examId: exam[0][0].TestId,
        language: exam[0][0].Language,
        name: exam[0][0].Name,
        openingText: exam[0][0].OpeningText,
        passingGrade: exam[0][0].PassingGrade,
        questions: []
    }

    for (let i = 0; i < questions.length; i++) {
        
        let examQuestions = {
            id: questions[i].QuestionId,
            title: questions[i].Tilte,
            textBelow: questions[i].TextBelow,
            isHorizontal: questions[i].IsHorizontal,
            isMultyChoice: questions[i].IsMultyChoice,
            answers: []
        }

        for (let j = 0; j < answers.length; j++) {
            if(answers[j].QuestionId == questions[i].QuestionId){
                examQuestions.answers.push(answers[j])
            }            
        }
        examDTO.questions.push(examQuestions)
    }

    return examDTO
}
