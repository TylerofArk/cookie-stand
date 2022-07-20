'use strict';

// Instructions
// Create a new branch for today’s lab. Make sure it has all of your changes from lab 06 so that you can extend the functionality.

// Replace all of your object literals for the salmon cookie stand with a single constructor function that, when called with the ‘new’ keyword, it creates a new instance.

// Replace the lists of your data for each store and build a single table of data instead. It should look similar to the following:

// Display each stores data in a table format similar to what is below. Break each column by the hour and complete each row with a “Daily Location Total”.

// Each cookie stand location should have a separate render() method that creates and appends its row to the table
// The header row and footer row are each created in their own stand-alone function
// NOTE: Please use a header cell for both the header row ( containing store hours ), and the footer row ( hourly and grand totals across all stores ).

let locations = document.getElementById('store-locations');
let storeTable = document.getElementById('store-table');
let tableHeader = document.getElementById('table-header');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function multiply(a, b) { //eslint-disable-line
  let myProduct = Math.ceil(a * b);
  return myProduct;
}

function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function createTableHeader(){
  for(let i = 0; i <= storeHours.length - 1; i++){
    let tcElem = document.createElement('tc');
    tcElem.textContent = storeHours[i];
    tableHeader.appendChild(tcElem);
  }
}

// function createTableFooter(){
//   for(let i = 0; i < this.total.length; i++){
//     let tableFooter = document.createElement('th');
//     tableFooter.textContent = this.total[i];
//     locations.appendChild(tableFooter);
//   }
// }


// minCPH = minimum customers per hour
// maxCPH = maximum customers per hour
// ******* CONSTRUCTOR REFACTOR ************

let allLocations = [];

function Location(name, minCPH, maxCPH, avgCookieSale){
  this.name = name;
  this.minCPH = minCPH;
  this.maxCPH = maxCPH;
  this.avgCPH = [];
  this.avgCookieSale = avgCookieSale;
  this.totalSales = [];
  this.total = 0;

  allLocations.push(this);
}

// ******** PROTOTYPE METHODS **************

Location.prototype.getCust = function(){
  for (let i = 0; i < storeHours.length; i++){
    this.avgCPH.push(randomCust(23,65));
  }
},

Location.prototype.getTotalSales = function(){
  this.getCust();
  for (let i = 0; i < this.avgCPH.length; i++){
    let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
    this.totalSales.push(hourlySales);
    this.total += hourlySales;
  }
};

Location.prototype.renderTotalSales = function(){
  this.getTotalSales();


  let rowElem = document.createElement('table');

  storeTable.appendChild(rowElem);

  let cityNameElem = document.createElement('th');
  cityNameElem.textContent = this.name;
  rowElem.appendChild(cityNameElem);

  for(let i = 0; i < this.totalSales.length; i++){
    let totalSaleElem = document.createElement('th');
    totalSaleElem.textContent = this.totalSales[i];
    rowElem.appendChild(totalSaleElem);
  }
  //

  // ****** TABLE DOM RENDERING *********
  // let tableElem = document.createElement('table');
  // articleElem.appendChild(tableElem);

  // let row1 = document.createElement('tr');
  // tableElem.appendChild(row1);
  // let th1Elem = document.createElement('th');
  // th1Elem.textContent = 'Location';
  // row1.appendChild(th1Elem);

};


new Location('Seattle', 23, 65, 6.3);
new Location('Tokyo', 3, 24, 1.2);
new Location('Dubai', 11, 38, 3.7);
new Location('Paris', 20, 38, 2.3);
new Location('Lima', 2, 16, 4.6);

function renderLocation(){
  for (let i = 0; i < allLocations.length; i++){
    let currentLocation = allLocations[i];
    currentLocation.renderTotalSales();

  }
}
createTableHeader();
renderLocation();

