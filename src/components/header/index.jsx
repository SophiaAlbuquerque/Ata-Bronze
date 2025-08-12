import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './header.module.css'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const normalizePath = (path) =>
    decodeURIComponent(path.trim().toLowerCase())

  const currentPath = normalizePath(location.pathname)

  const menuItems = [
    { label: 'PÁGINA INICIAL', path: '/' },
    { label: 'BRONZEAMENTO', path: '/produtos/bronzeamento' },
    { label: 'COSMÉTICOS', path: '/produtos/cosméticos' },
    { label: 'CÍLIOS', path: '/produtos/cílios' },
    { label: 'LINHA DE CABELO', path: '/produtos/linha de cabelo' },
    { label: 'MAQUIAGEM', path: '/produtos/maquiagem' }
  ]

  return (
    <header className={styles.header}>
      <div className={styles["top-bar"]}>
        <img
          src={`${import.meta.env.BASE_URL}logo.svg`}
          alt="Logo"
          className={styles.logo}
        />

        <button className={styles.menuButton} onClick={() => setMenuOpen(prev => !prev)}>
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
          {menuItems.map((item, index) => {
            const itemPath = normalizePath(item.path)
            const isActive =
              currentPath === itemPath ||
              currentPath.startsWith(itemPath + '/')

            return (
              <li
                key={index}
                className={isActive ? styles.active : ''}
                onClick={() => {
                  setMenuOpen(false)
                  navigate(item.path)
                }}
              >
                {item.label}
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header
