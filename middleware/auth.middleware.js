const bcrypt = require('bcrypt');
const salt = 10;


const encryptPassword = (req, res, next) => {
        let plainTextpassword = req.body.userPassword ;
        // console.log(plainTextpassword);
        bcrypt.hash(plainTextpassword, salt)
       .then(data => {
        console.log("bcryptconsole", data);
        req.body.password = data
        next();
       })
       .catch((err)=>{
        console.log(err) 
        res.json({message:"Error in encrypting password."})
})
        
}



module.exports = encryptPassword ;