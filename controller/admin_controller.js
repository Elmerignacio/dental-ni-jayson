

const Home_page = (req, res) =>{
res.render("Home_page")
}

const Login_page = (req, res) =>{
  res.render("Login_page")
  }

 const Register_page = (req, res) =>{
  res.render("Register_page")
  }

module.exports = {
  Home_page,
  Login_page,
  Register_page 
}