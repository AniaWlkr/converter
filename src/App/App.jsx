import { Component } from 'react';
import Container from '../components/Container';
import AppBar from '../components/AppBar';
import Footer from '../components/Footer';
import CurrencyPage from '../Pages/CurrencyPage';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />
        <CurrencyPage />
        <Footer />
      </Container>
    );
  }
}

export default App;
