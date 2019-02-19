const repo = require('../../Dal/managerRepository');
const jwt = require('jsonwebtoken')



exports.Login = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  repo.Login(email, password, (data) => {
    jwt.sign(data.recordset[0], config.jwtSecret, (err, token) => {
      res.send({ token: token, user: data });
    })
  })

}

exports.Register = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.name

  repo.Register(email, password, fullName, (data) => {
    res.send(data);
  })
}

exports.GetManagerOrganizations = (req, res) => {

  const email = req.body.Email;
  repo.GetManagerOrganizations(email, (data) => {
    res.send(data);
  });

}

exports.GetSubjectsByOrganizationId = (req, res) => {

  const id = req.body.Id;
  repo.GetSubjectsByOrganizationId(id, (data) => {
    res.send(data);
  })

}

exports.GetQustionsbySubjectIdAndOrganizationId = (req, res) => {

  const organizationId = req.body.OrganizationId;
  const subjectId = req.body.SubjectId;

  repo.GetQustionsbySubjectIdAndOrganizationId(subjectId, organizationId, (data) => {
    res.send(data);
  })
}

exports.GetQuestionsAnswersById = (req, res) => {

  const questionId = req.body.Id;
  repo.GetQuestionsAnswersById(questionId, (data) => {
    res.send(data);
  })

}

exports.AddNewQuestion = (req, res) => {


  const question = req.body.Question
  const answers = req.body.Answers

  repo.AddNewQuestion(question,answers,(data)=>{
    res.send(data);
  });
}