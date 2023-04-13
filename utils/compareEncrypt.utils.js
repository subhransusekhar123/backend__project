const bcrypt = require("bcrypt") ;
const compareEncryptPassword = async ( simpleTextPassword, hash) => {
    try{
        let result = await bcrypt.compare(simpleTextPassword, hash)
        return result;
    }catch(error){
        return false ;
    }
}

module.exports = compareEncryptPassword ;