
const parseTime = (input) => {
    let output = {
        unix: null,
        utc: 'Invalid Date'
      }
    var timestamp = Date.parse(input);
  
    if (isNaN(timestamp) == false) {
      var d = new Date(timestamp);
      output.unix = d.getTime();
      output.utc = d.toUTCString();
    }
  
    return output;
    
  }
  
  module.exports = parseTime;