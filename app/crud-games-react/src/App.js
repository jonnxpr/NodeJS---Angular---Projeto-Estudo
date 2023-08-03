import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FormCrud from './components/FormCrud';

function App() {
  return (
    <div className="App">
      <Header />
      <FormCrud />
      <Footer />
    </div>
  );
}

export default App;