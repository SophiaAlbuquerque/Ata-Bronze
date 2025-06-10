import Carousel from "../../components/carousel";
import ProductCarousel from "../../components/product/ProductCarousel";
import styles from "./home.module.css";

const mockProducts = [
  {
    title: "Base Líquida Matte 300ml",
    price: "59,90",
    image: "https://m.media-amazon.com/images/I/71pbJ6--5jL._AC_SL1500_.jpg",
    discount: 10,
    freeShipping: true,
  },
  {
    title: "Paleta de Sombras Nude",
    price: "89,00",
    image: "https://www.bellaza.com.br/uploads/product_file/MED08117785ac169c41ab821defaaecf6b0.jpg",
    freeShipping: false,
  },
  {
    title: "Pó Translúcido Compacto",
    price: "39,90",
    image: "https://m.media-amazon.com/images/I/51fgJylVbmL.__AC_SX300_SY300_QL70_ML2_.jpg",
    freeShipping: true,
  },
  {
    title: "Kit Pincéis Profissionais",
    price: "119,90",
    image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/605756-800-800/macrilan-noir-kit-com-7-pinceis-para-maquiagem--1-.jpg?v=638495683968100000",
    discount: 15,
    freeShipping: true,
  },
  {
    title: "Bronzeador Corporal Glow",
    price: "69,90",
    image: "https://www.drogaraia.com.br/_next/image?url=https%3A%2F%2Fproduct-data.raiadrogasil.io%2Fimages%2F4465861.webp&w=3840&q=40",
    freeShipping: true,
  },
  {
    title: "Máscara Facial de Argila Rosa",
    price: "29,90",
    image: "https://epocacosmeticos.vteximg.com.br/arquivos/ids/597111-800-800/7908240507057.jpg?v=638458374242200000",
    freeShipping: false,
  },
  {
    title: "Batom Matte Vermelho",
    price: "24,90",
    image: "https://simpleorganic.com.br/cdn/shop/files/batom-safe-red_1200x.jpg?v=1743606103",
    discount: 5,
    freeShipping: true,
  },
  {
    title: "Iluminador Compacto Rose",
    price: "44,90",
    image: "https://dynamic.cdnlive.com.br/1000x1000/uploads/724/produto/17470611673235_zoom/jpg/iluminador-compacto-hl50-hb8593-rubyrose.jpg",
    freeShipping: true,
  },
];

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