import Carousel from "../../components/carousel";
import ProductCarousel from "../../components/productCarousel";
import styles from "./home.module.css";
import { mockProducts } from "../../mockProducts";

function Home() {

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Bem-vindo à nossa loja!</h1>
      <Carousel />
        <ProductCarousel products={mockProducts} sectionTitle="Destaques de Beleza" />
        <ProductCarousel products={mockProducts} sectionTitle="Maquiagens" />
        <ProductCarousel products={mockProducts} sectionTitle="Bronzeamento" />
    </div>
  );
}

export default Home;