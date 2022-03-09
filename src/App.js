import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import ProductPage from './components/ProductPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default App;
