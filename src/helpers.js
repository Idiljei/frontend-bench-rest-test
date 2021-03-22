//HELPER FUNCTIONS 

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
const toTitleCase = (str) => {
  return (str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
  );
};

//  https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

  // https://stackoverflow.com/questions/23247859/better-way-to-sum-a-property-value-in-an-array  // const sumTotal = () => {
  //   let total = 0; 
  //   for (var i = 0; i < transactionHistory.length; i++) {
  //              total = total + transactionHistory[i].Amount;
  //            }
  //       return total;
  // }

module.exports = {
  toTitleCase,
  numberWithCommas,
}