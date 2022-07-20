'use strict';

// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// Each cookie stand location should have a separate render() method that creates and appends its row to the table
// The header row and footer row are each created in their own stand-alone function
// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).


let storeTable = document.getElementById('store-table');
// let tableHeader = document.getElementById('table-header');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allLocations = [];
let grandTotal = 0;

// minCPH = minimum customers per hour
// maxCPH = maximum customers per hour
// avgCPH = average customers per hour
// avgCPC = average cookies per customer
// hourlyTotalCookies = hourly totals
// dailyTotalCookies = total per day
// ******* CONSTRUCTOR REFACTOR ************

function Location(name, minCPH, maxCPH, avgCookieSale){
  this.name = name;
  this.minCPHour = minCPH;
  this.maxCPHour = maxCPH;
  this.avgCPHour = [];
  this.avgCPCustomer = avgCookieSale;
  this.hourlyTotalCookies = [];
  this.dailyTotalCookies = 0;
  allLocations.push(this);
}

// ******** PROTOTYPE METHODS **************
function multiply(a, b) { //eslint-disable-line
  let myProduct = Math.ceil(a * b);
  return myProduct;
}

function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Location.prototype.getCust = function(){
  for (let i = 0; i < storeHours.length; i++){
    this.avgCPHour.push(randomCust(23,65));
  }
},

Location.prototype.getHourlyTotal = function(){
  this.getCust();
  for (let i = 0; i < this.avgCPHour.length; i++){
    let hourlyTotal = (multiply(this.avgCPCustomer, this.avgCPHour[i]));
    this.hourlyTotalCookies.push(hourlyTotal);
    this.dailyTotalCookies += hourlyTotal;
  }
};

Location.prototype.render = function () {
  this.getHourlyTotal();

  let table = document.createElement('table');
  storeTable.appendChild(table);

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlyTotalCookies[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = this.dailyTotalCookies;
  tr.appendChild(td);

};

let renderLocationTotals = function(){
  for (let i = 0; i < allLocations.length; i++){
    allLocations[i].render();
  }
};

// function createTableHeader(){
//   for(let i = 0; i <= storeHours.length; i++){
//     let tcElem = document.createElement('tc');
//     tcElem.textContent = storeHours[i];
//     tableHeader.appendChild(tcElem);
//   }
// }



new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

// createTableHeader();
renderLocationTotals();
console.log(this.name);
