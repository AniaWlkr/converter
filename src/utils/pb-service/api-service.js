import axios from 'axios';

axios.defaults.baseURL =
  'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

function getCurrencyRates() {
  return axios
    .get()
    .then(({ data }) => data)
    .catch(err => {
      if (err instanceof Error) console.log(err.res);
      else console.log(err);
    });
}

export default { getCurrencyRates };
/** On each 5th api request - imitate server error (create counter, store it in localStorage). After - reset value in localStortage. On error case - hide table, show error message.
 

Height of layout application - full screen height, without vertical scroll  header, footer - 100px height, all another vertical space - content. */

// Loader ? set before fetch
// error page i case of data absence
// adaptive mark-up
