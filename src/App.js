import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
