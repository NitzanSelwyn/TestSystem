const repo = require('../../Dal/managerRepository');
const jwt = require('jsonwebtoken')
const mailer = require('../../Helper/mailer')
const config = require('../../Config/config')


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
    mailer.sendAdminUserActivationLink(email, req);
    res.status(200).send();
  })
}

exports.ActiveAdminAcount = (req, res) => {

  const adminToken = req.query.token;

  const decodedToken = jwt.verify(adminToken, config.jwtSecret);

  const activationHTML=function(title,message){
    return '<!doctype html><html><head><title>'+
    title+
    '</title></head><body><div style="width:500px;"><h1>Exams System</h1><hr/><h4>'+
    message+
    '</h4></div></body></html>';
};

  const email = decodedToken.sub;
  repo.ActiveAdminAccount(email, (data) => {
    res.status(200).send(activationHTML('Good','the account as been activated'))
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

  repo.AddNewQuestion(question, answers, (data) => {
    res.send(data);
  });
}