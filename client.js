class Employee{
  constructor( name, employeeNumber, annualSalary, reviewRating ){
    this.name = name;
    this.employeeNumber = employeeNumber;
    this.annualSalary = annualSalary;
    this.reviewRating = reviewRating;
  } // end constructor
} // end Employee class

const atticus = new Employee( 'Atticus', '2405', '47000', 3 ); // this creates a new object
const jem = new Employee( 'Jem', '62347', '63500', 4 );
const scout =  new Employee( 'Scout', '6243', '74750', 5 );
const robert =  new Employee( 'Robert', '26835', '66000', 1 );
const mayella =  new Employee( 'Mayella', '89068', '35000', 2 );

const employees = [ atticus, jem, scout, robert, mayella ]; // this is an array of objects

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT
$(document).ready(readyNow)

let modifiedEmployeeInfo = []

function employeeInfo(){
  for ( employee of employees){
    console.log(employeeInfoIndividual(employee));
    modifiedEmployeeInfo.push(employeeInfoIndividual(employee));
    console.log(modifiedEmployeeInfo);
  }
  return true //because luke
}

function employeeInfoIndividual(employee){
 //need other functions 
 let employeeSalaryInfo = {
   name: employee.name,
   bonusPercentage: bonusPercentage( employee ),
   totalCompensation: totalSalary( employee),
   totalBonus: totalBonus( employee )
 }
return employeeSalaryInfo;
}


function bonusPercentage( employee ){
  //add bonus percentage from rating
  let bonusPercent = 0;
  if (employee.reviewRating === 3) {
    bonusPercent += .04;
  }
  else if (employee.reviewRating === 4) {
    bonusPercent += .06;
  }
  else if (employee.reviewRating === 5) {
    bonusPercent += .1;
  }
  //console.log( ' Review based bonus =', bonusPercent);
  
  //check for additional bonus from employee number/tenure
  if (employee.employeeNumber.length === 4){
    bonusPercent += .05;
    //console.log( 'They received tenure bonus of 5%!  New total bonus % is', bonusPercent );
  }
  //check if salary above 65,000
   //adjust bonus down 1%
  if ( Number(employee.salary) > 65000 ){
    bonusPercent -= .01;
    // console.log( 'New employee bonus:', bonusPercent, '.  Took away 1% for making too much money.' );
  }
  //check to make sure bonus is 0% < total bonus < 13%
  if ( bonusPercent < 0 ){
    bonusPercent = 0;
    // console.log('Less than 0 : ', bonusPercent);
  }
  else if ( bonusPercent > .13 ){
    bonusPercent = .13;
    // console.log('greater than 13 : ', bonusPercent);
  }
  return bonusPercent;
}

//totalBonus integer rounded to nearest integer

function totalBonus ( employee ) {
  let bonusInDollars = bonusPercentage(employee) * employee.annualSalary;
  // console.log( Math.round(bonusInDollars));
  return Math.round(bonusInDollars);
}

//totalCompensation adding salary to totalBonus

function totalSalary( employee ){
  return totalBonus( employee ) + Number(employee.annualSalary);
}

//display employees information on DOM

function readyNow(){
  console.log( 'in readyNow' );
  employeeInfo();
  console.log(modifiedEmployeeInfo);
  for(employee of modifiedEmployeeInfo){
    $( '#employeeOutput' ).append( '<li>'+employee.name + ', ' + employee.bonusPercentage + ', ' + employee.totalCompensation + ', ' + employee.totalBonus + '</li>')
  }
}


// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// console.log( employees );
