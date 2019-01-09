let payGrades = {
  entryLevel: {
    taxMultiplier: .05,
    benefits: ['health'],
    minSalary: 10000,
    maxSalary: 49999
  },
  midLevel: {
    taxMultiplier: .1,
    benefits: ['health', 'housing'],
    minSalary: 50000,
    maxSalary: 99999
  },
  seniorLevel: {
    taxMultiplier: 0.2,
    benefits: ['health', 'housing', 'wellness', 'gym'],
    minSalary: 100000,
    maxSalary: 200000
  }
};

let reimbursementCosts = {
  health: 5000,
  housing: 8000,
  wellness: 6000,
  gym: 12000
};

let totalBenefitsValue, employeeBenefits;

function getCadre(amount) {
  if (amount >= payGrades.entryLevel.minSalary && amount <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (amount >= payGrades.midLevel.minSalary && amount <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else {
    return 'seniorLevel';
  }
}

function calculateTax(amount) {
  return payGrades[getCadre(amount)].taxMultiplier * amount;
}

class Employee {
  constructor(amount) {
    this._salary = amount;
    this._cadre = getCadre(amount);
    this._tax = calculateTax(amount);
  }

  get cadre() {
    return this._cadre;
  }

  get tax() {
    return this._tax;
  }

  get benefits() {
    return payGrades[this._cadre].benefits.join(', ');
  }

  get bonus() {
    return .02 * this._salary;
  }

  get reimbursementEligibility() {

    totalBenefitsValue = 0;

    employeeBenefits = payGrades[this.cadre].benefits;

    for (let i = 0; i < employeeBenefits.length; i++) {

      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }

    return totalBenefitsValue;
  }
}

export default Employee;

/*
let Employee = {
  salary: 10000
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

export function calculateBonus() {
  return .02 * Employee.salary;
}

export function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export default Employee;
*/