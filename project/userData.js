// Before review

const Patient = require('./patients.js');
const Validation = require('./validate.js');
const Appointment = require('./appointment.js');
const Treatment = require('./treatment.js');
const prompt = require("prompt-sync")({ sigint: true });

class Records{

  patients = [];
  appointments = [];
  treatments = [];
  static choice = 0;



constructor(){
  const p = new Patient();
}
//------------------------------------------------
showChoices(){
  console.log(`Choose one to choices :
1- Add patient
2- Add appointment
3- Add treatment
4- List patients
5- List appointments
6- End `);
}

//-------------------------------------------------------
pushPatient(){
  let name = prompt("enter The name : ");
  let gender = prompt("enter the age : ");
  let age = prompt("enter the gender : ");
  let email = prompt("enter the email : ");
  let address = prompt("enter The address : ");
  let mobileNnmber = prompt("enter The mobileNnmber : ");
  let id = Patient.ids++;
  let patient = new Patient(id, name, gender, age, email, address, mobileNnmber);
  this.patients.push(patient);
}
//----------------------------------------------------------
pushAppointment(){
  let patientId = prompt("Enter patient Id : ");
  let time = prompt("Enter appointment time : ");
  let date = prompt("Enter appointment Date : ");
  let appointment = new Appointment(patientId, time, date);
  this.appointments.push(appointment);
}
//--------------------------------------------
pushTreatment(){
  let patientId2 = prompt("Enter patient Id : ");
  let appointmentId = prompt("Enter appointment Id : ");
  let teethNumber = prompt("enter Teeth Number : ");
  let toothStr = prompt("Enter the Date : ");
  let treatment = new Treatment(patientId2, appointmentId, teethNumber, toothStr);
  this.treatments.push(treatment);
}

//---------------------------------------------------
showPatientsList(){
  for (let patient of this.patients) {
    console.log(`Patient ID : ${patient.id}`);
    console.log(`Patient name : ${patient.name}`);
    console.log(`Patient age : ${patient.age}`);
    console.log(`Appointment id : ${patient.appointmentId}`);
    console.log(`Patient treatments : ${patient.treatments}`);
    console.log("----------------------------------");
  }
}

showAppointmentsList(){
  for (let appointment of this.appointments) {
    console.log(`Appointment ID : ${appointment.appointmentId}`);
    console.log(`Appointment date : ${appointment.date}`);
    console.log(`Appointments time : ${appointment.time}`);
    console.log("----------------------------------");
}
}

fillDataTorecord(choice){

  if (choice == 1) {

    this.pushPatient();

  } else if (choice == 2) {

    this.pushAppointment();

  } else if (choice == 3) {

    this.pushTreatment();

  } else if (choice == 4) {

    this.showPatientsList();

  } else if (choice == 5) {

    this.showAppointmentsList();

  }

}

enterData(){
  Records.choice = prompt("Enter a Choice : ");
  this.fillDataTorecord(Records.choice);
    
  }

}
let data = new Records();
data.showChoices();
while (Records.choice < 6){
  data.enterData();
}


//  ////////////////// after review /////////////////
// Export files 
const Patient = require('./patients.js');
const Validation = require('./validate.js');
const Appointment = require('./appointment.js');
const Treatment = require('./treatment.js');
const prompt = require("prompt-sync")({ sigint: true });

class Records{

  patients = [];
  appointments = [];
  treatments = [];
  static choice = 0;

constructor(){ const p = new Patient();}
//what we are do rightnow 
showChoices(){
  console.log(`Choose one to choices :
1- Add patient
2- Add appointment
3- Add treatment
4- List patients
5- List appointments
6- End `);
}

// what this section do , you must add descreption about every section
pushPatient(){
  let name = prompt("enter The name : ");
  let gender = prompt("enter the age : ");
  let age = prompt("enter the gender : ");
  let email = prompt("enter the email : ");
  let address = prompt("enter The address : ");
  let mobileNnmber = prompt("enter The mobileNnmber : ");
  let id = Patient.ids++;
  let patient = new Patient(id, name, gender, age, email, address, mobileNnmber);
  this.patients.push(patient);
}
// what this section do
pushAppointment(){
  let patientId = prompt("Enter patient Id : ");
  let time = prompt("Enter appointment time : ");
  let date = prompt("Enter appointment Date : ");
  let appointment = new Appointment(patientId, time, date);
  this.appointments.push(appointment);
}
// what this section do
pushTreatment(){
  let patientId2 = prompt("Enter patient Id : ");
  let appointmentId = prompt("Enter appointment Id : ");
  let teethNumber = prompt("enter Teeth Number : ");
  let toothStr = prompt("Enter the Date : ");
  let treatment = new Treatment(patientId2, appointmentId, teethNumber, toothStr);
  this.treatments.push(treatment);
}
// what this section do
showPatientsList(){
  for (let patient of this.patients) {
    console.log(`Patient ID : ${patient.id}`);
    console.log(`Patient name : ${patient.name}`);
    console.log(`Patient age : ${patient.age}`);
    console.log(`Appointment id : ${patient.appointmentId}`);
    console.log(`Patient treatments : ${patient.treatments}`);
    console.log("----------------------------------");
  }
}
// what this section do
showAppointmentsList(){
  for (let appointment of this.appointments) {
    console.log(`Appointment ID : ${appointment.appointmentId}`);
    console.log(`Appointment date : ${appointment.date}`);
    console.log(`Appointments time : ${appointment.time}`);
    console.log("----------------------------------");
}
}
// what this section do
fillDataTorecord(choice){

  if (choice == 1) {
    this.pushPatient();

  } else if (choice == 2) {
    this.pushAppointment();

  } else if (choice == 3) {
    this.pushTreatment();

  } else if (choice == 4) {
    this.showPatientsList();

  } else if (choice == 5) {
    this.showAppointmentsList();
  }
}

enterData(){
  Records.choice = prompt("Enter a Choice : ");
  this.fillDataTorecord(Records.choice);
    
  }

}

let data = new Records();
data.showChoices();

while (Records.choice < 6)
{
  data.enterData();
}




