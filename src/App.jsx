import {BrowserRouter , Routes, Route, Navigate} from 'react-router-dom'

import HomePage from './pages/home-page';
import Pricing from './pages/pricing';
import Product from './pages/product';
import Login from './pages/Login';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/page-not-found';
import CityList from './components/CityList';
import CountriesList from './components/CountriesLIst';
import City from './components/City';
import { CitiesProvider } from './contexts/CitiesContext';
import Form from './components/Form';


function App() {
 

  return (
    <>
    <div>
<CitiesProvider>
      <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/price' element={<Pricing/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='app' element={<AppLayout/>}> 

        <Route index element={<Navigate  replace to="cities" />} />
        <Route path='cities' element={<CityList  />} />
        <Route path='cities/:id' element={<City/>} />
        <Route path='countries' element={<CountriesList />} />
        <Route path='form' element={<Form/>} />

        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
      </CitiesProvider>
      </div>
    </>
  )
}

export default App
