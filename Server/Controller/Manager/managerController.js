const repo = require('../../Dal/managerRepository');

exports.ManagerLogin = (res,req) =>{

  const email = req.body.email;
  const password = req.body.password;

   const user = repo.Login(email,password);
   res.send(user);

}

exports.ManagerRegister = () =>{
    
}