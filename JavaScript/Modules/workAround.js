
import Employee from "./employee";

function getEmployeeInformation(inputSalary) {

  const example = new Employee(inputSalary);

  console.log('Cadre: ' + example.cadre);

  console.log('Tax: ' + example.tax);

  console.log('Benefits: ' + example.benefits);

  console.log('Bonus: ' + example.bonus);

  console.log('Reimbursement Eligibility: ' + example.reimbursementEligibility + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

/*
import {getCadre, calculateTax, getBenefits, calculateBonus, reimbursementEligibility} from "./employee";

import Employee from "./employee"''

function getEmployeeInformation(inputSalary) {
  Employee.salary = inputSalary;
  console.log('Cadre: ' + getCadre());
  console.log('Tax: ' + calculateTax());
  console.log('Benefits: ' + getBenefits());
  console.log('Bonus: ' + calculateBonus());
  console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);
*/