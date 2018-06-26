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
  infoParagraph.textContent = `Name: ${instrumentFamilies.name}, Description: ${instrumentFamilies.description}, Instruments: ${instrumentFamilies.instruments}`
  this.detailsElement.appendChild(infoParagraph);
};

module.exports = InstrumentInfoView;
