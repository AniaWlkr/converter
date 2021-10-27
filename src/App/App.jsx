import { Component } from 'react';
import { Provider } from 'react-redux';
import Container from '../components/Container';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CurrencyPage from '../Pages/CurrencyPage';
import store from '../redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <AppBar />
          <CurrencyPage />
          <Footer />
        </Container>
      </Provider>
    );
  }
}

export default App;
