import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Index from './Index.tsx'
import About from './pages/about.tsx'
import Features from './pages/feature.tsx'
import News from './pages/news.tsx'
import Contact from './pages/contact.tsx'
import Download from './pages/download.tsx'

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          {/* How It Works route removed per request */}
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/download" element={<Download />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  ) 
}

export default App
