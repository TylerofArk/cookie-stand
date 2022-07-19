'use strict';

let locations = document.getElementById('store-locations');

let storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function multiply(a, b) { //eslint-disable-line
  let myProduct = Math.ceil(a * b);
  return myProduct;
}


function randomCust(min,max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// minCPH = minimum customers per hour
// maxCPH = maximum customers per hour

let Seattle = {
  name: 'Seattle',
  minCPH: 23,
  maxCPH: 65,
  avgCPH: [],
  avgCookieSale: 6.3,
  totalSales: [],
  total: 0,

  getCust: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.avgCPH.push(randomCust(23,65));
    }
  },

  getTotalSales: function(){
    this.getCust();
    for (let i = 0; i < this.avgCPH.length; i++){
      let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
      this.totalSales.push(hourlySales);
      this.total += hourlySales;
    }
  },

  render: function(){
    this.getTotalSales();

    let articleElem = document.createElement('article');

    locations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    ulElem.textContent = 'Store Hours | Sales per hour';
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(totalElem);
  }


};

// Seattle.getTotalSales();
Seattle.render();


let Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  avgCPH: [],
  total: 0,
  totalSales: [],

  getCust: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.avgCPH.push(randomCust(3,24));
    }
  },

  getTotalSales: function(){
    this.getCust();
    for (let i = 0; i < this.avgCPH.length; i++){
      let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
      this.totalSales.push(hourlySales);
      this.total += hourlySales;
    }
  },

  render: function(){
    this.getTotalSales();

    let articleElem = document.createElement('article');

    locations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    ulElem.textContent = '';
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(totalElem);
  }


};

Tokyo.render();


let Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  avgCPH: [],
  total: 0,
  totalSales: [],

  getCust: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.avgCPH.push(randomCust(11,38));
    }
  },

  getTotalSales: function(){
    this.getCust();
    for (let i = 0; i < this.avgCPH.length; i++){
      let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
      this.totalSales.push(hourlySales);
      this.total += hourlySales;
    }
  },

  render: function(){
    this.getTotalSales();

    let articleElem = document.createElement('article');

    locations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    ulElem.textContent = '';
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(totalElem);
  }

};

Dubai.render();


let Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  avgCPH: [],
  total: 0,
  totalSales: [],
  getCust: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.avgCPH.push(randomCust(20,38));
    }
  },

  getTotalSales: function(){
    this.getCust();
    for (let i = 0; i < this.avgCPH.length; i++){
      let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
      this.totalSales.push(hourlySales);
      this.total += hourlySales;
    }
  },

  render: function(){
    this.getTotalSales();

    let articleElem = document.createElement('article');

    locations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    ulElem.textContent = '';
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(totalElem);
  }


};

Paris.render();


let Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  avgCPH: [],
  total: 0,
  totalSales: [],
  getCust: function(){
    for (let i = 0; i < storeHours.length; i++){
      this.avgCPH.push(randomCust(2,16));
    }
  },

  getTotalSales: function(){
    this.getCust();
    for (let i = 0; i < this.avgCPH.length; i++){
      let hourlySales = (multiply(this.avgCookieSale, this.avgCPH[i]));
      this.totalSales.push(hourlySales);
      this.total += hourlySales;
    }
  },

  render: function(){
    this.getTotalSales();

    let articleElem = document.createElement('article');

    locations.appendChild(articleElem);

    let h2Elem = document.createElement('h2');
    h2Elem.textContent = this.name;
    articleElem.appendChild(h2Elem);

    let ulElem = document.createElement('ul');
    ulElem.textContent = '';
    articleElem.appendChild(ulElem);

    for (let i = 0; i < storeHours.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${storeHours[i]}: ${this.totalSales[i]}`;
      ulElem.appendChild(liElem);
    }
    let totalElem = document.createElement('li');
    totalElem.textContent = `Total: ${this.total}`;
    ulElem.appendChild(totalElem);
  }
};

Lima.render();
