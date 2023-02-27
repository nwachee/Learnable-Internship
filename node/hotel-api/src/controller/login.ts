//Creating Login Controller
import userService from "../services/userService"
import { genSalt, hash as _hash } from "bcryptjs"
import User from "../models/user"

//Login 
const loginPage = (req, res) => {
    res.render("login", {})
}

//Register
const registerPage = (req, res) =>{
    res.render("register", {})
}

class UserController{

    async registerUser (req, res) {
        const { name, email, location, password, confirm } = req.body;
        if (!name || !email || !password || !confirm) {
          console.log("Fill empty fields");
        }
        //Confirm Passwords
        if (password !== confirm) {
          console.log("Password must match");
        } else {
          //Validation
          userService.fetchOne({ email: email }).then((user) => {
            if (user) {
              console.log("email exists");
              res.render("register", {
                name,
                email,
                password,
                confirm,
              });
            } else {
              //Validation
              const newUser = new User({
                name,
                email,
                location,
                password,
              });
              //Password Hashing
              genSalt(10, (err, salt) =>
                _hash(newUser.password, salt, (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  newUser
                    .save()
                    .then(res.redirect("/login"))
                    .catch((err) => console.log(err));
                })
              );
            }
          });
        }
      };
}

export default { loginPage, registerPage }