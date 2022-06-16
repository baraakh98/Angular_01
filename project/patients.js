// Before review
class Patient {
    static ids = 0;
    id;
    name;
    gender;
    age;
    email;
    address;
    mobileNnmber;
  
    constructor(id, name, gender, age, email, address, mobileNnmber) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.address = address;
      this.email = email;
      this.age = age;
      this.mobileNnmber = mobileNnmber;
      Patient.id++;
    }
  
    setName(name) {
      this.name = name;
    }
    setGender(gender) {
      this.gender = gender;
    }
    setAge(age) {
      this.age = age;
    }
    setEmail(email) {
      this.email = email;
    }
    setAdress(adress) {
      this.address = adress;
    }
    setmobileNumber(mobile) {
      this.mobile = mobile;
    }
  }

  module.exports = Patient;

// //////////////////////////

  // After review
  // what this class do?
class Patient {
  static Patient_ids = 0;
  Patient_id;
  Patient_name;
  Patient_gender;
  Patient_age;
  Patient_email;
  Patient_address;
  Patient_mobileNnmber;

  constructor(Patient_id, Patient_name, Patient_gender, Patient_age, Patient_email, Patient_address, Patient_mobileNnmber) {

    this.Patient_id = Patient_id;
    this.Patient_name = Patient_name;
    this.Patient_gender = Patient_gender;
    this.Patient_age = Patient_age;
    this.Patient_email = Patient_email;
    this.Patient_address = Patient_address;
    this.Patient_mobileNnmber = Patient_mobileNnmber;
    
    Patient.id++;
  }

setPId (Patient_id){
  this.Patient_id=Patient_id;
}

  setName(Patient_name) {
    this.Patient_name = Patient_name;
  }

  setGender(Patient_gender) {
    this.Patient_gender = Patient_gender;
  }

  setAge(Patient_age) {
    this.Patient_age = Patient_age;
  }

  setEmail(Patient_email) {
    this.Patient_email = Patient_email;
  }

  setAdress(Patient_address) {
    this.Patient_address = Patient_address;
  }

  setmobileNumber(Patient_mobileNnmber) {
    this.Patient_mobileNnmber = Patient_mobileNnmber;
  }
  
}

module.exports = Patient;