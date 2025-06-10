import Carousel from "../../components/carousel";
import styles from "./home.module.css";

function Home() {

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Bem-vindo à nossa loja!</h1>
      <Carousel />
    </div>
  );
}

export default Home;