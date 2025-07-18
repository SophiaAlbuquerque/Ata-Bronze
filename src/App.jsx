import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import ScrollToTop from './components/ScrollToTop';
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
        <ScrollToTop />
        <Outlet />
      <Footer />
    </main>
  )
}

export default App