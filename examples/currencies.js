var OANDAExchangeRates = require('../index');

if (process.argv.length < 3) {
  console.error('Usage: node currencies.js <api_key>');
  process.exit(1);
}

var api_key = process.argv[2];

var client = new OANDAExchangeRates({ api_key: api_key });

client.getCurrencies(function(res) {
  if (res.success) {
    console.log('Currencies starting with letter U');
    var code;
    for (code in res.data) {
      if (code.indexOf('U') === 0) {
        console.log(code, '=', res.data[code]);
      }
    }
  } else {
    console.log('error(' + res.errorCode + '):', res.errorMessage);
  }
})
