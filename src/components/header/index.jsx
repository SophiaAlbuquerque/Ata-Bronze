import { useState } from 'react'
import styles from './header.module.css'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(prev => !prev)

  return (
    <header className={styles.header}>
      <div className={styles["top-bar"]}>
        <img src="/logo-alt.svg" alt="Logo" className={styles.logo} />

        <button className={styles.menuButton} onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

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

      <nav className={`${styles["nav-bar"]} ${menuOpen ? styles.show : ''}`}>
        <ul>
          {[
            'PÁGINA INICIAL',
            'BRONZEAMENTO',
            'COSMÉTICOS',
            'CÍLIOS',
            'LINHA DE CABELO',
            'MAQUIAGEM'
          ].map((item, index) => (
            <li
              key={index}
              className={index === 0 ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
