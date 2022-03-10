import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Main from './components/Main';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
