import { Routes, Route } from 'react-router-dom'
import { EnquiryProvider } from './context/EnquiryContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import EnquiryModal from './components/EnquiryModal'
import Home from './pages/Home'
import Catalog from './pages/Catalog'

function App() {
  return (
    <EnquiryProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <EnquiryModal />
    </EnquiryProvider>
  )
}

export default App
