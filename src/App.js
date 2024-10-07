// eslint-disable-next-line no-use-before-define
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NotificationBar from './components/NotificationBar';
import Navbar from  './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Deals from './components/Deals';
import Shop from './components/Shop';
import CartPage from './components/CartPage';
import { CartProvider } from './CartContext';
import CheckoutPage from './components/CheckoutPage';
import Rewards from './components/Rewards';
import Services from './components/Services';
import PetGroomingForm from './components/PetGroomingForm';
import PetTrainingForm from './components/PetTrainingForm';
import VetServicesForm from './components/VetServicesForm';
import ReptileParkForm from './components/ReptileParkForm';
import AdoptionForm from './components/AdoptionForm';
import PetInsuranceForm from './components/PetInsuranceForm';
import DeliveryForm from './components/DeliveryForm';
import CreditCardForm from './components/CreditCardForm';
import Pharmacy from './components/Pharmacy';
import Newsletter from './components/Newsletter';
import Community from './components/Community';
import AnimalComponent from './components/AnimalComponent';
import CheckoutForm from './components/CheckoutForm';


function App() {
  return (
      <CartProvider>
    <BrowserRouter>
    <div className="App">
      <NotificationBar />
      <Navbar/>
      <CartPage />
      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/deals' element={<Deals/>} />
        <Route path='/shop' element={<Shop/>} />
        {/* <Route path="/checkout" element={<CheckoutPage/>} /> */}
        <Route path="/checkout" element={<CheckoutForm/>} />
        <Route path='/pets/:animal' element={<AnimalComponent/>} />
        <Route path='/products/:animal' element={<AnimalComponent/>} />
        <Route path='/rewards' element={<Rewards/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/pet-grooming' element={<PetGroomingForm/>} />
        <Route path='/pet-training' element={<PetTrainingForm/>} />
        <Route path='/vet-services' element={<VetServicesForm/>} />
        <Route path='/adoption' element={<AdoptionForm/>} />
        <Route path='/pet-park' element={<ReptileParkForm/>} />
        <Route path='/pet-insurance' element={<PetInsuranceForm/>} />
        <Route path='/delivery' element={<DeliveryForm/>} />
        <Route path='/credit-card' element={<CreditCardForm/>} />
        <Route path='/pharmacy' element={<Pharmacy/>} />
        <Route path='/newsletter' element={<Newsletter/>} />
        <Route path='/community' element={<Community/>} />
      </Routes>
      <Footer/>
      
    </div>
    </BrowserRouter>
      </CartProvider>
  );
}

export default App;
