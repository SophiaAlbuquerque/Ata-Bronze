import './styles/global.css'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <main>
      <Header />
        <Outlet />
      <Footer />
    </main>
  )
}

export default App