import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import ProductPage from './components/ProductPage';
import ProductForm from './components/ProductForm';
import Team from './components/TeamPage';

function App() {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className="App">
      
      <Header />
      <main>
        <Routes>
          {/* <Route path='/' element={<Header />} /> */}
          <Route path='/' element={<Main />}/>
          <Route path='/products' element={<ProductPage/>}/>
          <Route path='/products/form' element={<ProductForm />}/>
          <Route path='/team' element={<Team />}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
