import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import RegistrationView from './views/RegistrationView';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RegistrationView />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
