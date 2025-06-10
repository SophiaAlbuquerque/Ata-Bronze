import styles from './header.module.css'
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["top-bar"]}>
        <img src="/logo-alt.svg" alt="Logo" className={styles.logo}/>

        <div className={styles["search-container"]}>
          <input type="text" placeholder="Buscar produtos..." />
          <button className={styles["search-button"]}>
            <FaSearch />
          </button>
        </div>

        <div className={styles.icons}>
          <FaUser className={styles.icon} />
          <FaShoppingCart className={styles.icon} />
        </div>
      </div>

      <nav className={styles["nav-bar"]}>
        <ul>
          <li className={styles.active}>PÁGINA INICIAL</li>
          <li>BRONZEAMENTO</li>
          <li>COSMÉTICOS</li>
          <li>CÍLIOS</li>
          <li>LINHA DE CABELO</li>
          <li>MAQUIAGEM</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header