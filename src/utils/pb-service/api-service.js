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
