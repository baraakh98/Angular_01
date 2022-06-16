// before ewview
class Validation{

    emailValidation(str) {
        let format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      
        if (format.test(str)) {
          return true;
        } 
        else {
          return false;
        }
      }

}
module.exports = Validation;

// after review
// what this class do
class Validation{

  emailValidation(str) {
      let format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    
      if (format.test(str))
      {
        return true;
      } 
      else 
      {
        return false;
      }
    }
}
module.exports = Validation;