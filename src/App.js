import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductPage from './components/ProductPage';
import ProductForm from './components/ProductForm';
import Team from './components/TeamPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/Products' element={<ProductPage/>}/>
          <Route path='/Products/form' element={<ProductForm />}/>
          <Route path='/Team' element={<Team />}/>
          <Route path='/Cart' element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
