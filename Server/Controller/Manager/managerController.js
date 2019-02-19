const repo = require('../../Dal/managerRepository');


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
  let question = req.body.Question
  repo.AddNewQuestion(question);
}