import "./styles.css";
import HeaderClient from "../../components/HeaderClient";
import Searchbar from "../../components/Searchbar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";
import type { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart TV",
  description: "Essa TV é muito boa",
  imgUrl: "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/refs/heads/master/backend/img/2-big.jpg",
  price: 2500.99,
  categories: [
    {
    id: 2,
    name: "Eletrônicos"
    },
    {
    id: 3,
    name: "Computadores"
    },
    {
    id: 4,
    name: "Importados"
    }
  ]
}



export default function Catalog() {
  
  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <Searchbar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
            <CatalogCard product= {product} />
          </div>  

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