// function renderLocations(){
// 	for (let i = 0; i < allLocations.length; i++){
// 		let currentLocation = allLocations[i];
// 		currentLocation.render();
// 	}
// }

// let Seattle = {
//   name: 'Seattle',
//   minCPH: 23,
//   maxCPH: 65,
//   avgCPH: [],
//   avgCookieSale: 6.3,
//   totalSales: [],
//   total: 0,

// getCust: function(){
//   for (let i = 0; i < storeHours.length; i++){
//     this.avgCPH.push(randomCust(23,65));
//   }
// },

// getTotalSales: function(){
//   this.getCust();
//   for (let i = 0; i < this.avgCPH.length; i++){
//     let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
//     this.totalSales.push(hourlySales);
//     this.total += hourlySales;
//   }
// },

// render: function(){
//   this.getTotalSales();

// Seattle.getTotalSales();
// renderLocations();


// let Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookieSale: 1.2,
//   avgCPH: [],
//   total: 0,
//   totalSales: [],

//   getCust: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.avgCPH.push(randomCust(3,24));
//     }
//   },

//   getTotalSales: function(){
//     this.getCust();
//     for (let i = 0; i < this.avgCPH.length; i++){
//       let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
//       this.totalSales.push(hourlySales);
//       this.total += hourlySales;
//     }
//   },

//   render: function(){
//     this.getTotalSales();

//     let articleElem = document.createElement('article');

//     locations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = '';
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(totalElem);
//   }


// };

// Tokyo.render();


// let Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   avgCookieSale: 3.7,
//   avgCPH: [],
//   total: 0,
//   totalSales: [],

//   getCust: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.avgCPH.push(randomCust(11,38));
//     }
//   },

//   getTotalSales: function(){
//     this.getCust();
//     for (let i = 0; i < this.avgCPH.length; i++){
//       let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
//       this.totalSales.push(hourlySales);
//       this.total += hourlySales;
//     }
//   },

//   render: function(){
//     this.getTotalSales();

//     let articleElem = document.createElement('article');

//     locations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = '';
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(totalElem);
//   }

// };

// Dubai.render();


// let Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookieSale: 2.3,
//   avgCPH: [],
//   total: 0,
//   totalSales: [],
//   getCust: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.avgCPH.push(randomCust(20,38));
//     }
//   },

//   getTotalSales: function(){
//     this.getCust();
//     for (let i = 0; i < this.avgCPH.length; i++){
//       let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
//       this.totalSales.push(hourlySales);
//       this.total += hourlySales;
//     }
//   },

//   render: function(){
//     this.getTotalSales();

//     let articleElem = document.createElement('article');

//     locations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = '';
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(totalElem);
//   }


// };

// Paris.render();


// let Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookieSale: 4.6,
//   avgCPH: [],
//   total: 0,
//   totalSales: [],
//   getCust: function(){
//     for (let i = 0; i < storeHours.length; i++){
//       this.avgCPH.push(randomCust(2,16));
//     }
//   },

//   getTotalSales: function(){
//     this.getCust();
//     for (let i = 0; i < this.avgCPH.length; i++){
//       let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
//       this.totalSales.push(hourlySales);
//       this.total += hourlySales;
//     }
//   },

//   render: function(){
//     this.getTotalSales();

//     let articleElem = document.createElement('article');

//     locations.appendChild(articleElem);

//     let h2Elem = document.createElement('h2');
//     h2Elem.textContent = this.name;
//     articleElem.appendChild(h2Elem);

//     let ulElem = document.createElement('ul');
//     ulElem.textContent = '';
//     articleElem.appendChild(ulElem);

//     for (let i = 0; i < storeHours.length; i++){
//       let liElem = document.createElement('li');
//       liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
//       ulElem.appendChild(liElem);
//     }
//     let totalElem = document.createElement('li');
//     totalElem.textContent = `Total: ${this.total}`;
//     ulElem.appendChild(totalElem);
//   }
// };

// Lima.render()
// }

