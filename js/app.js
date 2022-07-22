'use strict';

let storeTable = document.getElementById('store-table');
let myForm = document.querySelector('#myform');
let tfoot = document.createElement('tfoot');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let allLocations = [];
let grandTotal = 0;
let footerTotals = [];

// ***** CONSTUCTOR LEGEND *****

// minCPH = minimum customers per hour
// maxCPH = maximum customers per hour
// avgCPH = average customers per hour
// avgCPC = average cookies per customer
// hourlyTotalCookies = hourly totals
// dailyTotalCookies = total per day

// ***** CONSTRUCTOR REFACTOR *****

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

// ***** METHODS *****

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


  // ***** TABLE BUILD *****

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

let renderTableHeader = function() {
  let thead = document.createElement('thead');
  storeTable.appendChild(thead);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let th = document.createElement('th');
  th.textcontent = 'Store Hours';
  tr.appendChild(th);

  for (let i=0; i < storeHours.length; i++) {
    let th = document.createElement('th');
    th.textContent = storeHours[i];
    tr.appendChild(th);
  }
};

let renderTableFooter = function() {
  getFooterTotals();
  storeTable.appendChild(tfoot);

  let tr = document.createElement('tr');
  tfoot.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = 'Hourly Grand Totals';
  tr.appendChild(th);

  for (let i = 0; i < storeHours.length; i++) {
    let td = document.createElement('td');
    td.textContent = footerTotals[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);
};

function getFooterTotals() {
  footerTotals = [];
  grandTotal = 0;
  for (let i = 0; i < storeHours.length; i++) {
    let hourTotal = 0;
    for (let j = 0; j < allLocations.length; j++) {
      hourTotal += allLocations[j].hourlyTotalCookies[i];
    }
    footerTotals.push(hourTotal);
    grandTotal += hourTotal;
  }
}

// ***** NEW FOOTER / REMOVE FOOTER *****

function handleClick(event) {
  event.preventDefault();
  let locationName = event.target.location.value;
  let minCust = parseInt(event.target.mincust.value);
  let maxCust = parseInt(event.target.mincust.value);
  let avgCookies = parseInt(event.target.avgcookies.value);
  let newLocation = new Location(locationName, minCust, maxCust, avgCookies);
  newLocation.render();

  document.getElementById('store-table').deleteRow(-1);
  renderTableFooter();
}

new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

renderTableHeader();
renderLocationTotals();
renderTableFooter();

console.log(myForm);
myForm.addEventListener('submit', handleClick);




// ***** Class Notes *****

// ***** FORM EVENTS DEMO *****

// Step 1: Grab the element I want to listen to
// let myForm = document.getElementById('myForm');


// Step 2: Attach my event listener
// myForm.addEventListener('submit', handleSubmit);


// Step 3: define our callback funtion or event handler
// function handleSubmit(event){
//   event.preventDefault();
//   let name = event.target.firstName.value;
// 	 let age = +event.target.age.value;
// }


// //  Step 2: Add the Event Listener - 2 args - event type, callback function = function that is passed into another function // event handler

// myContainer.addEventListener('click', handleClick);
