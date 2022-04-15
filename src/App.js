import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SearchForm from './components/SearchForm'
import Main from './assets/scss/Main.css'

function App() {
  return (
    <div className="App">
      <Header first="Uçak Bileti" second="Otobüs Bileti" third="Otel" fourth="Yardım" />
      <SearchForm/>
      <Footer />
    </div>
  );
}

export default App;
