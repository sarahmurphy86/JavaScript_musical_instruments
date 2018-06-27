const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(detailsElement){
  this.detailsElement = detailsElement;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-instrument-ready', (event) => {
    const instrument = event.detail;
    console.log(instrument);
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  const infoParagraph = document.createElement('div');
  infoParagraph.textContent = `Name: ${instrument.name}, Description: ${instrument.description}, Instruments: ${instrument.instruments}`
  this.detailsElement.innerHTML = '';
  this.detailsElement.appendChild(infoParagraph);
};

// InstrumentInfoView.prototype.render = function(instrument){
//   // this.detailsElement.innerHTML = '';
//
//   const heading = this.createHeading(instrument);
//   const details = this.createDetails(instrument);
//   const instrumentList = this.createInstrumentList(instrument);
//
//   this.detailsElement.appendChild(heading);
//   this.detailsElement.appendChild(details);
//   this.detailsElement.appendChild(instrumentList);
//
//   InstrumentInfoView.prototype.createHeading = function(instrument) {
//     const heading = document.createElement('h2');
//     heading.textContent = instrument.name;
//     return heading;
//   };
//
//   InstrumentInfoView.prototype.createDetails = function(instrument) {
//     const details = document.createElement('div');
//     details.textContent = instrument.details;
//     return details;
//   };
//
//   InstrumentInfoView.prototype.createInstrumentList = function(instrument) {
//   const instrumentList = document.createElement('ul');
//   instrumentList.textContent = instrument.instruments;
//   return instrumentList;
// };

module.exports = InstrumentInfoView;
