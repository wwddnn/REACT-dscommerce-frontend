
import './App.css';
import computerImg from '../src/assets/computer.png';
import HeaderClient from './components/HeaderClient';
import ButtonPrimary from './components/ButtonPrimary';
import ButtonInverse from './components/ButtonInverse';
import ProductDetailsCard from './components/ProductDetailsCard';


export default function App() {

  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
            <div className="dsc-btn-page-container">
                <ButtonPrimary />
                <ButtonInverse />
            </div>
        </section>
      </main>
    </>  
  );
}
