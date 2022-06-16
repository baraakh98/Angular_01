// //// before review 
class Appointment {
  // you must added more information for this values
    id;
    date;
    time;
    constructor(id, date, time) {
      this.id = id;
      this.date = date;
      this.time = time;
    }
  }
  module.exports = Appointment;  


  // //////// After review 
  
// what this class? and Appointemtn for what?
// Solution => appointment patient in clinic class 
class Appointment {
  
  // you must added more information for this values
  Appointment_id;
  Appointment_date;
  Appointment_time;
  
    constructor(Appointment_id, Appointment_date, Appointment_time) {
      this.Appointment_id = Appointment_id;
      this.Appointment_date = Appointment_date;
      this.Appointment_time = Appointment_time;
    }
  }
  module.exports = Appointment;  

  