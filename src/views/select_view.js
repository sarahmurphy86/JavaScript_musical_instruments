const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('InstrumentFamilies:all-instruments-ready', (event) => {
    const allInstrumentFamilies = event.detail;
    console.log(allInstrumentFamilies);
    this.populateDropdown(allInstrumentFamilies);
  });
};

SelectView.prototype.populateDropdown = function (instrumentData) {
  instrumentData.forEach((instrumentFamilies, index) => {
  const option = document.createElement('option');
  // <option> creates an option tag in HTML </option>
  option.textContent = instrumentFamilies.name;
  option.value = index;
  // console.log(index);
  this.element.appendChild(option);

  })

};

module.exports = SelectView;
