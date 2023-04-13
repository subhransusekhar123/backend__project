const userModel = require("../model/user");
const compareEncryptPassword = require("../utils/compareEncrypt.utils");

const signUp = (req, res) => {

    let new_user = new userModel({
        userName: req.body.userName,
        userPassword: req.body.password
    })

    new_user.save()
        .then(data => res.send(data))
        .catch(err => res.send(err))

}

const signIn = (req,res) => {
    userModel.findOne({userName:req.body.userName})
    .then(result => {
        console.log(req.body.userPassword, result.userPassword)
        compareEncryptPassword(req.body.userPassword, result.userPassword)
        .then(data => {
            res.json({
                matched : data
            })
        })
        .catch(err => {
            res.json({
                error : "error occured in comparing password",
                actualErr : err
            })
        })
    })
}

module.exports = {signUp , signIn}

