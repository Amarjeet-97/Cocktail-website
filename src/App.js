import { Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import SearchBox from './components/SearchBox';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element=
        {
          <Layout>
              <SearchBox/>
              <HomePage/>
              
          </Layout>
        }/>
        <Route path='/products/:id' element={<ProductDetails/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
      
  );
}

export default App;
