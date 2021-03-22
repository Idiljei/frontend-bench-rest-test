//HELPER FUNCTIONS 

// https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991#196991
const toTitleCase = (str) => {
  return (str.split(' ')
    .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
    .join(' ')
  );
};

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript

var formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

module.exports = {
  toTitleCase,
  formatNumber,
}